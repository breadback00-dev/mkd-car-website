import { vehicles as fallbackVehicles, Vehicle } from "./vehicles";

const STOCK_CACHE_SECONDS = 300;
const STOCK_CACHE_TAG = "vehicles";

type AutoTraderPayload = {
  data?: unknown;
  items?: unknown[];
  results?: unknown[];
  stock?: unknown[];
  vehicles?: unknown[];
};

type RecordValue = Record<string, unknown>;

function isRecord(value: unknown): value is RecordValue {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function firstRecord(...values: unknown[]): RecordValue {
  for (const value of values) {
    if (isRecord(value)) return value;
  }

  return {};
}

function firstValue<T>(
  fallback: T,
  parser: (value: unknown) => T | undefined,
  ...values: unknown[]
): T {
  for (const value of values) {
    const parsed = parser(value);
    if (parsed !== undefined) return parsed;
  }

  return fallback;
}

function parseString(value: unknown): string | undefined {
  if (typeof value === "string" && value.trim()) return value.trim();
  if (typeof value === "number") return String(value);
  return undefined;
}

function parseNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value.replace(/[^0-9.]/g, ""));
    if (Number.isFinite(parsed)) return parsed;
  }

  return undefined;
}

function parseBoolean(value: unknown): boolean | undefined {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    const normalised = value.trim().toLowerCase();
    if (["true", "yes", "1", "featured"].includes(normalised)) return true;
    if (["false", "no", "0"].includes(normalised)) return false;
  }

  return undefined;
}

function parseImages(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;

  const images = value
    .map((item) => {
      if (typeof item === "string") return item;
      if (!isRecord(item)) return undefined;
      return parseString(item.url) ?? parseString(item.href) ?? parseString(item.src);
    })
    .filter((item): item is string => Boolean(item));

  return images.length > 0 ? images : undefined;
}

function payloadItems(payload: unknown): unknown[] {
  if (Array.isArray(payload)) return payload;
  if (!isRecord(payload)) return [];

  const topLevel = payload as AutoTraderPayload;
  if (Array.isArray(topLevel.stock)) return topLevel.stock;
  if (Array.isArray(topLevel.vehicles)) return topLevel.vehicles;
  if (Array.isArray(topLevel.items)) return topLevel.items;
  if (Array.isArray(topLevel.results)) return topLevel.results;
  if (Array.isArray(topLevel.data)) return topLevel.data;

  if (isRecord(topLevel.data)) {
    return payloadItems(topLevel.data);
  }

  return [];
}

function slugify(parts: string[]): string {
  return parts
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normaliseAutoTraderVehicle(item: unknown): Vehicle | undefined {
  if (!isRecord(item)) return undefined;

  const vehicle = firstRecord(item.vehicle, item.vehicleData, item.taxonomy);
  const advert = firstRecord(item.advert, item.advertData);
  const pricing = firstRecord(item.price, item.pricing, advert.price);
  const odometer = firstRecord(item.odometer, vehicle.odometer, item.mileage);
  const media = firstRecord(item.media, item.images, advert.media);
  const technical = firstRecord(item.technical, vehicle.technical);

  const year = firstValue(0, parseNumber, vehicle.year, vehicle.modelYear, item.year);
  const make = firstValue("", parseString, vehicle.make, vehicle.makeName, item.make);
  const model = firstValue("", parseString, vehicle.model, vehicle.modelName, item.model);

  if (!year || !make || !model) return undefined;

  const registration = firstValue("", parseString, vehicle.registration, item.registration, item.vrm);
  const id =
    firstValue("", parseString, item.stockId, item.id, item.advertId, item.externalId) ||
    slugify([String(year), make, model, registration]);

  return {
    id,
    year,
    make,
    model: firstValue(model, parseString, vehicle.derivative, vehicle.variant, model),
    price: firstValue(0, parseNumber, pricing.amount, pricing.value, advert.price, item.price),
    mileage: firstValue(0, parseNumber, odometer.reading, odometer.value, item.mileage),
    fuel: firstValue("Not specified", parseString, vehicle.fuelType, technical.fuelType, item.fuel),
    transmission: firstValue("Not specified", parseString, vehicle.transmission, technical.transmission, item.transmission),
    doors: firstValue(0, parseNumber, vehicle.doors, technical.doors, item.doors),
    seats: firstValue(0, parseNumber, vehicle.seats, technical.seats, item.seats),
    engine: firstValue("Not specified", parseString, vehicle.engineSize, technical.engineSize, item.engine),
    bodyType: firstValue("Not specified", parseString, vehicle.bodyType, item.bodyType),
    colour: firstValue("Not specified", parseString, vehicle.colour, vehicle.color, item.colour, item.color),
    mot: firstValue("Ask for details", parseString, item.mot, advert.mot),
    warranty: firstValue("Ask for details", parseString, item.warranty, advert.warranty),
    taxPerYear: firstValue("Ask for details", parseString, item.taxPerYear, technical.taxPerYear),
    insuranceGroup: firstValue("Ask for details", parseString, item.insuranceGroup, technical.insuranceGroup),
    co2: firstValue("Ask for details", parseString, item.co2, technical.co2),
    serviceHistory: firstValue("Ask for details", parseString, item.serviceHistory, advert.serviceHistory),
    description: firstValue("Call MKD Cars for the latest details on this vehicle.", parseString, advert.description, item.description),
    featured: firstValue(false, parseBoolean, item.featured, advert.featured),
    images:
      parseImages(media.images) ??
      parseImages(media) ??
      parseImages(item.images) ??
      [],
    previousOwners: firstValue(undefined, parseNumber, item.previousOwners, vehicle.previousOwners),
    numberOfKeys: firstValue(undefined, parseNumber, item.numberOfKeys, vehicle.numberOfKeys),
  };
}

function normaliseAutoTraderPayload(payload: unknown): Vehicle[] {
  return payloadItems(payload)
    .map(normaliseAutoTraderVehicle)
    .filter((vehicle): vehicle is Vehicle => Boolean(vehicle));
}

function autoTraderHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/json",
  };

  if (process.env.AUTOTRADER_API_TOKEN) {
    headers.Authorization = `Bearer ${process.env.AUTOTRADER_API_TOKEN}`;
  }

  if (process.env.AUTOTRADER_API_KEY) {
    headers["x-api-key"] = process.env.AUTOTRADER_API_KEY;
  }

  return headers;
}

export async function getVehicles(): Promise<Vehicle[]> {
  const feedUrl = process.env.AUTOTRADER_STOCK_FEED_URL;
  const enabled = process.env.AUTOTRADER_ENABLED === "true";

  if (!enabled || !feedUrl) return fallbackVehicles;

  try {
    const response = await fetch(feedUrl, {
      headers: autoTraderHeaders(),
      next: {
        revalidate: STOCK_CACHE_SECONDS,
        tags: [STOCK_CACHE_TAG],
      },
    });

    if (!response.ok) {
      throw new Error(`Auto Trader stock fetch failed: ${response.status}`);
    }

    const payload = await response.json();
    const vehicles = normaliseAutoTraderPayload(payload);

    return vehicles.length > 0 ? vehicles : fallbackVehicles;
  } catch (error) {
    console.error(error);
    return fallbackVehicles;
  }
}

export async function getVehicleById(id: string): Promise<Vehicle | undefined> {
  const vehicles = await getVehicles();
  return vehicles.find((vehicle) => vehicle.id === id);
}

export async function getSimilarVehicles(vehicle: Vehicle): Promise<Vehicle[]> {
  const vehicles = await getVehicles();

  return vehicles
    .filter((candidate) => candidate.id !== vehicle.id && Math.abs(candidate.price - vehicle.price) <= 2500)
    .slice(0, 3);
}

export { STOCK_CACHE_TAG };

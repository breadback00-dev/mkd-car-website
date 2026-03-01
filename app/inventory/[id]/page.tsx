import { vehicles } from "@/app/data/vehicles";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import VehicleGallery from "@/components/VehicleGallery";
import VehicleCard from "@/components/VehicleCard";

type Props = {
    params: Promise<{ id: string }>;
};

export function generateStaticParams() {
    return vehicles.map((vehicle) => ({
        id: vehicle.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const vehicle = vehicles.find((v) => v.id === id);
    if (!vehicle) return { title: "Not Found" };

    const titleStr = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;

    return {
        title: titleStr,
        description: `${titleStr} — £${vehicle.price.toLocaleString()} with ${vehicle.mileage.toLocaleString()} miles. ${vehicle.description.substring(0, 120)}...`,
        openGraph: {
            title: `${titleStr} for sale in Bristol | MKD Cars`,
            description: vehicle.description,
            url: `/inventory/${id}`,
            images: vehicle.images.map(img => ({
                url: img,
                alt: titleStr
            })),
        },
        alternates: {
            canonical: `/inventory/${id}`,
        },
    };
}

function isSpecified(value: string | number | undefined | null): boolean {
    if (value === undefined || value === null) return false;
    if (typeof value === "string") {
        const lower = value.toLowerCase().trim();
        return lower !== "" && lower !== "not specified" && lower !== "n/a";
    }
    return true;
}

type SpecItem = { label: string; value: string | number | undefined };

export default async function CarDetailsPage({ params }: Props) {
    const { id } = await params;
    const vehicle = vehicles.find((v) => v.id === id);

    if (!vehicle) notFound();

    const whatsappMessage = encodeURIComponent(
        `Hi, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (£${vehicle.price.toLocaleString()}). Is it still available?`
    );

    const testDriveMessage = encodeURIComponent(
        `Hi, I'd like to book a test drive for the ${vehicle.year} ${vehicle.make} ${vehicle.model} (£${vehicle.price.toLocaleString()}). When are you available?`
    );

    // Generic finance estimate: 10% deposit, 48 months, 14.9% APR representative
    const deposit = Math.round(vehicle.price * 0.1);
    const loan = vehicle.price - deposit;
    const monthlyRate = 14.9 / 1200;
    const months = 48;
    const monthlyPayment = Math.round(
        (loan * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
        (Math.pow(1 + monthlyRate, months) - 1)
    );

    // Similar vehicles: same price range ±£2,500, different car, up to 3
    const similar = vehicles
        .filter(
            (v) =>
                v.id !== vehicle.id &&
                Math.abs(v.price - vehicle.price) <= 2500
        )
        .slice(0, 3);

    const specs: SpecItem[] = [
        { label: "Body Type",        value: vehicle.bodyType },
        { label: "Engine",           value: vehicle.engine },
        { label: "Transmission",     value: vehicle.transmission },
        { label: "Fuel Type",        value: vehicle.fuel },
        { label: "Doors / Seats",    value: `${vehicle.doors} / ${vehicle.seats}` },
        { label: "Colour",           value: vehicle.colour },
        { label: "MOT",              value: vehicle.mot },
        { label: "Annual Tax",       value: vehicle.taxPerYear },
        { label: "Insurance Group",  value: vehicle.insuranceGroup },
        { label: "CO2 Emissions",    value: vehicle.co2 },
        { label: "Service History",  value: vehicle.serviceHistory },
        { label: "Warranty",         value: vehicle.warranty },
        ...(isSpecified(vehicle.previousOwners) ? [{ label: "Previous Owners", value: `${vehicle.previousOwners}` }] : []),
        ...(isSpecified(vehicle.numberOfKeys)   ? [{ label: "Number of Keys",  value: `${vehicle.numberOfKeys}` }]  : []),
    ];

    const filteredSpecs = specs.filter((s) => isSpecified(s.value));

    // Schema.org JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Car",
        name: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
        brand: { "@type": "Brand", name: vehicle.make },
        model: vehicle.model,
        vehicleModelDate: String(vehicle.year),
        color: vehicle.colour,
        fuelType: vehicle.fuel,
        vehicleTransmission: vehicle.transmission,
        bodyType: vehicle.bodyType,
        numberOfDoors: vehicle.doors,
        vehicleSeatingCapacity: vehicle.seats,
        mileageFromOdometer: {
            "@type": "QuantitativeValue",
            value: vehicle.mileage,
            unitCode: "SMI",
        },
        ...(isSpecified(vehicle.co2) ? {
            emissionsCO2: vehicle.co2,
        } : {}),
        itemCondition: "https://schema.org/UsedCondition",
        image: vehicle.images,
        description: vehicle.description,
        offers: {
            "@type": "Offer",
            price: vehicle.price,
            priceCurrency: "GBP",
            availability: "https://schema.org/InStock",
            url: `https://mkd-car-website.vercel.app/inventory/${vehicle.id}`,
            seller: {
                "@type": "AutoDealer",
                name: "MKD Cars",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "Central Park, Unit 405D, Petherton Rd",
                    addressLocality: "Bristol",
                    postalCode: "BS14 9BZ",
                    addressCountry: "GB",
                },
                telephone: "+447729419246",
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="bg-white min-h-screen pb-24">
                {/* Breadcrumbs */}
                <div className="bg-[#f7f7f7] border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto flex items-center text-sm text-gray-500 font-medium">
                        <Link href="/" className="hover:text-[#1e3a8a] transition-colors">Home</Link>
                        <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <Link href="/inventory" className="hover:text-[#1e3a8a] transition-colors">Inventory</Link>
                        <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-gray-900">{vehicle.year} {vehicle.make} {vehicle.model}</span>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left — Interactive Gallery */}
                        <VehicleGallery
                            images={vehicle.images}
                            title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                        />

                        {/* Right — Details & CTAs */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-2 leading-tight">
                                {vehicle.year} {vehicle.make}
                                <span className="block text-2xl font-bold text-gray-500 mt-1">{vehicle.model}</span>
                            </h1>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-2 mt-3 mb-5">
                                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 text-xs font-bold px-3 py-1.5 rounded-full">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    HPI Checked
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#1e3a8a] border border-blue-200 text-xs font-bold px-3 py-1.5 rounded-full">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    Fully Inspected
                                </span>
                                {isSpecified(vehicle.warranty) && (
                                    <span className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold px-3 py-1.5 rounded-full">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        {vehicle.warranty} warranty
                                    </span>
                                )}
                                {isSpecified(vehicle.previousOwners) && (
                                    <span className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 border border-gray-200 text-xs font-bold px-3 py-1.5 rounded-full">
                                        {vehicle.previousOwners} previous owner{vehicle.previousOwners === 1 ? "" : "s"}
                                    </span>
                                )}
                            </div>

                            {/* Price + Mileage */}
                            <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-8">
                                <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1e3a8a]">
                                    £{vehicle.price.toLocaleString()}
                                </p>
                                <div className="bg-gray-50 px-4 py-2 text-center rounded-lg border border-gray-100">
                                    <p className="font-bold text-gray-900 text-lg">{vehicle.mileage.toLocaleString()}</p>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Miles</p>
                                </div>
                            </div>

                            {/* Primary CTAs */}
                            <div className="bg-[#f7f7f7] border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#1e3a8a]"></div>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-2 tracking-tight">Interested in this car?</h3>
                                <p className="text-gray-500 mb-5 text-sm">Call us or send a WhatsApp — we respond fast.</p>
                                <div className="flex flex-col gap-3">
                                    <a
                                        href="tel:07729419246"
                                        className="inline-flex items-center justify-center w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-lg font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
                                    >
                                        <svg className="w-5 h-5 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        Call: 07729 419246
                                    </a>
                                    <a
                                        href={`https://wa.me/447729419246?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
                                    >
                                        <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                        WhatsApp Us About This Car
                                    </a>
                                    <a
                                        href={`https://wa.me/447729419246?text=${testDriveMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#ebf0fe] text-lg font-bold py-4 rounded-xl transition-all"
                                    >
                                        <svg className="w-5 h-5 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        Book a Test Drive
                                    </a>
                                </div>
                            </div>

                            {/* Finance Available callout */}
                            <div className="bg-[#ebf0fe] border border-[#1e3a8a]/20 rounded-xl p-5 mb-8">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#1e3a8a] text-base">Finance Available</p>
                                        <p className="text-gray-600 text-sm mt-1">
                                            Spread the cost with flexible finance options — no obligation to proceed.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg px-4 py-3 border border-[#1e3a8a]/10 text-sm text-gray-700">
                                    <span className="font-bold text-[#1e3a8a] text-base">From approx. £{monthlyPayment}/month</span>
                                    <span className="text-gray-400 ml-2">based on £{deposit.toLocaleString()} deposit · 48 months · 14.9% APR representative</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-10">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Vehicle Description
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    {vehicle.description}
                                </p>
                            </div>

                            {/* Specifications */}
                            <div className="mb-10">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Key Specifications
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-gray-50 p-5 rounded-xl border border-gray-100">
                                    {filteredSpecs.map((spec) => (
                                        <div key={spec.label} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{spec.label}</p>
                                            <p className="font-bold text-[#1e3a8a] text-sm leading-snug">{spec.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Location */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    Location
                                </h3>
                                <address className="not-italic text-gray-700 bg-[#f7f7f7] p-6 rounded-xl border border-gray-100">
                                    <strong className="text-gray-900 block mb-1">MKD Cars</strong>
                                    Central Park, Unit 405D<br />
                                    Petherton Rd<br />
                                    Bristol, BS14 9BZ
                                    <div className="mt-4">
                                        <a
                                            href="https://www.google.com/maps/dir/?api=1&destination=Central+Park+Unit+405D+Petherton+Rd+Bristol+BS14+9BZ"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#1e3a8a] font-bold hover:underline inline-flex items-center gap-1"
                                        >
                                            Get Directions &rarr;
                                        </a>
                                    </div>
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Similar Vehicles */}
                    {similar.length > 0 && (
                        <div className="mt-20 pt-16 border-t border-gray-100">
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                                <div>
                                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">You Might Also Like</h2>
                                    <p className="text-gray-500 mt-1">Similar vehicles currently in stock.</p>
                                </div>
                                <Link
                                    href="/inventory"
                                    className="text-[#1e3a8a] font-semibold hover:text-[#1e40af] transition-colors flex items-center gap-1 shrink-0"
                                >
                                    View All Stock <span>&rarr;</span>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {similar.map((v) => (
                                    <VehicleCard key={v.id} vehicle={v} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

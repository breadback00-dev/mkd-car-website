# Inventory Data Schema

The UI consumes the `Vehicle` type exported from `app/data/vehicles.ts`.
`app/data/stock.ts` returns that same shape whether stock comes from Auto Trader
or from the static fallback file.

Vehicle Object Example:

{
  "id": "unique-id",
  "year": 2016,
  "make": "Ford",
  "model": "Focus",
  "price": 6495,
  "mileage": 72000,
  "images": ["/images/car1-1.jpg"],
  "description": "Well maintained, clean condition...",
  "featured": false
}

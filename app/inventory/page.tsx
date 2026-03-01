import { vehicles } from "@/app/data/vehicles";
import InventoryClient from "@/components/InventoryClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Inventory",
    description: "Browse our full selection of quality, fully inspected used vehicles in Bristol. Filter by fuel type, body type, and price. All cars are HPI checked.",
    openGraph: {
        title: "Our Inventory | Bristol Used Cars",
        description: "Browse our hand-picked stock of quality used cars in Bristol. All cars are HPI checked and fully inspected.",
        url: "/inventory",
    },
    alternates: {
        canonical: "/inventory",
    },
};

export default function InventoryPage() {
    return (
        <div className="bg-[#f7f7f7] min-h-[80vh] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 border-b border-gray-200 pb-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Our Inventory</h1>
                    <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
                        Find your perfect car. All vehicles come with a full history check and rigorous inspection for complete peace of mind.
                    </p>
                </div>

                <InventoryClient vehicles={vehicles} />
            </div>
        </div>
    );
}

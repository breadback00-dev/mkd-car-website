'use client';

import { useState, useMemo } from 'react';
import { Vehicle } from '@/app/data/vehicles';
import VehicleCard from '@/components/VehicleCard';

type Props = {
    vehicles: Vehicle[];
};

type SortKey = 'price-asc' | 'price-desc' | 'mileage-asc' | 'year-desc';

export default function InventoryClient({ vehicles }: Props) {
    const [sortBy, setSortBy] = useState<SortKey>('price-asc');
    const [filterFuel, setFilterFuel] = useState('');
    const [filterBody, setFilterBody] = useState('');
    const [filterMaxPrice, setFilterMaxPrice] = useState('');

    // Unique filter options derived from stock
    const fuelTypes = useMemo(
        () => Array.from(new Set(vehicles.map((v) => v.fuel))).sort(),
        [vehicles]
    );
    const bodyTypes = useMemo(
        () => Array.from(new Set(vehicles.map((v) => v.bodyType))).sort(),
        [vehicles]
    );
    const maxPriceInStock = useMemo(
        () => Math.max(...vehicles.map((v) => v.price)),
        [vehicles]
    );

    const filtered = useMemo(() => {
        let result = [...vehicles];

        if (filterFuel)     result = result.filter((v) => v.fuel === filterFuel);
        if (filterBody)     result = result.filter((v) => v.bodyType === filterBody);
        if (filterMaxPrice) result = result.filter((v) => v.price <= parseInt(filterMaxPrice));

        switch (sortBy) {
            case 'price-asc':   result.sort((a, b) => a.price - b.price); break;
            case 'price-desc':  result.sort((a, b) => b.price - a.price); break;
            case 'mileage-asc': result.sort((a, b) => a.mileage - b.mileage); break;
            case 'year-desc':   result.sort((a, b) => b.year - a.year); break;
        }

        return result;
    }, [vehicles, filterFuel, filterBody, filterMaxPrice, sortBy]);

    const hasActiveFilters = filterFuel || filterBody || filterMaxPrice;

    function clearFilters() {
        setFilterFuel('');
        setFilterBody('');
        setFilterMaxPrice('');
        setSortBy('price-asc');
    }

    return (
        <>
            {/* Filter / Sort bar */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-10 shadow-sm">
                <div className="flex flex-wrap gap-4 items-end">
                    {/* Fuel type */}
                    <div className="flex flex-col gap-1.5 min-w-[140px]">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Fuel Type</label>
                        <select
                            value={filterFuel}
                            onChange={(e) => setFilterFuel(e.target.value)}
                            className="px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 font-medium text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
                        >
                            <option value="">All fuel types</option>
                            {fuelTypes.map((f) => (
                                <option key={f} value={f}>{f}</option>
                            ))}
                        </select>
                    </div>

                    {/* Body type */}
                    <div className="flex flex-col gap-1.5 min-w-[150px]">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Body Type</label>
                        <select
                            value={filterBody}
                            onChange={(e) => setFilterBody(e.target.value)}
                            className="px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 font-medium text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
                        >
                            <option value="">All body types</option>
                            {bodyTypes.map((b) => (
                                <option key={b} value={b}>{b}</option>
                            ))}
                        </select>
                    </div>

                    {/* Max price */}
                    <div className="flex flex-col gap-1.5 min-w-[160px]">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Max Price {filterMaxPrice ? `— £${parseInt(filterMaxPrice).toLocaleString()}` : ''}
                        </label>
                        <select
                            value={filterMaxPrice}
                            onChange={(e) => setFilterMaxPrice(e.target.value)}
                            className="px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 font-medium text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
                        >
                            <option value="">Any price</option>
                            <option value="2000">Up to £2,000</option>
                            <option value="3000">Up to £3,000</option>
                            <option value="4000">Up to £4,000</option>
                            <option value="5000">Up to £5,000</option>
                            <option value="6000">Up to £6,000</option>
                            <option value="7000">Up to £7,000</option>
                            {maxPriceInStock > 7000 && (
                                <option value={String(maxPriceInStock)}>Up to £{maxPriceInStock.toLocaleString()}</option>
                            )}
                        </select>
                    </div>

                    {/* Sort */}
                    <div className="flex flex-col gap-1.5 min-w-[180px]">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Sort By</label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortKey)}
                            className="px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 font-medium text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
                        >
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="mileage-asc">Lowest Mileage First</option>
                            <option value="year-desc">Newest Year First</option>
                        </select>
                    </div>

                    {/* Clear filters */}
                    {hasActiveFilters && (
                        <button
                            onClick={clearFilters}
                            className="self-end px-4 py-2.5 text-sm font-semibold text-gray-600 hover:text-[#1e3a8a] border border-gray-200 hover:border-[#1e3a8a] rounded-lg transition-colors bg-white"
                        >
                            Clear filters
                        </button>
                    )}

                    {/* Result count */}
                    <p className="self-end ml-auto text-sm text-gray-500 font-medium">
                        {filtered.length} of {vehicles.length} vehicles
                    </p>
                </div>
            </div>

            {/* Vehicle grid */}
            {filtered.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((vehicle) => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))}
                </div>
            ) : (
                <div className="bg-white p-16 text-center rounded-2xl border border-gray-200 shadow-sm">
                    <svg className="w-14 h-14 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="text-gray-900 font-bold text-xl mb-2">No vehicles match your filters</p>
                    <p className="text-gray-500 mb-6">Try adjusting your search criteria.</p>
                    <button
                        onClick={clearFilters}
                        className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold px-6 py-3 rounded-lg transition-colors"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}
        </>
    );
}

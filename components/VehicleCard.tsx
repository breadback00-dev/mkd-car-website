import Link from 'next/link';
import { Vehicle } from '@/app/data/vehicles';

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group">
            <div className="relative h-56 w-full bg-[#f7f7f7] flex items-center justify-center border-b border-gray-50 overflow-hidden">
                {vehicle.images && vehicle.images.length > 0 ? (
                    <img
                        src={vehicle.images[0]}
                        alt={`${vehicle.year} ${vehicle.make}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="text-gray-400 font-medium text-sm tracking-wide uppercase">
                        Image Placeholder
                    </div>
                )}
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-[#1e3a8a] transition-colors line-clamp-1">
                    {vehicle.year} {vehicle.make}
                </h3>
                <p className="text-gray-500 font-medium mt-1 line-clamp-1">{vehicle.model}</p>

                <div className="mt-4 mb-6">
                    <p className="text-[#1e3a8a] text-2xl font-extrabold tracking-tight">
                        £{vehicle.price.toLocaleString()}
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-y-3 gap-x-4 text-sm text-gray-600 font-medium mb-6 mt-auto bg-gray-50 px-5 py-4 rounded-lg border border-gray-100">
                    <span className="flex items-center gap-1.5 w-[45%]">
                        <svg className="w-4 h-4 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {vehicle.mileage.toLocaleString()} mi
                    </span>
                    <span className="flex items-center gap-1.5 w-[45%]">
                        <svg className="w-4 h-4 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {vehicle.transmission}
                    </span>
                    <span className="flex items-center gap-1.5 w-[45%]">
                        <svg className="w-4 h-4 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        {vehicle.engine} {vehicle.fuel}
                    </span>
                    <span className="flex items-center gap-1.5 w-[45%]">
                        <svg className="w-4 h-4 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                        {vehicle.bodyType}
                    </span>
                </div>

                <Link
                    href={`/inventory/${vehicle.id}`}
                    className="block w-full text-center bg-white border border-gray-200 text-gray-900 hover:border-[#1e3a8a] hover:text-[#1e3a8a] hover:bg-gray-50 font-semibold py-3 rounded-md transition-all"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}

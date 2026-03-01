import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#f7f7f7] border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-lg font-bold tracking-tight text-gray-900 mb-5">MKD Cars</h3>
                        <p className="text-gray-500 leading-relaxed pr-4">
                            Providing quality used vehicles with trust and clarity. Hand-picked, inspected, and ready to drive.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold tracking-tight text-gray-900 mb-5">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-gray-500 hover:text-[#1e3a8a] transition-colors font-medium">Home</Link>
                            </li>
                            <li>
                                <Link href="/inventory" className="text-gray-500 hover:text-[#1e3a8a] transition-colors font-medium">Inventory</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-500 hover:text-[#1e3a8a] transition-colors font-medium">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Location */}
                    <div>
                        <h3 className="text-lg font-bold tracking-tight text-gray-900 mb-5">Contact Us</h3>
                        <address className="not-italic text-gray-500 space-y-1 leading-relaxed mb-4">
                            <p>Central Park, Unit 405D</p>
                            <p>Petherton Rd</p>
                            <p className="font-medium text-gray-700">Bristol, BS14 9BZ</p>
                        </address>
                        <div className="mb-4">
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Central+Park+Unit+405D+Petherton+Rd+Bristol+BS14+9BZ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[#1e3a8a] hover:text-[#1e40af] font-semibold transition-colors"
                            >
                                Get Directions &rarr;
                            </a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <a href="tel:07729419246" className="text-gray-900 hover:text-[#1e3a8a] font-bold text-lg transition-colors">
                                07729 419246
                            </a>
                            <a
                                href="https://wa.me/447729419246"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold text-lg transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>

                    {/* Column 4: Opening Hours */}
                    <div>
                        <h3 className="text-lg font-bold tracking-tight text-gray-900 mb-5">Opening Hours</h3>
                        <ul className="space-y-2 text-gray-500 text-sm">
                            <li className="flex justify-between">
                                <span>Monday</span>
                                <span className="font-medium text-gray-900">10:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Tuesday</span>
                                <span className="font-medium text-gray-900">10:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Wednesday</span>
                                <span className="font-medium text-gray-900">10:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Thursday</span>
                                <span className="font-medium text-gray-900">10:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Friday</span>
                                <span className="font-medium text-gray-900">10:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span className="font-bold text-[#1e3a8a]">Closed</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="font-bold text-[#1e3a8a]">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} MKD Cars. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Simplifying your car buying experience.</p>
                </div>
            </div>
        </footer>
    );
}

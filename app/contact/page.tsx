import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with MKD Cars. Call us on 07729 419246. Visit our showroom at Central Park, Unit 405D, Petherton Rd, Bristol, BS14 9BZ.",
    openGraph: {
        title: "Contact Us | MKD Cars",
        description: "Get in touch with MKD Cars. Call 07729 419246. Visit us at Petherton Rd, Bristol, BS14 9BZ.",
        url: "/contact",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="bg-[#f7f7f7] min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        We&apos;re here to help you find your next vehicle. Call us directly or drop by our showroom during business hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Left Side: Contact Info & Map */}
                    <div className="p-8 md:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-gray-100">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-8">Our Location & Details</h2>

                        <div className="space-y-10 mb-10 flex flex-col">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#ebf0fe] text-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">Showroom Address</h3>
                                    <address className="not-italic text-gray-500 text-lg leading-relaxed">
                                        <strong className="text-gray-800">MKD Cars</strong><br />
                                        Central Park, Unit 405D<br />
                                        Petherton Rd<br />
                                        Bristol, BS14 9BZ
                                    </address>
                                    <a
                                        href="https://www.google.com/maps/dir/?api=1&destination=Central+Park+Unit+405D+Petherton+Rd+Bristol+BS14+9BZ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 text-[#1e3a8a] hover:text-[#1e40af] font-bold transition-colors"
                                    >
                                        Get Directions &rarr;
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#ebf0fe] text-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">Call or WhatsApp</h3>
                                    <div className="flex flex-col gap-3">
                                        <a href="tel:07729419246" className="text-gray-900 text-2xl tracking-tight font-extrabold hover:text-[#1e3a8a] transition-colors block">
                                            07729 419246
                                        </a>
                                        <a
                                            href="https://wa.me/447729419246"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-lg transition-colors w-fit mt-1"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                            WhatsApp Us
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#ebf0fe] text-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div className="w-full">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">Opening Hours</h3>
                                    <ul className="space-y-2 text-gray-500 font-medium">
                                        <li className="flex justify-between border-b border-gray-100 pb-2">
                                            <span>Mon - Fri</span>
                                            <span className="text-gray-900">10:00 - 18:00</span>
                                        </li>
                                        <li className="flex justify-between border-b border-gray-100 pb-2">
                                            <span>Saturday</span>
                                            <span className="text-[#1e3a8a] font-bold">Closed</span>
                                        </li>
                                        <li className="flex justify-between pb-2">
                                            <span>Sunday</span>
                                            <span className="text-[#1e3a8a] font-bold">Closed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 sm:h-80 w-full bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                            <iframe
                                src="https://maps.google.com/maps?q=MKD+CARS+Limited+Central+Park+Unit+405D+Petherton+Rd+Bristol+BS14+9BZ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="p-8 md:p-12 lg:p-14 bg-gray-50 flex flex-col justify-center">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-2">Send a Message</h2>
                        <p className="text-gray-500 mb-8">Fill out the form below and we&apos;ll get back to you promptly.</p>
                        <form
                            action="https://formspree.io/f/YOURFORMID"
                            method="POST"
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">Full Name</label>
                                <input type="text" id="name" name="name" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors shadow-sm" required />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                                    <input type="email" id="email" name="email" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors shadow-sm" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors shadow-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">Your Message</label>
                                <textarea id="message" name="message" rows={5} className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors shadow-sm resize-none" required placeholder="How can we help you today?"></textarea>
                            </div>
                            <button type="submit" className="w-full cursor-pointer bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-lg font-bold py-5 rounded-xl transition-all shadow-md hover:shadow-lg mt-4">
                                Send Message
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                            <p className="text-gray-500 text-sm mb-3">Prefer to message directly?</p>
                            <a
                                href="https://wa.me/447729419246"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                Message us on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Link from "next/link";
import Image from "next/image";
import { vehicles } from "@/app/data/vehicles";
import VehicleCard from "@/components/VehicleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used Cars Bristol | MKD Cars",
  description: "Browse our hand-picked stock of quality used cars in Bristol. All cars are HPI checked, fully inspected, and ready to test drive today. 12 months MOT included as standard.",
  openGraph: {
    title: "Used Cars Bristol | MKD Cars",
    description: "Browse our hand-picked stock of quality used cars in Bristol. All cars are HPI checked and fully inspected.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

const googleReviews = [
  {
    name: "Lucy Scotland",
    rating: 5,
    date: "2 months ago",
    text: "I was wary of buying a used car from a dealer but I was soon put at ease by Mo, he was so helpful and made the whole process so simple and stress free. We did have to take the car back as there was a common fault but we were within our warranty and Mo was quick to book it in to the garage next door no questions asked and the problem was resolved promptly.",
    reviewsCount: "3 reviews · 5 photos",
  },
  {
    name: "David Barrett",
    rating: 5,
    date: "2 weeks ago",
    text: "It was a pleasure to buy a car from Mo at MKD Cars. The whole process was quick and easy and he arranged delivery to my home on the same day. I am very happy with the BMW I have purchased. Thanks.",
    reviewsCount: "1 review",
  },
  {
    name: "Lee Marshall",
    rating: 5,
    date: "2 months ago",
    text: "Dealt with Mohamed and he responded quickly on every message left. I live 100 miles away and he organised a video link to see the car, and organised to be delivered within a few days. Cannot fault the service.",
    reviewsCount: "3 reviews",
  },
  {
    name: "Paul Beach",
    rating: 5,
    date: "4 months ago",
    text: "Mo is very friendly and relaxed — no pressure in making a decision. He said he'd phone back to check everything was OK with the car and did. A really pleasant experience.",
    reviewsCount: "Local Guide · 16 reviews",
  },
];

export default function Home() {
  const featuredVehicles = vehicles.slice(0, 6);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-28 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="MKD Cars forecourt Bristol — quality used cars"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0f2057]/75" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
            Quality Used Cars <br className="hidden md:block" /> in Bristol
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hand-picked, HPI checked, and fully inspected. Trusted by Bristol drivers — ask for Mo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:07729419246"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#1e3a8a] text-lg font-bold py-4 px-10 rounded-md transition-all shadow-md hover:shadow-lg"
            >
              Call Us: 07729 419246
            </a>
            <Link
              href="/inventory"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg font-bold py-4 px-10 rounded-md transition-all"
            >
              View Inventory
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Stock Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Latest Stock</h2>
            <p className="text-gray-500 mt-2">Hand-picked vehicles from our current stock.</p>
          </div>
          <Link href="/inventory" className="text-[#1e3a8a] text-lg hover:text-[#1e40af] font-semibold flex items-center gap-1 transition-colors">
            View All Inventory <span>&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Everything you need to buy and maintain your vehicle under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#f7f7f7] p-10 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold tracking-tight text-[#1e3a8a] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Business
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Home delivery", "Click and collect", "Car sourcing", "Extended warranties", "Live video viewing", "Part exchange"].map((item) => (
                  <li key={item} className="flex items-center text-gray-700 font-medium">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f7f7f7] p-10 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold tracking-tight text-[#1e3a8a] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Onsite Facilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Servicing", "MOT", "Tyre fitting & repairs", "Parts"].map((item) => (
                  <li key={item} className="flex items-center text-gray-700 font-medium">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy From Us Section */}
      <section className="bg-[#f7f7f7] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Why Buy From Us?</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">We prioritize transparency and quality to ensure you drive away happy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ebf0fe] text-[#1e3a8a] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Verified Quality</h3>
              <p className="text-gray-500 leading-relaxed">Every car passes a rigorous multi-point inspection before it reaches our lot.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ebf0fe] text-[#1e3a8a] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Clear History</h3>
              <p className="text-gray-500 leading-relaxed">Full HPI checks and detailed service history provided with all our vehicles.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ebf0fe] text-[#1e3a8a] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">No Pressure Sales</h3>
              <p className="text-gray-500 leading-relaxed">We let our cars do the talking. Take your time to find the perfect vehicle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section — Embedded Google quotes + AutoTrader link */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex justify-center items-center gap-1.5 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-lg text-gray-500">Rated 4.7/5 across AutoTrader &amp; Google</p>
          </div>

          {/* 4 embedded Google review cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {googleReviews.map((review) => (
              <a
                key={review.name}
                href="https://www.google.com/search?q=MKD+CARS+Limited+Reviews+Bristol"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#f7f7f7] hover:bg-white border border-gray-200 hover:border-[#1e3a8a] hover:shadow-md rounded-2xl p-7 flex flex-col gap-4 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-base flex-shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm group-hover:text-[#1e3a8a] transition-colors">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.reviewsCount}</p>
                    </div>
                  </div>
                  {/* Google logo */}
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <p className="text-xs text-gray-400 mt-auto">{review.date} · <span className="text-[#1e3a8a] group-hover:underline">View on Google &rarr;</span></p>
              </a>
            ))}
          </div>

          {/* Platform links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* AutoTrader */}
            <a
              href="https://www.autotrader.co.uk/dealers/somerset/bristol/mkd-cars-limited-10041723?channel=cars"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#f7f7f7] hover:bg-white border border-gray-200 hover:border-[#1e3a8a] hover:shadow-md rounded-2xl p-6 flex items-center gap-5 transition-all"
            >
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm group-hover:shadow flex-shrink-0">
                <span className="text-[#fa6400] font-extrabold text-lg tracking-tight">AT</span>
              </div>
              <div>
                <p className="text-lg font-extrabold text-gray-900">4.7 / 5 on AutoTrader</p>
                <p className="text-gray-500 text-sm">34 verified reviews from real buyers</p>
              </div>
              <span className="ml-auto text-[#1e3a8a] font-bold text-sm group-hover:underline flex-shrink-0">Read all &rarr;</span>
            </a>

            {/* Google */}
            <a
              href="https://www.google.com/search?q=MKD+CARS+Limited+Reviews+Bristol"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#f7f7f7] hover:bg-white border border-gray-200 hover:border-[#1e3a8a] hover:shadow-md rounded-2xl p-6 flex items-center gap-5 transition-all"
            >
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm group-hover:shadow flex-shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <p className="text-lg font-extrabold text-gray-900">Google Reviews</p>
                <p className="text-gray-500 text-sm">See what customers say about us</p>
              </div>
              <span className="ml-auto text-[#1e3a8a] font-bold text-sm group-hover:underline flex-shrink-0">View all &rarr;</span>
            </a>
          </div>

          <p className="text-center text-sm text-gray-400">
            All reviews are from verified buyers on third-party platforms. We never edit or cherry-pick them.
          </p>
        </div>
      </section>

      {/* Visit Us Section w/ Map */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">Visit Our Showroom</h2>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Come down and view our selection of high-quality used vehicles. Conveniently located in Bristol — ask for Mo.
            </p>
            <div className="bg-[#f7f7f7] rounded-xl p-8 mb-8 border border-gray-200">
              <address className="not-italic text-lg text-gray-700 space-y-2">
                <p className="font-bold text-gray-900 text-xl mb-3">MKD Cars</p>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#1e3a8a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <div>
                    <p>Central Park, Unit 405D</p>
                    <p>Petherton Rd</p>
                    <p className="font-medium">Bristol, BS14 9BZ</p>
                  </div>
                </div>
              </address>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Central+Park+Unit+405D+Petherton+Rd+Bristol+BS14+9BZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-lg font-bold py-4 px-8 rounded-md transition-all shadow-sm"
            >
              Get Directions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
          <div className="h-[400px] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative">
            <iframe
              src="https://maps.google.com/maps?q=MKD+CARS+Limited+Central+Park+Unit+405D+Petherton+Rd+Bristol+BS14+9BZ&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1e3a8a] py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-[#1e40af]">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Ready to find your next car?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 opacity-90 leading-relaxed">
            Give us a call or WhatsApp us to check our latest stock or arrange a viewing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:07729419246"
              className="w-full sm:w-auto bg-white text-[#1e3a8a] hover:bg-gray-100 text-xl font-bold py-5 px-12 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Call: 07729 419246
            </a>
            <a
              href="https://wa.me/447729419246"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-5 px-12 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

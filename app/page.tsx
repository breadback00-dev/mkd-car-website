import Link from "next/link";
import { vehicles } from "@/app/data/vehicles";
import VehicleCard from "@/components/VehicleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliable & Verified Used Vehicles",
  description: "Browse our hand-picked stock of quality used cars in Bristol. All cars are HPI checked, fully inspected, and ready to test drive today. £99 12 months MOT standard.",
  openGraph: {
    title: "Reliable & Verified Used Vehicles | Bristol Used Cars",
    description: "Browse our hand-picked stock of quality used cars in Bristol. All cars are HPI checked and fully inspected.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featuredVehicles = vehicles.slice(0, 6);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f7f7f7] to-white py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Quality Used Cars <br className="hidden md:block" /> in Bristol
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Find your next reliable vehicle. Simple, fast, and trust-focused service tailored for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:07441906211"
              className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-lg font-bold py-4 px-10 rounded-md transition-all shadow-md hover:shadow-lg"
            >
              Call Us: 07441 906211
            </a>
            <Link
              href="/inventory"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 text-lg font-bold py-4 px-10 rounded-md transition-all shadow-sm hover:shadow"
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

      {/* Services Section (New) */}
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
                <li className="flex items-center text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Home delivery
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Click and collect
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Car sourcing
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Extended warranties
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Live video viewing
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Part exchange
                </li>
              </ul>
            </div>

            <div className="bg-[#f7f7f7] p-10 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold tracking-tight text-[#1e3a8a] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Onsite Facilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <li className="flex items-center text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Servicing
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> MOT
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Tyre fitting & repairs
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Parts
                </li>
              </ul>
              <div className="bg-white border border-[#1e3a8a]/20 p-4 rounded-xl shadow-sm inline-block">
                <p className="text-[#1e3a8a] font-bold">For only £99 12 months MOT is standard</p>
                <p className="text-gray-500 text-sm mt-1">Let us know when and where!</p>
              </div>
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
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Verified Quality</h3>
              <p className="text-gray-500 leading-relaxed">Every car passes a rigorous multi-point inspection before it reaches our lot.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ebf0fe] text-[#1e3a8a] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Clear History</h3>
              <p className="text-gray-500 leading-relaxed">Full HPI checks and detailed service history provided with all our vehicles.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ebf0fe] text-[#1e3a8a] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">No Pressure Sales</h3>
              <p className="text-gray-500 leading-relaxed">We let our cars do the talking. Take your time to find the perfect vehicle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Reviews Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          {/* Headline + overall rating */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-5">Rated 4.7 out of 5</h2>
            <div className="flex justify-center items-center gap-1.5 mb-4">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-9 h-9 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
              {/* Half star for 4.7 */}
              <svg className="w-9 h-9 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="halfStar">
                    <stop offset="70%" stopColor="currentColor" />
                    <stop offset="70%" stopColor="#e5e7eb" />
                  </linearGradient>
                </defs>
                <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-xl text-gray-500">Based on <strong className="text-gray-900">34 verified reviews</strong> from real buyers on AutoTrader.</p>
          </div>

          {/* Two platform cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* AutoTrader */}
            <a
              href="https://www.autotrader.co.uk/dealers/somerset/bristol/mkd-cars-limited-10041723?channel=cars"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#f7f7f7] hover:bg-white border border-gray-200 hover:border-[#1e3a8a] hover:shadow-md rounded-2xl p-8 flex flex-col items-center text-center transition-all"
            >
              <div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-5 shadow-sm group-hover:shadow">
                {/* AutoTrader "A" wordmark icon */}
                <span className="text-[#fa6400] font-extrabold text-xl tracking-tight">AT</span>
              </div>
              <p className="text-2xl font-extrabold text-gray-900 mb-1">4.7 / 5</p>
              <p className="text-gray-500 font-medium mb-1">34 reviews on AutoTrader</p>
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-[#1e3a8a] font-bold group-hover:underline text-sm flex items-center gap-1">
                Read all reviews <span>&rarr;</span>
              </span>
            </a>

            {/* Google */}
            <a
              href="https://www.google.com/search?q=MKD+CARS+Limited+Reviews+Bristol"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#f7f7f7] hover:bg-white border border-gray-200 hover:border-[#1e3a8a] hover:shadow-md rounded-2xl p-8 flex flex-col items-center text-center transition-all"
            >
              <div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-5 shadow-sm group-hover:shadow">
                {/* Google "G" */}
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-gray-900 mb-1">Google Reviews</p>
              <p className="text-gray-500 font-medium mb-1">See what customers say</p>
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-[#1e3a8a] font-bold group-hover:underline text-sm flex items-center gap-1">
                View on Google <span>&rarr;</span>
              </span>
            </a>
          </div>

          {/* Honest note */}
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
              Come down and view our selection of high-quality used vehicles. We are conveniently located in Bristol.
            </p>
            <div className="bg-[#f7f7f7] rounded-xl p-8 mb-8 border border-gray-200">
              <address className="not-italic text-lg text-gray-700 space-y-2">
                <p className="font-bold text-gray-900 text-xl mb-3">Bristol Used Cars</p>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#1e3a8a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
          <div className="h-[400px] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative">
            {/* Embedded Google Map with specific coordinates */}
            <iframe
              src="https://maps.google.com/maps?q=51.423250,-2.569167&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
            Give us a call to check our latest inventory or arrange a viewing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:07441906211"
              className="w-full sm:w-auto bg-white text-[#1e3a8a] hover:bg-gray-100 text-xl font-bold py-5 px-12 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call: 07441 906211
            </a>
            <a
              href="tel:07441936665"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-[#1e40af] text-xl font-bold py-5 px-12 rounded-lg transition-all"
            >
              Call: 07441 936665
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

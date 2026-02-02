'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Plane, Briefcase, Search, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [currentDate, setCurrentDate] = useState({
    gregorian: '',
    hijri: '',
  })

  useEffect(() => {
    const updateDate = () => {
      // Get current date in Fujairah timezone (UAE - Gulf Standard Time)
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Dubai',
      }
      
      const gregorianDate = new Date().toLocaleDateString('en-US', options)

      // Get Hijri date
      const hijriOptions: Intl.DateTimeFormatOptions = {
        calendar: 'islamic-umalqura',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Dubai',
      }
      
      const hijriDate = new Date().toLocaleDateString('en-US', hijriOptions)

      setCurrentDate({
        gregorian: gregorianDate,
        hijri: hijriDate,
      })
    }

    updateDate()
    // Update date every minute to keep it current
    const interval = setInterval(updateDate, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="bg-white relative">
      {/* Top Bar */}
      <div className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto ">
          <div className="flex h-12 items-center justify-between text-xs">
            {/* Left: Location and Date */}
            <div className="flex items-center gap-6 text-neutral-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Fujairah, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentDate.gregorian} - {currentDate.hijri}</span>
              </div>
            </div>

            {/* Right: Links and Contact */}
            <div className="flex items-center gap-6">
              <Link href="/careers" className="text-neutral-700 hover:text-red-600 transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="text-neutral-700 hover:text-red-600 transition-colors">
                Contact Us
              </Link>
              <button className="text-neutral-700 hover:text-red-600 transition-colors">
                العربية
              </button>
              <div className="flex items-center gap-4 ml-4">
                <Link href="mailto:info@fja.ae" className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  <span>info@fja.ae</span>
                </Link>
                <Link href="tel:+97192226222" className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+971 9 2226222</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Adding padding bottom to extend hover area */}
      <div className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo1.png"
                alt="Fujairah International Airport"
                width={150}
                height={80}
                className="h-12 w-75"
                priority
              />
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-12">
              {/* Travellers - with extended clickable area */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('travellers')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link 
                  href="/travellers" 
                  className="flex items-center gap-3 group py-8"
                >
                  <div className="flex items-center justify-center">
                    <Plane className="w-8 h-8 text-neutral-400 group-hover:text-red-600 transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-red-600 group-hover:text-red-700 transition-colors">
                      Travellers
                    </span>
                    <span className="text-xs text-neutral-600">
                      Airport info, luggage guide, lost & found
                    </span>
                  </div>
                </Link>
              </div>

              {/* Corporate - with extended clickable area */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('corporate')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link 
                  href="/corporate" 
                  className="flex items-center gap-3 group py-8"
                >
                  <div className="flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-neutral-400 group-hover:text-red-600 transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-red-600 group-hover:text-red-700 transition-colors">
                      Corporate
                    </span>
                    <span className="text-xs text-neutral-600">
                      eServices, business with FIA, about, media
                    </span>
                  </div>
                </Link>
              </div>

              {/* Search Button */}
              <button 
                className="flex items-center justify-center ml-4"
                aria-label="Search"
              >
                <Search className="w-6 h-6 text-red-600 hover:text-red-700 transition-colors" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu - positioned to touch the header */}
      {activeMenu && (
        <div
          className="absolute left-0 right-0 bg-white border-b border-neutral-200 shadow-2xl z-50"
          style={{ top: '100%' }}
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-7xl mx-auto" style={{ height: '50vh' }}>
            {activeMenu === 'travellers' && (
              <div className="flex gap-0 h-full">
                {/* Left Featured Section - 30% */}
                <div className="w-[30%] bg-gradient-to-br from-red-50 to-red-100 p-8 flex flex-col justify-center border-r border-neutral-200">
                  <div className="space-y-4">
                    <Plane className="w-12 h-12 text-red-600" strokeWidth={1.5} />
                    <h2 className="text-2xl font-bold text-red-600">Welcome Travellers</h2>
                    <p className="text-neutral-700 leading-relaxed">
                      Everything you need for a smooth journey through Fujairah International Airport. 
                      From terminal facilities to flight information, we've got you covered.
                    </p>
                    <div className="pt-4">
                      <Link 
                        href="/travellers" 
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                      >
                        Explore All Services
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Menu Items - 70% */}
                <div className="w-[70%] grid grid-cols-4 gap-8 p-8">
                  {/* Column 1 */}
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-4">Airport Information</h3>
                    <ul className="space-y-3">
                      <li><Link href="/travellers/terminal-map" className="text-neutral-700 hover:text-red-600 transition-colors">Terminal Map</Link></li>
                      <li><Link href="/travellers/facilities" className="text-neutral-700 hover:text-red-600 transition-colors">Airport Facilities</Link></li>
                      <li><Link href="/travellers/parking" className="text-neutral-700 hover:text-red-600 transition-colors">Parking Information</Link></li>
                      <li><Link href="/travellers/transportation" className="text-neutral-700 hover:text-red-600 transition-colors">Transportation</Link></li>
                      <li><Link href="/travellers/wifi" className="text-neutral-700 hover:text-red-600 transition-colors">WiFi & Connectivity</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-4">Travel Essentials</h3>
                    <ul className="space-y-3">
                      <li><Link href="/travellers/luggage-guide" className="text-neutral-700 hover:text-red-600 transition-colors">Luggage Guide</Link></li>
                      <li><Link href="/travellers/customs" className="text-neutral-700 hover:text-red-600 transition-colors">Customs & Immigration</Link></li>
                      <li><Link href="/travellers/security" className="text-neutral-700 hover:text-red-600 transition-colors">Security Information</Link></li>
                      <li><Link href="/travellers/prohibited-items" className="text-neutral-700 hover:text-red-600 transition-colors">Prohibited Items</Link></li>
                      <li><Link href="/travellers/lost-found" className="text-neutral-700 hover:text-red-600 transition-colors">Lost & Found</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-4">Services</h3>
                    <ul className="space-y-3">
                      <li><Link href="/travellers/lounges" className="text-neutral-700 hover:text-red-600 transition-colors">Airport Lounges</Link></li>
                      <li><Link href="/travellers/duty-free" className="text-neutral-700 hover:text-red-600 transition-colors">Duty Free Shopping</Link></li>
                      <li><Link href="/travellers/dining" className="text-neutral-700 hover:text-red-600 transition-colors">Dining Options</Link></li>
                      <li><Link href="/travellers/special-assistance" className="text-neutral-700 hover:text-red-600 transition-colors">Special Assistance</Link></li>
                      <li><Link href="/travellers/prayer-rooms" className="text-neutral-700 hover:text-red-600 transition-colors">Prayer Rooms</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 */}
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-4">Flight Information</h3>
                    <ul className="space-y-3">
                      <li><Link href="/travellers/arrivals" className="text-neutral-700 hover:text-red-600 transition-colors">Arrivals</Link></li>
                      <li><Link href="/travellers/departures" className="text-neutral-700 hover:text-red-600 transition-colors">Departures</Link></li>
                      <li><Link href="/travellers/airlines" className="text-neutral-700 hover:text-red-600 transition-colors">Airlines</Link></li>
                      <li><Link href="/travellers/destinations" className="text-neutral-700 hover:text-red-600 transition-colors">Destinations</Link></li>
                      <li><Link href="/travellers/flight-status" className="text-neutral-700 hover:text-red-600 transition-colors">Flight Status</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeMenu === 'corporate' && (
              <div className="flex gap-0 h-full">
                {/* Left Featured Section - 30% */}
                <div className="w-[30%] bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 flex flex-col justify-center border-r border-neutral-200">
                  <div className="space-y-4">
                    <Briefcase className="w-12 h-12 text-red-600" strokeWidth={1.5} />
                    <h2 className="text-2xl font-bold text-red-600">Corporate Solutions</h2>
                    <p className="text-neutral-700 leading-relaxed">
                      Discover business opportunities, eServices, and partnerships at Fujairah International Airport. 
                      Your gateway to efficient aviation and corporate solutions.
                    </p>
                    <div className="pt-4">
                      <Link 
                        href="/corporate" 
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                      >
                        Explore Corporate Services
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Menu Items - 70% */}
                <div className="w-[70%] grid grid-cols-4 gap-8 p-8">
                  {/* Column 1 - FIXED LINKS */}
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-4">eServices</h3>
                    <ul className="space-y-3">
                      <li><Link href="/corporate/online-booking" className="text-neutral-700 hover:text-red-600 transition-colors">Online Booking</Link></li>
                      <li><Link href="/corporate/corporate-rates" className="text-neutral-700 hover:text-red-600 transition-colors">Corporate Rates</Link></li>
                      <li><Link href="/corporate/billing" className="text-neutral-700 hover:text-red-600 transition-colors">Billing Portal</Link></li>
                      <li><Link href="/corporate/agreements" className="text-neutral-700 hover:text-red-600 transition-colors">Service Agreements</Link></li>
                      <li><Link href="/corporate/requests" className="text-neutral-700 hover:text-red-600 transition-colors">Service Requests</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 - FIXED LINKS */}
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-4">Business with FIA</h3>
                    <ul className="space-y-3">
                      <li><Link href="/corporate/opportunities" className="text-neutral-700 hover:text-red-600 transition-colors">Business Opportunities</Link></li>
                      <li><Link href="/corporate/tenders" className="text-neutral-700 hover:text-red-600 transition-colors">Tenders & Procurement</Link></li>
                      <li><Link href="/corporate/partnerships" className="text-neutral-700 hover:text-red-600 transition-colors">Partnerships</Link></li>
                      <li><Link href="/corporate/cargo" className="text-neutral-700 hover:text-red-600 transition-colors">Cargo Services</Link></li>
                      <li><Link href="/corporate/aviation" className="text-neutral-700 hover:text-red-600 transition-colors">Aviation Services</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 - FIXED LINKS */}
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-4">About FIA</h3>
                    <ul className="space-y-3">
                      <li><Link href="/corporate/about" className="text-neutral-700 hover:text-red-600 transition-colors">About Us</Link></li>
                      <li><Link href="/corporate/leadership" className="text-neutral-700 hover:text-red-600 transition-colors">Leadership Team</Link></li>
                      <li><Link href="/corporate/vision" className="text-neutral-700 hover:text-red-600 transition-colors">Vision & Mission</Link></li>
                      <li><Link href="/corporate/sustainability" className="text-neutral-700 hover:text-red-600 transition-colors">Sustainability</Link></li>
                      <li><Link href="/corporate/awards" className="text-neutral-700 hover:text-red-600 transition-colors">Awards & Recognition</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 - FIXED LINKS */}
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-4">Media & Resources</h3>
                    <ul className="space-y-3">
                      <li><Link href="/corporate/press-releases" className="text-neutral-700 hover:text-red-600 transition-colors">Press Releases</Link></li>
                      <li><Link href="/corporate/news" className="text-neutral-700 hover:text-red-600 transition-colors">News & Updates</Link></li>
                      <li><Link href="/corporate/gallery" className="text-neutral-700 hover:text-red-600 transition-colors">Media Gallery</Link></li>
                      <li><Link href="/corporate/downloads" className="text-neutral-700 hover:text-red-600 transition-colors">Downloads</Link></li>
                      <li><Link href="/corporate/contact-media" className="text-neutral-700 hover:text-red-600 transition-colors">Media Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
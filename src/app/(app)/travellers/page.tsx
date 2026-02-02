'use client'

import Link from 'next/link'
import { 
  Plane, 
  MapPin, 
  Briefcase, 
  Coffee,
  Wifi,
  Navigation,
  ArrowRight,
  ChevronRight,
  Clock,
  Package
} from 'lucide-react'

const sections = [
  {
    title: 'Airport Information',
    icon: MapPin,
    color: 'bg-blue-500',
    links: [
      { title: 'Terminal Map', href: '/travellers/terminal-map', description: 'Navigate the airport' },
      { title: 'Airport Facilities', href: '/travellers/facilities', description: 'Amenities & services' },
      { title: 'Parking Information', href: '/travellers/parking', description: 'Parking options & rates' },
      { title: 'Transportation', href: '/travellers/transportation', description: 'Getting to & from FIA' },
      { title: 'WiFi & Connectivity', href: '/travellers/wifi', description: 'Stay connected' },
    ]
  },
  {
    title: 'Travel Essentials',
    icon: Briefcase,
    color: 'bg-emerald-500',
    links: [
      { title: 'Luggage Guide', href: '/travellers/luggage-guide', description: 'Baggage allowances' },
      { title: 'Customs & Immigration', href: '/travellers/customs', description: 'Entry requirements' },
      { title: 'Security Information', href: '/travellers/security', description: 'Security procedures' },
      { title: 'Prohibited Items', href: '/travellers/prohibited-items', description: 'Restricted items list' },
      { title: 'Lost & Found', href: '/travellers/lost-found', description: 'Report lost items' },
    ]
  },
  {
    title: 'Services',
    icon: Coffee,
    color: 'bg-amber-500',
    links: [
      { title: 'Airport Lounges', href: '/travellers/lounges', description: 'Premium lounge access' },
      { title: 'Duty Free Shopping', href: '/travellers/duty-free', description: 'Tax-free shopping' },
      { title: 'Dining Options', href: '/travellers/dining', description: 'Restaurants & cafes' },
      { title: 'Special Assistance', href: '/travellers/special-assistance', description: 'Accessibility services' },
      { title: 'Prayer Rooms', href: '/travellers/prayer-rooms', description: 'Places of worship' },
    ]
  },
  {
    title: 'Flight Information',
    icon: Plane,
    color: 'bg-red-500',
    links: [
      { title: 'Arrivals', href: '/travellers/arrivals', description: 'Arriving flights' },
      { title: 'Departures', href: '/travellers/departures', description: 'Departing flights' },
      { title: 'Airlines', href: '/travellers/airlines', description: 'Operating airlines' },
      { title: 'Destinations', href: '/travellers/destinations', description: 'Where we fly' },
      { title: 'Flight Status', href: '/travellers/flight-status', description: 'Real-time updates' },
    ]
  },
]

const quickLinks = [
  { icon: Navigation, title: 'Terminal Map', href: '/travellers/terminal-map' },
  { icon: Clock, title: 'Flight Status', href: '/travellers/flight-status' },
  { icon: Package, title: 'Lost & Found', href: '/travellers/lost-found' },
  { icon: Wifi, title: 'Free WiFi', href: '/travellers/wifi' },
]

export default function TravellersPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="relative container mt-10 mb-24 flex flex-col gap-y-16 lg:mb-28 lg:gap-y-20">
        
        {/* Hero Section */}
        <section className="relative rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative px-6 py-12 sm:px-8 md:py-16 lg:px-12 lg:py-20">
            <nav className="flex items-center gap-2 text-sm text-red-200 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Travellers</span>
            </nav>
            
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Plane className="w-8 h-8" />
                </div>
                <span className="text-red-200 font-medium">Traveller Services</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Everything You Need for Your Journey
              </h1>
              
              <p className="text-lg sm:text-xl text-red-100 mb-8 leading-relaxed">
                From terminal facilities to flight information, we've got you covered. 
                Explore all the services and information available to make your travel 
                experience seamless at Fujairah International Airport.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="text-sm font-medium text-center">{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`${section.color} p-6 text-white`}>
                <div className="flex items-center gap-3">
                  <section.icon className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-50 group transition-colors"
                      >
                        <div>
                          <h3 className="font-semibold text-neutral-900 group-hover:text-red-600 transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-sm text-neutral-500">{link.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Help Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
              <p className="text-red-100">Our team is available 24/7 to assist you with any questions.</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Contact Us
              </Link>
              
                href="tel:+97192226222"
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors"
              
                +971 9 2226222
              
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
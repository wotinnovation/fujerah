import Image from 'next/image'
import type { JSX } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Chrome,
  Compass,
  ExternalLink
} from 'lucide-react'

const navigation = {
  travellers: [
    { name: 'Getting around the Airport', href: '#' },
    { name: 'Shop and Dine', href: '#' },
    { name: 'Passenger Services', href: '#' },
    { name: 'Discover Fujairah', href: '#' },
    { name: "What's in our Sky?", href: '#' },
    { name: 'Weather Info - Fujairah', href: '#' },
    { name: 'Weather Info - Dibba', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Suggestion / Complaint', href: '#' },
    { name: 'Ideas', href: '#' },
  ],
  corporate: [
    { name: 'eServices', href: '#' },
    { name: 'Why Connect to FIA?', href: '#' },
    { name: 'Connect your Business', href: '#' },
    { name: 'Landing Permission', href: '#' },
    { name: 'Entry Pass', href: '#' },
    { name: 'About FIA', href: '#' },
    { name: 'Fujairah Aviation Academy', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Certifications', href: '#' },
    { name: 'Open Data', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: Youtube,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'TikTok',
      href: '#',
      icon: Compass, // Using Compass as TikTok alternative
    },
  ],
  browsers: [
    {
      name: 'Chrome',
      icon: Chrome,
    },
    {
      name: 'Safari',
      icon: Compass,
    },
    {
      name: 'Firefox',
      icon: Chrome,
    },
    {
      name: 'Edge',
      icon: Chrome,
    },
  ],
}

export default function Footer() {
  // Fujairah International Airport coordinates
  const FUJAIRAH_AIRPORT_LAT = 25.1122
  const FUJAIRAH_AIRPORT_LNG = 56.3241

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Travellers Section */}
          <div>
            <h3 className="text-base font-semibold mb-6">Travellers</h3>
            <ul role="list" className="space-y-3">
              {navigation.travellers.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-neutral-500 group-hover:text-white transition-colors">›</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Section */}
          <div>
            <h3 className="text-base font-semibold mb-6">Corporate</h3>
            <ul role="list" className="space-y-3">
              {navigation.corporate.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-neutral-500 group-hover:text-white transition-colors">›</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map Section */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-6">Fujairah International Airport</h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-400" />
                <p className="text-lg font-semibold">+971 9 222 6222</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-400" />
                <p className="text-sm text-neutral-300">info@fia.ae</p>
              </div>
              <a 
                href="#" 
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Getting here & Parking
              </a>
            </div>

            {/* Interactive Map */}
            <div className="bg-neutral-800 rounded-lg overflow-hidden h-48 mb-6 relative group">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.5!2d${FUJAIRAH_AIRPORT_LNG}!3d${FUJAIRAH_AIRPORT_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f1b6c8c8c8c9%3A0x1e8e8e8e8e8e8e8e!2sFujairah%20International%20Airport!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${FUJAIRAH_AIRPORT_LAT},${FUJAIRAH_AIRPORT_LNG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-white/90 hover:bg-white text-neutral-900 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
              >
                <ExternalLink className="w-3 h-3" />
                View larger map
              </a>
            </div>

            {/* Emergency Contacts */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Emergency Contact Numbers</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="text-neutral-400">Police: </span>
                  <span className="font-semibold">999</span>
                </div>
                <div>
                  <span className="text-neutral-400">Civil defence: </span>
                  <span className="font-semibold">997</span>
                </div>
                <div>
                  <span className="text-neutral-400">Ambulance: </span>
                  <span className="font-semibold">998/999</span>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Sitemap
                </a>
              </div>
            </div>

            {/* Browser Support */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Browser Support</h4>
              <div className="flex gap-4">
                {navigation.browsers.map((browser) => {
                  const IconComponent = browser.icon
                  return (
                    <div
                      key={browser.name}
                      className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer"
                      title={browser.name}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const IconComponent = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Employee Email Link */}
            <div>
              <a
                href="#"
                className="text-sm text-neutral-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Employee Email
              </a>
            </div>

            {/* Logo or Company Name */}
            <div>
              <p className="text-sm text-neutral-400">
                © 2026 Fujairah International Airport. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
import Image from 'next/image'
import type { JSX } from 'react'

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
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
  ],
  browsers: [
    {
      name: 'Chrome',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
        </svg>
      ),
    },
    {
      name: 'Safari',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19zm.75-14.25L7.5 11.25l-1.75 5.25 5.25-4 4-1.75-5.25-1.75z" />
        </svg>
      ),
    },
    {
      name: 'Firefox',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" />
        </svg>
      ),
    },
    {
      name: 'Edge',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.347 12.004c0-1.378-.535-2.665-1.504-3.626a5.118 5.118 0 0 0-3.634-1.499c-1.372 0-2.659.533-3.626 1.499a5.095 5.095 0 0 0-1.504 3.626v.033c0 2.756 2.272 5.029 5.13 5.029 1.378 0 2.664-.533 3.634-1.499.968-.967 1.504-2.248 1.504-3.626v-.033h-.001zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
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
              <p className="text-lg font-semibold">+971 9 222 6222</p>
              <p className="text-sm text-neutral-300">info@fia.ae</p>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
                <span className="mr-2">›</span>
                Getting here & Parking
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="bg-neutral-800 rounded-lg overflow-hidden h-48 mb-6 relative">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p className="text-xs">Fujairah International Airport</p>
                  <a href="#" className="text-xs text-blue-400 hover:text-blue-300">View larger map</a>
                </div>
              </div>
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
                {navigation.browsers.map((browser) => (
                  <div
                    key={browser.name}
                    className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors cursor-pointer"
                    title={browser.name}
                  >
                    <browser.icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Employee Email Link */}
            <div>
              <a
                href="#"
                className="text-sm text-neutral-300 hover:text-white transition-colors flex items-center"
              >
                <span className="mr-2">›</span>
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
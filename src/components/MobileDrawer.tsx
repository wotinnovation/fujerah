'use client'

import Link from 'next/link'
import { Plane, Briefcase, X, ChevronDown, User } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

interface MobileNavSection {
  title: string
  links: { label: string; href: string }[]
}

const travellersMenu: MobileNavSection[] = [
  {
    title: 'Airport Information',
    links: [
      { label: 'Terminal Map', href: '/travellers/terminal-map' },
      { label: 'Airport Facilities', href: '/travellers/facilities' },
      { label: 'Parking Information', href: '/travellers/parking' },
      { label: 'Transportation', href: '/travellers/transportation' },
      { label: 'WiFi & Connectivity', href: '/travellers/wifi' },
    ],
  },
  {
    title: 'Travel Essentials',
    links: [
      { label: 'Luggage Guide', href: '/travellers/luggage-guide' },
      { label: 'Customs & Immigration', href: '/travellers/customs' },
      { label: 'Security Information', href: '/travellers/security' },
      { label: 'Prohibited Items', href: '/travellers/prohibited-items' },
      { label: 'Lost & Found', href: '/travellers/lost-found' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Airport Lounges', href: '/travellers/lounges' },
      { label: 'Duty Free Shopping', href: '/travellers/duty-free' },
      { label: 'Dining Options', href: '/travellers/dining' },
      { label: 'Special Assistance', href: '/travellers/special-assistance' },
      { label: 'Prayer Rooms', href: '/travellers/prayer-rooms' },
    ],
  },
  {
    title: 'Flight Information',
    links: [
      { label: 'Arrivals', href: '/travellers/arrivals' },
      { label: 'Departures', href: '/travellers/departures' },
      { label: 'Airlines', href: '/travellers/airlines' },
      { label: 'Destinations', href: '/travellers/destinations' },
      { label: 'Flight Status', href: '/travellers/flight-status' },
    ],
  },
]

const corporateMenu: MobileNavSection[] = [
  {
    title: 'eServices',
    links: [
      { label: 'Online Booking', href: '/corporate/online-booking' },
      { label: 'Corporate Rates', href: '/corporate/corporate-rates' },
      { label: 'Billing Portal', href: '/corporate/billing' },
      { label: 'Service Agreements', href: '/corporate/agreements' },
      { label: 'Service Requests', href: '/corporate/requests' },
    ],
  },
  {
    title: 'Business with FIA',
    links: [
      { label: 'Business Opportunities', href: '/corporate/opportunities' },
      { label: 'Tenders & Procurement', href: '/corporate/tenders' },
      { label: 'Partnerships', href: '/corporate/partnerships' },
      { label: 'Cargo Services', href: '/corporate/cargo' },
      { label: 'Aviation Services', href: '/corporate/aviation' },
    ],
  },
  {
    title: 'About FIA',
    links: [
      { label: 'About Us', href: '/corporate/about' },
      { label: 'Leadership Team', href: '/corporate/leadership' },
      { label: 'Vision & Mission', href: '/corporate/vision' },
      { label: 'Sustainability', href: '/corporate/sustainability' },
      { label: 'Awards & Recognition', href: '/corporate/awards' },
    ],
  },
  {
    title: 'Media & Resources',
    links: [
      { label: 'Press Releases', href: '/corporate/press-releases' },
      { label: 'News & Updates', href: '/corporate/news' },
      { label: 'Media Gallery', href: '/corporate/gallery' },
      { label: 'Downloads', href: '/corporate/downloads' },
      { label: 'Media Contact', href: '/corporate/contact-media' },
    ],
  },
]

const topLinks = [
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
]

interface CollapsibleSectionProps {
  section: MobileNavSection
  onClose: () => void
}

const CollapsibleSection = ({ section, onClose }: CollapsibleSectionProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-neutral-100 dark:border-neutral-800">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-3.5 text-left"
      >
        <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{section.title}</span>
        <ChevronDown
          className={clsx(
            'h-4 w-4 text-neutral-400 transition-transform duration-300 dark:text-neutral-500',
            open && 'rotate-180'
          )}
          strokeWidth={2}
        />
      </button>
      {open && (
        <div className="px-5 pb-3">
          {section.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block py-2 text-sm text-neutral-600 hover:text-red-600 transition-colors dark:text-neutral-400 dark:hover:text-red-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  const [activeTab, setActiveTab] = useState<'travellers' | 'corporate'>('travellers')

  const menu = activeTab === 'travellers' ? travellersMenu : corporateMenu

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 dark:bg-black/60',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={clsx(
          'fixed top-0 right-0 z-50 h-full w-[85vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out dark:bg-neutral-900',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
          <Link href="/" onClick={onClose}>
            <span className="text-lg font-bold text-red-600">FIA</span>
          </Link>
          <div className="flex items-center gap-2">
            {/* Login/Profile Button */}
            <Link
              href="/login"
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <User className="h-4 w-4" strokeWidth={2} />
              <span>Login</span>
            </Link>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 transition-colors dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Tab Switcher: Travellers / Corporate */}
        <div className="flex border-b border-neutral-200 dark:border-neutral-800">
          <button
            onClick={() => setActiveTab('travellers')}
            className={clsx(
              'flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-colors',
              activeTab === 'travellers'
                ? 'border-b-2 border-red-600 text-red-600'
                : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
            )}
          >
            <Plane className="h-4 w-4" strokeWidth={1.5} />
            Travellers
          </button>
          <button
            onClick={() => setActiveTab('corporate')}
            className={clsx(
              'flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-colors',
              activeTab === 'corporate'
                ? 'border-b-2 border-red-600 text-red-600'
                : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
            )}
          >
            <Briefcase className="h-4 w-4" strokeWidth={1.5} />
            Corporate
          </button>
        </div>

        {/* Scrollable Menu Sections */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
          {menu.map((section) => (
            <CollapsibleSection key={section.title} section={section} onClose={onClose} />
          ))}

          {/* Bottom Links */}
          <div className="mt-4 border-t border-neutral-200 px-5 py-4 dark:border-neutral-800">
            {topLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block py-2.5 text-sm text-neutral-600 hover:text-red-600 transition-colors dark:text-neutral-400 dark:hover:text-red-500"
              >
                {link.label}
              </Link>
            ))}
            <button className="mt-2 block py-2.5 text-sm text-neutral-600 hover:text-red-600 transition-colors dark:text-neutral-400 dark:hover:text-red-500">
              العربية
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
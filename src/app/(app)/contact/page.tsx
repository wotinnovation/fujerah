'use client'

import Link from 'next/link'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import { 
  Briefcase, 
  Globe,
  Building2,
  Newspaper,
  FileText,
  Users,
  Plane,
  Package,
  ArrowRight,
  ChevronRight,
  Mail,
  Phone
} from 'lucide-react'

const sections = [
  {
    title: 'eServices',
    icon: Globe,
    color: 'bg-indigo-500',
    links: [
      { title: 'Online Booking', href: '/corporate/online-booking', description: 'Book services digitally' },
      { title: 'Corporate Rates', href: '/corporate/corporate-rates', description: 'Special business pricing' },
      { title: 'Billing Portal', href: '/corporate/billing', description: 'Manage payments' },
      { title: 'Service Agreements', href: '/corporate/agreements', description: 'Contract information' },
      { title: 'Service Requests', href: '/corporate/requests', description: 'Submit requests' },
    ]
  },
  {
    title: 'Business with FIA',
    icon: Building2,
    color: 'bg-teal-500',
    links: [
      { title: 'Business Opportunities', href: '/corporate/opportunities', description: 'Partner with FIA' },
      { title: 'Tenders & Procurement', href: '/corporate/tenders', description: 'Current opportunities' },
      { title: 'Partnerships', href: '/corporate/partnerships', description: 'Strategic alliances' },
      { title: 'Cargo Services', href: '/corporate/cargo', description: 'Freight solutions' },
      { title: 'Aviation Services', href: '/corporate/aviation', description: 'Aircraft support' },
    ]
  },
  {
    title: 'About FIA',
    icon: Users,
    color: 'bg-purple-500',
    links: [
      { title: 'About Us', href: '/corporate/about', description: 'Our story' },
      { title: 'Leadership Team', href: '/corporate/leadership', description: 'Meet our leaders' },
      { title: 'Vision & Mission', href: '/corporate/vision', description: 'Our purpose' },
      { title: 'Sustainability', href: '/corporate/sustainability', description: 'Environmental commitment' },
      { title: 'Awards & Recognition', href: '/corporate/awards', description: 'Our achievements' },
    ]
  },
  {
    title: 'Media & Resources',
    icon: Newspaper,
    color: 'bg-rose-500',
    links: [
      { title: 'Press Releases', href: '/corporate/press-releases', description: 'Official announcements' },
      { title: 'News & Updates', href: '/corporate/news', description: 'Latest news' },
      { title: 'Media Gallery', href: '/corporate/gallery', description: 'Photos & videos' },
      { title: 'Downloads', href: '/corporate/downloads', description: 'Documents & resources' },
      { title: 'Media Contact', href: '/corporate/contact-media', description: 'Press inquiries' },
    ]
  },
]

const featuredServices = [
  { 
    icon: Plane, 
    title: 'Landing Permission', 
    href: '/corporate/landing-permission',
    description: 'Apply for flight permits under our open sky policy'
  },
  { 
    icon: Package, 
    title: 'Cargo Services', 
    href: '/corporate/cargo',
    description: 'Comprehensive freight and logistics solutions'
  },
  { 
    icon: FileText, 
    title: 'Tenders', 
    href: '/corporate/tenders',
    description: 'View current procurement opportunities'
  },
]

export default function CorporatePage() {
  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      
      {/* Hero Section - Full Width */}
      <section className="relative bg-gradient-to-br from-neutral-800 via-neutral-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative container py-12 md:py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Corporate</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-600 rounded-xl">
                  <Briefcase className="w-8 h-8" />
                </div>
                <span className="text-neutral-400 font-medium">Corporate Solutions</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Gateway to Business Excellence
              </h1>
              
              <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
                Discover business opportunities, eServices, and partnerships at Fujairah 
                International Airport. Your partner for efficient aviation and corporate solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/corporate/opportunities"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                >
                  Explore Opportunities
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="space-y-4">
                {featuredServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-xl">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-400">{service.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative container mt-10 mb-24 flex flex-col gap-y-12 lg:mb-28 lg:gap-y-16">
        
        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-lg transition-shadow"
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
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700 group transition-colors"
                      >
                        <div>
                          <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">{link.description}</p>
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

        {/* Contact Banner */}
        <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Partner with FIA?</h3>
              <p className="text-neutral-300">Our business development team is here to discuss opportunities.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:business@fja.ae"
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                business@fja.ae
              </a>
              <a
                href="tel:+97192226700"
                className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +971 9 2226700
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
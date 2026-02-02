'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Phone, Mail, Clock, MapPin, ChevronRight } from 'lucide-react'
import { BentoPageData } from '@/data/bento-pages-data'

interface BentoPageTemplateProps {
  data: BentoPageData
}

export default function BentoPageTemplate({ data }: BentoPageTemplateProps) {
  return (
    <main className="relative overflow-hidden">
      <div className="relative container mt-10 mb-24 flex flex-col gap-y-16 lg:mb-28 lg:gap-y-20">
        
        {/* Hero Section */}
        <section className="relative rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative px-6 py-12 sm:px-8 md:py-16 lg:px-12 lg:py-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-red-200 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/#services" className="hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{data.title}</span>
            </nav>
            
            {/* Title */}
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="text-lg sm:text-xl text-red-100 leading-relaxed">
                {data.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div>
          {/* Description */}
          <div className="max-w-3xl mb-12">
            <p className="text-lg text-neutral-600 leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Sections */}
            <div className="lg:col-span-2 space-y-8">
              {data.sections.map((section, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 md:p-8 hover:shadow-md transition-shadow"
                >
                  <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-lg text-sm font-bold">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {section.content}
                  </p>
                  
                  {section.items && section.items.length > 0 && (
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2" />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              {data.contactInfo && (
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {data.contactInfo.phone && (
                      <a 
                        href={`tel:${data.contactInfo.phone}`}
                        className="flex items-center gap-3 text-neutral-700 hover:text-red-600 transition-colors"
                      >
                        <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg">
                          <Phone className="w-5 h-5 text-red-600" />
                        </div>
                        <span>{data.contactInfo.phone}</span>
                      </a>
                    )}
                    {data.contactInfo.email && (
                      <a 
                        href={`mailto:${data.contactInfo.email}`}
                        className="flex items-center gap-3 text-neutral-700 hover:text-red-600 transition-colors"
                      >
                        <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg">
                          <Mail className="w-5 h-5 text-red-600" />
                        </div>
                        <span>{data.contactInfo.email}</span>
                      </a>
                    )}
                    {data.contactInfo.hours && (
                      <div className="flex items-center gap-3 text-neutral-700">
                        <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg">
                          <Clock className="w-5 h-5 text-red-600" />
                        </div>
                        <span>{data.contactInfo.hours}</span>
                      </div>
                    )}
                    {data.contactInfo.location && (
                      <div className="flex items-center gap-3 text-neutral-700">
                        <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg">
                          <MapPin className="w-5 h-5 text-red-600" />
                        </div>
                        <span>{data.contactInfo.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Related Links */}
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">Related Services</h3>
                <div className="space-y-3">
                  {data.relatedLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block p-4 rounded-xl bg-neutral-50 hover:bg-red-50 border border-transparent hover:border-red-200 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-neutral-900 group-hover:text-red-600 transition-colors">
                            {link.title}
                          </h4>
                          <p className="text-sm text-neutral-500 mt-1">
                            {link.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Help */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Need Assistance?</h3>
                <p className="text-red-100 text-sm mb-4">
                  Our team is here to help you 24/7. Contact us for any questions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
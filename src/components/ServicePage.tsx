'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  Info,
  TrendingUp
} from 'lucide-react'
import { useState } from 'react'
import type { ServicePageData } from '@/data/services-data'

// Icon mapping for service features
const iconComponents: Record<string, any> = {
  UserCheck: '👤',
  Luggage: '🧳',
  Crown: '👑',
  HeartHandshake: '🤝',
  Wrench: '🔧',
  ClipboardCheck: '📋',
  Cog: '⚙️',
  Shield: '🛡️',
  Map: '🗺️',
  Cloud: '☁️',
  Bell: '🔔',
  Radio: '📡',
  Plane: '✈️',
  Fuel: '⛽',
  Package: '📦',
  Snowflake: '❄️'
}

interface ServicePageProps {
  data: ServicePageData
}

export default function ServicePage({ data }: ServicePageProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <main className="relative overflow-hidden">
      <div className="relative container mt-10 mb-24 flex flex-col gap-y-16 lg:mb-28 lg:gap-y-20">
        
        {/* Hero Section - Industrial Aviation Style */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-slate-900 rounded-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              className="object-cover opacity-40"
              priority
            />
            {/* Diagonal Gradient Overlay */}
            <div 
              className="absolute inset-0" 
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 50%, rgba(51, 65, 85, 0.75) 100%)'
              }}
            />
            {/* Grid Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative h-full px-6 sm:px-8 md:py-16 lg:px-12 lg:py-20 flex items-center">
            <div className="max-w-4xl">
              {/* Service Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-500/30 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
                  Professional Service
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {data.title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 font-light leading-relaxed">
                {data.subtitle}
              </p>

              {/* Quick Contact Strip */}
              <div className="flex flex-wrap gap-4 text-slate-300">
                <a 
                  href={`tel:${data.contactInfo.phone}`}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/20 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{data.contactInfo.phone}</span>
                </a>
                <a 
                  href={`mailto:${data.contactInfo.email}`}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/20 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Contact Us</span>
                </a>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{data.contactInfo.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Info className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {data.overview.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {data.overview.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features - Card Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Features
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-200"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {iconComponents[feature.icon] || '✨'}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Offerings - Two Column Layout */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive services designed to meet all your operational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.serviceOfferings.map((offering, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-red-600">
                  {offering.category}
                </h3>
                <ul className="space-y-3">
                  {offering.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

       
        {/* Benefits Section */}
        <section className="-mx-4 sm:-mx-6 lg:-mx-12 px-6 sm:px-8 lg:px-12 py-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl">
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-red-100 max-w-2xl mx-auto">
              Experience the advantages that set us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-red-100 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Specifications (if available) */}
        {data.specifications && data.specifications.length > 0 && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Technical Specifications
            </h2>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <dl className="grid md:grid-cols-2 gap-6">
                {data.specifications.map((spec, index) => (
                  <div key={index} className="border-l-4 border-red-600 pl-4">
                    <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      {spec.label}
                    </dt>
                    <dd className="text-lg font-bold text-slate-900">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-600 flex-shrink-0 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

     
        {/* Related Services */}
        {data.relatedServices.length > 0 && (
          <section className="border-t border-slate-200 pt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Related Services
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {data.relatedServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group flex items-center justify-between p-6 bg-slate-50 rounded-xl border-2 border-transparent hover:border-red-600 hover:bg-white transition-all"
                >
                  <span className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back Navigation */}
        <div className="border-t border-slate-200 pt-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Services
          </Link>
        </div>

      </div>
    </main>
  )
}
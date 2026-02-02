'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Star,
  ChevronDown,
  Phone,
  Mail
} from 'lucide-react'
import { useState } from 'react'
import type { HeroPageData } from '@/data/hero-slides-data'

// Icon mapping
const iconMap: Record<string, any> = {
  Bus: '🚌',
  Clock: '⏰',
  MapPin: '📍',
  Shield: '🛡️',
  Globe: '🌍',
  Palmtree: '🌴',
  Mountain: '⛰️',
  Building: '🏢',
  Crown: '👑',
  Plane: '✈️',
  Hotel: '🏨',
  Sparkles: '✨',
  Briefcase: '💼',
  Users: '👥',
  Zap: '⚡',
  Search: '🔍',
  Calendar: '📅',
  Map: '🗺️',
  CheckCircle: '✅'
}

interface HeroSlidePageProps {
  data: HeroPageData
  slug: string
}

export default function HeroSlidePage({ data, slug }: HeroSlidePageProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <main className="relative overflow-hidden">
      <div className="relative container mt-10 mb-24 flex flex-col gap-y-16 lg:mb-28 lg:gap-y-20">
        
        {/* Hero Section with Parallax Effect */}
        <section className="relative h-[70vh] overflow-hidden rounded-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full px-6 sm:px-8 md:py-16 lg:px-12 lg:py-20 flex items-center">
            <div className="max-w-3xl">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">{data.tagline}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {data.title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-white/90 mb-8 font-light leading-relaxed">
                {data.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={data.ctaSection.primaryButton.link}
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-xl"
                >
                  {data.ctaSection.primaryButton.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                {data.ctaSection.secondaryButton && (
                  <Link
                    href={data.ctaSection.secondaryButton.link}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all"
                  >
                    {data.ctaSection.secondaryButton.text}
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </section>

        {/* Features Section - Bento Grid Style */}
        <section>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {iconMap[feature.icon] || '✨'}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Details List */}
                {feature.details && (
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
              </div>
            ))}
          </div>
        </section>

    

        {/* FAQ Section (if available) */}
        {data.faq && data.faq.length > 0 && (
          <section className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Everything you need to know
              </p>
            </div>

            <div className="space-y-4">
              {data.faq.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-red-600 flex-shrink-0 transition-transform ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="-mx-4 sm:-mx-6 lg:-mx-12 px-4 sm:px-6 lg:px-12 py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {data.ctaSection.title}
            </h2>
            <p className="text-xl text-white/90 mb-10">
              {data.ctaSection.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={data.ctaSection.primaryButton.link}
                className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                {data.ctaSection.primaryButton.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
              {data.ctaSection.secondaryButton && (
                <Link
                  href={data.ctaSection.secondaryButton.link}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all"
                >
                  {data.ctaSection.secondaryButton.text}
                </Link>
              )}
            </div>

            {/* Contact Info */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80">
              <a href="tel:+97192226222" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+971 9 2226222</span>
              </a>
              <a href="mailto:info@fja.ae" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@fja.ae</span>
              </a>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  )
}
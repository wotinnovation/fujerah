'use client';
import { FC } from 'react'
import Link from 'next/link'
import { Headphones, CarFront, ShieldCheck, ArrowRight } from 'lucide-react'

interface ServiceCard {
  icon: any
  title: string
  description: string
  buttonText: string
  href: string
}

const services: ServiceCard[] = [
  {
    icon: Headphones,
    title: 'Premium Support',
    description: 'Get personalized assistance from our dedicated team available 24/7 for your comfort',
    buttonText: 'Get Support',
    href: '/ben-services/support'
  },
  {
    icon: CarFront,
    title: 'Valet Parking',
    description: 'Experience hassle-free premium parking with our convenient valet service',
    buttonText: 'Reserve Now',
    href: '/ben-services/valet-parking'
  },
  {
    icon: ShieldCheck,
    title: 'Travel Insurance',
    description: 'Protect your journey with comprehensive coverage for complete peace of mind',
    buttonText: 'Learn More',
    href: '/ben-services/insurance'
  }
]

const UsefulServicesSection: FC = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-gray-300/50 dark:bg-neutral-900 dark:shadow-neutral-950/50 pb-4">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-neutral-900 " />
      
      {/* Decorative Elements for Dark Mode */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-64 w-64 animate-pulse rounded-full bg-red-500/5 blur-3xl dark:bg-red-600/10" style={{ animationDuration: '4s' }} />
      <div className="pointer-events-none absolute bottom-[20%] right-[15%] h-72 w-72 animate-pulse rounded-full bg-gray-400/5 blur-3xl dark:bg-neutral-600/10" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-left">
          <h2 className="mb-3 text-2xl font-bold text-red-600 dark:text-red-500 lg:text-3xl xl:text-4xl">
            Elevate Your Experience
          </h2>
          <p className="max-w-2xl text-sm text-gray-600 dark:text-neutral-400 lg:text-base">
            Discover premium services designed to make your journey seamless and memorable
          </p>
        </div>
        
        {/* Cards Container - Mobile Scroll / Desktop Grid */}
        <div className="mt-12 md:grid md:grid-cols-3 md:gap-6">
          {/* Mobile: Horizontal Scroll */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:hidden snap-x snap-mandatory">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group relative flex-shrink-0 w-[80%] snap-start"
                >
                  {/* Glassmorphism Card with Dark Mode */}
                  <div className="relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-50/80 p-6 shadow-lg shadow-gray-200/50 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-300/50 before:absolute before:inset-0 before:bg-red-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 dark:border-neutral-800 dark:bg-neutral-800/40 dark:shadow-neutral-950/30 dark:hover:shadow-xl dark:hover:shadow-neutral-950/50 lg:p-8">
                    {/* Shine effect */}
                    <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-tr from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%] dark:via-white/10" />
                    
                    {/* Content */}
                    <div className="relative">
                      {/* Icon Container */}
                      <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white/60 p-4 backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-700/50">
                        <IconComponent className="h-8 w-8 text-gray-700 dark:text-neutral-300 lg:h-10 lg:w-10" strokeWidth={1.5} />
                      </div>
                      
                      {/* Title */}
                      <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-neutral-100 lg:text-2xl">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-neutral-400 lg:text-base">
                        {service.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Link
                        href={service.href}
                        className="group/btn inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-gray-900/10 backdrop-blur-sm transition-all duration-300 hover:gap-3 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/30 dark:bg-neutral-800 dark:shadow-neutral-950/20 dark:hover:bg-red-600"
                      >
                        {service.buttonText}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop: Grid Layout */}
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group relative hidden md:block"
              >
                {/* Glassmorphism Card with Dark Mode */}
                <div className="relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-50/80 p-6 shadow-lg shadow-gray-200/50 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-300/50 before:absolute before:inset-0 before:bg-red-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 dark:border-neutral-800 dark:bg-neutral-800/40 dark:shadow-neutral-950/30 dark:hover:shadow-xl dark:hover:shadow-neutral-950/50 lg:p-8">
                  {/* Shine effect */}
                  <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-tr from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%] dark:via-white/10" />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon Container */}
                    <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white/60 p-4 backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-700/50">
                      <IconComponent className="h-8 w-8 text-gray-700 dark:text-neutral-300 lg:h-10 lg:w-10" strokeWidth={1.5} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-neutral-100 lg:text-2xl">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-neutral-400 lg:text-base">
                      {service.description}
                    </p>
                    
                    {/* CTA Button */}
                    <Link
                      href={service.href}
                      className="group/btn inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-gray-900/10 backdrop-blur-sm transition-all duration-300 hover:gap-3 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/30 dark:bg-neutral-800 dark:shadow-neutral-950/20 dark:hover:bg-red-600"
                    >
                      {service.buttonText}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Add custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default UsefulServicesSection
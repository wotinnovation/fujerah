'use client'

import Link from 'next/link'
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Heart,
  Globe,
  ChevronRight,
  ArrowRight,
  MapPin,
  Clock,
  Building2
} from 'lucide-react'

const benefits = [
  { icon: Heart, title: 'Health Insurance', description: 'Comprehensive medical coverage for you and your family' },
  { icon: GraduationCap, title: 'Training & Development', description: 'Continuous learning and career growth opportunities' },
  { icon: Globe, title: 'Travel Benefits', description: 'Discounted flights and travel perks' },
  { icon: Users, title: 'Work-Life Balance', description: 'Flexible schedules and generous leave policy' },
]

const openPositions = [
  { 
    title: 'Ground Handling Supervisor', 
    department: 'Operations',
    location: 'Fujairah',
    type: 'Full-time',
    posted: '2 days ago'
  },
  { 
    title: 'Customer Service Agent', 
    department: 'Passenger Services',
    location: 'Fujairah',
    type: 'Full-time',
    posted: '5 days ago'
  },
  { 
    title: 'IT Systems Administrator', 
    department: 'Information Technology',
    location: 'Fujairah',
    type: 'Full-time',
    posted: '1 week ago'
  },
  { 
    title: 'Safety Officer', 
    department: 'Safety & Security',
    location: 'Fujairah',
    type: 'Full-time',
    posted: '1 week ago'
  },
  { 
    title: 'Marketing Coordinator', 
    department: 'Commercial',
    location: 'Fujairah',
    type: 'Full-time',
    posted: '2 weeks ago'
  },
]

export default function CareersPage() {
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
              <span className="text-white">Careers</span>
            </nav>
            
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Briefcase className="w-8 h-8" />
                </div>
                <span className="text-red-200 font-medium">Join Our Team</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Build Your Career at FIA
              </h1>
              
              <p className="text-lg sm:text-xl text-red-100 mb-8 leading-relaxed">
                Join a dynamic team at one of the UAE's leading airports. We offer exciting 
                opportunities for growth, competitive benefits, and a chance to be part of 
                Fujairah's aviation success story.
              </p>
              
              <a
                href="#positions"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">Why Work at FIA?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl mb-4">
                  <benefit.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Open Positions</h2>
          
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 hover:shadow-md hover:border-red-200 dark:hover:border-red-800 transition-all group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-neutral-500 dark:text-neutral-500">{position.posted}</span>
                    <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition-colors">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Don't see a position that fits? Send us your CV and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@fja.ae"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Send your CV to careers@fja.ae
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Application Process */}
        <section className="bg-white dark:bg-neutral-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">Application Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply Online', description: 'Submit your application through our careers portal' },
              { step: '2', title: 'Review', description: 'Our HR team reviews your application' },
              { step: '3', title: 'Interview', description: 'Selected candidates are invited for interviews' },
              { step: '4', title: 'Offer', description: 'Successful candidates receive an offer letter' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
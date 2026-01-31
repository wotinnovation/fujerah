import Heading from '@/shared/Heading'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export interface SectionHowItWorkProps {
  className?: string
  data?: {
    id: number
    title: string
    desc: string
    img: StaticImageData | string
    imgDark?: StaticImageData | string
    details?: string[]
  }[]
  title?: string
  subheading?: string
}

const DEMO_DATA: SectionHowItWorkProps['data'] = [
  {
    id: 1,
    img: '/images/HIW1.png',
    title: 'Book & relax',
    desc: 'Let each trip be an inspirational journey, each room a peaceful space',
    details: [
      'Easy online booking',
      'Instant confirmation',
      'Secure payment',
      ' 24/7 support'
    ]
  },
  {
    id: 2,
    img: '/images/HIW2.png',
    title: 'Smart checklist',
    desc: 'Let each trip be an inspirational journey, each room a peaceful space',
    details: [
      'Personalized itinerary',
      'Travel reminders',
      'Document manager',
      'Packing list'
    ]
  },
]

const SectionHowItWork: FC<SectionHowItWorkProps> = ({ 
  className = '', 
  data = DEMO_DATA, 
  title = 'How it work',
  subheading = 'Keep calm & travel on'
}) => {
  return (
    <div className={`nc-SectionHowItWork ${className}`} data-nc-id="SectionHowItWork">
      {/* Header */}
      <Heading subheading={subheading}>
        {title}
      </Heading>

      {/* Two Images Side by Side */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item) => {
          return (
            <div key={item.id} className="relative">
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                {item.imgDark ? (
                  <>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 dark:hidden"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <Image
                      src={item.imgDark}
                      alt={item.title}
                      fill
                      className="hidden object-cover transition-transform duration-500 group-hover:scale-110 dark:block"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </>
                ) : (
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}

                {/* Glassmorphism hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 backdrop-blur-sm" />
                </div>

                {/* Red accent border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Heading on Left (Always Visible) - Slides Right and Fades on Hover */}
                <div className="absolute left-0 top-0 bottom-0 flex items-center p-6 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-0">
                  <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description and Details - Slide Up on Hover */}
                <div className="absolute inset-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6 lg:p-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-5 lg:p-6 border border-white/20 w-full max-w-md">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 text-center">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm lg:text-base text-white/90 mb-4 text-center leading-relaxed">
                      {item.desc}
                    </p>

                    {item.details && item.details.length > 0 && (
                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-xs lg:text-sm text-white/95">
                            <svg 
                              className="w-4 h-4 lg:w-5 lg:h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path 
                                fillRule="evenodd" 
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                clipRule="evenodd" 
                              />
                            </svg>
                            <span className="drop-shadow leading-tight">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-30 dark:bg-red-900/30 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 dark:bg-blue-900/30 -z-10" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SectionHowItWork
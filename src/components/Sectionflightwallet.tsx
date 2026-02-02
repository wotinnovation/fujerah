import Heading from '@/shared/Heading'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

export interface SectionFlightWalletProps {
  className?: string
  data?: {
    id: number
    title: string
    subtitle: string
    desc: string
    img: StaticImageData | string
    imgDark?: StaticImageData | string
    features?: {
      icon: string
      title: string
      desc: string
    }[]
    airportTips?: string[]
  }[]
  sectionTitle?: string
  sectionSubheading?: string
}

const DEMO_DATA: SectionFlightWalletProps['data'] = [
  {
    id: 1,
    img: '/images/fjr/flight.jpg',
    imgDark: '/images/flight-wallet-dark.png',
    title: 'Get Your Free Flight',
    subtitle: 'Earn & Save with Smart Wallet',
    desc: 'Book smarter, travel better. Earn rewards on every booking and unlock exclusive flight discounts with our integrated wallet system.',
    features: [
      {
        icon: '💳',
        title: 'Wallet Credits',
        desc: 'Earn 5% cashback on every flight booking'
      },
      {
        icon: '✈️',
        title: 'Free Flights',
        desc: 'Redeem points for complimentary tickets'
      },
      {
        icon: '🎁',
        title: 'Exclusive Deals',
        desc: 'Access member-only flight discounts'
      },
      {
        icon: '⚡',
        title: 'Instant Rewards',
        desc: 'Credits automatically added to your wallet'
      }
    ],
    airportTips: [
      'Arrive 2-3 hours before international flights',
      'Check-in online to save time',
      'Keep travel documents easily accessible',
      'Review baggage allowance before packing',
      'Download your boarding pass to mobile',
      'Join priority boarding with rewards points'
    ]
  }
]

const SectionFlightWallet: FC<SectionFlightWalletProps> = ({ 
  className = '', 
  data = DEMO_DATA,
  sectionTitle = 'Flight Rewards Program',
  sectionSubheading = 'Travel more, spend less'
}) => {
  return (
    <div className={`nc-SectionFlightWallet ${className}`} data-nc-id="SectionFlightWallet">
      {/* Header */}
      <Heading subheading={sectionSubheading}>
        {sectionTitle}
      </Heading>

      {/* Content Sections */}
      <div className="mt-16 space-y-20">
        {data.map((item, index) => {
          const isReversed = index % 2 !== 0

          return (
            <div 
              key={item.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
                  {item.imgDark ? (
                    <>
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 dark:hidden"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <Image
                        src={item.imgDark}
                        alt={item.title}
                        fill
                        className="hidden object-cover transition-transform duration-700 group-hover:scale-105 dark:block"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </>
                  ) : (
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-blue-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-40 dark:bg-red-900/40 -z-10" />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-40 dark:bg-blue-900/40 -z-10" />
              </div>

              {/* Details Section */}
              <div className={`space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <div className="inline-block px-4 py-1.5 bg-red-100 dark:bg-red-900/30 rounded-full mb-3">
                    <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                      {item.subtitle}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Features Grid */}
                {item.features && item.features.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {item.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-red-300 dark:hover:border-red-700 transition-colors duration-300"
                      >
                        <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Airport Tips */}
                {item.airportTips && item.airportTips.length > 0 && (
                  <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-4">
                      <svg 
                        className="w-5 h-5 text-blue-600 dark:text-blue-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                        Airport & Travel Tips
                      </h4>
                    </div>
                    <ul className="space-y-2.5">
                      {item.airportTips.map((tip, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start text-sm text-blue-800 dark:text-blue-200"
                        >
                          <svg 
                            className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2.5 flex-shrink-0 mt-0.5" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          <span className="leading-tight">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                {/* <div className="pt-4">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <span>Start Earning Rewards</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SectionFlightWallet
'use client';
import { FC, useState, useRef } from 'react'
import { Sparkles, Zap, Shield, Rocket, Globe, Crown } from 'lucide-react'

interface BentoCard {
  id: number
  icon: any
  title: string
  image: string
  buttonText: string
  buttonHref: string
}

const bentoCards: BentoCard[] = [
  {
    id: 1,
    icon: Sparkles,
    title: 'Discover shops',
    image: '/images/fjr/duty.jpg',
    buttonText: 'Explore',
    buttonHref: '/analytics',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Sleeps options',
    image: '/images/fjr/bed.jpg',
    buttonText: 'View',
    buttonHref: '/dashboard',
  },
  {
    id: 3,
    icon: Shield,
    title: 'Restaurants',
    image: '/images/fjr/rest.jpg',
    buttonText: 'Connect',
    buttonHref: '/collaboration',
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Refresh and Relax',
    image: '/images/fjr/refresh.jpg',
    buttonText: 'Automate',
    buttonHref: '/automation',
  },
  {
    id: 5,
    icon: Globe,
    title: 'Technical support',
    image: '/images/fjr/tech.jpg',
    buttonText: 'Integrate',
    buttonHref: '/integration',
  },
  {
    id: 6,
    icon: Crown,
    title: 'External Services',
    image: '/images/fjr/external.jpg',
    buttonText: 'Secure',
    buttonHref: '/security',
  }
]

interface GlassCardProps {
  card: BentoCard
}

// Mobile Horizontal Card Component
const MobileGlassCard: FC<GlassCardProps> = ({ card }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  const Icon = card.icon

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative shrink-0 overflow-hidden rounded-2xl border border-transparent transition-all duration-500 ease-out hover:scale-[1.02] dark:border-neutral-800/30"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        width: '90%',
        height: '350px',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/0 transition-all duration-500 group-hover:from-black/40 group-hover:via-black/30 group-hover:to-black/50" />
        <div className="absolute inset-0 bg-red-600/0 transition-all duration-500 group-hover:bg-red-600/20" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-between p-5">
        <div className="relative z-30">
          <div className="mb-4 flex items-center justify-end">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/50 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-red-500/90">
              <Icon className="h-6 w-6 text-white transition-colors duration-300" strokeWidth={1.5} />
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg transition-all duration-300">
              {card.title}
            </h3>
          </div>
        </div>
        <div className="relative z-30">
          <a
            href={card.buttonHref}
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40"
          >
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
            <span className="relative z-10">{card.buttonText}</span>
            <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

// Desktop Grid Card Component
const DesktopGlassCard: FC<GlassCardProps> = ({ card }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  const Icon = card.icon

  // Grid class mapping for desktop asymmetric layout
  const gridClassMap: Record<number, string> = {
    1: 'md:col-span-1 md:row-span-1',
    2: 'md:col-span-1 md:row-span-1',
    3: 'md:col-span-2 md:row-span-2',
    4: 'md:col-span-2 md:row-span-2',
    5: 'md:col-span-1 md:row-span-1',
    6: 'md:col-span-1 md:row-span-1',
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-transparent transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1 dark:border-neutral-800/30 ${gridClassMap[card.id] || ''}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/0 transition-all duration-500 group-hover:from-black/40 group-hover:via-black/30 group-hover:to-black/50" />
        <div className="absolute inset-0 bg-red-600/0 transition-all duration-500 group-hover:bg-red-600/20" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full min-h-[200px] flex-col justify-between p-4 lg:p-5">
        <div className="relative z-30">
          <div className="mb-3 flex items-center justify-end">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/50 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-red-500/90 lg:h-11 lg:w-11">
              <Icon className="h-5 w-5 text-white transition-colors duration-300 lg:h-5 lg:w-5" strokeWidth={1.5} />
            </div>
          </div>
          <div className="mb-4">
            <h3 className="mb-1.5 text-xl font-bold text-white drop-shadow-lg transition-all duration-300 lg:text-2xl">
              {card.title}
            </h3>
          </div>
        </div>
        <div className="relative z-30">
          <a
            href={card.buttonHref}
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40 lg:px-5 lg:py-2.5"
          >
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
            <span className="relative z-10">{card.buttonText}</span>
            <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

const AsymmetricBentoGrid: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <section className="relative overflow-hidden py-5 lg:py-5">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="mb-8 text-left lg:mb-12">
          <h2 className="text-4xl font-semibold text-red-600 dark:text-red-600 lg:text-4xl xl:text-4xl">
            Discover Fujairah International Airport
          </h2>
        </div>

        {/* Mobile: Horizontal Swipeable */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth pb-4"
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {bentoCards.map((card) => (
              <MobileGlassCard key={card.id} card={card} />
            ))}
          </div>

          {/* Scroll Indicators - Mobile Only */}
          {/* <div className="mt-6 flex justify-center gap-2">
            {bentoCards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.scrollWidth / bentoCards.length
                    scrollContainerRef.current.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    })
                  }
                }}
                className="h-2 w-2 rounded-full bg-neutral-300 transition-all duration-300 hover:bg-red-600 dark:bg-neutral-700 dark:hover:bg-red-500"
                aria-label={`Go to ${card.title}`}
              />
            ))}
          </div> */}
        </div>

        {/* Desktop: Asymmetric Bento Grid */}
        <div className="hidden grid-rows-[200px] gap-4 md:grid md:auto-rows-[200px] md:grid-cols-4">
          {bentoCards.map((card) => (
            <DesktopGlassCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default AsymmetricBentoGrid
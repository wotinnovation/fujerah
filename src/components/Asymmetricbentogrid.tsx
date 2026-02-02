'use client';
import { FC, useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Zap, Shield, Rocket, Globe, Crown } from 'lucide-react'

interface BentoCard {
  id: number
  icon: any
  title: string
  image: string
  buttonText: string
  slug: string
}

const bentoCards: BentoCard[] = [
  {
    id: 1,
    icon: Sparkles,
    title: 'Discover shops',
    image: '/images/fjr/duty.jpg',
    buttonText: 'Explore',
    slug: 'discover-shops',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Sleeps options',
    image: '/images/fjr/bed.jpg',
    buttonText: 'View',
    slug: 'sleeps-options',
  },
  {
    id: 3,
    icon: Shield,
    title: 'Restaurants',
    image: '/images/fjr/rest.jpg',
    buttonText: 'Connect',
    slug: 'restaurants',
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Refresh and Relax',
    image: '/images/fjr/refresh.jpg',
    buttonText: 'Automate',
    slug: 'refresh-relax',
  },
  {
    id: 5,
    icon: Globe,
    title: 'Technical support',
    image: '/images/fjr/tech.jpg',
    buttonText: 'Integrate',
    slug: 'technical-support',
  },
  {
    id: 6,
    icon: Crown,
    title: 'External Services',
    image: '/images/fjr/external.jpg',
    buttonText: 'Secure',
    slug: 'external-services',
  }
]

interface GlassCardProps {
  card: BentoCard
  index: number
}

// Mobile Horizontal Card Component with GSAP effects
const MobileGlassCard: FC<GlassCardProps> = ({ card, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 })
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 50)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    setTransform({
      rotateX: (y - 0.5) * -20,
      rotateY: (x - 0.5) * 20,  
      scale: 1.02
    })
    setGlowPosition({ x: x * 100, y: y * 100 })
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 })
  }

  const Icon = card.icon

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative shrink-0 overflow-hidden rounded-2xl border border-white/10 transition-all duration-400 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : 'opacity-0 translate-y-10 translate-x-5'
      }`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        width: '85%',
        height: '350px',
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
        transition: 'transform 0.3s ease-out, opacity 0.4s ease-out, translate 0.4s ease-out',
      }}
    >
      {/* Animated Glow Effect */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(239, 68, 68, 0.3) 0%, transparent 60%)`,
        }}
      />

      {/* Shimmer Effect */}
      <div className="pointer-events-none absolute inset-0 z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />

      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="85vw"
          quality={85}
          priority={index < 2}
          loading={index < 2 ? 'eager' : 'lazy'}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/40 transition-all duration-500 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/60" />
        <div className="absolute inset-0 bg-red-600/0 mix-blend-overlay transition-all duration-500 group-hover:bg-red-600/30" />
      </div>

      {/* Floating Particles Effect */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/60 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-between p-5">
        <div className="relative z-30">
          <div className="mb-4 flex items-center justify-end">
            <div 
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/50 backdrop-blur-sm transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-red-500/90 group-hover:shadow-lg group-hover:shadow-red-500/50"
              style={{ transform: `translateZ(30px)` }}
            >
              <Icon className="h-6 w-6 text-white transition-all duration-300 group-hover:scale-110" strokeWidth={1.5} />
            </div>
          </div>
          <div className="mb-6" style={{ transform: `translateZ(20px)` }}>
            <h3 className="text-2xl font-bold text-white drop-shadow-lg transition-all duration-500 group-hover:text-shadow-glow">
              {card.title}
            </h3>
          </div>
        </div>
        <div className="relative z-30" style={{ transform: `translateZ(40px)` }}>
          <Link
            href={`/ben-services/${card.slug}`}
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/50 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
            <span className="relative z-10">{card.buttonText}</span>
            <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Animated Border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-red-500/0 transition-all duration-500 group-hover:border-red-500/50" />
    </div>
  )
}

// Desktop Grid Card Component with GSAP effects
const DesktopGlassCard: FC<GlassCardProps> = ({ card, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 })
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 80)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    setTransform({
      rotateX: (y - 0.5) * -15,
      rotateY: (x - 0.5) * 15,
      scale: 1.03
    })
    setGlowPosition({ x: x * 100, y: y * 100 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 })
    setIsHovered(false)
  }

  const Icon = card.icon

  const gridClassMap: Record<number, string> = {
    1: 'md:col-span-1 md:row-span-1',
    2: 'md:col-span-1 md:row-span-1',
    3: 'md:col-span-2 md:row-span-2',
    4: 'md:col-span-2 md:row-span-2',
    5: 'md:col-span-1 md:row-span-1',
    6: 'md:col-span-1 md:row-span-1',
  }

  const getInitialTransform = () => {
    const positions: Record<number, string> = {
      1: 'translate-y-20 -translate-x-10 rotate-[-5deg]',
      2: 'translate-y-20 translate-x-10 rotate-[5deg]',
      3: 'translate-y-16 scale-95',
      4: 'translate-y-16 scale-95',
      5: '-translate-y-10 -translate-x-10 rotate-[-5deg]',
      6: '-translate-y-10 translate-x-10 rotate-[5deg]',
    }
    return positions[card.id] || 'translate-y-20'
  }

  const getImageSizes = () => {
    if (card.id === 3 || card.id === 4) {
      return '(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw'
    }
    return '(max-width: 768px) 85vw, (max-width: 1024px) 25vw, 20vw'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-400 ease-out ${gridClassMap[card.id] || ''} ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0 rotate-0 scale-100' 
          : `opacity-0 ${getInitialTransform()}`
      }`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        transform: isVisible 
          ? `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`
          : undefined,
        transition: isHovered 
          ? 'transform 0.15s ease-out' 
          : 'transform 0.3s ease-out, opacity 0.4s ease-out, translate 0.4s ease-out, rotate 0.4s ease-out, scale 0.4s ease-out',
      }}
    >
      <div 
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(239, 68, 68, 0.4) 0%, transparent 50%)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[100%]" />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="relative h-full w-full transition-all duration-700 ease-out"
          style={{
            transform: isHovered 
              ? `scale(1.1) translate(${(glowPosition.x - 50) * 0.05}px, ${(glowPosition.y - 50) * 0.05}px)` 
              : 'scale(1)',
          }}
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes={getImageSizes()}
            quality={85}
            priority={index < 2}
            loading={index < 2 ? 'eager' : 'lazy'}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/5 to-black/30 transition-all duration-500 group-hover:from-black/40 group-hover:via-black/30 group-hover:to-black/50" />
        <div className="absolute inset-0 bg-red-600/0 mix-blend-overlay transition-all duration-500 group-hover:bg-red-600/25" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/50 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '20%',
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2.5 + i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 flex h-full min-h-[200px] flex-col justify-between p-4 lg:p-5">
        <div className="relative z-30">
          <div className="mb-3 flex items-center justify-end">
            <div 
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/50 backdrop-blur-sm transition-all duration-500 group-hover:rotate-[20deg] group-hover:scale-125 group-hover:bg-red-500 group-hover:shadow-xl group-hover:shadow-red-500/50 lg:h-11 lg:w-11"
              style={{ 
                transform: `translateZ(50px) ${isHovered ? 'rotate(20deg) scale(1.25)' : ''}`,
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <Icon 
                className="h-5 w-5 text-white transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-glow lg:h-5 lg:w-5" 
                strokeWidth={1.5} 
              />
            </div>
          </div>
          
          <div 
            className="mb-4"
            style={{ transform: `translateZ(30px)` }}
          >
            <h3 className="mb-1.5 text-xl font-bold text-white drop-shadow-lg transition-all duration-500 group-hover:tracking-wide lg:text-2xl">
              <span className="relative">
                {card.title}
                <span className="absolute inset-0 text-red-400 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-50">
                  {card.title}
                </span>
              </span>
            </h3>
          </div>
        </div>

        <div 
          className="relative z-30"
          style={{ transform: `translateZ(60px)` }}
        >
          <Link
            href={`/ben-services/${card.slug}`}
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-500 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-110 active:scale-95 lg:px-5 lg:py-2.5"
          >
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 group-hover/btn:translate-x-[100%]" />
            
            <div className="absolute inset-0 rounded-xl opacity-0 ring-2 ring-red-400 transition-all duration-500 group-hover/btn:opacity-100 group-hover/btn:ring-4 group-hover/btn:ring-red-400/50" />
            
            <span className="relative z-10 transition-transform duration-300 group-hover/btn:tracking-wider">{card.buttonText}</span>
            <svg 
              className="relative z-10 h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-125" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      <div 
        className="pointer-events-none absolute inset-0 rounded-2xl transition-all duration-500"
        style={{
          boxShadow: isHovered 
            ? `inset 0 0 0 2px rgba(239, 68, 68, 0.5), 0 0 30px rgba(239, 68, 68, 0.3)`
            : 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        }}
      />

      <div className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-white/0 transition-all duration-500 group-hover:border-red-500/70 group-hover:scale-110" />
      <div className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-white/0 transition-all duration-500 group-hover:border-red-500/70 group-hover:scale-110" />
    </div>
  )
}

const AsymmetricBentoGrid: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
    <section className="relative overflow-hidden py-5 lg:py-5" id="services">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div 
          ref={headerRef}
          className={`mb-8 text-left lg:mb-12 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-semibold text-red-600 dark:text-red-600 lg:text-4xl xl:text-4xl">
            Discover Fujairah International Airport
          </h2>
        </div>

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
            {bentoCards.map((card, index) => (
              <MobileGlassCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>

        <div className="hidden grid-rows-[200px] gap-4 md:grid md:auto-rows-[200px] md:grid-cols-4">
          {bentoCards.map((card, index) => (
            <DesktopGlassCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(100%) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(80%) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(-100%) scale(1);
          }
          100% {
            transform: translateY(-120%) scale(0);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3);
        }
        
        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
        }
      `}</style>
    </section>
  )
}

export default AsymmetricBentoGrid
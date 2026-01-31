'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ButtonPrimary from '@/shared/ButtonPrimary'

interface SlideContent {
  heading: string
  description: string
  buttonText: string
  buttonLink: string
  image: string
}

interface HeroSectionWithSearchForm1Props {
  className?: string
  searchForm?: React.ReactNode
  slides?: SlideContent[]
}

const defaultSlides: SlideContent[] = [
  {
    heading: 'Complementary Shuttle Services',
    description: 'Experience seamless airport transfers with our premium shuttle service. Comfort and convenience at every journey.',
    buttonText: 'Book Your Ride',
    buttonLink: '/shuttle-service',
    image: '/images/fjr/slide-1.jpg',
  },
  {
    heading: 'Discover Amazing Destinations',
    description: 'Explore breathtaking locations and create unforgettable memories. Your adventure starts here.',
    buttonText: 'Explore Destinations',
    buttonLink: '/destinations',
    image: '/images/fjr/slide-2.jpg',
  },
  {
    heading: 'Luxury Travel Experiences',
    description: 'Indulge in world-class accommodations and personalized service. Travel in style and comfort.',
    buttonText: 'View Packages',
    buttonLink: '/packages',
    image: '/images/fjr/slide-3.jpg',
  },
  {
    heading: 'Business Travel Solutions',
    description: 'Efficient and professional services tailored for corporate travelers. Focus on what matters most.',
    buttonText: 'Learn More',
    buttonLink: '/corporate',
    image: '/images/fjr/hero33.jpg',
  },
  {
    heading: 'Plan Your Perfect Journey',
    description: 'From departure to arrival, we handle every detail. Sit back, relax, and enjoy the ride.',
    buttonText: 'Start Planning',
    buttonLink: '/plan-journey',
    image: '/images/fjr/airport2.jpg',
  },
]

const HeroSectionWithSearchForm1 = ({
  className,
  searchForm,
  slides = defaultSlides,
}: HeroSectionWithSearchForm1Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 500)
  }

  const currentSlide = slides[currentIndex]

  return (
    <div className={clsx('relative w-full', className)}>
      {/* Hero Container - matches navbar width */}
      <div className="relative h-[250px] lg:h-[350px] xl:h-[400px] overflow-hidden rounded-3xl">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={clsx(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              )}
            >
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                className="object-cover scale-105 rounded-3xl"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </div>

        {/* Content Container - matches navbar container width with fixed dimensions */}
        <div className="max-w-6xl mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            {/* Glassmorphism Content Card - Fixed Size */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl w-full h-[200px] md:h-[250px] lg:h-[280px] overflow-hidden flex flex-col">
              {/* Heading - Fixed height with overflow */}
              <div
                className={clsx(
                  'transition-all duration-500 flex-shrink-0',
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                )}
              >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight drop-shadow-lg line-clamp-2">
                  {currentSlide.heading}
                </h1>
              </div>

              {/* Description - Fixed height with overflow */}
              <div
                className={clsx(
                  'transition-all duration-500 delay-100 flex-shrink-0',
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                )}
              >
                <p className="text-sm md:text-base lg:text-lg text-white/95 mb-4 md:mb-6 drop-shadow-md line-clamp-2">
                  {currentSlide.description}
                </p>
              </div>

              {/* Button - Fixed at bottom */}
              <div
                className={clsx(
                  'transition-all duration-500 delay-200 mt-auto',
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                )}
              >
                <ButtonPrimary 
                  href={currentSlide.buttonLink} 
                  className="text-sm md:text-base px-6 py-2 md:px-8 md:py-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 !text-white !bg-red-600 !border-red-600 hover:!bg-white/30 hover:backdrop-blur-md hover:!border-white/40 hover:!text-white"
                >
                  {currentSlide.buttonText}
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Form Section - Hidden on mobile, visible on md+ */}
      {searchForm && (
        <div className="hidden md:block w-full mt-15 mx-auto px-4 relative z-20">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-4 md:p-6 border border-white/50">
            {searchForm}
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroSectionWithSearchForm1
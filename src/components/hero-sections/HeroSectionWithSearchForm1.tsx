'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { heroSlides } from '@/data/hero-slides-data'

interface HeroSectionWithSearchForm1Props {
  className?: string
  searchForm?: React.ReactNode
}

const HeroSectionWithSearchForm1 = ({
  className,
  searchForm,
}: HeroSectionWithSearchForm1Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 500)
  }

  const currentSlide = heroSlides[currentIndex]

  return (
    <div className={clsx('relative w-full', className)}>
      {/* MOBILE VERSION - Separate containers */}
      <div className="md:hidden">
        {/* Mobile Image Container */}
        <div className="relative h-[250px] overflow-hidden rounded-3xl">
          {/* Background Image Carousel */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            {heroSlides.map((slide, index) => (
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
            {/* Slight Blue Overlay for Mobile */}
            <div className="absolute inset-0 bg-blue-900/20" />
          </div>
        </div>

        {/* Mobile Content Container - Positioned below image */}
        <div className="relative -mt-10 px-4 z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
            {/* Heading */}
            <div
              className={clsx(
                'transition-all duration-500',
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              )}
            >
              <h1 className="text-xl font-semibold text-red-600/90 mb-2 leading-tight ">
                {currentSlide.heading}
              </h1>
            </div>

            {/* Description */}
            <div
              className={clsx(
                'transition-all duration-500 delay-100',
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              )}
            >
              <p className="text-ls text-gray-700 mb-3 line-clamp-2">
                {currentSlide.description}
              </p>
            </div>

            {/* Custom Glassmorphism Button */}
            <div
              className={clsx(
                'transition-all duration-500 delay-200',
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              )}
            >
              <Link 
                href={`/${currentSlide.slug}`}
                className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 font-medium text-xs px-5 py-2 rounded-full shadow-xl transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white hover:scale-105"
              >
                {currentSlide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION - Original layout */}
      <div className="hidden md:block relative h-[350px] xl:h-[400px] overflow-hidden rounded-3xl">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          {heroSlides.map((slide, index) => (
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
          {/* Slight Blue Overlay */}
          <div className="absolute inset-0 bg-blue-900/20" />
        </div>

        {/* Desktop Content Container */}
        <div className="max-w-6xl mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            {/* Glassmorphism Content Card - Fixed Size */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl w-full h-[250px] lg:h-[280px] overflow-hidden flex flex-col">
              {/* Heading - Fixed height with overflow */}
              <div
                className={clsx(
                  'transition-all duration-500 flex-shrink-0',
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                )}
              >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight  line-clamp-2">
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
                <p className="text-sm md:text-base lg:text-lg text-white/95 mb-4 md:mb-6  line-clamp-2">
                  {currentSlide.description}
                </p>
              </div>

              {/* Custom Glassmorphism Button */}
              <div
                className={clsx(
                  'transition-all duration-500 delay-200 mt-auto',
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                )}
              >
                <Link 
                  href={`/${currentSlide.slug}`}
                  className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm md:text-base px-6 py-2 md:px-8 md:py-3 rounded-full shadow-xl transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:scale-105"
                >
                  {currentSlide.buttonText}
                </Link>
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

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={clsx(
              'transition-all duration-300',
              currentIndex === index
                ? 'w-8 h-2 bg-white rounded-full'
                : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/75'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  )
}

export default HeroSectionWithSearchForm1
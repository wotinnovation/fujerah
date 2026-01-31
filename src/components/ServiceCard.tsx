'use client'

import { ServiceItem } from '@/data/services'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export interface ServiceCardProps {
  className?: string
  service: ServiceItem
}

const ServiceCard: FC<ServiceCardProps> = ({ className = '', service }) => {
  const { title, description, details, image, href } = service

  return (
    <div className={`group relative flex flex-col overflow-hidden rounded-2xl ${className}`}>
      {/* Image Container */}
      <div className="relative h-[300px] lg:h-[350px] xl:h-[400px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Default Overlay - Always Visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-lg">
              {title}
            </h3>
          </div>
        </div>

        {/* Hover Overlay with Glassmorphism - Shows on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 backdrop-blur-md" />
          
          {/* Content Container */}
          <div className="relative h-full flex flex-col justify-center items-center p-6 lg:p-8 text-center">
            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 drop-shadow-lg">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-base lg:text-lg text-white/90 mb-6 max-w-md drop-shadow-md">
              {description}
            </p>
            
            {/* Details List with Glassmorphism Container */}
            {/* <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/20 mb-6 w-full max-w-md"> */}
              {/* <ul className="space-y-2.5 text-left">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start text-sm lg:text-base text-white/95">
                    <svg 
                      className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="drop-shadow">{detail}</span>
                  </li>
                ))}
              </ul> */}
            {/* </div> */}
            
            {/* Learn More Button */}
            <Link 
              href={href}
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Learn More
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Red Border on Hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  )
}

export default ServiceCard
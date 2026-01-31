import { TCategory } from '@/data/categories'
import { TService } from '@/data/services'
import convertNumbThousand from '@/utils/convertNumbThousand'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export interface CardCategory3Props {
  className?: string
  service?: TService
  category?: TCategory
}

const CardCategory3: FC<CardCategory3Props> = ({ className = '', service, category }) => {
  // Use either service or category data
  const data = service || category
  if (!data) return null

  // Type guards
  const isService = service !== undefined
  
  // Safely extract common properties with fallbacks
  const name = 'name' in data ? data.name : ''
  const href = 'href' in data ? data.href : '#'
  const thumbnail = 'thumbnail' in data ? data.thumbnail : undefined
  const count = 'count' in data ? data.count : undefined
  const description = 'description' in data ? data.description : undefined
  const details = isService && 'details' in data ? (data as TService).details : []

  return (
    <div className={`group relative flex flex-col ${className}`}>
      <div className={`aspect-w-5 relative h-0 w-full shrink-0 overflow-hidden rounded-2xl aspect-h-5 sm:aspect-h-6`}>
        {thumbnail ? (
          <Image
            src={thumbnail}
            className="rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110"
            alt={name}
            fill
            sizes="(max-width: 400px) 100vw, 300px"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-neutral-800 dark:to-neutral-900" />
        )}
        
        {/* Glassmorphism hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        
        {/* Red accent border on hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Hover Content Overlay - Only for services */}
        {isService && details && details.length > 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:p-6">
            {/* Description */}
            {description && (
              <p className="mb-4 max-w-xs text-center text-sm text-white/95 drop-shadow-md lg:text-base">
                {description}
              </p>
            )}
            
            {/* Details List with Glassmorphism */}
            <div className="w-full max-w-xs rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-lg lg:p-4">
              <ul className="space-y-1.5 text-left">
                {details.slice(0, 4).map((detail, index) => (
                  <li key={index} className="flex items-start text-xs text-white/95 lg:text-sm">
                    <svg 
                      className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="leading-tight drop-shadow">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4">
        <h2 className="text-base font-medium text-neutral-900 transition-colors duration-300 group-hover:text-red-600 dark:text-neutral-100">
          <Link href={href} className="absolute inset-0"></Link>
          <span className="line-clamp-1">{name}</span>
        </h2>
        {count !== undefined && (
          <span className={`mt-1.5 block text-sm text-neutral-600 dark:text-neutral-400`}>
            {convertNumbThousand(count || 0)}+ properties
          </span>
        )}
        {isService && description && (
          <span className={`mt-1.5 block text-sm text-neutral-600 line-clamp-2 dark:text-neutral-400`}>
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

export default CardCategory3
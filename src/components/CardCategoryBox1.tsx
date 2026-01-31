'use client'
import Image from 'next/image'
import { FC } from 'react'

export interface CardCompanyLogoProps {
  className?: string
  company: {
    id: string | number
    name: string
    logo: string
  }
}

const CardCompanyLogo: FC<CardCompanyLogoProps> = ({ className = '', company }) => {
  const { name, logo } = company
  
  return (
    <div className={`relative shrink-0 ${className}`}>
      <div className="relative h-24 w-40 sm:h-32 sm:w-48 overflow-hidden rounded-lg bg-white dark:bg-neutral-800 p-4 flex items-center justify-center shadow-sm">
        <Image 
          src={logo} 
          fill
          alt={name}
          className="object-cover rounded"
          sizes="(max-width: 600px) 160px, 192px"
          unoptimized // Required for external images
        />
      </div>
    </div>
  )
}

export default CardCompanyLogo
'use client'
import CardCompanyLogo from '@/components/CardCategoryBox1'
import { companiesData, TCompany } from '@/data/companiesData'
import React from 'react'

interface SectionCompaniesCarouselProps {
  companies?: TCompany[]
  className?: string
}

const SectionCompaniesCarousel: React.FC<SectionCompaniesCarouselProps> = ({ 
  companies = companiesData, 
  className = '' 
}) => {
  // Triple the companies for seamless infinite loop
  const duplicatedCompanies = [...companies, ...companies, ...companies]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex gap-6 sm:gap-8 animate-scroll hover:pause-animation">
        {duplicatedCompanies.map((company, i) => (
          <CardCompanyLogo 
            key={`${company.id}-${i}`} 
            company={company}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-55.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default SectionCompaniesCarousel
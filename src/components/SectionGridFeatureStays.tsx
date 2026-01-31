'use client'

import { TStayListing } from '@/data/listings'
import { FC, ReactNode, useState, useMemo } from 'react'
import SectionTabHeader from './SectionTabHeader'
import StayCard from './StayCard'

interface SectionGridFeatureStaysProps {
  stayListings: TStayListing[]
  gridClass?: string
  heading?: ReactNode
  subHeading?: string
  headingIsCenter?: boolean
  cardType?: 'card1' | 'card2'
}

const SectionGridFeatureStays: FC<SectionGridFeatureStaysProps> = ({
  stayListings = [],
  gridClass = '',
  heading = 'Featured Stays',
  subHeading = 'Popular places to stay',
  cardType = 'card2',
}) => {
  const tabs = ['All', 'Hotel room', 'Entire place', 'Private room', 'Shared room']
  const [activeTab, setActiveTab] = useState('All')

  // Filter stays based on active tab and limit to 4
  const filteredStays = useMemo(() => {
    let filtered = stayListings
    
    if (activeTab !== 'All') {
      filtered = stayListings.filter(
        (stay) => stay.listingCategory.toLowerCase() === activeTab.toLowerCase()
      )
    }
    
    // Limit to only 4 stays
    return filtered.slice(0, 4)
  }, [activeTab, stayListings])

  return (
    <div className="relative">
      <SectionTabHeader
        tabActive={activeTab}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
        onChangeTab={setActiveTab}
        rightButtonHref="/stays/all"
      />
      <div
        className={`mt-8 grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-6 sm:gap-y-8 md:gap-x-8 md:gap-y-12 lg:grid-cols-4 ${gridClass}`}
      >
        {filteredStays.length > 0 ? (
          filteredStays.map((stay) => (
            <StayCard key={stay.id} data={stay} />
          ))
        ) : (
          <div className="col-span-full py-16 text-center">
            <p className="text-lg text-neutral-500 dark:text-neutral-400">
              No stays found for {activeTab}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SectionGridFeatureStays
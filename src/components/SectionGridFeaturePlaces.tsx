'use client'

import { TDestinationListing } from '@/data/listings'
import { FC, ReactNode, useState, useMemo } from 'react'
import SectionTabHeader from './SectionTabHeader'
import DestinationCard from './DestinationCard2'

interface SectionGridFeatureDestinationsProps {
  destinationListings: TDestinationListing[]
  gridClass?: string
  heading?: ReactNode
  subHeading?: string
  headingIsCenter?: boolean
  cardType?: 'card1' | 'card2'
}

const SectionGridFeatureDestinations: FC<SectionGridFeatureDestinationsProps> = ({
  destinationListings = [],
  gridClass = '',
  heading = 'EXPLORE Nearby Destinations',
  subHeading = 'Popular Packages',
  cardType = 'card2',
}) => {
  const tabs = ['All', 'Fujairah', 'Dubai', 'Abu Dhabi', 'Ras Al Khaimah', 'Sharjah']
  const [activeTab, setActiveTab] = useState('All')

  // Filter destinations based on active tab and limit to 4
  const filteredDestinations = useMemo(() => {
    let filtered = destinationListings
    
    if (activeTab !== 'All') {
      filtered = destinationListings.filter(
        (destination) => destination.country.toLowerCase() === activeTab.toLowerCase()
      )
    }
    
    // Limit to only 4 destinations
    return filtered.slice(0, 4)
  }, [activeTab, destinationListings])

  return (
    <div className="relative">
      <SectionTabHeader
        tabActive={activeTab}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
        onChangeTab={setActiveTab}
        rightButtonHref="/destinations/all"
      />
      <div
        className={`mt-8 grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-6 sm:gap-y-8 md:gap-x-8 md:gap-y-12 lg:grid-cols-4 ${gridClass}`}
      >
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} data={destination} />
          ))
        ) : (
          <div className="col-span-full py-16 text-center">
            <p className="text-lg text-neutral-500 dark:text-neutral-400">
              No destinations found for {activeTab}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SectionGridFeatureDestinations
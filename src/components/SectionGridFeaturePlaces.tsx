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
  const [visibleCount, setVisibleCount] = useState(4)

  // Reset visible count when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setVisibleCount(4)
  }

  // Filter destinations based on active tab
  const filteredDestinations = useMemo(() => {
    let filtered = destinationListings
    
    if (activeTab !== 'All') {
      filtered = destinationListings.filter(
        (destination) => destination.country.toLowerCase() === activeTab.toLowerCase()
      )
    }
    
    return filtered
  }, [activeTab, destinationListings])

  // Get visible destinations based on visibleCount
  const visibleDestinations = useMemo(() => {
    return filteredDestinations.slice(0, visibleCount)
  }, [filteredDestinations, visibleCount])

  // Check if there are more items to show
  const hasMoreItems = filteredDestinations.length > visibleCount

  // Load more handler
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4)
  }

  return (
    <div className="relative">
      <SectionTabHeader
        tabActive={activeTab}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
        onChangeTab={handleTabChange}
        onViewAllClick={hasMoreItems ? handleLoadMore : undefined}
        showViewAll={hasMoreItems}
      />
      <div
        className={`mt-8 grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-6 sm:gap-y-8 md:gap-x-8 md:gap-y-12 lg:grid-cols-4 ${gridClass}`}
      >
        {visibleDestinations.length > 0 ? (
          visibleDestinations.map((destination) => (
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
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
  const [visibleCount, setVisibleCount] = useState(4)

  // Reset visible count when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setVisibleCount(4)
  }

  // Filter stays based on active tab
  const filteredStays = useMemo(() => {
    let filtered = stayListings
    
    if (activeTab !== 'All') {
      filtered = stayListings.filter(
        (stay) => stay.listingCategory.toLowerCase() === activeTab.toLowerCase()
      )
    }
    
    return filtered
  }, [activeTab, stayListings])

  // Get visible stays based on visibleCount
  const visibleStays = useMemo(() => {
    return filteredStays.slice(0, visibleCount)
  }, [filteredStays, visibleCount])

  // Check if there are more items to show
  const hasMoreItems = filteredStays.length > visibleCount

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
        {visibleStays.length > 0 ? (
          visibleStays.map((stay) => (
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
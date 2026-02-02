'use client'

import ButtonSecondary from '@/shared/ButtonSecondary'
import Heading from '@/shared/Heading'
import T from '@/utils/getT'
import { Tab, TabGroup, TabList } from '@headlessui/react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { FC, ReactNode } from 'react'

interface Props {
  tabActive: string
  tabs: string[]
  heading: ReactNode
  subHeading?: string
  onChangeTab?: (item: string) => void
  rightButtonHref?: string
  onViewAllClick?: () => void
  showViewAll?: boolean
}

const SectionTabHeader: FC<Props> = ({
  tabActive,
  tabs,
  subHeading,
  heading,
  onChangeTab,
  rightButtonHref = '/stay-categories/all',
  onViewAllClick,
  showViewAll = true,
}) => {
  return (
    <div className="relative flex flex-col">
      <Heading subheading={subHeading}>{heading}</Heading>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="max-w-full grow">
          <TabGroup
            defaultIndex={tabs.indexOf(tabActive)}
            onChange={(index) => onChangeTab && onChangeTab(tabs[index])}
            className="hidden-scrollbar relative flex w-full overflow-x-auto text-sm md:text-base"
          >
            <TabList className="flex sm:gap-x-1.5">
              {tabs.map((item, index) => (
                <Tab
                  key={index}
                  className="block rounded-full px-4 py-2.5 leading-none font-medium whitespace-nowrap focus-within:outline-hidden data-hover:bg-black/5 data-selected:bg-neutral-900 data-selected:text-white sm:px-6 sm:py-3 dark:data-hover:bg-white/5 dark:data-selected:bg-neutral-100 dark:data-selected:text-neutral-900"
                >
                  {item}
                </Tab>
              ))}
            </TabList>
          </TabGroup>
        </div>
        {showViewAll && (
          onViewAllClick ? (
            <button 
              className="ml-auto shrink-0 flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium transition-colors hover:border-neutral-300 dark:border-neutral-700 dark:hover:border-neutral-600"
              onClick={onViewAllClick}
            >
              <span>{T['common']['View all']}</span>
              <ArrowRightIcon className="size-5 rtl:rotate-180" />
            </button>
          ) : (
            <ButtonSecondary className="ml-auto shrink-0" href={rightButtonHref}>
              <span>{T['common']['View all']}</span>
              <ArrowRightIcon className="size-5 rtl:rotate-180" />
            </ButtonSecondary>
          )
        )}
      </div>
    </div>
  )
}

export default SectionTabHeader
import { ListingType } from '@/type'
import * as Headless from '@headlessui/react'
import { Airplane02Icon, Location01Icon, Home01Icon, Car01Icon } from '@hugeicons/core-free-icons'
import { IconSvgElement } from '@hugeicons/react'
import clsx from 'clsx'
import { FlightStatusSearchForm } from './FlightSearchForm'
import { DestinationSearchForm } from './DestinationSearchForm'
import { StaySearchForm } from './StaySearchForm'
// import { CarsSearchForm } from './CarsSearchForm' // Create this if you have it

export const formTabs: {
  name: ListingType
  icon: IconSvgElement
  formComponent: React.ComponentType<{ formStyle: 'default' | 'small' }>
}[] = [
  { 
    name: 'Flight Status', 
    icon: Airplane02Icon, 
    formComponent: FlightStatusSearchForm 
  },
  {
    name: 'Destinations', 
    icon: Location01Icon, 
    formComponent: DestinationSearchForm
  },
  {
    name: 'Stays', 
    icon: Home01Icon, 
    formComponent: StaySearchForm
  },
  {
    name: 'Cars', 
    icon: Car01Icon, 
    formComponent: StaySearchForm // Replace with CarsSearchForm when you create it
  },
]

const HeroSearchForm = ({ className, initTab = 'Flight Status' }: { className?: string; initTab?: ListingType }) => {
  return (
    <div className={clsx('hero-search-form', className)}>
      <Headless.TabGroup defaultIndex={formTabs.findIndex(tab => tab.name === initTab)}>
        <Headless.TabList className="ms-3 mb-8 flex sm:gap-x-6 xl:ms-10 xl:gap-x-10">
          {formTabs.map((tab) => (
            <Headless.Tab
              key={tab.name}
              className="group/tab flex shrink-0 cursor-pointer items-center text-sm font-medium text-neutral-500 hover:text-neutral-700 focus-visible:outline-hidden data-selected:text-neutral-950 lg:text-base dark:hover:text-neutral-400 dark:data-selected:text-neutral-100"
            >
              <div className="me-1.5 hidden size-2.5 rounded-full bg-neutral-950 group-data-selected/tab:block xl:me-2 dark:bg-neutral-100" />
              <span>{tab.name}</span>
            </Headless.Tab>
          ))}
        </Headless.TabList>
        <Headless.TabPanels>
          {formTabs.map((tab) => (
            <Headless.TabPanel key={tab.name}>
              <tab.formComponent formStyle="default" />
            </Headless.TabPanel>
          ))}
        </Headless.TabPanels>
      </Headless.TabGroup> 
    </div>
  )
}

export default HeroSearchForm
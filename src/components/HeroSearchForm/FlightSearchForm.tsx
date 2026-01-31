'use client'

import clsx from 'clsx'
import Form from 'next/form'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { LocationInputField } from './ui'

interface Props {
  className?: string
  formStyle: 'default' | 'small'
}

export const FlightStatusSearchForm = ({ className, formStyle = 'default' }: Props) => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'departures' | 'arrivals'>('departures')

  // Prefetch the flight status page to improve performance
  useEffect(() => {
    router.prefetch('/flight-status/results')
  }, [router])

  const handleFormSubmit = (formData: FormData) => {
    const formDataEntries = Object.fromEntries(formData.entries())
    console.log('Flight status form submitted', formDataEntries)
    
    // Build query params for flight status check
    const searchQuery = formDataEntries['search'] as string
    const flightType = formDataEntries['flightType'] as string
    
    let url = '/flight-status/results'
    const params = new URLSearchParams()
    
    if (searchQuery) params.append('search', searchQuery)
    if (flightType) params.append('type', flightType)
    
    if (params.toString()) {
      url = `${url}?${params.toString()}`
    }
    
    router.push(url)
  }

  return (
    <div className={clsx('relative z-10 w-full', className)}>
      <Form
        className={clsx(
          'relative flex w-full items-center gap-3 rounded-full bg-white px-4 [--form-bg:var(--color-white)] dark:bg-neutral-800 dark:[--form-bg:var(--color-neutral-800)]',
          formStyle === 'small' && 'custom-shadow-1',
          formStyle === 'default' && 'shadow-xl dark:shadow-2xl'
        )}
        action={handleFormSubmit}
      >
        <LocationInputField 
          className="flex-1" 
          fieldStyle={formStyle}
          placeholder="Search airline, city or flight number"
          description="Flight Number, Airline, City"
          inputName="search"
          initSuggests={[
            { id: '1', name: 'Emirates EK524' },
            { id: '2', name: 'Etihad EY392' },
            { id: '3', name: 'Qatar Airways QR1050' },
            { id: '4', name: 'Flydubai FZ1' },
            { id: '5', name: 'Air Arabia G9538' },
          ]}
          searchingSuggests={[
            { id: '1', name: 'Emirates EK524' },
            { id: '2', name: 'Etihad EY392' },
            { id: '3', name: 'Qatar Airways QR1050' },
            { id: '4', name: 'Flydubai FZ1' },
            { id: '5', name: 'Air Arabia G9538' },
          ]}
        />
        
        <div className="flex items-center gap-2 border-l border-neutral-200 pl-4 dark:border-neutral-700">
          <button
            type="button"
            onClick={() => setActiveTab('departures')}
            className={clsx(
              'flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              activeTab === 'departures' 
                ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100' 
                : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300'
            )}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Departures
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab('arrivals')}
            className={clsx(
              'flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              activeTab === 'arrivals' 
                ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100' 
                : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300'
            )}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Arrivals
          </button>
        </div>

        <button
          type="submit"
          className={clsx(
            'flex items-center justify-center rounded-full bg-primary-600 px-4 py-2 font-medium text-white transition-colors hover:bg-primary-600',
            formStyle === 'small' ? 'h-12 w-12' : 'h-16 w-16'
          )}
        >
          <Search className={formStyle === 'small' ? 'h-5 w-5' : 'h-6 w-6'} />
        </button>

        <input type="hidden" name="flightType" value={activeTab} />
      </Form>
    </div>
  )
}
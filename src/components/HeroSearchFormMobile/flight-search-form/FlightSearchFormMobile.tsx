'use client'

import Form from 'next/form'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import LocationInput from '../LocationInput'

const flightTypes = ['Departures', 'Arrivals'] as const

const FlightSearchFormMobile = () => {
  const router = useRouter()
  const [flightType, setFlightType] = useState<(typeof flightTypes)[number]>('Departures')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    router.prefetch('/')
  }, [router])

  const handleFormSubmit = (formData: FormData) => {
    const formDataEntries = Object.fromEntries(formData.entries())
    console.log('Flight status form submitted', formDataEntries)

    const search = formDataEntries['search'] as string
    const type = formDataEntries['flightType'] as string

    let url = '/'
    const params = new URLSearchParams()

    if (search) params.append('search', search)
    if (type) params.append('type', type)

    if (params.toString()) {
      url = `${url}?${params.toString()}`
    }

    router.push(url)
  }

  return (
    <Form id="form-hero-search-form-mobile" action={handleFormSubmit} className="flex w-full flex-col gap-y-5">
      {/* Departures / Arrivals Toggle */}
      <div className="flex gap-2.5">
        {flightTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFlightType(type)}
            className={clsx(
              'flex cursor-pointer items-center rounded-full border px-4 py-1.5 text-xs font-medium transition-colors',
              flightType === type
                ? 'border-transparent bg-black text-white shadow-lg shadow-black/10 dark:bg-neutral-200 dark:text-neutral-900'
                : 'border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400'
            )}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Heading */}
      <p className="text-xl font-semibold sm:text-2xl">
        {flightType === 'Departures' ? 'Search Departures' : 'Search Arrivals'}
      </p>

      {/* Search Input */}
      <LocationInput
        headingText="Airline, flight number or city"
        imputName="search"
        defaultValue={searchValue}
        onChange={(value) => setSearchValue(value)}
      />

      {/* Hidden field to pass selected flight type */}
      <input type="hidden" name="flightType" value={flightType} />
    </Form>
  )
}

export default FlightSearchFormMobile
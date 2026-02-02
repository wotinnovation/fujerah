'use client'

import { Popover, PopoverButton, PopoverPanel, RadioGroup, Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react'
import { 
  TruckIcon,
  ArrowsRightLeftIcon,
  ClockIcon,
  MapPinIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckIcon,
  XMarkIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

// Emirates and their shuttle routes with demo times
const emirates = [
  { id: 'fujairah', name: 'Fujairah', shortName: 'FUJ' },
  { id: 'abudhabi', name: 'Abu Dhabi', shortName: 'AUH' },
  { id: 'dubai', name: 'Dubai', shortName: 'DXB' },
  { id: 'sharjah', name: 'Sharjah', shortName: 'SHJ' },
  { id: 'ajman', name: 'Ajman', shortName: 'AJM' },
  { id: 'rak', name: 'Ras Al Khaimah', shortName: 'RAK' },
  { id: 'uaq', name: 'Umm Al Quwain', shortName: 'UAQ' },
]

// Route data with departure times
const routeSchedules: Record<string, Record<string, { duration: string; departures: string[]; price: string }>> = {
  fujairah: {
    abudhabi: { duration: '2h 30min', departures: ['06:00', '08:00', '10:00', '14:00', '18:00', '20:00'], price: 'AED 120' },
    dubai: { duration: '1h 45min', departures: ['05:30', '07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00'], price: 'AED 80' },
    sharjah: { duration: '1h 30min', departures: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'], price: 'AED 60' },
    ajman: { duration: '1h 20min', departures: ['06:30', '09:00', '12:00', '15:00', '18:00'], price: 'AED 55' },
    rak: { duration: '1h 15min', departures: ['07:00', '10:00', '13:00', '16:00', '19:00'], price: 'AED 50' },
    uaq: { duration: '1h 10min', departures: ['07:30', '11:00', '15:00', '19:00'], price: 'AED 45' },
  },
  abudhabi: {
    fujairah: { duration: '2h 30min', departures: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'], price: 'AED 120' },
    dubai: { duration: '1h 15min', departures: ['05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'], price: 'AED 50' },
    sharjah: { duration: '1h 45min', departures: ['06:00', '09:00', '12:00', '15:00', '18:00'], price: 'AED 70' },
    ajman: { duration: '2h 00min', departures: ['07:00', '11:00', '15:00', '19:00'], price: 'AED 80' },
    rak: { duration: '2h 30min', departures: ['06:00', '10:00', '14:00', '18:00'], price: 'AED 100' },
    uaq: { duration: '2h 15min', departures: ['08:00', '12:00', '16:00'], price: 'AED 90' },
  },
  dubai: {
    fujairah: { duration: '1h 45min', departures: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'], price: 'AED 80' },
    abudhabi: { duration: '1h 15min', departures: ['05:00', '06:00', '07:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'], price: 'AED 50' },
    sharjah: { duration: '0h 30min', departures: ['Every 30 mins'], price: 'AED 20' },
    ajman: { duration: '0h 45min', departures: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'], price: 'AED 30' },
    rak: { duration: '1h 30min', departures: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'], price: 'AED 60' },
    uaq: { duration: '1h 00min', departures: ['07:00', '10:00', '13:00', '16:00', '19:00'], price: 'AED 40' },
  },
  sharjah: {
    fujairah: { duration: '1h 30min', departures: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'], price: 'AED 60' },
    abudhabi: { duration: '1h 45min', departures: ['06:00', '09:00', '12:00', '15:00', '18:00'], price: 'AED 70' },
    dubai: { duration: '0h 30min', departures: ['Every 30 mins'], price: 'AED 20' },
    ajman: { duration: '0h 20min', departures: ['Every 20 mins'], price: 'AED 15' },
    rak: { duration: '1h 00min', departures: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'], price: 'AED 45' },
    uaq: { duration: '0h 40min', departures: ['07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00'], price: 'AED 25' },
  },
  ajman: {
    fujairah: { duration: '1h 20min', departures: ['06:30', '09:00', '12:00', '15:00', '18:00'], price: 'AED 55' },
    abudhabi: { duration: '2h 00min', departures: ['06:00', '10:00', '14:00', '18:00'], price: 'AED 80' },
    dubai: { duration: '0h 45min', departures: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'], price: 'AED 30' },
    sharjah: { duration: '0h 20min', departures: ['Every 20 mins'], price: 'AED 15' },
    rak: { duration: '0h 50min', departures: ['07:00', '10:00', '13:00', '16:00', '19:00'], price: 'AED 35' },
    uaq: { duration: '0h 25min', departures: ['Every 30 mins'], price: 'AED 15' },
  },
  rak: {
    fujairah: { duration: '1h 15min', departures: ['07:00', '10:00', '13:00', '16:00', '19:00'], price: 'AED 50' },
    abudhabi: { duration: '2h 30min', departures: ['06:00', '10:00', '14:00', '18:00'], price: 'AED 100' },
    dubai: { duration: '1h 30min', departures: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'], price: 'AED 60' },
    sharjah: { duration: '1h 00min', departures: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'], price: 'AED 45' },
    ajman: { duration: '0h 50min', departures: ['07:00', '10:00', '13:00', '16:00', '19:00'], price: 'AED 35' },
    uaq: { duration: '0h 30min', departures: ['07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00'], price: 'AED 20' },
  },
  uaq: {
    fujairah: { duration: '1h 10min', departures: ['07:30', '11:00', '15:00', '19:00'], price: 'AED 45' },
    abudhabi: { duration: '2h 15min', departures: ['06:00', '10:00', '14:00', '18:00'], price: 'AED 90' },
    dubai: { duration: '1h 00min', departures: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'], price: 'AED 40' },
    sharjah: { duration: '0h 40min', departures: ['07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00'], price: 'AED 25' },
    ajman: { duration: '0h 25min', departures: ['Every 30 mins'], price: 'AED 15' },
    rak: { duration: '0h 30min', departures: ['07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00'], price: 'AED 20' },
  },
}

type TripType = 'arrival' | 'departure'

const ShuttleServicesModal = () => {
  const [tripType, setTripType] = useState<TripType>('departure')
  const [fromEmirate, setFromEmirate] = useState(emirates[0]) // Fujairah
  const [toEmirate, setToEmirate] = useState(emirates[1]) // Abu Dhabi
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  // Get available destinations (excluding selected origin)
  const availableDestinations = emirates.filter(e => e.id !== fromEmirate.id)
  
  // Get route info
  const routeInfo = routeSchedules[fromEmirate.id]?.[toEmirate.id]

  // Swap locations
  const handleSwap = () => {
    const temp = fromEmirate
    setFromEmirate(toEmirate)
    setToEmirate(temp)
    setSelectedTime(null)
  }

  // Handle trip type change
  const handleTripTypeChange = (type: TripType) => {
    setTripType(type)
    if (type === 'arrival') {
      // For arrivals, destination is Fujairah
      if (toEmirate.id !== 'fujairah') {
        setFromEmirate(toEmirate)
        setToEmirate(emirates[0])
      }
    } else {
      // For departures, origin is Fujairah
      if (fromEmirate.id !== 'fujairah') {
        setToEmirate(fromEmirate)
        setFromEmirate(emirates[0])
      }
    }
    setSelectedTime(null)
  }

  return (
    <div className="relative hidden lg:block">
      <div className="fixed bottom-8 left-8 z-40 flex items-center">
        <Popover className="relative">
          {({ open, close }) => (
            <>
              <PopoverButton
                className={`group relative rounded-full bg-gradient-to-br from-red-600 to-rose-700 p-4 shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-red-500/50 focus:outline-hidden ${
                  open ? 'scale-110 shadow-red-500/60' : 'hover:rotate-[-12deg]'
                }`}
              >
                <TruckIcon className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
                
                {/* Animated pulse ring */}
                <span className="absolute inset-0 rounded-full bg-red-500/40 opacity-75 animate-ping"></span>
                
                {/* Tooltip */}
                <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white/90 backdrop-blur-md border border-white/30 px-3 py-1.5 text-sm font-medium text-red-600 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  Shuttle Services
                </span>
              </PopoverButton>

              <PopoverPanel
                transition
                style={{ width: '750px' }}
                className="absolute bottom-full left-0 mb-4 ml-6 transform overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/30 transition data-closed:translate-y-4 data-closed:opacity-0 data-closed:scale-95"
              >
                <div className="relative">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-red-600 via-red-700 to-rose-700 px-8 py-6">
                    <button
                      onClick={() => close()}
                      className="absolute top-4 right-4 rounded-full p-1.5 transition-colors hover:bg-white/20 text-white/80 hover:text-white"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                    
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-white/20 p-2.5">
                        <TruckIcon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Airport Shuttle Free Service</h3>
                        <p className="text-sm text-white">Travel across all Emirates</p>
                      </div>
                    </div>
                  </div>

                  {/* Trip Type Toggle */}
                  <div className="px-8 pt-8">
                    <RadioGroup value={tripType} onChange={handleTripTypeChange} className="flex gap-3">
                      <RadioGroup.Option value="departure">
                        {({ checked }) => (
                          <button
                            className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                              checked
                                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white'
                                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                            }`}
                          >
                            <ArrowRightIcon className="h-4 w-4" />
                            Departure
                          </button>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value="arrival">
                        {({ checked }) => (
                          <button
                            className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                              checked
                                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white'
                                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                            }`}
                          >
                            <ArrowLeftIcon className="h-4 w-4" />
                            Arrival
                          </button>
                        )}
                      </RadioGroup.Option>
                    </RadioGroup>
                  </div>

                  {/* Route Selection */}
                  <div className="px-8 pt-8">
                    <div className="flex items-center gap-4">
                      {/* From */}
                      <div className="flex-1">
                        <label className="mb-2 block text-xs font-semibold text-white/70 uppercase tracking-wider">
                          From
                        </label>
                        <Listbox value={fromEmirate} onChange={(e) => { setFromEmirate(e); setSelectedTime(null); }}>
                          <div className="relative">
                            <ListboxButton className="relative w-full rounded-xl border border-white/40 bg-white/10 backdrop-blur-sm py-3.5 pl-4 pr-10 text-left transition-all hover:bg-white/20 focus:outline-hidden focus:ring-2 focus:ring-red-500/30">
                              <div className="flex items-center gap-3">
                                <MapPinIcon className="h-5 w-5 text-red-400" />
                                <div>
                                  <span className="block font-semibold text-white">{fromEmirate.name}</span>
                                  <span className="block text-xs text-white/70">{fromEmirate.shortName}</span>
                                </div>
                              </div>
                              <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                            </ListboxButton>
                            <ListboxOptions className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white/90 backdrop-blur-xl border border-white/40 py-2 focus:outline-hidden">
                              {emirates.filter(e => e.id !== toEmirate.id).map((emirate) => (
                                <ListboxOption
                                  key={emirate.id}
                                  value={emirate}
                                  className="cursor-pointer select-none px-4 py-3 transition-colors hover:bg-red-50 data-[focus]:bg-red-50"
                                >
                                  {({ selected }) => (
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <span className={`font-medium ${selected ? 'text-red-600' : 'text-neutral-900'}`}>
                                          {emirate.name}
                                        </span>
                                        <span className="text-xs text-neutral-500">({emirate.shortName})</span>
                                      </div>
                                      {selected && <CheckIcon className="h-5 w-5 text-red-600" />}
                                    </div>
                                  )}
                                </ListboxOption>
                              ))}
                            </ListboxOptions>
                          </div>
                        </Listbox>
                      </div>

                      {/* Swap Button */}
                      <button
                        onClick={handleSwap}
                        className="mt-7 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-3 text-white transition-all hover:bg-red-600 hover:text-white hover:scale-110 hover:rotate-180 duration-300"
                      >
                        <ArrowsRightLeftIcon className="h-5 w-5" />
                      </button>

                      {/* To */}
                      <div className="flex-1">
                        <label className="mb-2 block text-xs font-semibold text-white/70 uppercase tracking-wider">
                          To
                        </label>
                        <Listbox value={toEmirate} onChange={(e) => { setToEmirate(e); setSelectedTime(null); }}>
                          <div className="relative">
                            <ListboxButton className="relative w-full rounded-xl border border-white/40 bg-white/10 backdrop-blur-sm py-3.5 pl-4 pr-10 text-left transition-all hover:bg-white/20 focus:outline-hidden focus:ring-2 focus:ring-red-500/30">
                              <div className="flex items-center gap-3">
                                <MapPinIcon className="h-5 w-5 text-red-400" />
                                <div>
                                  <span className="block font-semibold text-white">{toEmirate.name}</span>
                                  <span className="block text-xs text-white/70">{toEmirate.shortName}</span>
                                </div>
                              </div>
                              <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                            </ListboxButton>
                            <ListboxOptions className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white/90 backdrop-blur-xl border border-white/40 py-2 focus:outline-hidden">
                              {emirates.filter(e => e.id !== fromEmirate.id).map((emirate) => (
                                <ListboxOption
                                  key={emirate.id}
                                  value={emirate}
                                  className="cursor-pointer select-none px-4 py-3 transition-colors hover:bg-red-50 data-[focus]:bg-red-50"
                                >
                                  {({ selected }) => (
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <span className={`font-medium ${selected ? 'text-red-600' : 'text-neutral-900'}`}>
                                          {emirate.name}
                                        </span>
                                        <span className="text-xs text-neutral-500">({emirate.shortName})</span>
                                      </div>
                                      {selected && <CheckIcon className="h-5 w-5 text-red-600" />}
                                    </div>
                                  )}
                                </ListboxOption>
                              ))}
                            </ListboxOptions>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                  </div>

                  {/* Route Info Card */}
                  {routeInfo && (
                    <div className="px-8 pt-8">
                      <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-5">
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-white">
                              <ClockIcon className="h-5 w-5 text-red-600" />
                              <span className="font-semibold text-lg">{routeInfo.duration}</span>
                            </div>
                          
                          </div>
                          <div className="rounded-lg bg-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                            {routeInfo.departures.length} departures daily
                          </div>
                        </div>

                        {/* Departure Times */}
                        <div>
                          <label className="mb-3 block text-xs font-semibold text-white/70 uppercase tracking-wider">
                            Select Departure Time
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {routeInfo.departures.map((time, index) => (
                              <button
                                key={index}
                                onClick={() => setSelectedTime(time)}
                                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                                  selectedTime === time
                                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white scale-105'
                                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-red-300'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="p-8 pt-8">
                    <div className="flex gap-4">
                      <a
                        href="tel:+97192229111"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-red-500 bg-transparent px-5 py-3.5 font-semibold text-white transition-all hover:bg-red-600/20"
                      >
                        <PhoneIcon className="h-5 w-5" />
                        Call to Book
                      </a>
                      <button
                        disabled={!selectedTime}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold transition-all duration-300 ${
                          selectedTime
                            ? 'bg-gradient-to-r from-red-600 via-red-700 to-rose-700 text-white hover:scale-[1.02] active:scale-[0.98]'
                            : 'cursor-not-allowed bg-white/10 backdrop-blur-sm border border-white/20 text-white/50'
                        }`}
                      >
                        <CalendarDaysIcon className="h-5 w-5" />
                        Book Now
                      </button>
                    </div>
                    
                    {/* Quick Info */}
                    <div className="mt-5 flex items-center justify-center gap-6 text-sm text-white/70">
                      <div className="flex items-center gap-2">
                        <UserGroupIcon className="h-4 w-4" />
                        <span>Max 8 passengers</span>
                      </div>
                      <div className="h-4 w-px bg-white/30"></div>
                      <div className="flex items-center gap-2">
                        <TruckIcon className="h-4 w-4" />
                        <span>Luxury shuttles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default ShuttleServicesModal
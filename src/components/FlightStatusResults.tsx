'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { 
  Plane, 
  Clock, 
  MapPin, 
  Calendar,
  CheckCircle,
  AlertCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from 'lucide-react'

// Flight data type
interface FlightData {
  id: string
  flightNumber: string
  airline: string
  airlineLogo: string
  status: 'on-time' | 'delayed' | 'cancelled' | 'landed' | 'boarding' | 'departed'
  departure: {
    airport: string
    airportCode: string
    city: string
    terminal: string
    gate: string
    scheduledTime: string
    actualTime: string
    date: string
  }
  arrival: {
    airport: string
    airportCode: string
    city: string
    terminal: string
    gate: string
    scheduledTime: string
    actualTime: string
    date: string
  }
  aircraft: string
  duration: string
}

// Demo flight data
const demoFlights: FlightData[] = [
  {
    id: '1',
    flightNumber: 'EK524',
    airline: 'Emirates',
    airlineLogo: '/images/airlines/emirates.png',
    status: 'on-time',
    departure: {
      airport: 'Fujairah International Airport',
      airportCode: 'FJR',
      city: 'Fujairah',
      terminal: 'T1',
      gate: 'A12',
      scheduledTime: '08:30',
      actualTime: '08:30',
      date: '2024-12-20',
    },
    arrival: {
      airport: 'Dubai International Airport',
      airportCode: 'DXB',
      city: 'Dubai',
      terminal: 'T3',
      gate: 'B24',
      scheduledTime: '09:45',
      actualTime: '09:45',
      date: '2024-12-20',
    },
    aircraft: 'Boeing 777-300ER',
    duration: '1h 15m',
  },
  {
    id: '2',
    flightNumber: 'EY392',
    airline: 'Etihad Airways',
    airlineLogo: '/images/airlines/etihad.png',
    status: 'delayed',
    departure: {
      airport: 'Fujairah International Airport',
      airportCode: 'FJR',
      city: 'Fujairah',
      terminal: 'T1',
      gate: 'A8',
      scheduledTime: '10:00',
      actualTime: '10:45',
      date: '2024-12-20',
    },
    arrival: {
      airport: 'Abu Dhabi International Airport',
      airportCode: 'AUH',
      city: 'Abu Dhabi',
      terminal: 'T1',
      gate: 'C15',
      scheduledTime: '11:30',
      actualTime: '12:15',
      date: '2024-12-20',
    },
    aircraft: 'Airbus A320',
    duration: '1h 30m',
  },
  {
    id: '3',
    flightNumber: 'QR1050',
    airline: 'Qatar Airways',
    airlineLogo: '/images/airlines/qatar.png',
    status: 'boarding',
    departure: {
      airport: 'Fujairah International Airport',
      airportCode: 'FJR',
      city: 'Fujairah',
      terminal: 'T1',
      gate: 'A3',
      scheduledTime: '14:00',
      actualTime: '14:00',
      date: '2024-12-20',
    },
    arrival: {
      airport: 'Hamad International Airport',
      airportCode: 'DOH',
      city: 'Doha',
      terminal: 'T1',
      gate: 'D22',
      scheduledTime: '15:30',
      actualTime: '15:30',
      date: '2024-12-20',
    },
    aircraft: 'Boeing 787 Dreamliner',
    duration: '1h 30m',
  },
  {
    id: '4',
    flightNumber: 'FZ1',
    airline: 'Flydubai',
    airlineLogo: '/images/airlines/flydubai.png',
    status: 'landed',
    departure: {
      airport: 'Dubai International Airport',
      airportCode: 'DXB',
      city: 'Dubai',
      terminal: 'T2',
      gate: 'F10',
      scheduledTime: '06:00',
      actualTime: '06:05',
      date: '2024-12-20',
    },
    arrival: {
      airport: 'Fujairah International Airport',
      airportCode: 'FJR',
      city: 'Fujairah',
      terminal: 'T1',
      gate: 'A1',
      scheduledTime: '07:15',
      actualTime: '07:20',
      date: '2024-12-20',
    },
    aircraft: 'Boeing 737 MAX 8',
    duration: '1h 15m',
  },
  {
    id: '5',
    flightNumber: 'G9538',
    airline: 'Air Arabia',
    airlineLogo: '/images/airlines/airarabia.png',
    status: 'cancelled',
    departure: {
      airport: 'Sharjah International Airport',
      airportCode: 'SHJ',
      city: 'Sharjah',
      terminal: 'T1',
      gate: 'B5',
      scheduledTime: '16:30',
      actualTime: '--:--',
      date: '2024-12-20',
    },
    arrival: {
      airport: 'Fujairah International Airport',
      airportCode: 'FJR',
      city: 'Fujairah',
      terminal: 'T1',
      gate: '--',
      scheduledTime: '17:30',
      actualTime: '--:--',
      date: '2024-12-20',
    },
    aircraft: 'Airbus A320',
    duration: '1h 00m',
  },
]

const getStatusConfig = (status: FlightData['status']) => {
  switch (status) {
    case 'on-time':
      return {
        label: 'On Time',
        color: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        icon: CheckCircle,
      }
    case 'delayed':
      return {
        label: 'Delayed',
        color: 'bg-amber-500/20 text-amber-600 dark:text-amber-400',
        icon: AlertCircle,
      }
    case 'cancelled':
      return {
        label: 'Cancelled',
        color: 'bg-red-500/20 text-red-600 dark:text-red-400',
        icon: XCircle,
      }
    case 'landed':
      return {
        label: 'Landed',
        color: 'bg-blue-500/20 text-blue-600 dark:text-blue-400',
        icon: CheckCircle,
      }
    case 'boarding':
      return {
        label: 'Boarding',
        color: 'bg-purple-500/20 text-purple-600 dark:text-purple-400',
        icon: Plane,
      }
    case 'departed':
      return {
        label: 'Departed',
        color: 'bg-sky-500/20 text-sky-600 dark:text-sky-400',
        icon: Plane,
      }
    default:
      return {
        label: 'Unknown',
        color: 'bg-neutral-500/20 text-neutral-600 dark:text-neutral-400',
        icon: AlertCircle,
      }
  }
}

const FlightCard = ({ flight, flightType }: { flight: FlightData; flightType: string }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const statusConfig = getStatusConfig(flight.status)
  const StatusIcon = statusConfig.icon

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
      {/* Main Card Content */}
      <div className="p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Airline & Flight Info */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-700">
              <Plane className="h-7 w-7 text-red-600" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {flight.airline}
                </h3>
                <span className={clsx('flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold', statusConfig.color)}>
                  <StatusIcon className="h-3.5 w-3.5" />
                  {statusConfig.label}
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                Flight {flight.flightNumber} • {flight.aircraft}
              </p>
            </div>
          </div>

          {/* Flight Route */}
          <div className="flex flex-1 items-center justify-center gap-4 lg:gap-8">
            {/* Departure */}
            <div className="text-center">
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                {flight.departure.scheduledTime}
              </p>
              {flight.departure.actualTime !== flight.departure.scheduledTime && (
                <p className="text-sm font-medium text-amber-600">
                  Actual: {flight.departure.actualTime}
                </p>
              )}
              <p className="mt-1 text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                {flight.departure.airportCode}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {flight.departure.city}
              </p>
            </div>

            {/* Flight Path Visual */}
            <div className="flex flex-1 flex-col items-center gap-1">
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {flight.duration}
              </p>
              <div className="relative flex w-full max-w-[200px] items-center">
                <div className="h-0.5 flex-1 bg-neutral-300 dark:bg-neutral-600" />
                <div className="absolute left-1/2 -translate-x-1/2">
                  <Plane className="h-5 w-5 rotate-90 text-red-600" />
                </div>
                <ArrowRight className="h-4 w-4 text-neutral-400" />
              </div>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                {flightType === 'departures' ? 'Departing' : 'Arriving'}
              </p>
            </div>

            {/* Arrival */}
            <div className="text-center">
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                {flight.arrival.scheduledTime}
              </p>
              {flight.arrival.actualTime !== flight.arrival.scheduledTime && (
                <p className="text-sm font-medium text-amber-600">
                  Actual: {flight.arrival.actualTime}
                </p>
              )}
              <p className="mt-1 text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                {flight.arrival.airportCode}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {flight.arrival.city}
              </p>
            </div>
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 rounded-xl bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
          >
            Details
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-800/50">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Departure Details */}
            <div className="rounded-xl bg-white p-5 dark:bg-neutral-800">
              <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                <Plane className="h-4 w-4 rotate-[-45deg]" />
                Departure
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {flight.departure.airport}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {flight.departure.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {flight.departure.scheduledTime}
                      {flight.departure.actualTime !== flight.departure.scheduledTime && (
                        <span className="ml-2 text-amber-600">
                          → {flight.departure.actualTime}
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Scheduled Time
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {new Date(flight.departure.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Date</p>
                  </div>
                </div>
                <div className="flex gap-6 pt-2">
                  <div className="rounded-lg bg-neutral-100 px-4 py-2 dark:bg-neutral-700">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Terminal</p>
                    <p className="text-lg font-bold text-neutral-900 dark:text-white">
                      {flight.departure.terminal}
                    </p>
                  </div>
                  <div className="rounded-lg bg-neutral-100 px-4 py-2 dark:bg-neutral-700">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Gate</p>
                    <p className="text-lg font-bold text-neutral-900 dark:text-white">
                      {flight.departure.gate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrival Details */}
            <div className="rounded-xl bg-white p-5 dark:bg-neutral-800">
              <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                <Plane className="h-4 w-4 rotate-[45deg]" />
                Arrival
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {flight.arrival.airport}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {flight.arrival.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {flight.arrival.scheduledTime}
                      {flight.arrival.actualTime !== flight.arrival.scheduledTime && (
                        <span className="ml-2 text-amber-600">
                          → {flight.arrival.actualTime}
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Scheduled Time
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {new Date(flight.arrival.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Date</p>
                  </div>
                </div>
                <div className="flex gap-6 pt-2">
                  <div className="rounded-lg bg-neutral-100 px-4 py-2 dark:bg-neutral-700">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Terminal</p>
                    <p className="text-lg font-bold text-neutral-900 dark:text-white">
                      {flight.arrival.terminal}
                    </p>
                  </div>
                  <div className="rounded-lg bg-neutral-100 px-4 py-2 dark:bg-neutral-700">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Gate</p>
                    <p className="text-lg font-bold text-neutral-900 dark:text-white">
                      {flight.arrival.gate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const FlightStatusResults = () => {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search') || ''
  const flightType = searchParams.get('type') || 'departures'

  // Filter flights based on search query
  const filteredFlights = useMemo(() => {
    if (!searchQuery) return demoFlights

    const query = searchQuery.toLowerCase()
    return demoFlights.filter(
      (flight) =>
        flight.flightNumber.toLowerCase().includes(query) ||
        flight.airline.toLowerCase().includes(query) ||
        flight.departure.city.toLowerCase().includes(query) ||
        flight.arrival.city.toLowerCase().includes(query)
    )
  }, [searchQuery])

  // Further filter by flight type (departures/arrivals from Fujairah)
  const displayedFlights = useMemo(() => {
    if (flightType === 'departures') {
      return filteredFlights.filter((f) => f.departure.airportCode === 'FJR')
    } else {
      return filteredFlights.filter((f) => f.arrival.airportCode === 'FJR')
    }
  }, [filteredFlights, flightType])

  return (
    <main className="relative overflow-hidden">
      <div className="relative container mt-10 mb-24 lg:mb-28">
        {/* Header Banner - Inside Container */}
        <div className="rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-rose-700 px-6 py-12 sm:px-8 lg:px-12 mb-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Flight Status</h1>
          <p className="mt-2 text-white/80">
            {flightType === 'departures' ? 'Departures from' : 'Arrivals to'} Fujairah International Airport
          </p>
          {searchQuery && (
            <p className="mt-1 text-sm text-white/60">
              Showing results for "{searchQuery}"
            </p>
          )}
        </div>
        {/* Stats Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-4 dark:bg-neutral-800">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Plane className="h-5 w-5 text-red-600" />
              <span className="font-semibold text-neutral-900 dark:text-white">
                {displayedFlights.length} Flights
              </span>
            </div>
            <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                On Time: {displayedFlights.filter((f) => f.status === 'on-time').length}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                Delayed: {displayedFlights.filter((f) => f.status === 'delayed').length}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                Cancelled: {displayedFlights.filter((f) => f.status === 'cancelled').length}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <Clock className="h-4 w-4" />
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Flight Cards */}
        {displayedFlights.length > 0 ? (
          <div className="space-y-4">
            {displayedFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} flightType={flightType} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-16 text-center dark:bg-neutral-800">
            <Plane className="mx-auto h-16 w-16 text-neutral-300 dark:text-neutral-600" />
            <h3 className="mt-4 text-xl font-semibold text-neutral-900 dark:text-white">
              No flights found
            </h3>
            <p className="mt-2 text-neutral-500 dark:text-neutral-400">
              {searchQuery
                ? `No ${flightType} matching "${searchQuery}" were found.`
                : `No ${flightType} scheduled at this time.`}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default FlightStatusResults
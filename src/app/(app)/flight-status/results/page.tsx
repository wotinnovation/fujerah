import { Suspense } from 'react'
import FlightStatusResults from '@/components/FlightStatusResults'

export const metadata = {
  title: 'Flight Status | Fujairah International Airport',
  description: 'Check real-time flight status, departures and arrivals at Fujairah International Airport.',
}

// Loading component
const FlightStatusLoading = () => (
  <main className="relative overflow-hidden">
    <div className="relative container mt-10 mb-24 lg:mb-28">
      {/* Header Banner Skeleton */}
      <div className="rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-rose-700 px-6 py-12 sm:px-8 lg:px-12 mb-8">
        <div className="h-10 w-48 animate-pulse rounded-lg bg-white/20" />
        <div className="mt-3 h-5 w-72 animate-pulse rounded-lg bg-white/10" />
      </div>
      
      {/* Stats Bar Skeleton */}
      <div className="mb-8 h-16 animate-pulse rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
      
      {/* Flight Cards Skeleton */}
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-32 animate-pulse rounded-2xl bg-neutral-200 dark:bg-neutral-800"
          />
        ))}
      </div>
    </div>
  </main>
)

export default function FlightStatusResultsPage() {
  return (
    <Suspense fallback={<FlightStatusLoading />}>
      <FlightStatusResults />
    </Suspense>
  )
}
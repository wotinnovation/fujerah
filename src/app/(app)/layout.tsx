import { Metadata } from 'next'
import { ApplicationLayout } from './application-layout'

export const metadata: Metadata = {
  title: 'Fujairah International Airport',
  description:
    'Fujairah International Airport - Your gateway to the UAE East Coast. Book flights, car rentals, airport transfers, and explore travel services at Fujairah Airport.',
  keywords: ['Fujairah International Airport', 'Fujairah Airport', 'FJR Airport', 'UAE Airport', 'Flights to Fujairah', 'Airport Transfer', 'Car Rental Fujairah', 'UAE East Coast', 'Travel Fujairah'],
}

export default function Layout({ children, params }: { children: React.ReactNode; params: any }) {
  return <ApplicationLayout>{children}</ApplicationLayout>
}
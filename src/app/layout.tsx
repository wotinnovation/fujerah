import '@/styles/tailwind.css'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'rc-slider/assets/index.css'
import CustomizeControl from './customize-control'
import ThemeProvider from './theme-provider'
import FeedbackModal from './FeedbackModal'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Fujairah International Airport',
    default: 'Fujairah International Airport - Premium Travel Services',
  },
  description: 'Experience seamless travel with Fujairah International Airport. Book shuttle services, explore destinations, and enjoy premium airport services in the UAE.',
  keywords: [
    'Fujairah International Airport',
    'Fujairah Airport',
    'UAE Airport',
    'Airport Shuttle Services',
    'Airport Transportation',
    'Travel Services',
    'Flight Booking',
    'Airport Parking',
  ],
  openGraph: {
    title: 'Fujairah International Airport - Premium Travel Services',
    description: 'Experience seamless travel with Fujairah International Airport. Book shuttle services, explore destinations, and enjoy premium airport services.',
    type: 'website',
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fujairah International Airport - Premium Travel Services',
    description: 'Experience seamless travel with Fujairah International Airport. Book shuttle services and premium airport services.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <ThemeProvider>
          <div>
            {children}

            {/* For Chisfis's demo  -- you can remove it  */}
            {/* <CustomizeControl /> */}
            <FeedbackModal />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
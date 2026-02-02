import Header from '@/components/Header/Header'
import SectionOurFeatures from '@/components/SectionOurFeatures'
import featuresImg from '@/images/our-features-2.png'
import { ReactNode } from 'react'
import { ApplicationLayout } from '../application-layout'

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    
      <div>
        <div className="container">
          {children}
    
        </div>
      </div>
    
  )
}

export default Layout

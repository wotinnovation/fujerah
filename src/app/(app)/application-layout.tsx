'use client';

import Footer2 from '@/components/Footer2'
import FooterQuickNavigation from '@/components/FooterQuickNavigation'
import Header from '@/components/Header/Header'
import HeroSearchFormMobile from '@/components/HeroSearchFormMobile/HeroSearchFormMobile'
import { MobileDrawer } from '@/components/MobileDrawer'
import Aside from '@/components/aside'
import AsideSidebarNavigation from '@/components/aside-sidebar-navigation'
import 'rc-slider/assets/index.css'
import React, { ReactNode } from 'react'
import { Menu } from 'lucide-react'

interface Props {
  children: ReactNode
  header?: ReactNode
}

const ApplicationLayout: React.FC<Props> = ({ children, header }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  return (
    <Aside.Provider>
      {/* Desktop Header - Will be hidden on mobile devices */}
      <div className="relative z-20 hidden border-b border-neutral-100 bg-white lg:block dark:border-neutral-800 dark:bg-neutral-900">
        {header ? header : <Header />}
      </div>

      {/* Mobile Sticky Bar */}
      <div className="sticky top-0 z-20 border-b border-neutral-100 bg-white shadow-sm lg:hidden dark:border-neutral-800 dark:bg-neutral-900">
        <div className="container flex h-20 items-center justify-between">
          <HeroSearchFormMobile />
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="flex-shrink-0 rounded-xl p-2 text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {children}

      {/* FooterQuickNavigation - Displays on mobile devices and is fixed at the bottom of the screen */}

      {/* Chose footer style here!!!! */}
      <Footer2 /> {/* <Footer /> or <Footer2 /> or <Footer3 /> or <Footer4 />*/}
      {/*  */}
 
    </Aside.Provider>
  )
}

export { ApplicationLayout }
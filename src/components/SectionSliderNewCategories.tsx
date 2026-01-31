'use client'

import ServiceCard from '@/components/ServiceCard'
import { TService } from '@/data/services'
import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  className?: string
  services: TService[]
}

const SectionServices: FC<Props> = ({ className, services = [] }) => {
  return (
    <div className={clsx('relative', className)}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default SectionServices
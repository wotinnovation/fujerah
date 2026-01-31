export interface ServiceItem {
  id: string
  title: string
  description: string
  details: string[]
  image: string
  href: string
}

export async function getServices(): Promise<ServiceItem[]> {
  return [
    {
      id: 'service-1',
      title: 'Passenger Services',
      description: 'Comprehensive passenger handling and support services',
      details: [
        'Check-in and boarding assistance',
        'Baggage handling and tracking',
        'VIP lounge access and services',
       
      ],
      image: '/images/fjr/pass-1.jpg',
      href: '/services/passenger-services'
    },
    {
      id: 'service-2',
      title: 'Maintenance, Repair & Overhaul',
      description: 'Expert aircraft maintenance and technical services',
      details: [
        'Routine maintenance programs',
        'Aircraft inspections and repairs',
        'Engine overhaul services',
      ],
      image: '/images/fjr/main-1.jpg',
      href: '/services/maintenance-repair'
    },
    {
      id: 'service-3',
      title: 'Aeronautical Information',
      description: 'Comprehensive aviation data and information services',
      details: [
        'Flight planning and navigation',
        'Weather information services',
        'NOTAMs and airspace updates',
  
      ],
      image: '/images/fjr/airn.jpg',
      href: '/services/aeronautical-information'
    },
    {
      id: 'service-4',
      title: 'Ground Handling Services',
      description: 'Complete ground operations and cargo handling',
      details: [
        'Aircraft marshalling and parking',
        'Fueling and de-icing services',
        'Cargo loading and unloading',
     
      ],
      image: '/images/fjr/air-3.jpg',
      href: '/services/ground-handling'
    }
  ]
}

export type TService = Awaited<ReturnType<typeof getServices>>[number]
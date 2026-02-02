// Services Data - Fujairah International Airport
// Complete service information with detailed page content

export interface ServiceItem {
  id: string
  title: string
  description: string
  details: string[]
  image: string
  href: string
}

export interface ServicePageData {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  overview: {
    title: string
    content: string
  }
  keyFeatures: ServiceFeature[]
  serviceOfferings: ServiceOffering[]
  processSteps?: ProcessStep[]
  benefits: Benefit[]
  specifications?: Specification[]
  pricing?: PricingInfo
  contactInfo: ContactInfo
  relatedServices: RelatedService[]
  faqs: FAQ[]
}

export interface ServiceFeature {
  icon: string
  title: string
  description: string
}

export interface ServiceOffering {
  category: string
  items: string[]
}

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface Benefit {
  title: string
  description: string
}

export interface Specification {
  label: string
  value: string
}

export interface PricingInfo {
  note: string
  contactForQuote: boolean
}

export interface ContactInfo {
  department: string
  phone: string
  email: string
  hours: string
}

export interface RelatedService {
  title: string
  href: string
}

export interface FAQ {
  question: string
  answer: string
}

// ==================== SERVICES DATA ====================

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

// ==================== DETAILED SERVICE PAGES DATA ====================

export const servicesPageData: Record<string, ServicePageData> = {
  'passenger-services': {
    slug: 'passenger-services',
    title: 'Passenger Services',
    subtitle: 'Exceptional Care for Every Traveler',
    heroImage: '/images/fjr/pass-1.jpg',
    overview: {
      title: 'Elevating Your Travel Experience',
      content: 'At Fujairah International Airport, we prioritize your comfort and convenience at every step of your journey. Our comprehensive passenger services are designed to make your travel experience seamless, stress-free, and enjoyable. From the moment you arrive until your departure, our dedicated team is committed to providing exceptional service tailored to your needs.'
    },
    keyFeatures: [
      {
        icon: 'UserCheck',
        title: 'Personalized Check-In',
        description: 'Fast and efficient check-in process with dedicated counters for different travel classes and special needs passengers.'
      },
      {
        icon: 'Luggage',
        title: 'Baggage Excellence',
        description: 'Advanced baggage handling system with real-time tracking, priority handling, and secure storage facilities.'
      },
      {
        icon: 'Crown',
        title: 'VIP Services',
        description: 'Exclusive VIP lounges with premium amenities, private check-in, and personalized concierge services.'
      },
      {
        icon: 'HeartHandshake',
        title: 'Special Assistance',
        description: 'Dedicated support for passengers with reduced mobility, elderly travelers, and unaccompanied minors.'
      }
    ],
    serviceOfferings: [
      {
        category: 'Check-In Services',
        items: [
          'Online and mobile check-in',
          'Self-service kiosks',
          'Traditional counter check-in',
          'Priority check-in for business/first class',
          'Group check-in facilitation',
          'Baggage drop-off services'
        ]
      },
      {
        category: 'Passenger Amenities',
        items: [
          'Free high-speed WiFi',
          'Mobile charging stations',
          'Prayer rooms',
          'Mother and child facilities',
          'Quiet zones',
          'Shopping and dining options',
          'Currency exchange',
          'ATM services'
        ]
      },
      {
        category: 'VIP & Premium Services',
        items: [
          'Business lounge access',
          'VIP lounge with spa services',
          'Fast-track security',
          'Meet and greet services',
          'Personal concierge',
          'Private transfer arrangements',
          'Conference rooms'
        ]
      },
      {
        category: 'Special Assistance',
        items: [
          'Wheelchair assistance',
          'Mobility aid services',
          'Assistance for visually/hearing impaired',
          'Medical support services',
          'Unaccompanied minor care',
          'Elderly passenger support',
          'Pet travel assistance'
        ]
      }
    ],
    processSteps: [
      {
        number: 1,
        title: 'Arrival',
        description: 'Arrive at the airport and proceed to the check-in area. Look for your airline\'s counter or use self-service kiosks.'
      },
      {
        number: 2,
        title: 'Check-In',
        description: 'Complete check-in, receive boarding pass, and drop off checked baggage. Special assistance available at dedicated counters.'
      },
      {
        number: 3,
        title: 'Security',
        description: 'Pass through security screening. Fast-track lanes available for premium passengers and families with young children.'
      },
      {
        number: 4,
        title: 'Relax & Enjoy',
        description: 'Enjoy airport amenities including lounges, shopping, dining, and relaxation areas while waiting for your flight.'
      },
      {
        number: 5,
        title: 'Boarding',
        description: 'Board your flight at the designated gate. Priority boarding available for premium passengers and families.'
      }
    ],
    benefits: [
      {
        title: '24/7 Support',
        description: 'Round-the-clock passenger assistance and information services available in multiple languages.'
      },
      {
        title: 'Modern Facilities',
        description: 'State-of-the-art terminal with comfortable seating, climate control, and contemporary amenities.'
      },
      {
        title: 'Efficiency',
        description: 'Streamlined processes and advanced technology ensuring minimal wait times and smooth operations.'
      },
      {
        title: 'Accessibility',
        description: 'Fully accessible facilities designed to accommodate all passengers regardless of mobility or special needs.'
      }
    ],
    contactInfo: {
      department: 'Passenger Services',
      phone: '+971 9 2226250',
      email: 'passengers@fja.ae',
      hours: '24/7'
    },
    relatedServices: [
      { title: 'Ground Handling Services', href: '/services/ground-handling' },
      { title: 'Aeronautical Information', href: '/services/aeronautical-information' },
      { title: 'VIP Services', href: '/corporate/aviation' }
    ],
    faqs: [
      {
        question: 'What time should I arrive at the airport before my flight?',
        answer: 'We recommend arriving at least 2 hours before domestic flights and 3 hours before international flights. During peak seasons, consider arriving earlier.'
      },
      {
        question: 'Do you offer fast-track security services?',
        answer: 'Yes, fast-track security is available for business/first class passengers, frequent flyers, and can be purchased as an add-on service.'
      },
      {
        question: 'What special assistance services are available?',
        answer: 'We provide wheelchair assistance, support for visually/hearing impaired passengers, medical assistance, and dedicated care for unaccompanied minors. Please request assistance at least 48 hours before travel.'
      },
      {
        question: 'Are there facilities for families with young children?',
        answer: 'Yes, we have dedicated mother and child rooms, play areas, and priority lanes for families during check-in and security screening.'
      },
      {
        question: 'Can I access the VIP lounge?',
        answer: 'VIP lounge access is available for business/first class passengers, frequent flyer members, and can be purchased as a standalone service.'
      }
    ]
  },

  'maintenance-repair': {
    slug: 'maintenance-repair',
    title: 'Maintenance, Repair & Overhaul',
    subtitle: 'World-Class Aircraft Maintenance Solutions',
    heroImage: '/images/fjr/main-1.jpg',
    overview: {
      title: 'Excellence in Aircraft Maintenance',
      content: 'Fujairah International Airport offers comprehensive MRO services delivered by certified technicians using state-of-the-art facilities and equipment. Our maintenance operations comply with international aviation standards and regulations, ensuring the highest levels of safety, reliability, and efficiency for your aircraft fleet.'
    },
    keyFeatures: [
      {
        icon: 'Wrench',
        title: 'Certified Technicians',
        description: 'Highly skilled and certified engineers with extensive experience across multiple aircraft types and systems.'
      },
      {
        icon: 'ClipboardCheck',
        title: 'Comprehensive Inspections',
        description: 'Thorough pre-flight, post-flight, and scheduled maintenance inspections following OEM guidelines.'
      },
      {
        icon: 'Cog',
        title: 'Component Services',
        description: 'Complete component repair, overhaul, and testing services with quick turnaround times.'
      },
      {
        icon: 'Shield',
        title: 'Quality Assurance',
        description: 'Rigorous quality control procedures ensuring all work meets or exceeds industry standards.'
      }
    ],
    serviceOfferings: [
      {
        category: 'Line Maintenance',
        items: [
          'Pre-flight and post-flight checks',
          'Daily and weekly inspections',
          'AOG (Aircraft on Ground) support',
          'Troubleshooting and diagnostics',
          'Minor repairs and servicing',
          '24/7 emergency maintenance'
        ]
      },
      {
        category: 'Base Maintenance',
        items: [
          'A, B, C, and D checks',
          'Structural inspections',
          'Corrosion prevention',
          'Modification implementations',
          'Paint and refinishing',
          'Interior refurbishment'
        ]
      },
      {
        category: 'Component Services',
        items: [
          'Avionics repair and testing',
          'Landing gear overhaul',
          'Engine component services',
          'APU maintenance',
          'Hydraulic system repairs',
          'Electrical system servicing'
        ]
      },
      {
        category: 'Specialized Services',
        items: [
          'Non-destructive testing (NDT)',
          'Aircraft weighing',
          'Fuel system maintenance',
          'Oxygen system servicing',
          'Cabin equipment repairs',
          'Emergency equipment certification'
        ]
      }
    ],
    processSteps: [
      {
        number: 1,
        title: 'Initial Assessment',
        description: 'Aircraft arrives and undergoes initial inspection to determine maintenance requirements and scope of work.'
      },
      {
        number: 2,
        title: 'Planning & Scheduling',
        description: 'Maintenance plan developed with timeline, parts requirements, and resource allocation.'
      },
      {
        number: 3,
        title: 'Execution',
        description: 'Certified technicians perform all maintenance tasks following approved procedures and manufacturer guidelines.'
      },
      {
        number: 4,
        title: 'Quality Control',
        description: 'Independent inspection and testing to verify all work meets safety and quality standards.'
      },
      {
        number: 5,
        title: 'Documentation & Release',
        description: 'Complete paperwork, certification, and aircraft release with full maintenance records.'
      }
    ],
    benefits: [
      {
        title: 'Reduced Downtime',
        description: 'Efficient processes and experienced teams minimize aircraft downtime, maximizing your operational availability.'
      },
      {
        title: 'Cost Efficiency',
        description: 'Competitive pricing with transparent cost structure and no hidden fees for MRO services.'
      },
      {
        title: 'Compliance',
        description: 'Full regulatory compliance with EASA, FAA, and local aviation authority requirements.'
      },
      {
        title: 'Parts Support',
        description: 'Extensive parts inventory and global supplier network ensuring quick access to required components.'
      }
    ],
    specifications: [
      {
        label: 'Hangar Capacity',
        value: 'Up to wide-body aircraft'
      },
      {
        label: 'Certifications',
        value: 'EASA Part-145, GCAA approved'
      },
      {
        label: 'Operating Hours',
        value: '24/7 with AOG support'
      },
      {
        label: 'Typical Turnaround',
        value: 'Line maintenance: 2-4 hours, Base checks: As scheduled'
      }
    ],
    pricing: {
      note: 'Pricing varies based on aircraft type, scope of work, and parts required.',
      contactForQuote: true
    },
    contactInfo: {
      department: 'MRO Services',
      phone: '+971 9 2226270',
      email: 'mro@fja.ae',
      hours: '24/7'
    },
    relatedServices: [
      { title: 'Ground Handling Services', href: '/services/ground-handling' },
      { title: 'Aviation Services', href: '/corporate/aviation' },
      { title: 'Cargo Services', href: '/corporate/cargo' }
    ],
    faqs: [
      {
        question: 'What aircraft types can you service?',
        answer: 'We service a wide range of aircraft from small regional jets to wide-body aircraft. Our facilities and certified technicians are equipped to handle most commercial aircraft types.'
      },
      {
        question: 'Do you provide AOG support?',
        answer: 'Yes, we offer 24/7 AOG support with rapid response teams to minimize aircraft downtime in emergency situations.'
      },
      {
        question: 'Are your facilities certified?',
        answer: 'Yes, our MRO facilities are certified by EASA Part-145 and approved by the General Civil Aviation Authority (GCAA) of UAE.'
      },
      {
        question: 'How do I schedule maintenance?',
        answer: 'Contact our MRO planning team via phone or email. For scheduled maintenance, we recommend booking at least 2-3 months in advance.'
      },
      {
        question: 'Do you provide warranty on repairs?',
        answer: 'Yes, all our maintenance work comes with warranty coverage. Warranty terms vary based on the type of service and parts used.'
      }
    ]
  },

  'aeronautical-information': {
    slug: 'aeronautical-information',
    title: 'Aeronautical Information Services',
    subtitle: 'Critical Data for Safe and Efficient Operations',
    heroImage: '/images/fjr/airn.jpg',
    overview: {
      title: 'Comprehensive Aviation Information',
      content: 'Our Aeronautical Information Services (AIS) provide essential data and information to support safe, efficient, and regular air navigation. We deliver accurate, timely, and comprehensive aeronautical information to pilots, airlines, air traffic services, and all aviation stakeholders operating at or through Fujairah International Airport.'
    },
    keyFeatures: [
      {
        icon: 'Map',
        title: 'Flight Planning',
        description: 'Complete flight planning services with route optimization, fuel calculations, and weather integration.'
      },
      {
        icon: 'Cloud',
        title: 'Weather Services',
        description: 'Real-time weather updates, forecasts, and meteorological information for informed decision-making.'
      },
      {
        icon: 'Bell',
        title: 'NOTAMs',
        description: 'Timely notices to airmen about changes to facilities, services, procedures, and hazards.'
      },
      {
        icon: 'Radio',
        title: 'Communication Data',
        description: 'Frequency information, communication protocols, and coordination procedures.'
      }
    ],
    serviceOfferings: [
      {
        category: 'Flight Planning Services',
        items: [
          'Route planning and optimization',
          'Fuel calculation services',
          'Alternate airport selection',
          'ETOPS planning support',
          'Weight and balance calculations',
          'Performance analysis'
        ]
      },
      {
        category: 'Weather Information',
        items: [
          'Current weather observations (METAR)',
          'Terminal aerodrome forecasts (TAF)',
          'Significant weather information (SIGMET)',
          'Wind and temperature data',
          'Visibility and cloud cover reports',
          'Tropical cyclone advisories'
        ]
      },
      {
        category: 'Aerodrome Information',
        items: [
          'Runway and taxiway status',
          'Navigation aid information',
          'Approach and departure procedures',
          'Aerodrome charts and diagrams',
          'Obstacle data',
          'Ground movement procedures'
        ]
      },
      {
        category: 'Airspace Information',
        items: [
          'Controlled airspace boundaries',
          'Restricted and prohibited areas',
          'Danger areas',
          'Military exercise areas',
          'FIR/UIR information',
          'ATS routes'
        ]
      }
    ],
    processSteps: [
      {
        number: 1,
        title: 'Information Request',
        description: 'Submit request for specific aeronautical information through our online portal or contact AIS directly.'
      },
      {
        number: 2,
        title: 'Data Compilation',
        description: 'Our team compiles requested information from various sources ensuring accuracy and completeness.'
      },
      {
        number: 3,
        title: 'Quality Check',
        description: 'Information undergoes quality assurance checks to verify accuracy and compliance with ICAO standards.'
      },
      {
        number: 4,
        title: 'Delivery',
        description: 'Information delivered through your preferred method - digital, printed, or via briefing session.'
      },
      {
        number: 5,
        title: 'Updates',
        description: 'Receive real-time updates and amendments as changes occur to ensure current information.'
      }
    ],
    benefits: [
      {
        title: 'Safety Enhancement',
        description: 'Accurate and timely information contributes directly to flight safety and risk mitigation.'
      },
      {
        title: 'Operational Efficiency',
        description: 'Comprehensive data enables better planning, fuel efficiency, and optimized flight operations.'
      },
      {
        title: 'Regulatory Compliance',
        description: 'All information meets ICAO Annex 15 standards and local regulatory requirements.'
      },
      {
        title: '24/7 Availability',
        description: 'Information services available around the clock to support continuous operations.'
      }
    ],
    specifications: [
      {
        label: 'Update Frequency',
        value: 'Real-time for NOTAMs, Regular for other data'
      },
      {
        label: 'Delivery Methods',
        value: 'Digital, Email, Phone, In-person briefing'
      },
      {
        label: 'Coverage Area',
        value: 'FIA and surrounding FIR'
      },
      {
        label: 'Languages',
        value: 'English, Arabic'
      }
    ],
    contactInfo: {
      department: 'Aeronautical Information Services',
      phone: '+971 9 2226280',
      email: 'ais@fja.ae',
      hours: '24/7'
    },
    relatedServices: [
      { title: 'Ground Handling Services', href: '/services/ground-handling' },
      { title: 'Passenger Services', href: '/services/passenger-services' },
      { title: 'Aviation Services', href: '/corporate/aviation' }
    ],
    faqs: [
      {
        question: 'How do I access NOTAMs for FIA?',
        answer: 'NOTAMs are available through our online portal, can be requested via email, or obtained during pre-flight briefing sessions at our AIS office.'
      },
      {
        question: 'Do you provide international flight planning services?',
        answer: 'Yes, we provide comprehensive flight planning services for domestic and international routes, including overflight permits and documentation.'
      },
      {
        question: 'What weather information do you provide?',
        answer: 'We provide complete weather services including METAR, TAF, SIGMET, wind data, and can arrange specialized meteorological briefings.'
      },
      {
        question: 'Are aeronautical charts available?',
        answer: 'Yes, we provide current aeronautical charts, approach plates, and airport diagrams in both digital and printed formats.'
      },
      {
        question: 'How are urgent changes communicated?',
        answer: 'Urgent operational changes are communicated immediately via NOTAM, with additional notifications sent to registered users via SMS and email.'
      }
    ]
  },

  'ground-handling': {
    slug: 'ground-handling',
    title: 'Ground Handling Services',
    subtitle: 'Seamless Operations on the Ground',
    heroImage: '/images/fjr/air-3.jpg',
    overview: {
      title: 'Professional Ground Operations',
      content: 'Fujairah International Airport delivers comprehensive ground handling services that ensure smooth, efficient, and safe aircraft operations. Our experienced team uses modern equipment and follows international best practices to handle all aspects of ground operations, from aircraft arrival to departure, supporting airlines and operators with reliable, high-quality services.'
    },
    keyFeatures: [
      {
        icon: 'Plane',
        title: 'Aircraft Handling',
        description: 'Expert marshalling, parking, towing, and pushback services for all aircraft types with precision and safety.'
      },
      {
        icon: 'Fuel',
        title: 'Fueling Services',
        description: 'Efficient and safe aircraft refueling operations with quality-controlled aviation fuel and experienced personnel.'
      },
      {
        icon: 'Package',
        title: 'Cargo Operations',
        description: 'Complete cargo and mail handling including loading, unloading, sorting, and documentation.'
      },
      {
        icon: 'Snowflake',
        title: 'Aircraft Services',
        description: 'De-icing, cleaning, water and lavatory services, and other essential aircraft services.'
      }
    ],
    serviceOfferings: [
      {
        category: 'Ramp Services',
        items: [
          'Aircraft marshalling and parking',
          'Aircraft towing and pushback',
          'Chock and cone placement',
          'Ground power supply',
          'Air conditioning supply',
          'Stairs and bridge operations'
        ]
      },
      {
        category: 'Passenger Services',
        items: [
          'Passenger boarding and deboarding',
          'Passenger bus services',
          'Wheelchair and special assistance',
          'Transit passenger handling',
          'VIP passenger services',
          'Crew transportation'
        ]
      },
      {
        category: 'Baggage & Cargo',
        items: [
          'Baggage loading and unloading',
          'Baggage sorting and delivery',
          'Cargo handling and storage',
          'Special cargo handling',
          'Mail handling',
          'ULD handling and management'
        ]
      },
      {
        category: 'Aircraft Services',
        items: [
          'Aircraft refueling',
          'De-icing and anti-icing',
          'Lavatory and water services',
          'Aircraft cleaning (interior/exterior)',
          'Catering loading',
          'Security checks'
        ]
      },
      {
        category: 'Operations Support',
        items: [
          'Load planning and control',
          'Flight documentation',
          'Weight and balance',
          'Operational messaging',
          'Crew briefings',
          'Dispatch services'
        ]
      }
    ],
    processSteps: [
      {
        number: 1,
        title: 'Aircraft Arrival',
        description: 'Aircraft guided to designated parking position with marshalling signals and precision ground guidance.'
      },
      {
        number: 2,
        title: 'Ramp Setup',
        description: 'Ground support equipment positioned, chocks placed, and services connected (power, air, stairs).'
      },
      {
        number: 3,
        title: 'Turnaround Operations',
        description: 'Simultaneous execution of refueling, cleaning, catering, baggage/cargo handling, and other services.'
      },
      {
        number: 4,
        title: 'Pre-Departure',
        description: 'Final inspections, load planning confirmation, documentation completion, and crew briefing.'
      },
      {
        number: 5,
        title: 'Aircraft Departure',
        description: 'Pushback, engine start support, and safe dispatch with all ground equipment cleared.'
      }
    ],
    benefits: [
      {
        title: 'Quick Turnarounds',
        description: 'Efficient procedures and experienced teams ensure minimal ground time, maximizing aircraft utilization.'
      },
      {
        title: 'Safety First',
        description: 'Rigorous safety protocols and training programs ensuring zero-incident operations.'
      },
      {
        title: 'Modern Equipment',
        description: 'Fleet of modern, well-maintained ground support equipment suitable for all aircraft types.'
      },
      {
        title: 'Flexible Service',
        description: 'Customizable service packages to meet specific airline requirements and operational needs.'
      }
    ],
    specifications: [
      {
        label: 'Aircraft Types',
        value: 'Narrow-body to wide-body commercial aircraft'
      },
      {
        label: 'Turnaround Times',
        value: 'Narrow-body: 25-35 min, Wide-body: 45-60 min'
      },
      {
        label: 'Operating Hours',
        value: '24/7 operations'
      },
      {
        label: 'Equipment Fleet',
        value: '50+ modern GSE units'
      }
    ],
    pricing: {
      note: 'Ground handling fees vary based on aircraft type, services required, and frequency of operations.',
      contactForQuote: true
    },
    contactInfo: {
      department: 'Ground Handling Operations',
      phone: '+971 9 2226290',
      email: 'groundhandling@fja.ae',
      hours: '24/7'
    },
    relatedServices: [
      { title: 'Maintenance & Repair', href: '/services/maintenance-repair' },
      { title: 'Cargo Services', href: '/corporate/cargo' },
      { title: 'Aviation Services', href: '/corporate/aviation' }
    ],
    faqs: [
      {
        question: 'What ground handling services do you offer?',
        answer: 'We offer complete ground handling services including ramp services, passenger handling, baggage and cargo operations, aircraft services, and operational support.'
      },
      {
        question: 'Can you handle all aircraft types?',
        answer: 'Yes, we have equipment and trained personnel to handle aircraft from regional jets to wide-body aircraft including B777, A330, and similar types.'
      },
      {
        question: 'How do I establish a ground handling contract?',
        answer: 'Contact our commercial team to discuss your requirements. We offer flexible contracts ranging from per-flight services to long-term handling agreements.'
      },
      {
        question: 'Do you provide 24/7 services?',
        answer: 'Yes, all our ground handling services are available 24/7 to support round-the-clock flight operations.'
      },
      {
        question: 'What safety standards do you follow?',
        answer: 'We comply with IATA ISAGO standards, local GCAA regulations, and follow comprehensive safety management systems with regular audits and training.'
      }
    ]
  }
}

// Helper function to get service page data by slug
export function getServicePageData(slug: string): ServicePageData | undefined {
  return servicesPageData[slug]
}

// Helper function to get all service slugs
export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesPageData)
}

export type TService = Awaited<ReturnType<typeof getServices>>[number]
export interface BentoPageData {
  slug: string
  title: string
  subtitle: string
  description: string
  sections: {
    title: string
    content: string
    items?: string[]
  }[]
  contactInfo?: {
    phone?: string
    email?: string
    hours?: string
    location?: string
  }
  relatedLinks: {
    title: string
    description: string
    href: string
  }[]
}

export const bentoPageData: Record<string, BentoPageData> = {
  'discover-shops': {
    slug: 'discover-shops',
    title: 'Discover Shops',
    subtitle: 'Premium Shopping Experience at Fujairah International Airport',
    description: 'Explore our curated selection of duty-free shops, luxury boutiques, and specialty stores offering the finest products from around the world. From designer fashion to local handicrafts, find everything you need for your journey.',
    sections: [
      {
        title: 'Duty-Free Shopping',
        content: 'Our world-class duty-free shopping area features exclusive products at competitive prices. Save on international brands while enjoying a premium shopping experience.',
        items: [
          'Premium perfumes and cosmetics from leading brands',
          'Fine wines, spirits, and champagne selection',
          'Swiss watches and luxury jewelry',
          'Electronics and accessories',
          'Tobacco products and cigars'
        ]
      },
      {
        title: 'Fashion & Accessories',
        content: 'Browse through our collection of fashion boutiques featuring the latest trends and timeless classics.',
        items: [
          'Designer clothing and accessories',
          'Leather goods and luggage',
          'Sunglasses and eyewear',
          'Jewelry and watches',
          'Local and international fashion brands'
        ]
      },
      {
        title: 'Specialty Stores',
        content: 'Discover unique gifts, souvenirs, and specialty items that capture the essence of Fujairah and the UAE.',
        items: [
          'Traditional Emirati handicrafts',
          'Arabic perfumes and oud',
          'Dates and local delicacies',
          'Books, magazines, and travel essentials',
          'Children\'s toys and games'
        ]
      }
    ],
    contactInfo: {
      phone: '+971 9 222 1111',
      email: 'shopping@fujairahairport.ae',
      hours: 'Open 24/7',
      location: 'Departure Terminal, Level 2'
    },
    relatedLinks: [
      {
        title: 'Restaurants',
        description: 'Explore dining options',
        href: '/ben-services/restaurants'
      },
      {
        title: 'Technical Support',
        description: 'View technical services',
        href: '/ben-services/technical-support'
      }
    ]
  },
  'sleeps-options': {
    slug: 'sleeps-options',
    title: 'Sleep Options',
    subtitle: 'Rest and Recharge During Your Journey',
    description: 'Whether you need a few hours of rest between flights or a comfortable overnight stay, our sleep facilities offer the perfect solution. Enjoy private, quiet spaces designed for maximum comfort and relaxation.',
    sections: [
      {
        title: 'Airport Sleep Pods',
        content: 'Modern, soundproof sleep pods equipped with all the amenities you need for a refreshing rest.',
        items: [
          'Fully reclining beds with premium bedding',
          'Individual climate control',
          'USB charging ports and power outlets',
          'Privacy blinds and mood lighting',
          'Complimentary WiFi and entertainment system'
        ]
      },
      {
        title: 'Transit Hotel',
        content: 'Our on-site transit hotel offers full hotel amenities without leaving the airport.',
        items: [
          'Hourly and overnight room rates',
          'Private bathrooms with shower facilities',
          'Workspace and business amenities',
          'Room service available 24/7',
          'Express check-in and check-out'
        ]
      },
      {
        title: 'Relaxation Lounges',
        content: 'Comfortable seating areas designed for rest and relaxation between flights.',
        items: [
          'Quiet zones with comfortable recliners',
          'Complimentary refreshments',
          'Reading materials and entertainment',
          'Power outlets at every seat',
          'Shower facilities available'
        ]
      }
    ],
    contactInfo: {
      phone: '+971 9 222 2222',
      email: 'sleep@fujairahairport.ae',
      hours: 'Available 24/7',
      location: 'Transit Area, Level 3'
    },
    relatedLinks: [
      {
        title: 'Refresh & Relax',
        description: 'Spa and wellness services',
        href: '/ben-services/refresh-relax'
      },
      {
        title: 'Restaurants',
        description: 'Dining options',
        href: '/ben-services/restaurants'
      }
    ]
  },
  'restaurants': {
    slug: 'restaurants',
    title: 'Restaurants',
    subtitle: 'Culinary Excellence at Every Gate',
    description: 'Savor delicious cuisine from around the world at our diverse selection of restaurants and cafes. From quick bites to fine dining, we offer something for every taste and schedule.',
    sections: [
      {
        title: 'Fine Dining',
        content: 'Experience world-class cuisine in an elegant airport setting with our premium dining options.',
        items: [
          'International fusion cuisine',
          'Fresh seafood and steaks',
          'Extensive wine and beverage menu',
          'Private dining areas available',
          'Halal-certified options'
        ]
      },
      {
        title: 'Quick Service',
        content: 'Fast, delicious options perfect for travelers on the go.',
        items: [
          'International fast food chains',
          'Fresh sandwiches and salads',
          'Pizza and pasta stations',
          'Asian noodle bars',
          'Grab-and-go options'
        ]
      },
      {
        title: 'Cafes & Bakeries',
        content: 'Premium coffee, fresh pastries, and light snacks throughout the terminal.',
        items: [
          'Specialty coffee and espresso drinks',
          'Fresh-baked pastries and desserts',
          'Healthy smoothies and juices',
          'Light breakfast and brunch items',
          'Vegan and vegetarian options'
        ]
      },
      {
        title: 'Local Cuisine',
        content: 'Taste the authentic flavors of Emirati and Middle Eastern cuisine.',
        items: [
          'Traditional Arabic mezze',
          'Fresh shawarma and grills',
          'Authentic biryani and rice dishes',
          'Arabic coffee and dates',
          'Regional specialties'
        ]
      }
    ],
    contactInfo: {
      phone: '+971 9 222 3333',
      email: 'dining@fujairahairport.ae',
      hours: 'Various hours - see individual restaurants',
      location: 'Throughout all terminals'
    },
    relatedLinks: [
      {
        title: 'Discover Shops',
        description: 'Browse airport shopping',
        href: '/ben-services/discover-shops'
      },
      {
        title: 'Sleep Options',
        description: 'Rest facilities',
        href: '/ben-services/sleeps-options'
      }
    ]
  },
  'refresh-relax': {
    slug: 'refresh-relax',
    title: 'Refresh & Relax',
    subtitle: 'Wellness and Relaxation Services',
    description: 'Rejuvenate your body and mind with our comprehensive wellness facilities. From spa treatments to fitness centers, we help you arrive at your destination feeling refreshed and energized.',
    sections: [
      {
        title: 'Airport Spa',
        content: 'Indulge in premium spa treatments designed to relieve travel stress and revitalize your senses.',
        items: [
          'Therapeutic massages (30, 60, or 90 minutes)',
          'Express facial treatments',
          'Manicure and pedicure services',
          'Aromatherapy and reflexology',
          'Private treatment rooms'
        ]
      },
      {
        title: 'Shower Facilities',
        content: 'Refresh yourself with our modern, clean shower facilities available throughout the airport.',
        items: [
          'Private shower cubicles',
          'Premium toiletries provided',
          'Fresh towels and amenities',
          'Hair dryers and styling tools',
          'Accessible facilities available'
        ]
      },
      {
        title: 'Fitness Center',
        content: 'Stay active during your layover with our fully-equipped fitness facility.',
        items: [
          'Modern cardio equipment',
          'Free weights and strength training',
          'Yoga and stretching area',
          'Personal training available',
          'Locker rooms with showers'
        ]
      },
      {
        title: 'Relaxation Zones',
        content: 'Quiet spaces designed for meditation, prayer, and peaceful contemplation.',
        items: [
          'Multi-faith prayer rooms',
          'Meditation and quiet zones',
          'Comfortable seating areas',
          'Natural lighting and plants',
          'Phone-free environments'
        ]
      }
    ],
    contactInfo: {
      phone: '+971 9 222 4444',
      email: 'wellness@fujairahairport.ae',
      hours: '6:00 AM - 11:00 PM',
      location: 'Terminal 1, Level 3'
    },
    relatedLinks: [
      {
        title: 'Sleep Options',
        description: 'Rest facilities',
        href: '/ben-services/sleeps-options'
      },
      {
        title: 'Restaurants',
        description: 'Dining options',
        href: '/ben-services/restaurants'
      }
    ]
  },
  'technical-support': {
    slug: 'technical-support',
    title: 'Technical Support',
    subtitle: 'Technology and Business Services',
    description: 'Stay connected and productive with our comprehensive technical support services. From device charging to full business centers, we keep you powered and connected.',
    sections: [
      {
        title: 'Business Center',
        content: 'Full-service business facilities for the traveling professional.',
        items: [
          'High-speed printing and copying',
          'Scanning and document services',
          'Private meeting rooms',
          'Video conferencing facilities',
          'Administrative support staff'
        ]
      },
      {
        title: 'Charging Stations',
        content: 'Never run out of power with our extensive charging infrastructure.',
        items: [
          'Universal power outlets at all seating areas',
          'USB charging ports',
          'Wireless charging pads',
          'Charging lockers for secure storage',
          'Multiple device charging possible'
        ]
      },
      {
        title: 'WiFi & Connectivity',
        content: 'Stay connected with high-speed internet access throughout the airport.',
        items: [
          'Free unlimited WiFi (basic)',
          'Premium high-speed WiFi available',
          'WiFi calling supported',
          'Network coverage in all areas',
          'Technical support desk'
        ]
      },
      {
        title: 'Device Support',
        content: 'Technical assistance for your electronic devices and connectivity issues.',
        items: [
          'Device troubleshooting',
          'Cable and adapter rental',
          'Emergency phone charging',
          'Software assistance',
          'IT helpdesk support'
        ]
      }
    ],
    contactInfo: {
      phone: '+971 9 222 5555',
      email: 'tech@fujairahairport.ae',
      hours: 'Open 24/7',
      location: 'Throughout all terminals'
    },
    relatedLinks: [
      {
        title: 'eServices Registration',
        description: 'Register for online services',
        href: '/ben-services/eservices-registration'
      },
      {
        title: 'External Services',
        description: 'Transportation and more',
        href: '/ben-services/external-services'
      }
    ]
  },
  'external-services': {
    slug: 'external-services',
    title: 'External Services',
    subtitle: 'Transportation and Off-Airport Services',
    description: 'Seamlessly connect to your final destination with our comprehensive range of ground transportation and external service options.',
    sections: [
      {
        title: 'Ground Transportation',
        content: 'Multiple transport options to get you where you need to go.',
        items: [
          'Official airport taxi service',
          'Ride-sharing pickup zones (Uber, Careem)',
          'Private car and limousine service',
          'Shuttle buses to major hotels',
          'Public bus connections'
        ]
      },
      {
        title: 'Car Rental',
        content: 'Rent a vehicle directly from the airport with our partner agencies.',
        items: [
          'International car rental brands',
          'Economy to luxury vehicle options',
          '24-hour pickup and return',
          'GPS navigation available',
          'Insurance and assistance packages'
        ]
      },
      {
        title: 'Hotel Bookings',
        content: 'Need a place to stay? We can help arrange accommodation.',
        items: [
          'Airport hotel reservations',
          'City center hotel bookings',
          'Special rates for transit passengers',
          'Day-use rooms available',
          'Shuttle service to hotels'
        ]
      },
      {
        title: 'Tours & Activities',
        content: 'Make the most of your time in Fujairah with organized tours and activities.',
        items: [
          'City tours and excursions',
          'Desert safari experiences',
          'Diving and water sports',
          'Cultural and heritage tours',
          'Customized itineraries'
        ]
      },
      {
        title: 'Concierge Services',
        content: 'Premium assistance for all your travel needs and arrangements.',
        items: [
          'Restaurant reservations',
          'Event and attraction tickets',
          'Translation services',
          'Lost luggage assistance',
          'Emergency travel support'
        ]
      }
    ],
    contactInfo: {
      phone: '+971 9 222 6666',
      email: 'concierge@fujairahairport.ae',
      hours: 'Open 24/7',
      location: 'Arrivals Hall, Ground Floor'
    },
    relatedLinks: [
      {
        title: 'Landing Permission',
        description: 'Apply for landing permits',
        href: '/ben-services/landing-permission'
      },
      {
        title: 'Technical Support',
        description: 'Business services',
        href: '/ben-services/technical-support'
      }
    ]
  },
  'eservices-registration': {
    slug: 'eservices-registration',
    title: 'Register for eServices',
    subtitle: 'Your Digital Gateway to Fujairah International Airport',
    description: 'FIA is pleased to bring you a better experience to connect with us via our eServices. Through our Portal, you can apply for various permits, NOC\'s and other services to enhance your company and receive responses back to your inquiries to get your business connected at FIA.',
    sections: [
      {
        title: 'Online Portal Access',
        content: 'Our comprehensive eServices portal provides streamlined access to all airport services and documentation.',
        items: [
          'Secure account creation with email verification',
          'Single sign-on for all FIA digital services',
          'Real-time application status tracking',
          'Document management and archive access',
          'Mobile-responsive interface for on-the-go access'
        ]
      },
      {
        title: 'Available Services',
        content: 'Access a wide range of services through our digital platform, designed to make your operations seamless.',
        items: [
          'Permit applications and renewals',
          'No Objection Certificates (NOC) requests',
          'Ground handling service applications',
          'Airport facility booking and reservations',
          'Commercial activity licenses',
          'Security clearance applications'
        ]
      },
      {
        title: 'Application Process',
        content: 'Our streamlined digital process ensures quick turnaround times and transparent communication.',
        items: [
          'Step-by-step guided application forms',
          'Document upload with format validation',
          'Automated payment gateway integration',
          'Email notifications for application updates',
          'Direct communication with relevant departments',
          'Digital approval certificates and permits'
        ]
      },
      {
        title: 'Benefits of eServices',
        content: 'Experience the advantages of our digital transformation initiative.',
        items: [
          '24/7 access to submit and track applications',
          'Reduced processing times by up to 50%',
          'Paperless documentation and eco-friendly process',
          'Transparent fee structure and online payments',
          'Historical records and easy reapplication',
          'Multi-language support (English/Arabic)'
        ]
      },
      {
        title: 'Getting Started',
        content: 'Registration is quick and easy. Follow these simple steps to get started with FIA eServices.',
        items: [
          'Visit our eServices portal at eservices.fujairahairport.ae',
          'Click "Register" and fill in your company details',
          'Upload required business registration documents',
          'Verify your email address',
          'Complete your profile with authorized signatory information',
          'Start submitting applications immediately upon approval'
        ]
      }
    ],
    contactInfo: {
      phone: '+971 9 222 7777',
      email: 'eservices@fujairahairport.ae',
      hours: 'Portal available 24/7 | Support: 8:00 AM - 6:00 PM',
      location: 'Online Portal | Admin Office: Terminal 1, Level 1'
    },
    relatedLinks: [
      {
        title: 'Landing Permission',
        description: 'Apply for flight permits',
        href: '/ben-services/landing-permission'
      },
      {
        title: 'Technical Support',
        description: 'Portal assistance',
        href: '/ben-services/technical-support'
      }
    ]
  },
  'landing-permission': {
    slug: 'landing-permission',
    title: 'Landing Permission',
    subtitle: 'Open Sky Policy and Flight Operations',
    description: 'FIA has an open sky policy. To apply for landing permission, connect below on instructions and contact information. We facilitate smooth operations for all aircraft types with our streamlined landing permission process.',
    sections: [
      {
        title: 'Open Sky Policy',
        content: 'Fujairah International Airport operates under an open sky policy, welcoming domestic and international flights with streamlined procedures.',
        items: [
          'No bilateral restrictions for most aircraft types',
          'Competitive landing and parking fees',
          'Support for scheduled and charter operations',
          'Cargo and passenger flight operations',
          '24/7 flight operations capability',
          'Modern runway and taxiway infrastructure'
        ]
      },
      {
        title: 'Application Requirements',
        content: 'To obtain landing permission, the following documents and information must be submitted.',
        items: [
          'Aircraft registration certificate and insurance',
          'Air Operator Certificate (AOC) or equivalent',
          'Flight schedule with arrival and departure times',
          'Purpose of flight (passenger, cargo, charter, etc.)',
          'Crew list and passenger manifest (if applicable)',
          'Advance notice: 48 hours for scheduled, 72 hours for charter',
          'Payment confirmation for landing and handling fees'
        ]
      },
      {
        title: 'Application Process',
        content: 'Our landing permission process is designed for efficiency and quick turnaround times.',
        items: [
          'Submit application via email or eServices portal',
          'Include all required documentation in English or Arabic',
          'Receive acknowledgment within 2 hours during business hours',
          'Landing slot confirmation within 24 hours',
          'Final clearance issued 12 hours before arrival',
          'Emergency landing requests processed immediately'
        ]
      },
      {
        title: 'Ground Handling Services',
        content: 'Comprehensive ground handling services available through approved handlers.',
        items: [
          'Aircraft marshalling and parking',
          'Passenger boarding and disembarkation',
          'Baggage and cargo handling',
          'Aircraft refueling services',
          'Cabin cleaning and catering',
          'Technical support and maintenance coordination',
          'VIP/CIP passenger services'
        ]
      },
      {
        title: 'Fees and Charges',
        content: 'Transparent fee structure with competitive rates for all services.',
        items: [
          'Landing fees based on aircraft MTOW',
          'Parking charges (first 3 hours free)',
          'Passenger service charges',
          'Navigation and terminal charges',
          'Security fees',
          'Discounts available for scheduled operations',
          'Payment accepted via wire transfer or credit'
        ]
      },
      {
        title: 'Contact for Landing Permission',
        content: 'Our operations team is available 24/7 to assist with landing permission requests.',
        items: [
          'Email: ops@fujairahairport.ae',
          'Phone: +971 9 222 8888 (Operations)',
          'Emergency: +971 50 XXX XXXX (24/7 Hotline)',
          'Fax: +971 9 222 8889',
          'AFTN: OMFJZPZX',
          'SITA: FJRAIXH'
        ]
      }
    ],
    contactInfo: {
      phone: '+971 9 222 8888',
      email: 'ops@fujairahairport.ae',
      hours: 'Operations: 24/7 | Admin: 8:00 AM - 6:00 PM',
      location: 'Operations Center, Airside'
    },
    relatedLinks: [
      {
        title: 'eServices Registration',
        description: 'Register for online services',
        href: '/ben-services/eservices-registration'
      },
      {
        title: 'External Services',
        description: 'Ground handling partners',
        href: '/ben-services/external-services'
      }
    ]
  },
  'support': {
    slug: 'support',
    title: 'Premium Support',
    subtitle: '24/7 Personalized Assistance for Your Comfort',
    description: 'Experience world-class customer service with our dedicated support team. Whether you need help with flight information, special assistance, or have any questions, our professional staff is here to ensure your journey through Fujairah International Airport is smooth and comfortable.',
    sections: [
      {
        title: 'Customer Service Desk',
        content: 'Our main customer service desks are strategically located throughout the airport to provide immediate assistance.',
        items: [
          'Flight information and gate assistance',
          'Lost and found services',
          'Baggage inquiry and tracking',
          'Rebooking and flight change support',
          'General airport navigation help',
          'Multi-language support (English, Arabic, Hindi, Urdu)'
        ]
      },
      {
        title: 'Special Assistance Services',
        content: 'We provide dedicated support for passengers requiring additional care and assistance.',
        items: [
          'Wheelchair and mobility assistance',
          'Escort services for unaccompanied minors',
          'Support for elderly passengers',
          'Assistance for passengers with disabilities',
          'Medical support coordination',
          'Pre-booking available for seamless service'
        ]
      },
      {
        title: 'VIP & Premium Services',
        content: 'Elevated service for our premium travelers and those seeking an enhanced airport experience.',
        items: [
          'Fast-track immigration and security',
          'Personal meet and greet service',
          'Dedicated check-in counters',
          'Porter and baggage assistance',
          'Lounge access coordination',
          'Luxury car transfers'
        ]
      },
      {
        title: 'Communication Channels',
        content: 'Multiple ways to reach our support team for your convenience.',
        items: [
          '24/7 helpline available',
          'Live chat support on website and app',
          'WhatsApp assistance',
          'Email support with quick response time',
          'Social media customer service',
          'Information kiosks throughout terminals'
        ]
      }
    ],
    contactInfo: {
      phone: '+971 9 222 0000',
      email: 'support@fujairahairport.ae',
      hours: 'Available 24/7',
      location: 'Multiple desks throughout all terminals'
    },
    relatedLinks: [
      {
        title: 'External Services',
        description: 'Transportation and concierge',
        href: '/ben-services/external-services'
      },
      {
        title: 'Refresh & Relax',
        description: 'Wellness services',
        href: '/ben-services/refresh-relax'
      }
    ]
  },
  'valet-parking': {
    slug: 'valet-parking',
    title: 'Valet Parking',
    subtitle: 'Premium Parking with Convenient Valet Service',
    description: 'Experience hassle-free parking with our professional valet service. Drive up, hand over your keys, and proceed directly to check-in. Your vehicle will be safely parked and ready for you upon return, making your airport experience truly seamless.',
    sections: [
      {
        title: 'Valet Parking Service',
        content: 'Our premium valet service offers the ultimate convenience for travelers who value their time.',
        items: [
          'Drive directly to terminal entrance',
          'Professional valet attendants',
          'Secure covered parking facility',
          'Vehicle inspection upon drop-off and pickup',
          'Complimentary car wash for extended stays (5+ days)',
          'Priority retrieval service'
        ]
      },
      {
        title: 'Standard Parking Options',
        content: 'Multiple parking solutions to suit different needs and budgets.',
        items: [
          'Short-term parking (hourly rates)',
          'Long-term parking (daily rates with discounts)',
          'Premium covered parking',
          'Economy open-air parking',
          'Motorcycle and bicycle parking',
          'EV charging stations available'
        ]
      },
      {
        title: 'Rates & Packages',
        content: 'Competitive pricing with various packages for frequent travelers.',
        items: [
          'Valet service: AED 150/day',
          'Premium covered: AED 100/day',
          'Standard parking: AED 75/day',
          'First hour free for all parking types',
          'Weekly packages available (save up to 20%)',
          'Monthly subscriptions for frequent flyers'
        ]
      },
      {
        title: 'Booking & Access',
        content: 'Easy reservation and contactless access for added convenience.',
        items: [
          'Online pre-booking available',
          'Mobile app parking reservations',
          'Contactless payment options',
          'License plate recognition entry/exit',
          'Digital parking receipts',
          'SMS notifications for vehicle status'
        ]
      },
      {
        title: 'Additional Services',
        content: 'Value-added services to enhance your parking experience.',
        items: [
          'Battery jump-start assistance',
          'Tire inflation service',
          'Minor car detailing (by request)',
          'Luggage assistance to/from vehicle',
          '24/7 security monitoring',
          'Lost ticket assistance'
        ]
      }
    ],
    contactInfo: {
      phone: '+971 9 222 9999',
      email: 'parking@fujairahairport.ae',
      hours: 'Valet Service: 24/7 | Parking: 24/7',
      location: 'Terminal Entrance & Parking Lots A, B, C'
    },
    relatedLinks: [
      {
        title: 'External Services',
        description: 'Ground transportation',
        href: '/ben-services/external-services'
      },
      {
        title: 'Premium Support',
        description: 'Customer assistance',
        href: '/ben-services/support'
      }
    ]
  },
  'insurance': {
    slug: 'insurance',
    title: 'Travel Insurance',
    subtitle: 'Comprehensive Coverage for Complete Peace of Mind',
    description: 'Protect your journey with our comprehensive travel insurance options. From trip cancellation to medical emergencies, baggage loss to flight delays, our insurance partners provide coverage tailored to your needs, ensuring you travel with confidence.',
    sections: [
      {
        title: 'Trip Protection Plans',
        content: 'Comprehensive insurance coverage for all aspects of your journey.',
        items: [
          'Trip cancellation and interruption coverage',
          'Flight delay and missed connection compensation',
          'Emergency medical expenses abroad',
          'Emergency medical evacuation',
          'Repatriation coverage',
          '24/7 emergency assistance hotline'
        ]
      },
      {
        title: 'Baggage & Personal Effects',
        content: 'Protection for your belongings throughout your travel.',
        items: [
          'Lost, stolen, or damaged baggage coverage',
          'Delayed baggage compensation',
          'Personal items and valuables protection',
          'Sports equipment coverage',
          'Electronics and gadgets insurance',
          'Emergency replacement of essential items'
        ]
      },
      {
        title: 'Medical Coverage',
        content: 'Comprehensive health protection while traveling abroad.',
        items: [
          'Emergency medical treatment coverage up to $500,000',
          'Hospital admission and accommodation',
          'Prescription medication costs',
          'Dental emergency coverage',
          'COVID-19 related medical expenses',
          'Pre-existing condition coverage (optional)'
        ]
      },
      {
        title: 'Additional Benefits',
        content: 'Enhanced coverage for various travel situations.',
        items: [
          'Travel document replacement assistance',
          'Legal assistance abroad',
          'Personal liability coverage',
          'Rental car excess insurance',
          'Adventure sports coverage (optional)',
          'Cruise-specific coverage options'
        ]
      },
      {
        title: 'Easy Purchase Process',
        content: 'Quick and convenient insurance purchase options at the airport.',
        items: [
          'Purchase at airport insurance desks',
          'Online booking via website or app',
          'Instant policy issuance',
          'Digital policy documents',
          'Multiple insurance provider options',
          'Competitive rates and packages',
          'Coverage from 1 day to 365 days'
        ]
      }
    ],
    contactInfo: {
      phone: '+971 9 222 1212',
      email: 'insurance@fujairahairport.ae',
      hours: 'Desk: 6:00 AM - 11:00 PM | Online: 24/7',
      location: 'Departure Terminal, Level 2 (near check-in)'
    },
    relatedLinks: [
      {
        title: 'Premium Support',
        description: 'Customer assistance',
        href: '/ben-services/support'
      },
      {
        title: 'External Services',
        description: 'Additional travel services',
        href: '/ben-services/external-services'
      }
    ]
  }
}

export function getBentoPageBySlug(slug: string): BentoPageData | undefined {
  return bentoPageData[slug]
}

export function getAllBentoSlugs(): string[] {
  return Object.keys(bentoPageData)
}
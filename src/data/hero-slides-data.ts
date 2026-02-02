// Hero Slides Data - Fujairah International Airport
// Data for hero carousel slides and their corresponding detailed pages

export interface HeroSlideData {
  slug: string
  heading: string
  description: string
  buttonText: string
  image: string
  pageData: HeroPageData
}

export interface HeroPageData {
  title: string
  subtitle: string
  tagline: string
  heroImage: string
  features: Feature[]
  ctaSection: CTASection
  gallery?: string[]
  testimonials?: Testimonial[]
  faq?: FAQ[]
}

export interface Feature {
  icon: string
  title: string
  description: string
  details?: string[]
}

export interface CTASection {
  title: string
  description: string
  primaryButton: {
    text: string
    link: string
  }
  secondaryButton?: {
    text: string
    link: string
  }
}

export interface Testimonial {
  name: string
  role: string
  content: string
  avatar?: string
}

export interface FAQ {
  question: string
  answer: string
}

// ==================== HERO SLIDES DATA ====================

export const heroSlides: HeroSlideData[] = [
  // Slide 1: Shuttle Service
  {
    slug: 'shuttle-service',
    heading: 'Complementary Shuttle Services',
    description: 'Experience seamless airport transfers with our premium shuttle service. Comfort and convenience at every journey.',
    buttonText: 'Book Your Ride',
    image: '/images/fjr/slide-1.jpg',
    pageData: {
      title: 'Premium Airport Shuttle Service',
      subtitle: 'Complimentary Transfers Between FIA and Key Locations',
      tagline: 'Your journey starts with comfort',
      heroImage: '/images/fjr/slide-1.jpg',
      features: [
        {
          icon: 'Bus',
          title: 'Free Shuttle Service',
          description: 'Complimentary shuttle buses connecting FIA to major hotels and business districts in Fujairah.',
          details: [
            'Runs every 30 minutes during peak hours',
            'Comfortable air-conditioned buses',
            'Luggage assistance available',
            'Wheelchair accessible vehicles'
          ]
        },
        {
          icon: 'Clock',
          title: '24/7 Availability',
          description: 'Round-the-clock shuttle service to accommodate all flight schedules.',
          details: [
            'Early morning departures covered',
            'Late night arrivals supported',
            'Real-time tracking available',
            'SMS notification service'
          ]
        },
        {
          icon: 'MapPin',
          title: 'Multiple Routes',
          description: 'Strategic routes covering key areas across Fujairah and neighboring emirates.',
          details: [
            'Fujairah City Center Route',
            'Hotel District Express',
            'Business Bay Connection',
            'Coastal Resort Line'
          ]
        },
        {
          icon: 'Shield',
          title: 'Safe & Reliable',
          description: 'Professional drivers and well-maintained fleet ensuring your safety.',
          details: [
            'Licensed professional drivers',
            'Regular vehicle maintenance',
            'GPS tracked vehicles',
            'Insurance coverage included'
          ]
        }
      ],
      ctaSection: {
        title: 'Ready to Book Your Shuttle?',
        description: 'Reserve your complimentary shuttle ride in advance or walk up to our shuttle desk at arrivals.',
        primaryButton: {
          text: 'Book Now',
          link: '/book-shuttle'
        },
        secondaryButton: {
          text: 'View Schedule',
          link: '/shuttle-schedule'
        }
      },
      testimonials: [
        {
          name: 'Sarah Johnson',
          role: 'Business Traveler',
          content: 'The shuttle service is incredibly convenient. I never worry about transportation when flying into Fujairah!'
        },
        {
          name: 'Ahmed Al Mansouri',
          role: 'Frequent Flyer',
          content: 'Reliable, comfortable, and free! The FIA shuttle service exceeds expectations every time.'
        }
      ],
      faq: [
        {
          question: 'How do I book the shuttle service?',
          answer: 'You can book online through our website, via our mobile app, or simply walk up to the shuttle desk at the arrivals hall. Advance booking is recommended during peak seasons.'
        },
        {
          question: 'Is the shuttle service really free?',
          answer: 'Yes! The shuttle service is completely complimentary for all passengers flying through Fujairah International Airport.'
        },
        {
          question: 'What is the luggage allowance?',
          answer: 'Each passenger can bring standard luggage (2 checked bags + 1 carry-on). Oversized luggage may require prior arrangement.'
        },
        {
          question: 'Are pets allowed on the shuttle?',
          answer: 'Small pets in carriers are permitted. Please inform us during booking if you\'re traveling with a pet.'
        }
      ]
    }
  },

  // Slide 2: Destinations
  {
    slug: 'destinations',
    heading: 'Discover Amazing Destinations',
    description: 'Explore breathtaking locations and create unforgettable memories. Your adventure starts here.',
    buttonText: 'Explore Destinations',
    image: '/images/fjr/slide-2.jpg',
    pageData: {
      title: 'Explore Our Destinations',
      subtitle: 'Connect to the World Through Fujairah International Airport',
      tagline: 'Where will you go next?',
      heroImage: '/images/fjr/slide-2.jpg',
      features: [
        {
          icon: 'Globe',
          title: 'Regional Connections',
          description: 'Direct flights to major cities across the Middle East, Asia, and beyond.',
          details: [
            'Dubai, Abu Dhabi, Sharjah',
            'Cairo, Amman, Beirut',
            'Mumbai, Delhi, Karachi',
            'Istanbul, Doha, Kuwait'
          ]
        },
        {
          icon: 'Palmtree',
          title: 'Beach Destinations',
          description: 'Escape to tropical paradises and coastal getaways.',
          details: [
            'Maldives - Pristine beaches',
            'Seychelles - Island luxury',
            'Phuket - Thai paradise',
            'Zanzibar - African coast'
          ]
        },
        {
          icon: 'Mountain',
          title: 'Adventure Destinations',
          description: 'Thrilling destinations for adventure seekers and nature lovers.',
          details: [
            'Nepal - Himalayan treks',
            'Georgia - Mountain adventures',
            'Jordan - Desert expeditions',
            'Armenia - Ancient trails'
          ]
        },
        {
          icon: 'Building',
          title: 'City Escapes',
          description: 'Vibrant cities offering culture, shopping, and entertainment.',
          details: [
            'London - Historic capital',
            'Singapore - Garden city',
            'Barcelona - Mediterranean charm',
            'Tokyo - Modern metropolis'
          ]
        }
      ],
      ctaSection: {
        title: 'Ready to Book Your Next Adventure?',
        description: 'Browse our latest flight deals and start planning your perfect getaway.',
        primaryButton: {
          text: 'Search Flights',
          link: '/search-flights'
        },
        secondaryButton: {
          text: 'View All Destinations',
          link: '/all-destinations'
        }
      },
      faq: [
        {
          question: 'Which airlines operate from FIA?',
          answer: 'We host multiple international airlines including Air Arabia, Fly Dubai, Wizz Air, and several regional carriers connecting you to destinations worldwide.'
        },
        {
          question: 'How can I check available destinations?',
          answer: 'Visit our flight search page or check the departures board for real-time destination information. You can also contact our customer service for assistance.'
        },
        {
          question: 'Are there seasonal routes?',
          answer: 'Yes, we offer seasonal routes during peak travel periods. Check our website regularly for updates on new and seasonal destinations.'
        }
      ]
    }
  },

  // Slide 3: Luxury Travel
  {
    slug: 'luxury-packages',
    heading: 'Luxury Travel Experiences',
    description: 'Indulge in world-class accommodations and personalized service. Travel in style and comfort.',
    buttonText: 'View Packages',
    image: '/images/fjr/slide-3.jpg',
    pageData: {
      title: 'Luxury Travel Packages',
      subtitle: 'Curated Experiences for Discerning Travelers',
      tagline: 'Travel elevated',
      heroImage: '/images/fjr/slide-3.jpg',
      features: [
        {
          icon: 'Crown',
          title: 'VIP Airport Services',
          description: 'Exclusive airport experience with personalized assistance.',
          details: [
            'Private check-in counters',
            'Fast-track security clearance',
            'Premium lounge access',
            'Luxury airport transfers',
            'Personal concierge service'
          ]
        },
        {
          icon: 'Plane',
          title: 'Business Class Excellence',
          description: 'Fly in ultimate comfort with premium cabin experiences.',
          details: [
            'Lie-flat seats with direct aisle access',
            'Gourmet dining service',
            'Premium entertainment systems',
            'Exclusive amenity kits',
            'Priority boarding'
          ]
        },
        {
          icon: 'Hotel',
          title: '5-Star Accommodations',
          description: 'Partner hotels offering exceptional luxury and service.',
          details: [
            'Fairmont Fujairah Beach Resort',
            'InterContinental Fujairah Resort',
            'Radisson Blu Resort',
            'Address Fujairah Resort',
            'Exclusive villa options'
          ]
        },
        {
          icon: 'Sparkles',
          title: 'Bespoke Experiences',
          description: 'Tailored itineraries crafted for your preferences.',
          details: [
            'Private yacht excursions',
            'Helicopter tours',
            'Desert safari adventures',
            'Spa and wellness programs',
            'Cultural immersion experiences'
          ]
        }
      ],
      ctaSection: {
        title: 'Experience Luxury Travel',
        description: 'Contact our luxury travel specialists to design your perfect package.',
        primaryButton: {
          text: 'Request Consultation',
          link: '/luxury-consultation'
        },
        secondaryButton: {
          text: 'Browse Packages',
          link: '/luxury-packages'
        }
      },
      testimonials: [
        {
          name: 'Victoria Chen',
          role: 'Luxury Traveler',
          content: 'The VIP service at FIA is outstanding. From the moment I arrived, every detail was perfectly orchestrated.'
        },
        {
          name: 'Robert Williams',
          role: 'Executive Traveler',
          content: 'The luxury packages offer incredible value. The attention to detail and personalized service is unmatched.'
        }
      ],
      faq: [
        {
          question: 'What is included in luxury packages?',
          answer: 'Our luxury packages typically include business/first class flights, VIP airport services, 5-star accommodations, private transfers, and curated experiences. Each package is customizable to your preferences.'
        },
        {
          question: 'Can I customize a package?',
          answer: 'Absolutely! Our luxury travel specialists work with you to create a bespoke itinerary tailored to your interests, schedule, and budget.'
        },
        {
          question: 'Is there a minimum stay requirement?',
          answer: 'Package requirements vary. Most luxury packages are designed for 3-night minimum stays, but we can accommodate shorter or longer durations based on your needs.'
        }
      ]
    }
  },

  // Slide 4: Corporate Travel
  {
    slug: 'corporate-travel',
    heading: 'Business Travel Solutions',
    description: 'Efficient and professional services tailored for corporate travelers. Focus on what matters most.',
    buttonText: 'Learn More',
    image: '/images/fjr/hero33.jpg',
    pageData: {
      title: 'Corporate Travel Solutions',
      subtitle: 'Streamlined Services for Business Travelers',
      tagline: 'Business made simple',
      heroImage: '/images/fjr/hero33.jpg',
      features: [
        {
          icon: 'Briefcase',
          title: 'Corporate Accounts',
          description: 'Dedicated account management and preferential rates for businesses.',
          details: [
            'Volume-based discounts',
            'Consolidated monthly billing',
            'Priority booking access',
            'Flexible payment terms',
            'Detailed expense reporting'
          ]
        },
        {
          icon: 'Users',
          title: 'Meeting Facilities',
          description: 'Professional meeting rooms and conference spaces at the airport.',
          details: [
            'Fully equipped meeting rooms',
            'High-speed WiFi',
            'Video conferencing facilities',
            'Catering services available',
            'Administrative support'
          ]
        },
        {
          icon: 'Zap',
          title: 'Fast-Track Services',
          description: 'Expedited services to maximize your productivity.',
          details: [
            'Priority check-in lanes',
            'Express security screening',
            'Business lounge access',
            'Early boarding privileges',
            'Luggage priority handling'
          ]
        },
        {
          icon: 'Shield',
          title: 'Travel Management',
          description: 'Comprehensive travel management solutions for corporations.',
          details: [
            '24/7 booking support',
            'Travel policy compliance',
            'Duty of care programs',
            'Risk management',
            'Analytics and reporting'
          ]
        }
      ],
      ctaSection: {
        title: 'Enhance Your Corporate Travel',
        description: 'Speak with our corporate travel team to set up your business account.',
        primaryButton: {
          text: 'Contact Corporate Sales',
          link: '/corporate/contact'
        },
        secondaryButton: {
          text: 'Download Brochure',
          link: '/downloads/corporate-brochure.pdf'
        }
      },
      testimonials: [
        {
          name: 'Michael Thompson',
          role: 'CFO, Tech Solutions Ltd',
          content: 'FIA\'s corporate services have significantly improved our travel efficiency. The account management is exceptional.'
        },
        {
          name: 'Fatima Al Zaabi',
          role: 'HR Director, Emirates Trading Co',
          content: 'The fast-track services and business lounges make our team\'s frequent travels much more productive.'
        }
      ],
      faq: [
        {
          question: 'How do I set up a corporate account?',
          answer: 'Contact our corporate sales team to discuss your company\'s travel needs. We\'ll guide you through the application process and set up your account with preferential terms.'
        },
        {
          question: 'What are the benefits of a corporate account?',
          answer: 'Corporate accounts receive volume discounts, consolidated billing, priority services, dedicated account management, and access to our business facilities.'
        },
        {
          question: 'Is there a minimum spending requirement?',
          answer: 'Requirements vary based on the service level. Contact our team to discuss options that fit your company\'s travel volume.'
        }
      ]
    }
  },

  // Slide 5: Journey Planning
  {
    slug: 'plan-journey',
    heading: 'Plan Your Perfect Journey',
    description: 'From departure to arrival, we handle every detail. Sit back, relax, and enjoy the ride.',
    buttonText: 'Start Planning',
    image: '/images/fjr/airport2.jpg',
    pageData: {
      title: 'Journey Planning Hub',
      subtitle: 'Everything You Need for a Smooth Travel Experience',
      tagline: 'Plan with confidence',
      heroImage: '/images/fjr/airport2.jpg',
      features: [
        {
          icon: 'Search',
          title: 'Flight Search & Booking',
          description: 'Find and book the perfect flight for your journey.',
          details: [
            'Real-time flight availability',
            'Price comparison tools',
            'Flexible date search',
            'Multi-city booking options',
            'Seat selection'
          ]
        },
        {
          icon: 'Calendar',
          title: 'Travel Calendar',
          description: 'Plan around peak seasons and find the best travel times.',
          details: [
            'Best time to visit guides',
            'Peak season indicators',
            'Festival and event calendars',
            'Weather forecasts',
            'Fare trend predictions'
          ]
        },
        {
          icon: 'Map',
          title: 'Destination Guides',
          description: 'Comprehensive information about your destination.',
          details: [
            'Visa requirements',
            'Local customs and culture',
            'Transportation options',
            'Accommodation recommendations',
            'Must-see attractions'
          ]
        },
        {
          icon: 'CheckCircle',
          title: 'Pre-Travel Checklist',
          description: 'Stay organized with our comprehensive travel checklist.',
          details: [
            'Document requirements',
            'Vaccination information',
            'Travel insurance options',
            'Packing recommendations',
            'Airport arrival timing'
          ]
        }
      ],
      ctaSection: {
        title: 'Start Planning Today',
        description: 'Use our journey planning tools to create your perfect travel itinerary.',
        primaryButton: {
          text: 'Begin Planning',
          link: '/journey-planner'
        },
        secondaryButton: {
          text: 'Browse Destinations',
          link: '/destinations'
        }
      },
      faq: [
        {
          question: 'How far in advance should I book?',
          answer: 'We recommend booking 2-3 months in advance for international flights and 3-4 weeks for regional flights to secure the best rates and availability.'
        },
        {
          question: 'Can I save my travel plans?',
          answer: 'Yes! Create a free account to save your searches, compare options, and receive price alerts for your preferred routes.'
        },
        {
          question: 'Do you offer travel insurance?',
          answer: 'We partner with leading travel insurance providers. You can add comprehensive coverage during the booking process.'
        }
      ]
    }
  }
]

// Helper function to get slide by slug
export function getSlideBySlug(slug: string): HeroSlideData | undefined {
  return heroSlides.find(slide => slide.slug === slug)
}

// Helper function to get all slide slugs (for static generation)
export function getAllSlideSlugs(): string[] {
  return heroSlides.map(slide => slide.slug)
}
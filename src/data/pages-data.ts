// Fujairah International Airport - Pages Data
// This file contains all the content for traveller and corporate pages

export interface PageData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  sections: Section[];
  relatedLinks: RelatedLink[];
  contactInfo?: ContactInfo;
}

export interface Section {
  title: string;
  content: string;
  items?: string[];
  icon?: string;
}

export interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

export interface ContactInfo {
  phone?: string;
  email?: string;
  hours?: string;
  location?: string;
}

// ==================== TRAVELLERS PAGES ====================

export const travellerPages: Record<string, PageData> = {
  // Airport Information
  'terminal-map': {
    slug: 'terminal-map',
    title: 'Terminal Map',
    subtitle: 'Navigate FIA with Ease',
    description: 'Interactive terminal map and guide to help you find your way around Fujairah International Airport.',
    sections: [
      {
        title: 'Terminal Overview',
        content: 'Fujairah International Airport features a modern single-terminal design that efficiently handles both domestic and international flights. The terminal spans 12,000 square meters with state-of-the-art facilities.',
        items: ['Ground Floor: Arrivals Hall, Baggage Claim, Immigration', 'First Floor: Departures, Check-in Counters, Security', 'Mezzanine: VIP Lounges, Business Center']
      },
      {
        title: 'Key Locations',
        content: 'Find essential services and amenities throughout the terminal.',
        items: ['Check-in Counters: Gates 1-12', 'Security Checkpoint: Central Hall', 'Duty Free: After Security, Gate Area', 'Prayer Rooms: Both Floors, East Wing', 'Medical Center: Ground Floor, Near Arrivals']
      },
      {
        title: 'Accessibility',
        content: 'FIA is committed to providing accessible facilities for all passengers.',
        items: ['Wheelchair accessible throughout', 'Elevators and escalators available', 'Accessible restrooms on all floors', 'Priority lanes for passengers with special needs']
      }
    ],
    relatedLinks: [
      { title: 'Airport Facilities', href: 'a/travellers/facilities', description: 'Explore all terminal amenities' },
      { title: 'Transportation', href: '/travellers/transportation', description: 'Getting to and from the airport' },
      { title: 'Parking Information', href: '/travellers/parking', description: 'Parking options and rates' }
    ]
  },

  'facilities': {
    slug: 'facilities',
    title: 'Airport Facilities',
    subtitle: 'World-Class Amenities',
    description: 'Discover the comprehensive range of facilities and services available at Fujairah International Airport.',
    sections: [
      {
        title: 'Passenger Services',
        content: 'We offer a wide range of services to ensure your comfort and convenience.',
        items: ['24/7 Information Desks', 'Currency Exchange', 'ATM Services', 'Mobile Charging Stations', 'Luggage Wrapping Service', 'Porter Services']
      },
      {
        title: 'Dining & Shopping',
        content: 'Enjoy a variety of dining options and retail stores.',
        items: ['Cafes and Restaurants', 'Duty-Free Shopping', 'Convenience Stores', 'Local Souvenirs', 'Premium Brands']
      },
      {
        title: 'Comfort & Wellness',
        content: 'Relax and refresh before or after your flight.',
        items: ['Prayer Rooms', 'Mother & Baby Rooms', 'Smoking Lounges', 'Rest Areas', 'Spa Services']
      }
    ],
    relatedLinks: [
      { title: 'Airport Lounges', href: '/travellers/lounges', description: 'Premium lounge access' },
      { title: 'Dining Options', href: '/travellers/dining', description: 'Restaurants and cafes' },
      { title: 'Duty Free Shopping', href: '/travellers/duty-free', description: 'Tax-free shopping' }
    ]
  },

  'parking': {
    slug: 'parking',
    title: 'Parking Information',
    subtitle: 'Convenient Parking Solutions',
    description: 'Find the perfect parking option for your needs at Fujairah International Airport.',
    sections: [
      {
        title: 'Parking Options',
        content: 'FIA offers multiple parking solutions to suit different needs and budgets.',
        items: ['Short-Term Parking: AED 10/hour (First 30 min free)', 'Long-Term Parking: AED 50/day', 'Premium Parking: AED 100/day (Covered, near terminal)', 'Valet Parking: AED 150/day']
      },
      {
        title: 'Parking Facilities',
        content: 'All parking areas feature modern amenities for your convenience.',
        items: ['24/7 Security Surveillance', 'Well-lit Areas', 'Covered Parking Available', 'Electric Vehicle Charging Stations', 'Shuttle Service to Terminal']
      },
      {
        title: 'Payment Methods',
        content: 'Multiple payment options available for your convenience.',
        items: ['Cash', 'Credit/Debit Cards', 'Apple Pay & Google Pay', 'FIA Parking App', 'Pre-booking Available Online']
      }
    ],
    relatedLinks: [
      { title: 'Valet Parking', href: '/travellers/valet', description: 'Premium valet service' },
      { title: 'Transportation', href: '/travellers/transportation', description: 'Alternative transport options' },
      { title: 'Terminal Map', href: '/travellers/terminal-map', description: 'Find parking entrances' }
    ],
    contactInfo: {
      phone: '+971 9 2226333',
      email: 'parking@fja.ae',
      hours: 'Open 24/7'
    }
  },

  'transportation': {
    slug: 'transportation',
    title: 'Transportation',
    subtitle: 'Getting To & From FIA',
    description: 'Explore the various transportation options available to reach Fujairah International Airport.',
    sections: [
      {
        title: 'Taxi Services',
        content: 'Official taxi services are available 24/7 at the arrivals terminal.',
        items: ['Metered taxis available outside arrivals', 'Fixed rates to major destinations', 'Pre-booking available', 'Average fare to Fujairah City: AED 30-40']
      },
      {
        title: 'Bus Services',
        content: 'Public bus routes connect FIA to major cities in the UAE.',
        items: ['Route F1: FIA to Fujairah City Center', 'Route F2: FIA to Dubai (via Sharjah)', 'Route F3: FIA to Ras Al Khaimah', 'Buses run every 30-60 minutes']
      },
      {
        title: 'Car Rental',
        content: 'Multiple car rental companies operate at FIA.',
        items: ['Hertz', 'Avis', 'Budget', 'Europcar', 'Local UAE Rentals', 'Counters located in arrivals hall']
      },
      {
        title: 'Private Transfers',
        content: 'Book private transfers for a comfortable journey.',
        items: ['Luxury sedans and SUVs', 'Meet & greet service', 'Pre-booking recommended', 'Corporate accounts available']
      }
    ],
    relatedLinks: [
      { title: 'Parking Information', href: '/travellers/parking', description: 'Self-drive parking options' },
      { title: 'Terminal Map', href: '/travellers/terminal-map', description: 'Find transport pickup points' },
      { title: 'Special Assistance', href: '/travellers/special-assistance', description: 'Accessible transport' }
    ]
  },

  'wifi': {
    slug: 'wifi',
    title: 'WiFi & Connectivity',
    subtitle: 'Stay Connected',
    description: 'Enjoy complimentary high-speed WiFi throughout Fujairah International Airport.',
    sections: [
      {
        title: 'Free WiFi Access',
        content: 'FIA provides complimentary WiFi to all passengers and visitors.',
        items: ['Network Name: FIA-Free-WiFi', 'Speed: Up to 50 Mbps', 'Duration: Unlimited', 'No registration required for first 2 hours']
      },
      {
        title: 'Premium WiFi',
        content: 'Need faster speeds? Upgrade to our premium WiFi service.',
        items: ['Speed: Up to 200 Mbps', 'AED 25 for 24 hours', 'Available via FIA app or portal', 'Ideal for video calls and streaming']
      },
      {
        title: 'Charging Stations',
        content: 'Keep your devices powered throughout the terminal.',
        items: ['USB charging points at all gates', 'Universal power outlets available', 'Wireless charging pads in lounges', 'Portable charger rental available']
      }
    ],
    relatedLinks: [
      { title: 'Airport Facilities', href: '/travellers/facilities', description: 'All terminal amenities' },
      { title: 'Airport Lounges', href: '/travellers/lounges', description: 'Premium connectivity in lounges' },
      { title: 'Business Center', href: '/corporate/business-center', description: 'Business facilities' }
    ]
  },

  // Travel Essentials
  'luggage-guide': {
    slug: 'luggage-guide',
    title: 'Luggage Guide',
    subtitle: 'Pack Smart, Travel Easy',
    description: 'Everything you need to know about baggage allowances, restrictions, and handling at FIA.',
    sections: [
      {
        title: 'Carry-On Baggage',
        content: 'Standard carry-on allowances for most airlines operating at FIA.',
        items: ['Maximum dimensions: 55 x 40 x 20 cm', 'Maximum weight: 7-10 kg (varies by airline)', 'One personal item allowed (laptop bag, purse)', 'Liquids must be in containers ≤100ml']
      },
      {
        title: 'Checked Baggage',
        content: 'Checked baggage allowances vary by airline and ticket class.',
        items: ['Economy: 20-23 kg per bag', 'Business: 30-32 kg per bag', 'First Class: 40 kg per bag', 'Maximum dimensions: 158 cm (L+W+H)']
      },
      {
        title: 'Special Items',
        content: 'Guidelines for traveling with special items.',
        items: ['Sports equipment: Pre-arrange with airline', 'Musical instruments: May require seat purchase', 'Mobility aids: Carried free of charge', 'Pet carriers: Specific airline rules apply']
      },
      {
        title: 'Baggage Services',
        content: 'Additional services available at FIA.',
        items: ['Luggage wrapping: AED 30 per bag', 'Excess baggage storage', 'Lost baggage assistance', 'Baggage delivery service']
      }
    ],
    relatedLinks: [
      { title: 'Prohibited Items', href: '/travellers/prohibited-items', description: 'What you cannot bring' },
      { title: 'Lost & Found', href: '/travellers/lost-found', description: 'Lost baggage assistance' },
      { title: 'Security Information', href: '/travellers/security', description: 'Security screening process' }
    ]
  },

  'customs': {
    slug: 'customs',
    title: 'Customs & Immigration',
    subtitle: 'Entry Requirements',
    description: 'Information about customs regulations and immigration procedures at Fujairah International Airport.',
    sections: [
      {
        title: 'Immigration Process',
        content: 'Smooth entry into the UAE through FIA.',
        items: ['Valid passport required (6+ months validity)', 'Visa requirements vary by nationality', 'Smart gates available for UAE residents', 'E-visa holders use standard counters']
      },
      {
        title: 'Customs Allowances',
        content: 'Duty-free allowances for passengers entering the UAE.',
        items: ['Cigarettes: 400 cigarettes or 50 cigars', 'Alcohol: 4 liters (non-Muslims, 18+)', 'Perfume: Reasonable quantity for personal use', 'Gifts: Up to AED 3,000 value']
      },
      {
        title: 'Prohibited Items',
        content: 'Items not permitted to enter the UAE.',
        items: ['Narcotics and illegal drugs', 'Weapons and ammunition', 'Counterfeit goods', 'Certain medications (check in advance)', 'Pork products']
      },
      {
        title: 'Declaration',
        content: 'Items that must be declared to customs.',
        items: ['Currency exceeding AED 100,000', 'Commercial goods', 'Precious metals and stones', 'Controlled medications with prescription']
      }
    ],
    relatedLinks: [
      { title: 'Security Information', href: '/travellers/security', description: 'Security procedures' },
      { title: 'Prohibited Items', href: '/travellers/prohibited-items', description: 'Complete restricted items list' },
      { title: 'Arrivals', href: '/travellers/arrivals', description: 'Arrival procedures' }
    ]
  },

  'security': {
    slug: 'security',
    title: 'Security Information',
    subtitle: 'Your Safety is Our Priority',
    description: 'Learn about security procedures and how to prepare for a smooth screening experience at FIA.',
    sections: [
      {
        title: 'Security Screening',
        content: 'All passengers must pass through security screening before accessing departure gates.',
        items: ['Remove laptops and tablets from bags', 'Remove jackets, belts, and large jewelry', 'Liquids in clear plastic bags (max 1 liter total)', 'Shoes may need to be removed']
      },
      {
        title: 'Fast Track Security',
        content: 'Skip the queues with our fast track security service.',
        items: ['Available for Business/First Class passengers', 'Purchase available: AED 50 per person', 'Priority lane access', 'Dedicated screening equipment']
      },
      {
        title: 'Security Tips',
        content: 'Make your screening experience smoother.',
        items: ['Arrive at least 2 hours before departure', 'Have boarding pass and ID ready', 'Pack liquids accessibly', 'Wear easy-to-remove footwear']
      }
    ],
    relatedLinks: [
      { title: 'Prohibited Items', href: '/travellers/prohibited-items', description: 'Items not allowed' },
      { title: 'Luggage Guide', href: '/travellers/luggage-guide', description: 'Packing guidelines' },
      { title: 'Departures', href: '/travellers/departures', description: 'Departure procedures' }
    ]
  },

  'prohibited-items': {
    slug: 'prohibited-items',
    title: 'Prohibited Items',
    subtitle: 'Know Before You Pack',
    description: 'Complete list of items prohibited in carry-on and checked baggage at Fujairah International Airport.',
    sections: [
      {
        title: 'Never Allowed (Carry-on & Checked)',
        content: 'These items are strictly prohibited on all flights.',
        items: ['Explosives and fireworks', 'Flammable liquids and gases', 'Toxic substances', 'Radioactive materials', 'Corrosive materials']
      },
      {
        title: 'Not Allowed in Carry-on',
        content: 'These items must be placed in checked baggage.',
        items: ['Sharp objects (knives, scissors >6cm)', 'Sporting goods (bats, clubs, martial arts items)', 'Tools (hammers, drills, saws)', 'Liquids over 100ml', 'Lighters and matches (limited exceptions)']
      },
      {
        title: 'Restricted Items',
        content: 'Items that require special handling or documentation.',
        items: ['Lithium batteries (airline approval needed)', 'Firearms (special permit required)', 'Medications (carry prescription)', 'Duty-free alcohol (sealed bags only)']
      }
    ],
    relatedLinks: [
      { title: 'Luggage Guide', href: '/travellers/luggage-guide', description: 'Baggage allowances' },
      { title: 'Security Information', href: '/travellers/security', description: 'Security procedures' },
      { title: 'Customs & Immigration', href: '/travellers/customs', description: 'Customs regulations' }
    ]
  },

  'lost-found': {
    slug: 'lost-found',
    title: 'Lost & Found',
    subtitle: 'We\'re Here to Help',
    description: 'Report lost items or claim found belongings at Fujairah International Airport.',
    sections: [
      {
        title: 'Report Lost Items',
        content: 'Lost something at the airport? Here\'s how to report it.',
        items: ['Visit the Lost & Found counter in arrivals', 'File an online report at fja.ae/lost-found', 'Call our hotline: +971 9 2226444', 'Provide detailed description of the item']
      },
      {
        title: 'Claim Found Items',
        content: 'Steps to claim your belongings.',
        items: ['Bring valid ID (passport or Emirates ID)', 'Provide proof of ownership if possible', 'Items held for 90 days', 'Collection available 7 days a week']
      },
      {
        title: 'Lost Baggage',
        content: 'For baggage lost during flight, contact your airline directly.',
        items: ['Report immediately at airline counter', 'File a Property Irregularity Report (PIR)', 'Provide baggage tag receipt', 'Airlines handle delivery of delayed bags']
      }
    ],
    relatedLinks: [
      { title: 'Luggage Guide', href: '/travellers/luggage-guide', description: 'Baggage information' },
      { title: 'Airlines', href: '/travellers/airlines', description: 'Airline contact information' },
      { title: 'Contact Us', href: '/contact', description: 'Get in touch' }
    ],
    contactInfo: {
      phone: '+971 9 2226444',
      email: 'lostandfound@fja.ae',
      hours: '6:00 AM - 12:00 AM',
      location: 'Ground Floor, Arrivals Hall'
    }
  },

  // Services
  'lounges': {
    slug: 'lounges',
    title: 'Airport Lounges',
    subtitle: 'Relax in Comfort',
    description: 'Experience premium comfort and exclusive amenities at our airport lounges.',
    sections: [
      {
        title: 'Pearl Lounge',
        content: 'Our flagship lounge offering premium services.',
        items: ['Location: Airside, after security', 'Capacity: 80 guests', 'Complimentary food and beverages', 'Private meeting rooms', 'Shower facilities', 'Price: AED 200 / 3 hours']
      },
      {
        title: 'Business Lounge',
        content: 'Ideal for business travelers.',
        items: ['High-speed WiFi', 'Printing and scanning services', 'Conference facilities', 'Quiet work zones', 'Refreshments included', 'Price: AED 150 / 3 hours']
      },
      {
        title: 'Lounge Access',
        content: 'How to access our lounges.',
        items: ['Business/First Class passengers: Complimentary', 'Priority Pass members: Included', 'Walk-in guests: Pay at entrance', 'Pre-booking available online', 'Credit card lounge programs accepted']
      }
    ],
    relatedLinks: [
      { title: 'Dining Options', href: '/travellers/dining', description: 'Other dining choices' },
      { title: 'WiFi & Connectivity', href: '/travellers/wifi', description: 'Stay connected' },
      { title: 'Special Assistance', href: '/travellers/special-assistance', description: 'Accessibility services' }
    ]
  },

  'duty-free': {
    slug: 'duty-free',
    title: 'Duty Free Shopping',
    subtitle: 'Shop Tax-Free',
    description: 'Discover a world of tax-free shopping at FIA Duty Free.',
    sections: [
      {
        title: 'Product Categories',
        content: 'Explore our wide range of duty-free products.',
        items: ['Perfumes & Cosmetics', 'Electronics & Gadgets', 'Fashion & Accessories', 'Watches & Jewelry', 'Tobacco & Alcohol', 'Confectionery & Gifts', 'Local Souvenirs']
      },
      {
        title: 'Popular Brands',
        content: 'Shop your favorite international brands.',
        items: ['Chanel, Dior, Tom Ford', 'Apple, Samsung, Bose', 'Rolex, TAG Heuer, Cartier', 'Burberry, Gucci, Louis Vuitton', 'Godiva, Patchi, Bateel']
      },
      {
        title: 'Shopping Tips',
        content: 'Make the most of your duty-free experience.',
        items: ['Pre-order online for collection', 'Compare prices before purchase', 'Keep receipts for returns', 'Check alcohol/tobacco limits for destination', 'Arrive early for best selection']
      }
    ],
    relatedLinks: [
      { title: 'Dining Options', href: '/travellers/dining', description: 'Restaurants and cafes' },
      { title: 'Airport Facilities', href: '/travellers/facilities', description: 'All amenities' },
      { title: 'Customs & Immigration', href: '/travellers/customs', description: 'Import allowances' }
    ]
  },

  'dining': {
    slug: 'dining',
    title: 'Dining Options',
    subtitle: 'Savor Every Moment',
    description: 'Explore a variety of dining options at Fujairah International Airport.',
    sections: [
      {
        title: 'Restaurants',
        content: 'Full-service dining experiences.',
        items: ['Al Maha Restaurant - Arabic cuisine', 'The Terrace - International buffet', 'Spice Route - Asian fusion', 'Average meal: AED 60-120']
      },
      {
        title: 'Cafes & Quick Bites',
        content: 'Grab something quick before your flight.',
        items: ['Costa Coffee', 'Starbucks', 'Subway', 'Burger King', 'Tim Hortons', 'Average: AED 30-50']
      },
      {
        title: 'Specialty Options',
        content: 'Unique dining experiences.',
        items: ['Halal certified options available', 'Vegetarian and vegan menu items', 'Kids meals available', 'Allergy-friendly options', 'Fresh juice bars']
      }
    ],
    relatedLinks: [
      { title: 'Duty Free Shopping', href: '/travellers/duty-free', description: 'Tax-free shopping' },
      { title: 'Airport Lounges', href: '/travellers/lounges', description: 'Premium dining in lounges' },
      { title: 'Airport Facilities', href: '/travellers/facilities', description: 'All amenities' }
    ]
  },

  'special-assistance': {
    slug: 'special-assistance',
    title: 'Special Assistance',
    subtitle: 'Accessible Travel for All',
    description: 'FIA is committed to providing accessible services for passengers with disabilities and reduced mobility.',
    sections: [
      {
        title: 'Services Available',
        content: 'Complimentary assistance services for eligible passengers.',
        items: ['Wheelchair assistance', 'Electric buggy service', 'Dedicated check-in counters', 'Priority boarding', 'Escort through security and immigration', 'Assistance to/from aircraft']
      },
      {
        title: 'How to Request',
        content: 'Request assistance in advance for best service.',
        items: ['Contact airline at least 48 hours before flight', 'Request at check-in (subject to availability)', 'Use the FIA app to pre-book assistance', 'Call FIA Special Services: +971 9 2226555']
      },
      {
        title: 'Accessible Facilities',
        content: 'FIA facilities designed for accessibility.',
        items: ['Accessible restrooms throughout', 'Low counters at check-in', 'Hearing loops at information desks', 'Braille signage', 'Dedicated parking spaces']
      }
    ],
    relatedLinks: [
      { title: 'Terminal Map', href: '/travellers/terminal-map', description: 'Accessible routes' },
      { title: 'Transportation', href: '/travellers/transportation', description: 'Accessible transport' },
      { title: 'Contact Us', href: '/contact', description: 'Get assistance' }
    ],
    contactInfo: {
      phone: '+971 9 2226555',
      email: 'assistance@fja.ae',
      hours: 'Available 24/7'
    }
  },

  'prayer-rooms': {
    slug: 'prayer-rooms',
    title: 'Prayer Rooms',
    subtitle: 'Spaces for Reflection',
    description: 'Find quiet spaces for prayer and meditation at Fujairah International Airport.',
    sections: [
      {
        title: 'Prayer Room Locations',
        content: 'Prayer facilities are available throughout the terminal.',
        items: ['Ground Floor: Near Arrivals Hall', 'First Floor: Near Gate 5', 'Airside: Between Gates 8 and 9', 'Separate facilities for men and women']
      },
      {
        title: 'Facilities',
        content: 'All prayer rooms are equipped with essential amenities.',
        items: ['Ablution areas', 'Prayer mats available', 'Quran copies', 'Qibla direction indicated', 'Air-conditioned', 'Accessible facilities']
      },
      {
        title: 'Prayer Times',
        content: 'Prayer times are displayed at all prayer room entrances and updated daily.',
        items: ['Fajr, Dhuhr, Asr, Maghrib, Isha times posted', 'Friday prayers: Main prayer room', 'Multi-faith meditation room also available']
      }
    ],
    relatedLinks: [
      { title: 'Terminal Map', href: '/travellers/terminal-map', description: 'Find prayer rooms' },
      { title: 'Airport Facilities', href: '/travellers/facilities', description: 'All amenities' },
      { title: 'Special Assistance', href: '/travellers/special-assistance', description: 'Accessibility' }
    ]
  },

  // Flight Information
  'arrivals': {
    slug: 'arrivals',
    title: 'Arrivals',
    subtitle: 'Welcome to Fujairah',
    description: 'Real-time arrival information and guidance for passengers arriving at FIA.',
    sections: [
      {
        title: 'Arrival Process',
        content: 'Step-by-step guide to arriving at FIA.',
        items: ['1. Aircraft docking and disembarkation', '2. Immigration and passport control', '3. Baggage claim at designated carousel', '4. Customs clearance', '5. Exit through arrivals hall']
      },
      {
        title: 'Meeting Passengers',
        content: 'Information for those picking up arriving passengers.',
        items: ['Arrivals hall: Ground floor, main terminal', 'Public waiting area available', 'Short-term parking near arrivals', 'Real-time flight updates on screens', 'FIA app shows live arrival times']
      },
      {
        title: 'Average Processing Times',
        content: 'Typical times from landing to exit.',
        items: ['UAE Residents (Smart Gate): 15-20 minutes', 'Visa holders: 30-45 minutes', 'Visa on arrival: 45-60 minutes', 'Times may vary based on flight load']
      }
    ],
    relatedLinks: [
      { title: 'Flight Status', href: '/travellers/flight-status', description: 'Check flight times' },
      { title: 'Customs & Immigration', href: '/travellers/customs', description: 'Entry requirements' },
      { title: 'Transportation', href: '/travellers/transportation', description: 'Getting from the airport' }
    ]
  },

  'departures': {
    slug: 'departures',
    title: 'Departures',
    subtitle: 'Start Your Journey',
    description: 'Everything you need to know for a smooth departure from Fujairah International Airport.',
    sections: [
      {
        title: 'Departure Process',
        content: 'Step-by-step guide to departing from FIA.',
        items: ['1. Check-in at airline counter or kiosk', '2. Bag drop (if applicable)', '3. Immigration / passport control', '4. Security screening', '5. Proceed to boarding gate']
      },
      {
        title: 'Recommended Arrival Times',
        content: 'Arrive at the airport with plenty of time.',
        items: ['Domestic flights: 1.5 hours before departure', 'International flights: 3 hours before departure', 'First/Business class: 2 hours before departure', 'Peak periods: Add 30 minutes']
      },
      {
        title: 'Check-in Options',
        content: 'Multiple ways to check in for your flight.',
        items: ['Online check-in: Up to 48 hours before', 'Mobile check-in via airline app', 'Self-service kiosks at terminal', 'Counter check-in: Opens 3 hours before']
      }
    ],
    relatedLinks: [
      { title: 'Flight Status', href: '/travellers/flight-status', description: 'Check departure times' },
      { title: 'Security Information', href: '/travellers/security', description: 'Security procedures' },
      { title: 'Luggage Guide', href: '/travellers/luggage-guide', description: 'Baggage allowances' }
    ]
  },

  'airlines': {
    slug: 'airlines',
    title: 'Airlines',
    subtitle: 'Our Airline Partners',
    description: 'Information about airlines operating at Fujairah International Airport.',
    sections: [
      {
        title: 'Airlines at FIA',
        content: 'Currently operating airlines and their contact information.',
        items: ['Air Arabia - arabiaarabia.com', 'flydubai - flydubai.com', 'Emirates - emirates.com', 'Etihad Airways - etihad.com', 'Gulf Air - gulfair.com', 'Pakistan International Airlines - piac.com.pk']
      },
      {
        title: 'Airline Counters',
        content: 'Find your airline check-in counter.',
        items: ['Air Arabia: Counters 1-3', 'flydubai: Counters 4-6', 'Emirates: Counters 7-8', 'Etihad: Counter 9', 'Other airlines: Counters 10-12']
      },
      {
        title: 'Airline Lounges',
        content: 'Premium passengers can access airline lounges.',
        items: ['Business class passengers', 'First class passengers', 'Frequent flyer elite members', 'Day pass purchases available']
      }
    ],
    relatedLinks: [
      { title: 'Destinations', href: '/travellers/destinations', description: 'Where we fly' },
      { title: 'Flight Status', href: '/travellers/flight-status', description: 'Check flight times' },
      { title: 'Lost & Found', href: '/travellers/lost-found', description: 'Baggage assistance' }
    ]
  },

  'destinations': {
    slug: 'destinations',
    title: 'Destinations',
    subtitle: 'Explore the World from FIA',
    description: 'Discover all destinations served from Fujairah International Airport.',
    sections: [
      {
        title: 'Middle East',
        content: 'Regional connections across the Gulf.',
        items: ['Bahrain (BAH)', 'Kuwait (KWI)', 'Muscat (MCT)', 'Doha (DOH)', 'Riyadh (RUH)', 'Jeddah (JED)']
      },
      {
        title: 'South Asia',
        content: 'Connections to the Indian subcontinent.',
        items: ['Mumbai (BOM)', 'Delhi (DEL)', 'Karachi (KHI)', 'Lahore (LHE)', 'Islamabad (ISB)', 'Dhaka (DAC)', 'Colombo (CMB)']
      },
      {
        title: 'Africa & Beyond',
        content: 'International connections.',
        items: ['Cairo (CAI)', 'Addis Ababa (ADD)', 'Nairobi (NBO)', 'Bangkok (BKK)', 'Manila (MNL)']
      }
    ],
    relatedLinks: [
      { title: 'Airlines', href: '/travellers/airlines', description: 'Operating airlines' },
      { title: 'Flight Status', href: '/travellers/flight-status', description: 'Check flight times' },
      { title: 'Departures', href: '/travellers/departures', description: 'Departure information' }
    ]
  },

  'flight-status': {
    slug: 'flight-status',
    title: 'Flight Status',
    subtitle: 'Real-Time Updates',
    description: 'Check the status of arrivals and departures at Fujairah International Airport.',
    sections: [
      {
        title: 'Check Flight Status',
        content: 'Multiple ways to check your flight status.',
        items: ['Flight status board in terminal', 'FIA website: fja.ae/flights', 'FIA mobile app', 'SMS alerts: Text FIA <flight number> to 4567', 'Call FIA: +971 9 2226222']
      },
      {
        title: 'Status Definitions',
        content: 'Understanding flight status updates.',
        items: ['On Time: Flight operating as scheduled', 'Delayed: Flight departure/arrival postponed', 'Boarding: Passengers should proceed to gate', 'Departed: Flight has left FIA', 'Landed: Flight has arrived at FIA', 'Cancelled: Flight not operating']
      },
      {
        title: 'Notifications',
        content: 'Stay updated with automatic notifications.',
        items: ['Download FIA app for push notifications', 'Register for email alerts', 'Enable SMS notifications', 'Follow @FIA_Airport on social media']
      }
    ],
    relatedLinks: [
      { title: 'Arrivals', href: '/travellers/arrivals', description: 'Arrival information' },
      { title: 'Departures', href: '/travellers/departures', description: 'Departure information' },
      { title: 'Airlines', href: '/travellers/airlines', description: 'Airline contacts' }
    ]
  }
};

// ==================== CORPORATE PAGES ====================

export const corporatePages: Record<string, PageData> = {
  // eServices
  'online-booking': {
    slug: 'online-booking',
    title: 'Online Booking',
    subtitle: 'Book Services Digitally',
    description: 'Access FIA eServices portal to book and manage airport services online.',
    sections: [
      {
        title: 'Available Services',
        content: 'Services you can book through our online portal.',
        items: ['Ground handling services', 'Cargo handling requests', 'VIP services', 'Meeting room bookings', 'Parking reservations', 'Advertising space']
      },
      {
        title: 'How to Register',
        content: 'Create your eServices account.',
        items: ['Visit eservices.fja.ae', 'Click "Register New Account"', 'Provide company details and trade license', 'Verification within 2 business days', 'Start booking services immediately']
      },
      {
        title: 'Benefits',
        content: 'Advantages of using our online booking system.',
        items: ['24/7 service access', 'Real-time availability', 'Digital invoicing', 'Service history tracking', 'Dedicated account manager']
      }
    ],
    relatedLinks: [
      { title: 'Corporate Rates', href: '/corporate/corporate-rates', description: 'Special pricing' },
      { title: 'Billing Portal', href: '/corporate/billing', description: 'Payment management' },
      { title: 'Service Requests', href: '/corporate/requests', description: 'Submit requests' }
    ]
  },

  'corporate-rates': {
    slug: 'corporate-rates',
    title: 'Corporate Rates',
    subtitle: 'Exclusive Business Pricing',
    description: 'Discover special rates and packages for corporate clients at Fujairah International Airport.',
    sections: [
      {
        title: 'Corporate Packages',
        content: 'Tailored packages for business needs.',
        items: ['Frequent Traveler Package', 'Executive Lounge Membership', 'Corporate Parking Plans', 'Meet & Greet Services', 'VIP Terminal Access']
      },
      {
        title: 'Volume Discounts',
        content: 'Save more with higher usage.',
        items: ['10-20% discount on ground handling', '15% off cargo services (volume-based)', 'Complimentary services for premium accounts', 'Quarterly rebate programs']
      },
      {
        title: 'How to Apply',
        content: 'Steps to access corporate rates.',
        items: ['Submit corporate registration form', 'Provide trade license and company profile', 'Sign service agreement', 'Account activation within 5 days', 'Dedicated relationship manager assigned']
      }
    ],
    relatedLinks: [
      { title: 'Online Booking', href: '/corporate/online-booking', description: 'Book services' },
      { title: 'Service Agreements', href: '/corporate/agreements', description: 'Contract terms' },
      { title: 'Business Opportunities', href: '/corporate/opportunities', description: 'Partner with FIA' }
    ],
    contactInfo: {
      email: 'corporate@fja.ae',
      phone: '+971 9 2226600'
    }
  },

  'billing': {
    slug: 'billing',
    title: 'Billing Portal',
    subtitle: 'Manage Your Payments',
    description: 'Access invoices, make payments, and manage your account through our billing portal.',
    sections: [
      {
        title: 'Portal Features',
        content: 'Comprehensive billing management tools.',
        items: ['View and download invoices', 'Make online payments', 'Set up auto-pay', 'Track payment history', 'Generate statements', 'Dispute resolution']
      },
      {
        title: 'Payment Methods',
        content: 'Multiple payment options available.',
        items: ['Credit/Debit cards', 'Bank transfer', 'Corporate accounts', 'Letter of credit', 'Cheque (select accounts)']
      },
      {
        title: 'Support',
        content: 'Get help with billing inquiries.',
        items: ['Email: billing@fja.ae', 'Phone: +971 9 2226601', 'Live chat on portal', 'Business hours: Sun-Thu 8AM-5PM']
      }
    ],
    relatedLinks: [
      { title: 'Corporate Rates', href: '/corporate/corporate-rates', description: 'View pricing' },
      { title: 'Service Agreements', href: '/corporate/agreements', description: 'Contract details' },
      { title: 'Contact Us', href: '/contact', description: 'Get support' }
    ],
    contactInfo: {
      email: 'billing@fja.ae',
      phone: '+971 9 2226601'
    }
  },

  'agreements': {
    slug: 'agreements',
    title: 'Service Agreements',
    subtitle: 'Partnership Terms',
    description: 'Information about service level agreements and contracts with Fujairah International Airport.',
    sections: [
      {
        title: 'Agreement Types',
        content: 'Different service agreements available.',
        items: ['Ground Handling Agreement (GHA)', 'Cargo Handling Agreement', 'Concession Agreement', 'Advertising Agreement', 'Facility Use Agreement']
      },
      {
        title: 'Key Terms',
        content: 'Standard agreement components.',
        items: ['Service scope and specifications', 'Pricing and payment terms', 'Performance standards (SLAs)', 'Insurance requirements', 'Term and renewal conditions']
      },
      {
        title: 'Process',
        content: 'Steps to establish a service agreement.',
        items: ['Initial inquiry and requirements discussion', 'Proposal and commercial negotiation', 'Legal review', 'Agreement execution', 'Service commencement']
      }
    ],
    relatedLinks: [
      { title: 'Business Opportunities', href: '/corporate/opportunities', description: 'Partner with FIA' },
      { title: 'Tenders & Procurement', href: '/corporate/tenders', description: 'Current tenders' },
      { title: 'Contact Us', href: '/contact', description: 'Get in touch' }
    ]
  },

  'requests': {
    slug: 'requests',
    title: 'Service Requests',
    subtitle: 'Submit Your Request',
    description: 'Submit service requests for various airport operations and support.',
    sections: [
      {
        title: 'Request Types',
        content: 'Services you can request through this portal.',
        items: ['Landing and parking permits', 'Ground handling services', 'Fuel services', 'Cargo handling', 'VIP services', 'Special event support']
      },
      {
        title: 'Submission Process',
        content: 'How to submit a service request.',
        items: ['Log in to eServices portal', 'Select service category', 'Complete request form', 'Attach required documents', 'Submit and track status']
      },
      {
        title: 'Processing Times',
        content: 'Expected response times for requests.',
        items: ['Standard requests: 2-3 business days', 'Urgent requests: Same day (surcharge applies)', 'Complex requests: 5-7 business days', 'Track status in real-time']
      }
    ],
    relatedLinks: [
      { title: 'Online Booking', href: '/corporate/online-booking', description: 'Book services' },
      { title: 'Landing Permission', href: '/corporate/landing-permission', description: 'Flight permits' },
      { title: 'Cargo Services', href: '/corporate/cargo', description: 'Cargo operations' }
    ]
  },

  // Business with FIA
  'opportunities': {
    slug: 'opportunities',
    title: 'Business Opportunities',
    subtitle: 'Partner with FIA',
    description: 'Explore commercial opportunities and partnerships at Fujairah International Airport.',
    sections: [
      {
        title: 'Commercial Spaces',
        content: 'Retail and office opportunities.',
        items: ['Duty-free concessions', 'Food & beverage outlets', 'Retail kiosks', 'Office spaces', 'Advertising locations', 'Car rental counters']
      },
      {
        title: 'Aviation Services',
        content: 'Aviation-related business opportunities.',
        items: ['Ground handling services', 'Cargo handling', 'Aircraft maintenance (MRO)', 'Fuel supply', 'Catering services', 'Cleaning services']
      },
      {
        title: 'Development Projects',
        content: 'Future expansion and development.',
        items: ['Free zone development', 'Logistics hub expansion', 'Hotel and hospitality', 'Training center facilities']
      }
    ],
    relatedLinks: [
      { title: 'Tenders & Procurement', href: '/corporate/tenders', description: 'Current opportunities' },
      { title: 'Partnerships', href: '/corporate/partnerships', description: 'Strategic alliances' },
      { title: 'Contact Us', href: '/contact', description: 'Discuss opportunities' }
    ],
    contactInfo: {
      email: 'business@fja.ae',
      phone: '+971 9 2226700'
    }
  },

  'tenders': {
    slug: 'tenders',
    title: 'Tenders & Procurement',
    subtitle: 'Current Opportunities',
    description: 'View current tenders and procurement opportunities at Fujairah International Airport.',
    sections: [
      {
        title: 'Active Tenders',
        content: 'Current tender opportunities.',
        items: ['Terminal cleaning services - Closes March 15, 2026', 'IT infrastructure upgrade - Closes March 30, 2026', 'Ground support equipment - Closes April 10, 2026', 'Landscaping maintenance - Closes April 15, 2026']
      },
      {
        title: 'How to Participate',
        content: 'Steps to submit a tender.',
        items: ['Register as a vendor on eServices portal', 'Download tender documents', 'Attend pre-bid meetings (if required)', 'Submit proposal before deadline', 'Evaluation period: 4-6 weeks']
      },
      {
        title: 'Vendor Registration',
        content: 'Requirements to become an approved vendor.',
        items: ['Valid trade license', 'Company profile and capabilities', 'Financial statements (3 years)', 'Quality certifications', 'Insurance certificates']
      }
    ],
    relatedLinks: [
      { title: 'Business Opportunities', href: '/corporate/opportunities', description: 'More opportunities' },
      { title: 'Service Agreements', href: '/corporate/agreements', description: 'Contract terms' },
      { title: 'Contact Us', href: '/contact', description: 'Procurement inquiries' }
    ],
    contactInfo: {
      email: 'procurement@fja.ae',
      phone: '+971 9 2226701'
    }
  },

  'partnerships': {
    slug: 'partnerships',
    title: 'Partnerships',
    subtitle: 'Strategic Alliances',
    description: 'Learn about partnership opportunities and current strategic alliances with FIA.',
    sections: [
      {
        title: 'Partnership Types',
        content: 'Ways to partner with FIA.',
        items: ['Airline partnerships', 'Tourism board collaborations', 'Technology partnerships', 'Training and development', 'Sustainability initiatives', 'Marketing alliances']
      },
      {
        title: 'Current Partners',
        content: 'Organizations we work with.',
        items: ['Fujairah Tourism Board', 'UAE Civil Aviation Authority', 'International aviation organizations', 'Regional airlines', 'Global cargo operators']
      },
      {
        title: 'Benefits',
        content: 'Advantages of partnering with FIA.',
        items: ['Access to growing market', 'Strategic location in UAE', 'Modern infrastructure', 'Government support', 'Competitive operating costs']
      }
    ],
    relatedLinks: [
      { title: 'Business Opportunities', href: '/corporate/opportunities', description: 'Commercial opportunities' },
      { title: 'About Us', href: '/corporate/about', description: 'Learn about FIA' },
      { title: 'Contact Us', href: '/contact', description: 'Partnership inquiries' }
    ]
  },

  'cargo': {
    slug: 'cargo',
    title: 'Cargo Services',
    subtitle: 'Efficient Freight Solutions',
    description: 'Comprehensive cargo and freight services at Fujairah International Airport.',
    sections: [
      {
        title: 'Cargo Facilities',
        content: 'State-of-the-art cargo infrastructure.',
        items: ['Cargo terminal: 15,000 sqm', 'Cold storage facilities', 'Dangerous goods handling', 'Live animal facilities', 'Secure storage areas', '24/7 operations']
      },
      {
        title: 'Services',
        content: 'Cargo handling services available.',
        items: ['Import/Export handling', 'Transshipment services', 'Customs clearance assistance', 'Warehousing', 'Documentation support', 'Door-to-door delivery']
      },
      {
        title: 'Rates & Booking',
        content: 'How to ship cargo through FIA.',
        items: ['Competitive handling rates', 'Volume discounts available', 'Online booking via eServices', 'Real-time tracking', 'Dedicated cargo support team']
      }
    ],
    relatedLinks: [
      { title: 'Aviation Services', href: '/corporate/aviation', description: 'Aircraft services' },
      { title: 'Service Requests', href: '/corporate/requests', description: 'Submit requests' },
      { title: 'Tenders & Procurement', href: '/corporate/tenders', description: 'Cargo contracts' }
    ],
    contactInfo: {
      email: 'cargo@fja.ae',
      phone: '+971 9 2226800'
    }
  },

  'aviation': {
    slug: 'aviation',
    title: 'Aviation Services',
    subtitle: 'Complete Aircraft Support',
    description: 'Full range of aviation services for airlines and private operators at FIA.',
    sections: [
      {
        title: 'Ground Handling',
        content: 'Comprehensive ground handling services.',
        items: ['Passenger handling', 'Ramp services', 'Baggage handling', 'Load control', 'Flight operations support', 'Crew services']
      },
      {
        title: 'Aircraft Services',
        content: 'Aircraft support and maintenance.',
        items: ['Aircraft parking', 'Fueling services', 'GPU and air start', 'De-icing (seasonal)', 'Minor maintenance', 'Cleaning services']
      },
      {
        title: 'Operations Support',
        content: 'Operational assistance for airlines.',
        items: ['Flight planning support', 'Weather briefings', 'NOTAM information', 'Slot coordination', 'Permit assistance', '24/7 operations center']
      }
    ],
    relatedLinks: [
      { title: 'Cargo Services', href: '/corporate/cargo', description: 'Freight handling' },
      { title: 'Service Requests', href: '/corporate/requests', description: 'Request services' },
      { title: 'Landing Permission', href: '/corporate/landing-permission', description: 'Flight permits' }
    ],
    contactInfo: {
      email: 'aviation@fja.ae',
      phone: '+971 9 2226810'
    }
  },

  'landing-permission': {
    slug: 'landing-permission',
    title: 'Landing Permission',
    subtitle: 'Open Sky Policy',
    description: 'Apply for landing permission at Fujairah International Airport under our open sky policy.',
    sections: [
      {
        title: 'Open Sky Policy',
        content: 'FIA welcomes all aircraft operators.',
        items: ['No restrictions on number of flights', 'All aircraft types welcome', 'Competitive landing fees', 'Quick permit processing', '24-hour operations capability']
      },
      {
        title: 'Permit Requirements',
        content: 'Documents needed for landing permission.',
        items: ['Aircraft registration certificate', 'Airworthiness certificate', 'Insurance certificate', 'Crew licenses', 'Flight plan details', 'Dangerous goods declaration (if applicable)']
      },
      {
        title: 'Application Process',
        content: 'How to apply for landing permission.',
        items: ['Submit via eServices portal or email', 'Scheduled flights: 48 hours advance notice', 'Non-scheduled: 24 hours advance notice', 'Emergency flights: Immediate processing', 'Permit valid for specified period']
      }
    ],
    relatedLinks: [
      { title: 'Aviation Services', href: '/corporate/aviation', description: 'Aircraft support' },
      { title: 'Service Requests', href: '/corporate/requests', description: 'Submit requests' },
      { title: 'Contact Us', href: '/contact', description: 'Flight operations' }
    ],
    contactInfo: {
      email: 'permits@fja.ae',
      phone: '+971 9 2226820'
    }
  },

  // About FIA
  'about': {
    slug: 'about',
    title: 'About Us',
    subtitle: 'Gateway to the East',
    description: 'Learn about Fujairah International Airport, its history, and its role in UAE aviation.',
    sections: [
      {
        title: 'Our Story',
        content: 'Fujairah International Airport (FIA) serves as the gateway to the eastern coast of the UAE. Opened in 1987, FIA has grown from a small regional airport to a modern aviation hub serving passengers and cargo from around the world.',
        items: []
      },
      {
        title: 'Key Facts',
        content: 'FIA at a glance.',
        items: ['IATA Code: FJR', 'ICAO Code: OMFJ', 'Runway: 3,750 meters', 'Terminal capacity: 1 million passengers/year', 'Cargo capacity: 50,000 tons/year', 'Operating 24/7']
      },
      {
        title: 'Strategic Location',
        content: 'Uniquely positioned for growth.',
        items: ['Only UAE airport on Gulf of Oman', 'Outside Strait of Hormuz', 'Direct access to Indian Ocean', 'Close to major shipping routes', '90 minutes from Dubai']
      }
    ],
    relatedLinks: [
      { title: 'Leadership Team', href: '/corporate/leadership', description: 'Meet our leaders' },
      { title: 'Vision & Mission', href: '/corporate/vision', description: 'Our purpose' },
      { title: 'Awards & Recognition', href: '/corporate/awards', description: 'Our achievements' }
    ]
  },

  'leadership': {
    slug: 'leadership',
    title: 'Leadership Team',
    subtitle: 'Guiding FIA Forward',
    description: 'Meet the leadership team driving Fujairah International Airport\'s vision and growth.',
    sections: [
      {
        title: 'Executive Leadership',
        content: 'Our senior management team.',
        items: ['Chief Executive Officer', 'Chief Operating Officer', 'Chief Financial Officer', 'Chief Commercial Officer', 'Director of Aviation', 'Director of Human Resources']
      },
      {
        title: 'Board of Directors',
        content: 'Governance and oversight.',
        items: ['Chairman - Government of Fujairah', 'Board Members representing key stakeholders', 'Strategic direction and policy setting', 'Quarterly board meetings']
      },
      {
        title: 'Our Approach',
        content: 'Leadership philosophy at FIA.',
        items: ['Customer-centric operations', 'Safety as top priority', 'Continuous improvement', 'Employee development', 'Community engagement', 'Sustainable growth']
      }
    ],
    relatedLinks: [
      { title: 'About Us', href: '/corporate/about', description: 'Our story' },
      { title: 'Vision & Mission', href: '/corporate/vision', description: 'Our purpose' },
      { title: 'Careers', href: '/careers', description: 'Join our team' }
    ]
  },

  'vision': {
    slug: 'vision',
    title: 'Vision & Mission',
    subtitle: 'Our Purpose',
    description: 'The vision, mission, and values that guide Fujairah International Airport.',
    sections: [
      {
        title: 'Our Vision',
        content: 'To be the preferred gateway connecting the UAE\'s eastern region to the world, recognized for operational excellence, innovation, and sustainable growth.',
        items: []
      },
      {
        title: 'Our Mission',
        content: 'To provide safe, efficient, and world-class airport services that exceed customer expectations while contributing to the economic development of Fujairah and the UAE.',
        items: []
      },
      {
        title: 'Our Values',
        content: 'The principles that guide everything we do.',
        items: ['Safety: Our number one priority in all operations', 'Excellence: Striving for the highest standards', 'Integrity: Honest and transparent in all dealings', 'Innovation: Embracing new ideas and technology', 'Respect: Valuing all stakeholders', 'Sustainability: Responsible environmental stewardship']
      }
    ],
    relatedLinks: [
      { title: 'About Us', href: '/corporate/about', description: 'Our story' },
      { title: 'Sustainability', href: '/corporate/sustainability', description: 'Environmental commitment' },
      { title: 'Leadership Team', href: '/corporate/leadership', description: 'Meet our leaders' }
    ]
  },

  'sustainability': {
    slug: 'sustainability',
    title: 'Sustainability',
    subtitle: 'Committed to Our Future',
    description: 'FIA\'s commitment to environmental sustainability and responsible operations.',
    sections: [
      {
        title: 'Environmental Initiatives',
        content: 'Our sustainability programs.',
        items: ['Solar power installation (30% energy)', 'LED lighting throughout terminal', 'Water recycling systems', 'Waste management and recycling', 'Electric ground support equipment', 'Carbon footprint monitoring']
      },
      {
        title: 'Targets',
        content: 'Our sustainability goals.',
        items: ['50% renewable energy by 2030', 'Carbon neutral operations by 2035', 'Zero waste to landfill by 2028', 'Water consumption reduction: 20%', 'Green building certification']
      },
      {
        title: 'Community Impact',
        content: 'Supporting our community.',
        items: ['Local employment priority', 'UAE national development programs', 'Educational partnerships', 'Community investment projects', 'Local supplier support']
      }
    ],
    relatedLinks: [
      { title: 'Vision & Mission', href: '/corporate/vision', description: 'Our purpose' },
      { title: 'About Us', href: '/corporate/about', description: 'Learn about FIA' },
      { title: 'Awards & Recognition', href: '/corporate/awards', description: 'Our achievements' }
    ]
  },

  'awards': {
    slug: 'awards',
    title: 'Awards & Recognition',
    subtitle: 'Excellence Recognized',
    description: 'Achievements and recognition received by Fujairah International Airport.',
    sections: [
      {
        title: 'Recent Awards',
        content: 'Recognition for our excellence.',
        items: ['Best Regional Airport - Middle East 2025', 'Airport Service Quality Award 2024', 'Environmental Excellence Award 2024', 'Best Cargo Airport - UAE 2023', 'Customer Service Excellence 2023']
      },
      {
        title: 'Certifications',
        content: 'Quality and safety certifications.',
        items: ['ISO 9001:2015 Quality Management', 'ISO 14001:2015 Environmental Management', 'ISO 45001:2018 Occupational Health & Safety', 'ACI Airport Health Accreditation', 'IATA Ground Handling Certification']
      },
      {
        title: 'Industry Recognition',
        content: 'Acknowledgment from industry bodies.',
        items: ['ACI Asia-Pacific member', 'IATA partner airport', 'UAE Civil Aviation Authority commendations', 'Regional aviation leadership recognition']
      }
    ],
    relatedLinks: [
      { title: 'About Us', href: '/corporate/about', description: 'Our story' },
      { title: 'Sustainability', href: '/corporate/sustainability', description: 'Environmental commitment' },
      { title: 'News & Updates', href: '/corporate/news', description: 'Latest news' }
    ]
  },

  // Media & Resources
  'press-releases': {
    slug: 'press-releases',
    title: 'Press Releases',
    subtitle: 'Official Announcements',
    description: 'Official press releases and announcements from Fujairah International Airport.',
    sections: [
      {
        title: 'Recent Press Releases',
        content: 'Latest official announcements.',
        items: ['Jan 2026: FIA Announces New Route to Mumbai', 'Dec 2025: Terminal Expansion Project Completed', 'Nov 2025: Partnership with Emirates SkyCargo', 'Oct 2025: Sustainability Report Published', 'Sep 2025: New CEO Appointment']
      },
      {
        title: 'Media Inquiries',
        content: 'For press and media inquiries.',
        items: ['Contact: media@fja.ae', 'Response within 24 hours', 'Interview requests considered', 'Media accreditation available', 'Press kit downloadable']
      }
    ],
    relatedLinks: [
      { title: 'News & Updates', href: '/corporate/news', description: 'Latest news' },
      { title: 'Media Gallery', href: '/corporate/gallery', description: 'Photos and videos' },
      { title: 'Media Contact', href: '/corporate/contact-media', description: 'Press inquiries' }
    ],
    contactInfo: {
      email: 'media@fja.ae',
      phone: '+971 9 2226900'
    }
  },

  'news': {
    slug: 'news',
    title: 'News & Updates',
    subtitle: 'Stay Informed',
    description: 'Latest news, updates, and developments from Fujairah International Airport.',
    sections: [
      {
        title: 'Latest News',
        content: 'Recent developments at FIA.',
        items: ['Feb 2026: New fast-track security lanes open', 'Jan 2026: Duty-free expansion completed', 'Jan 2026: Passenger numbers up 15% in 2025', 'Dec 2025: Holiday travel tips from FIA', 'Dec 2025: New airline partner announcement']
      },
      {
        title: 'Upcoming Events',
        content: 'Events and activities at FIA.',
        items: ['March 2026: Aviation Career Fair', 'April 2026: Airport Open Day', 'May 2026: Sustainability Week', 'June 2026: Summer travel campaign']
      },
      {
        title: 'Stay Connected',
        content: 'Follow FIA for updates.',
        items: ['Newsletter subscription available', 'Social media: @FIA_Airport', 'FIA mobile app notifications', 'RSS feed available']
      }
    ],
    relatedLinks: [
      { title: 'Press Releases', href: '/corporate/press-releases', description: 'Official announcements' },
      { title: 'Media Gallery', href: '/corporate/gallery', description: 'Photos and videos' },
      { title: 'Contact Us', href: '/contact', description: 'Get in touch' }
    ]
  },

  'gallery': {
    slug: 'gallery',
    title: 'Media Gallery',
    subtitle: 'Visual Resources',
    description: 'Browse photos, videos, and visual resources from Fujairah International Airport.',
    sections: [
      {
        title: 'Photo Categories',
        content: 'Browse our photo library.',
        items: ['Terminal & Facilities', 'Aircraft Operations', 'Events & Ceremonies', 'Construction & Development', 'Staff & People', 'Aerial Views']
      },
      {
        title: 'Video Content',
        content: 'Watch our video content.',
        items: ['FIA Corporate Video', 'Terminal Tour', 'Safety Videos', 'News Features', 'Event Highlights']
      },
      {
        title: 'Usage Guidelines',
        content: 'Media usage information.',
        items: ['High-resolution images available', 'Credit FIA when using images', 'Commercial use requires permission', 'Request via media@fja.ae']
      }
    ],
    relatedLinks: [
      { title: 'Press Releases', href: '/corporate/press-releases', description: 'Official announcements' },
      { title: 'Downloads', href: '/corporate/downloads', description: 'Downloadable resources' },
      { title: 'Media Contact', href: '/corporate/contact-media', description: 'Media inquiries' }
    ]
  },

  'downloads': {
    slug: 'downloads',
    title: 'Downloads',
    subtitle: 'Resources & Documents',
    description: 'Download official documents, guides, and resources from Fujairah International Airport.',
    sections: [
      {
        title: 'Corporate Documents',
        content: 'Official corporate materials.',
        items: ['Annual Report 2025', 'Sustainability Report 2025', 'Corporate Factsheet', 'FIA Brand Guidelines', 'Company Profile']
      },
      {
        title: 'Operational Documents',
        content: 'Guides and procedures.',
        items: ['Airport Operator Manual', 'Ground Handling Manual', 'Emergency Response Plan (Summary)', 'Cargo Handling Guidelines', 'Security Guidelines']
      },
      {
        title: 'Passenger Information',
        content: 'Useful guides for travelers.',
        items: ['Terminal Map (PDF)', 'Parking Guide', 'Services Directory', 'FAQs Document', 'Accessibility Guide']
      }
    ],
    relatedLinks: [
      { title: 'Media Gallery', href: '/corporate/gallery', description: 'Visual resources' },
      { title: 'About Us', href: '/corporate/about', description: 'Learn about FIA' },
      { title: 'Contact Us', href: '/contact', description: 'Get in touch' }
    ]
  },

  'contact-media': {
    slug: 'contact-media',
    title: 'Media Contact',
    subtitle: 'Press & Communications',
    description: 'Contact information for media inquiries and press communications.',
    sections: [
      {
        title: 'Media Relations',
        content: 'For all press and media inquiries.',
        items: ['Email: media@fja.ae', 'Phone: +971 9 2226900', 'Response within 24 hours', 'Available Sunday to Thursday']
      },
      {
        title: 'Interview Requests',
        content: 'Request interviews with FIA leadership.',
        items: ['Submit request via email', 'Include publication details', 'Specify topics of interest', 'Allow 5 business days for response']
      },
      {
        title: 'Media Visits',
        content: 'Arrange media visits to FIA.',
        items: ['Advance booking required (7 days)', 'Security clearance needed', 'Escorted access provided', 'Photo/video guidelines apply']
      }
    ],
    relatedLinks: [
      { title: 'Press Releases', href: '/corporate/press-releases', description: 'Official announcements' },
      { title: 'Media Gallery', href: '/corporate/gallery', description: 'Visual resources' },
      { title: 'Downloads', href: '/corporate/downloads', description: 'Press materials' }
    ],
    contactInfo: {
      email: 'media@fja.ae',
      phone: '+971 9 2226900',
      hours: 'Sunday - Thursday, 8:00 AM - 5:00 PM'
    }
  }
};

// Helper function to get all pages
export function getAllPages(): PageData[] {
  return [...Object.values(travellerPages), ...Object.values(corporatePages)];
}

// Helper function to get page by slug and section
export function getPage(section: 'travellers' | 'corporate', slug: string): PageData | undefined {
  if (section === 'travellers') {
    return travellerPages[slug];
  }
  return corporatePages[slug];
}
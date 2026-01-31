// Sample data for SectionImageContent component

export const whyChooseUsData = {
  subHeading: 'Why choose MyTrip Holidays',
  heading: "Experience thrilling adventures and unforgettable moments",
  description: "Discover True Kerala with our carefully curated travel experiences, surrounded by nature's wonders and rich cultural heritage.",
  image: '/images/banner4.png',
  imageAlt: 'True Kerala Experience',
  layout: 'image-left' as const,
  button: {
    text: 'Start Your Journey',
    href: '/booking',
    variant: 'primary' as const,
  },
  contentItems: [
    {
      badge: 'Affordable',
      badgeColor: 'blue' as const,
      heading: 'Cost-effective advertising',
      description: 'With a free listing, you can advertise your rental with no upfront costs. Reach your target audience without breaking the bank.',
      button: {
        text: 'Learn More',
        href: '/pricing',
        variant: 'outline' as const,
      },
    },
    {
      badge: 'Exposure',
      badgeColor: 'green' as const,
      heading: 'Reach millions worldwide',
      description: 'Millions of people are searching for unique places to stay around the world. Get your property in front of eager travelers.',
      button: {
        text: 'Get Started',
        href: '/signup',
        variant: 'primary' as const,
      },
    },
    {
      badge: 'Secure',
      badgeColor: 'red' as const,
      heading: 'Secure and simple booking',
      description: 'A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online with complete peace of mind.',
      button: {
        text: 'View Features',
        href: '/features',
        variant: 'outline' as const,
      },
    },
  ],
}

export const ourServicesData = {
  subHeading: 'Our Services',
  heading: 'Everything you need for the perfect vacation',
  description: 'From guided tours to premium accommodations, we provide comprehensive travel solutions tailored to your needs.',
  image: '/images/services.png',
  imageAlt: 'Our Services',
  layout: 'image-right' as const,
  button: {
    text: 'Explore Services',
    href: '/services',
    variant: 'secondary' as const,
  },
  contentItems: [
    {
      badge: 'Tours',
      badgeColor: 'blue' as const,
      heading: 'Expert Guided Tours',
      description: 'Experience destinations through the eyes of knowledgeable local guides who reveal hidden gems and share cultural insights that transform your journey.',
      button: {
        text: 'Book a Tour',
        href: '/tours',
        variant: 'primary' as const,
      },
    },
    {
      badge: 'Stays',
      badgeColor: 'green' as const,
      heading: 'Premium Accommodations',
      description: 'Handpicked hotels and resorts that combine comfort with authentic local charm, ensuring every night of your trip is as memorable as your days.',
      button: {
        text: 'Find Hotels',
        href: '/hotels',
        variant: 'outline' as const,
      },
    },
    {
      badge: 'Custom',
      badgeColor: 'red' as const,
      heading: 'Tailored Travel Packages',
      description: 'Personalized itineraries designed around your interests, pace, and preferences. Your dream vacation, crafted specifically for you.',
      button: {
        text: 'Customize Now',
        href: '/customize',
        variant: 'primary' as const,
      },
    },
  ],
}

export const trustSafetyData = {
  subHeading: 'Trust & Safety',
  heading: 'Your peace of mind is our priority',
  description: 'Travel with confidence knowing that every aspect of your journey is protected by our comprehensive safety measures and verified quality standards.',
  image: '/images/safety.png',
  imageAlt: 'Trust and Safety',
  layout: 'image-left' as const,
  contentItems: [
    {
      badge: 'Verified',
      badgeColor: 'green' as const,
      heading: 'Verified Properties Only',
      description: 'Every property undergoes rigorous inspection and verification to ensure it meets our strict quality standards before being listed on our platform.',
      button: {
        text: 'See Standards',
        href: '/standards',
        variant: 'outline' as const,
      },
    },
    {
      badge: 'Payment',
      badgeColor: 'blue' as const,
      heading: 'Bank-Level Security',
      description: 'Your financial information is protected by industry-leading encryption and secure payment processing systems trusted by millions worldwide.',
      button: {
        text: 'Learn About Security',
        href: '/security',
        variant: 'outline' as const,
      },
    },
    {
      badge: 'Support',
      badgeColor: 'red' as const,
      heading: '24/7 Customer Support',
      description: 'Our dedicated support team is available around the clock to assist you with any questions, concerns, or emergencies during your travels.',
      button: {
        text: 'Contact Support',
        href: '/support',
        variant: 'primary' as const,
      },
    },
  ],
}

export const sustainabilityData = {
  subHeading: 'Sustainability',
  heading: 'Travel responsibly, impact positively',
  description: 'Join us in creating meaningful travel experiences that benefit local communities and protect our planet for future generations.',
  image: '/images/sustainability.png',
  imageAlt: 'Sustainable Travel',
  layout: 'image-right' as const,
  button: {
    text: 'Our Commitment',
    href: '/sustainability',
    variant: 'primary' as const,
  },
  contentItems: [
    {
      badge: 'Eco-Friendly',
      badgeColor: 'green' as const,
      heading: 'Carbon Neutral Travel',
      description: 'We offset carbon emissions from every booking and partner exclusively with eco-conscious accommodations and tour operators.',
    },
    {
      badge: 'Community',
      badgeColor: 'blue' as const,
      heading: 'Support Local Communities',
      description: 'Your travels directly benefit local economies through partnerships with community-owned businesses and authentic cultural experiences.',
    },
    {
      badge: 'Conservation',
      badgeColor: 'red' as const,
      heading: 'Wildlife & Nature Protection',
      description: 'A portion of every booking goes towards conservation efforts and protecting natural habitats in the destinations you visit.',
    },
  ],
}
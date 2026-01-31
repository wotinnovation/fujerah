export interface GuestsObject {
  guestAdults?: number
  guestChildren?: number
  guestInfants?: number
}

export type ListingType = 'Destinations' | 'Stays' | 'Cars' | 'Experiences' | 'RealEstates' | 'Flight Status'

export interface PropertyType {
  name: string
  description: string
  value: string
}

export interface ClassOfProperties extends PropertyType {}

export type DateRage = [Date | null, Date | null]



export type TStayListing = {
  id: string
  date: string
  listingCategory: 'Hotel room' | 'Entire place' | 'Private room' | 'Shared room'
  title: string
  handle: string
  description: string
  featuredImage: string
  galleryImgs: string[]
  like: boolean
  address: string
  reviewStart: number
  reviewCount: number
  price: string
  maxGuests: number
  beds: number
  bedrooms: number
  bathrooms: number
  saleOff: string | null
  isAds: boolean | null
  map: {
    lat: number
    lng: number
  }
}

export type TDestinationListing = {
  id: string
  title: string
  handle: string
  country: string
  // Add other destination properties as needed
}
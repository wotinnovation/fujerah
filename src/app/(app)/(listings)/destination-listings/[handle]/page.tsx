// src/app/(app)/(listings)/destination-listings/[handle]/page.tsx

import {
  CableCarIcon,
  CctvCameraIcon,
  MeetingRoomIcon,
  Speaker01Icon,
  TvSmartIcon,
  VirtualRealityVr01Icon,
  Wifi01Icon,
} from '@/components/Icons'
import { getListingReviews } from '@/data/data'
import { getDestinationListingByHandle } from '@/data/listings'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonSecondary from '@/shared/ButtonSecondary'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/shared/description-list'
import { Divider } from '@/shared/divider'
import T from '@/utils/getT'
import { 
  MapPinIcon, 
  GlobeAltIcon, 
  CameraIcon, 
  SunIcon,
  CloudIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import Form from 'next/form'
import { redirect } from 'next/navigation'
import { Fragment } from 'react'
import DatesRangeInputPopover from '../../components/DatesRangeInputPopover'
import GuestsInputPopover from '../../components/GuestsInputPopover'
import HeaderGallery from '../../components/HeaderGallery'
import SectionDateRange from '../../components/SectionDateRange'
import SectionHeader from '../../components/SectionHeader'
import { SectionHeading, SectionSubheading } from '../../components/SectionHeading'
import SectionHost from '../../components/SectionHost'
import SectionListingReviews from '../../components/SectionListingReviews'
import SectionMap from '../../components/SectionMap'

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const destination = await getDestinationListingByHandle(handle)

  if (!destination) {
    return {
      title: 'Destination not found',
      description: 'The destination you are looking for does not exist.',
    }
  }

  return {
    title: `${destination.title} | Fujairah International Airport`,
    description: destination.description,
  }
}

const Page = async ({ params }: { params: Promise<{ handle: string }> }) => {
  const { handle } = await params
  const destination = await getDestinationListingByHandle(handle)

  if (!destination?.id) {
    return redirect('/destinations/all')
  }

  const {
    date,
    description,
    featuredImage,
    galleryImgs,
    isAds,
    like,
    listingCategory,
    map,
    price,
    reviewCount,
    reviewStart,
    saleOff,
    title,
    tourOperator,
    country,
    destination: destinationName,
    duration,
    difficulty,
    includes,
    itinerary,
    inclusions,
    exclusions,
    bookingInfo,
    id,
  } = destination

  const reviews = (await getListingReviews(id)).slice(0, 3)

  // Server action to handle form submission
  const handleSubmitForm = async (formData: FormData) => {
    'use server'
    console.log('Booking submitted:', Object.fromEntries(formData.entries()))
    redirect('/checkout')
  }

  const renderSectionHeader = () => {
    return (
      <SectionHeader
        address={destinationName}
        host={tourOperator}
        listingCategory={listingCategory}
        reviewCount={reviewCount}
        reviewStart={reviewStart}
        title={title}
      >
        <div className="flex items-center gap-x-3">
          <MapPinIcon className="mb-0.5 size-6" />
          <span>{country}</span>
        </div>
        <div className="flex items-center gap-x-3">
          <ClockIcon className="mb-0.5 size-6" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-x-3">
          <GlobeAltIcon className="mb-0.5 size-6" />
          <span>{difficulty}</span>
        </div>
        <div className="flex items-center gap-x-3">
          <CalendarDaysIcon className="mb-0.5 size-6" />
          <span>Available Year-Round</span>
        </div>
      </SectionHeader>
    )
  }

  const renderSectionInfo = () => {
    return (
      <div className="listingSection__wrap">
        <SectionHeading>About This Tour</SectionHeading>
        <div className="leading-relaxed text-neutral-700 dark:text-neutral-300">
          <span>{description}</span>
          <br />
          <br />
          <span>
            Discover the beauty and culture of {title}. This destination offers a perfect blend of modern attractions
            and traditional experiences, making it an ideal choice for travelers seeking authentic Arabian hospitality.
          </span>
          <br /> <br />
          <span>
            From pristine beaches to majestic mountains, bustling souks to serene deserts, {country} has something for
            every type of traveler. Our expertly curated tours ensure you experience the best this destination has to
            offer.
          </span>
        </div>

        <Divider className="w-14!" />

        <div>
          <SectionHeading>What's Included</SectionHeading>
          <SectionSubheading>Everything you need for an unforgettable experience</SectionSubheading>
        </div>
        <DescriptionList>
          {includes.map((item, index) => (
            <Fragment key={index}>
              <DescriptionTerm>{item}</DescriptionTerm>
              <DescriptionDetails>✓ Included</DescriptionDetails>
            </Fragment>
          ))}
        </DescriptionList>
      </div>
    )
  }

  const renderSectionItinerary = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <SectionHeading>Tour Itinerary</SectionHeading>
          <SectionSubheading>Day-by-day breakdown of your adventure</SectionSubheading>
        </div>
        <Divider className="w-14!" />

        <div className="space-y-6">
          {itinerary.map((day, index) => (
            <div key={index} className="border-l-4 border-red-600 pl-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                  {day.day}
                </span>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {day.title}
                </h3>
              </div>
              <p className="mb-3 text-neutral-600 dark:text-neutral-400">{day.description}</p>
              <ul className="space-y-2">
                {day.activities.map((activity, actIdx) => (
                  <li key={actIdx} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderSectionHighlights = () => {
    const highlights = [
      { name: 'Historical Sites', icon: CableCarIcon },
      { name: 'Cultural Experiences', icon: UserGroupIcon },
      { name: 'Beach Activities', icon: SunIcon },
      { name: 'Desert Safari', icon: CloudIcon },
      { name: 'Mountain Hiking', icon: MapPinIcon },
      { name: 'Photography Tours', icon: CameraIcon },
      { name: 'Local Cuisine', icon: MeetingRoomIcon },
      { name: 'Shopping Tours', icon: Wifi01Icon },
      { name: 'Water Sports', icon: VirtualRealityVr01Icon },
      { name: 'City Tours', icon: TvSmartIcon },
      { name: 'Wildlife Viewing', icon: CctvCameraIcon },
      { name: 'Night Markets', icon: Speaker01Icon },
    ]

    return (
      <div className="listingSection__wrap">
        <div>
          <SectionHeading>Tour Highlights</SectionHeading>
          <SectionSubheading>Popular activities and attractions included in our tours</SectionSubheading>
        </div>
        <Divider className="w-14!" />

        <div className="grid grid-cols-1 gap-6 text-sm text-neutral-700 xl:grid-cols-3 dark:text-neutral-300">
          {highlights.map((item) => (
            <div key={item.name} className="flex items-center gap-x-3">
              <item.icon className="h-6 w-6" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>
          <ButtonSecondary>View detailed itinerary</ButtonSecondary>
        </div>
      </div>
    )
  }

  const renderSectionInclusionsExclusions = () => {
    return (
      <div className="listingSection__wrap">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Inclusions */}
          <div>
            <SectionHeading className="mb-4">Inclusions</SectionHeading>
            <ul className="space-y-3">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div>
            <SectionHeading className="mb-4">Exclusions</SectionHeading>
            <ul className="space-y-3">
              {exclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="mt-1 text-red-600">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  const renderSidebarPriceAndForm = () => {
    const basePrice = parseInt(price.replace(/[^0-9]/g, ''))
    const originalPrice = saleOff ? Math.round(basePrice * 1.3) : 0

    return (
      <div className="listingSection__wrap sm:shadow-xl">
        {/* PRICE */}
        <div className="flex items-end text-2xl font-semibold sm:text-3xl">
          {saleOff && (
            <span className="mr-2 text-xl text-neutral-400 line-through">${originalPrice}</span>
          )}
          <span className="text-red-600">{price}</span>
          <div className="pb-1">
            <span className="text-base font-normal text-neutral-500 dark:text-neutral-400">/person</span>
          </div>
        </div>

        {saleOff && (
          <div className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 dark:bg-red-900/20">
            Save {saleOff}!
          </div>
        )}

        {/* FORM */}
        <Form
          action={handleSubmitForm}
          className="flex flex-col rounded-3xl border border-neutral-200 dark:border-neutral-700"
          id="booking-form"
        >
          <DatesRangeInputPopover className="z-11 flex-1" />
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <GuestsInputPopover className="flex-1" />
        </Form>

        <DescriptionList>
          <DescriptionTerm>{price} x 2 travelers</DescriptionTerm>
          <DescriptionDetails className="sm:text-right">${basePrice * 2}</DescriptionDetails>
          <DescriptionTerm>Tour guide & transportation</DescriptionTerm>
          <DescriptionDetails className="sm:text-right">Included</DescriptionDetails>
          <DescriptionTerm>Service fee</DescriptionTerm>
          <DescriptionDetails className="sm:text-right">$25</DescriptionDetails>
          <DescriptionTerm className="font-semibold text-neutral-900 dark:text-neutral-100">Total</DescriptionTerm>
          <DescriptionDetails className="font-semibold text-neutral-900 sm:text-right dark:text-neutral-100">
            ${basePrice * 2 + 25}
          </DescriptionDetails>
        </DescriptionList>

        {/* SUBMIT */}
        <ButtonPrimary form="booking-form" type="submit" className="w-full">
          Book This Tour
        </ButtonPrimary>
        
        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          {bookingInfo.cancellationPolicy}
        </p>
      </div>
    )
  }

  return (
    <div>
      {/*  HEADER */}
      <HeaderGallery images={galleryImgs} />

      {/* MAIN */}
      <main className="relative z-[1] mt-10 flex flex-col gap-8 lg:flex-row xl:gap-10">
        {/* CONTENT */}
        <div className="flex w-full flex-col gap-y-8 lg:w-3/5 xl:w-[64%] xl:gap-y-10">
          {renderSectionHeader()}
          {renderSectionInfo()}
          {renderSectionItinerary()}
          {renderSectionHighlights()}
          {renderSectionInclusionsExclusions()}
          <SectionDateRange />
        </div>

        {/* SIDEBAR */}
        <div className="grow">
          <div className="sticky top-5">{renderSidebarPriceAndForm()}</div>
        </div>
      </main>

      <Divider className="my-16" />

      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          <div className="w-full lg:w-4/9 xl:w-1/3">
            {/* <SectionHost {...tourOperator} /> */}
          </div>
          <div className="w-full lg:w-2/3">
            <SectionListingReviews reviewCount={reviewCount} reviewStart={reviewStart} reviews={reviews} />
          </div>
        </div>

        <SectionMap />
      </div>
    </div>
  )
}

export default Page
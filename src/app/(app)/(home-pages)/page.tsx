import AsymmetricBentoGrid from '@/components/Asymmetricbentogrid'
import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import HeroSectionWithSearchForm1 from '@/components/hero-sections/HeroSectionWithSearchForm1'
import HeroSearchForm from '@/components/HeroSearchForm/HeroSearchForm'
import SectionBecomeAnAuthor from '@/components/SectionBecomeAnAuthor'
import SectionClientSay from '@/components/SectionClientSay'
import SectionFlightWallet from '@/components/Sectionflightwallet'
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox'
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox'
import SectionGridFeatureDestinations from '@/components/SectionGridFeaturePlaces'
import SectionGridFeaturePlaces from '@/components/SectionGridFeaturePlaces'
import SectionGridFeatureStays from '@/components/SectionGridFeatureStays'
import SectionHowItWork from '@/components/SectionHowItWork'
import SectionImageContent from '@/components/SectionOurFeatures'
import SectionOurFeatures from '@/components/SectionOurFeatures'
import SectionServices from '@/components/SectionSliderNewCategories'
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import SectionVideos from '@/components/SectionVideos'
import UsefulServicesSection from '@/components/SupportCard'
import { getAuthors } from '@/data/authors'
import { getStayCategories } from '@/data/categories'
import { getDestinationListings, getStayListings } from '@/data/listings'
import { getServices } from '@/data/services-data'
import heroImage from '@/images/hero-right.png'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import HeadingWithSub from '@/shared/Heading'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of the Stay application',
}

async function Page() {
  const categories = await getStayCategories()
  const stayListings = await getStayListings()
  const authors = await getAuthors()
  const destinationListings = await getDestinationListings()

  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      <div className="relative container mt-10 mb-24 flex flex-col gap-y-24 lg:mb-28 lg:gap-y-32">
        <HeroSectionWithSearchForm1
         
      
          searchForm={<HeroSearchForm initTab="Flight Status" />}
        
        />

        <div>
          <HeadingWithSub subheading="Explore the best places to stay in the world.">
            Why Connect To FIA
          </HeadingWithSub>
               <BgGlassmorphism />
         <SectionServices services={await getServices()}  />
         
        </div>

        <AsymmetricBentoGrid />
 {/* <div>
          <HeadingWithSub subheading="Explore the best places to stay in the world.">
            Popular Destinations
          </HeadingWithSub>
          <SectionSliderNewCategories categoryCardType="card6" categories={categories.slice(0, 7)} />
        </div> */}
        {/* <SectionOurFeatures className="py-14" /> */}

           
      <SectionImageContent
        heading="Register for eServices"
        description="FIA is pleased to bring you a better experience to connect with us via our eService's. Through our Portal, you can apply for various permits, NOC's and other services to enhance your company and receive responses back to your inquiries to get your business connected at FIA."
        image="/images/fjr/services1.jpg"
        imageAlt="eServices Registration"
        layout="image-left"
        button={{
          text: 'Learn More',
          href: '/ben-services/eservices-registration',
          variant: 'primary',
        }}
      />
      
      <Divider />
     
      {/* Landing Permission Section */}
      <SectionImageContent
        heading="Landing Permission"
        description="FIA has an open sky policy. To apply for landing permission, connect below on instructions and contact information."
        image="/images/fjr/land-1.jpg"
        imageAlt="Landing Permission"
        layout="image-right"
        button={{
          text: 'Learn More',
          href: '/ben-services/landing-permission',
          variant: 'primary',
        }}
      />
       <UsefulServicesSection />
          <Divider />
          {/* <SectionImageContent
      subHeading="About Us"
      heading="Our Story"
      description="Founded in 2020, we started with a mission to make travel more accessible and meaningful for everyone. Today, we proudly serve travelers in over 150 countries worldwide and have facilitated over 5 million successful bookings."
      image="/images/fjr/flight.jpg"
      imageAlt="About Us"
      layout="image-left"
      button={{
        text: 'Learn More',
        href: '/about',
        variant: 'primary',
      }}
    />
           <Divider /> */}
        {/* <SectionGridFeaturePlaces stayListings={stayListings} cardType="card2" /> */}
         <SectionGridFeatureDestinations 
          destinationListings={destinationListings} 
          cardType="card2"
          heading="Nearby Destinations"
          subHeading="Featured Tour Packages"
        />
            <Divider />
     <SectionGridFeatureStays 
        stayListings={stayListings} 
        heading="Explore Amazing Stays"
        subHeading="Handpicked accommodations"
      />


        
   
        <SectionHowItWork
      title="Quick Overview of FIA"
      subheading="Fujairah International Airport made easy for you."
      data={[
        {
          id: 1,
          img: '/images/fjr/airport.jpg',
          title: 'Getting Around the Airport',
          desc: 'Explore amazing destinations and find your perfect match',
        },
        {
          id: 2,
          img: '/images/fjr/checkin.jpg',
          title: 'Shop & Dine at FIA',
          desc: 'Reserve your stay with our secure and simple booking system',
        },
      ]}
    />
        {/* <div className="relative py-20"> */}
          {/* <BackgroundSection /> */}
          {/* <HeadingWithSub isCenter subheading="Keep calm & travel on">
            Become a host
          </HeadingWithSub>
          <SectionGridAuthorBox authors={authors} /> */}
        {/* </div> */}
        {/* <SectionSubscribe2 /> */}
        <Divider />
        <SectionFlightWallet />

        {/* <div>
          {/* <HeadingWithSub isCenter subheading={'For our esteemed partners and valued clients, we offer bespoke experiences tailored to exceed expectations, and cultural immersion across kerala’s most iconic destinations.'}>
            PARTNER'S AND CLIENTS
          </HeadingWithSub> */}
          {/* <SectionGridCategoryBox  /> */}
        {/* </div>  */}
             <SectionVideos />
              {/* <HeadingWithSub isCenter subheading={'For our esteemed partners and valued clients, we offer bespoke experiences tailored to exceed expectations, and cultural immersion across kerala’s most iconic destinations.'}>
            PARTNER'S AND CLIENTS
          </HeadingWithSub>
          <SectionGridCategoryBox  /> */}

        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div> */}
{/*
        <div>
          <HeadingWithSub subheading="Explore houses based on 10 types of stays">
            Explore by types of stays.
          </HeadingWithSub>
          <SectionSliderNewCategories
            itemClassName="w-[17rem] lg:w-1/3 xl:w-1/4"
            categories={categories.slice(7, 16)}
            categoryCardType="card5"
          />
        </div>
   
        <div className="relative py-16">
          <SectionClientSay /> */}
        {/* </div> */}
      </div>
    </main>
  )
}

export default Page

import { notFound } from 'next/navigation'
import HeroSlidePage from '@/components/HeroSlidePage'
import { getSlideBySlug, getAllSlideSlugs } from '@/data/hero-slides-data'

interface Props {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all hero slides
export function generateStaticParams() {
  return getAllSlideSlugs().map((slug) => ({
    slug,
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const slide = getSlideBySlug(slug)
  
  if (!slide) {
    return {
      title: 'Page Not Found | FIA',
    }
  }
  
  return {
    title: `${slide.pageData.title} | Fujairah International Airport`,
    description: slide.pageData.subtitle,
  }
}

export default async function HeroSlideDynamicPage({ params }: Props) {
  const { slug } = await params
  const slide = getSlideBySlug(slug)
  
  if (!slide) {
    notFound()
  }
  
  return <HeroSlidePage data={slide.pageData} slug={slug} />
}
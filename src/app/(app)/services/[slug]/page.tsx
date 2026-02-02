import { notFound } from 'next/navigation'
import ServicePage from '@/components/ServicePage'
import { getServicePageData, getAllServiceSlugs } from '@/data/services-data'

interface Props {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all service pages
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const service = getServicePageData(slug)
  
  if (!service) {
    return {
      title: 'Service Not Found | FIA',
    }
  }
  
  return {
    title: `${service.title} | Fujairah International Airport`,
    description: service.subtitle,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServicePageData(slug)
  
  if (!service) {
    notFound()
  }
  
  return <ServicePage data={service} />
}
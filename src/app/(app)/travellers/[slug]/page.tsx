import { notFound } from 'next/navigation'
import PageTemplate from '@/components/PageTemplate'
import { travellerPages } from '@/data/pages-data'

interface Props {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all traveller pages
export function generateStaticParams() {
  return Object.keys(travellerPages).map((slug) => ({
    slug,
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const page = travellerPages[slug]
  
  if (!page) {
    return {
      title: 'Page Not Found | FIA',
    }
  }
  
  return {
    title: `${page.title} | Travellers | Fujairah International Airport`,
    description: page.description,
  }
}

export default async function TravellerPage({ params }: Props) {
  const { slug } = await params
  const page = travellerPages[slug]
  
  if (!page) {
    notFound()
  }
  
  return (
    <PageTemplate 
      data={page} 
      section="travellers" 
      breadcrumbLabel="Travellers"
    />
  )
}
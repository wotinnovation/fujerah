import { notFound } from 'next/navigation'
import PageTemplate from '@/components/PageTemplate'
import { corporatePages } from '@/data/pages-data'

interface Props {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all corporate pages
export function generateStaticParams() {
  return Object.keys(corporatePages).map((slug) => ({
    slug,
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const page = corporatePages[slug]
  
  if (!page) {
    return {
      title: 'Page Not Found | FIA',
    }
  }
  
  return {
    title: `${page.title} | Corporate | Fujairah International Airport`,
    description: page.description,
  }
}

export default async function CorporatePage({ params }: Props) {
  const { slug } = await params
  const page = corporatePages[slug]
  
  if (!page) {
    notFound()
  }
  
  return (
    <PageTemplate 
      data={page} 
      section="corporate" 
      breadcrumbLabel="Corporate"
    />
  )
}
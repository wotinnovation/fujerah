import { notFound } from 'next/navigation'
import { getBentoPageBySlug, getAllBentoSlugs } from '@/data/bento-pages-data'
import BentoPageTemplate from '@/components/BentoPageTemplate'

// For Next.js 14+, params is a promise
export async function generateStaticParams() {
  const slugs = getAllBentoSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const data = getBentoPageBySlug(slug)
  
  if (!data) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: `${data.title} | Fujairah International Airport`,
    description: data.subtitle,
  }
}

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const data = getBentoPageBySlug(slug)

  if (!data) {
    notFound()
  }

  return <BentoPageTemplate data={data} />
}
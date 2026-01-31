import { Badge } from '@/shared/Badge'
import { Heading } from '@/shared/Heading'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ContentItem {
  badge?: string
  badgeColor?: 'red' | 'green' | 'blue'
  heading: string
  description: string
  button?: {
    text: string
    href: string
    variant?: 'primary' | 'secondary' | 'outline'
  }
}

interface Props {
  className?: string
  image?: string | StaticImageData
  imageAlt?: string
  subHeading?: string
  heading?: string
  description?: string
  contentItems?: ContentItem[]
  layout?: 'image-left' | 'image-right'
  button?: {
    text: string
    href: string
    variant?: 'primary' | 'secondary' | 'outline'
  }
}

const SectionImageContent: FC<Props> = ({
  className,
  image = '/images/banner4.png',
  imageAlt = 'Section Image',
  subHeading = 'Our Features',
  heading = 'Discover what makes us special',
  description,
  contentItems = [],
  layout = 'image-left',
  button,
}) => {
  const isImageLeft = layout === 'image-left'

  const getButtonClasses = (variant: string = 'primary') => {
    const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300'
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl`
      case 'secondary':
        return `${baseClasses} bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl`
      case 'outline':
        return `${baseClasses} border-2 border-red-600 text-white hover:bg-red-600 hover:text-white`
      default:
        return `${baseClasses} bg-red-600 text-white hover:bg-red-700`
    }
  }

  return (
    <div className={clsx('relative', className)}>
      {/* Header Section
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium tracking-wide uppercase dark:bg-primary-900/20 dark:text-primary-400">
          {subHeading}
        </span>
        <Heading className="mt-6">{heading}</Heading>
        {description && (
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>
        )}
        {button && (
          <Link
            href={button.href}
            className={`mt-8 ${getButtonClasses(button.variant)}`}
          >
            {button.text}
          </Link>
        )}
      </div> */}

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image Section */}
        <div className={clsx('relative', !isImageLeft && 'lg:order-2')}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={imageAlt}
              width={800}
              height={600}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="w-full h-auto object-cover"
            />
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-transparent pointer-events-none" />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-50 dark:bg-primary-900/30 -z-10" />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 dark:bg-blue-900/30 -z-10" />
        </div>

        {/* Content Section */}
        <div className={clsx('', !isImageLeft && 'lg:order-1')}>
          {contentItems && contentItems.length > 0 ? (
            // Content Cards Layout
            <div className="grid grid-cols-1 gap-6">
              {contentItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 dark:border-neutral-800 hover:border-primary-200 dark:hover:border-primary-800"
                >
                  {/* Card accent line */}
                  <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-primary-500 to-blue-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative pl-2">
                    {item.badge && (
                      <Badge color={item.badgeColor} className="mb-4">
                        {item.badge}
                      </Badge>
                    )}

                    <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {item.heading}
                    </h3>

                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {item.button && (
                      <Link
                        href={item.button.href}
                        className={getButtonClasses(item.button.variant)}
                      >
                        {item.button.text}
                        <svg
                          className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-900/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          ) : (
            // Simple Content Layout (no cards)
            <div className="space-y-6">
              {heading && (
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  {heading}
                </h2>
              )}
              
              {description && (
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {description}
                </p>
              )}
              
              {button && (
                <div className="pt-4">
                  <Link
                    href={button.href}
                    className={getButtonClasses(button.variant)}
                  >
                    {button.text}
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionImageContent
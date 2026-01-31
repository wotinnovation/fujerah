import { TCategory } from '@/data/categories'
import convertNumbThousand from '@/utils/convertNumbThousand'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export interface CardCategory6Props {
  className?: string
  category: TCategory
}

const CardCategory6: FC<CardCategory6Props> = ({ className = 'flex-1', category }) => {
  const { count, name, href, thumbnail } = category
  return (
    <Link 
      href={href} 
      className={`group relative z-0 flex w-full min-w-[20rem] gap-4 overflow-hidden rounded-2xl ${className}`}
    >
      <div className="aspect-w-16 h-0 w-full gap-4 aspect-h-8 sm:aspect-h-10 xl:aspect-h-8"></div>
      <Image
        fill
        alt={name}
        src={thumbnail}
        className="rounded-2xl object-cover duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 sm:p-6 lg:p-7">
        <h2 className="relative text-1xl font-semibold text-white sm:text-2xl lg:text-1xl">
          {name}
        </h2>
        {count !== undefined && (
          <span className="relative mt-2 block text-sm text-white/90 sm:text-base">
            {convertNumbThousand(count)}+ properties
          </span>
        )}
      </div>
    </Link>
  )
}

export default CardCategory6
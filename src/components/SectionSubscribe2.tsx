import { Badge } from '@/shared/Badge'
import ButtonCircle from '@/shared/ButtonCircle'
import { Heading, Subheading } from '@/shared/Heading'
import Input from '@/shared/Input'
import T from '@/utils/getT'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { FC } from 'react'

interface Props {
  className?: string
}

const SectionSubscribe2: FC<Props> = ({ className = '' }) => {
  return (
    <div className={`relative rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-neutral-800 dark:to-neutral-900 p-8 lg:p-12 shadow-xl ${className}`}>
      <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
        {/* Left Content */}
        <div className="shrink-0 lg:w-2/5 z-10">
          <Heading>Join our newsletter 🎉</Heading>
          <Subheading className="mt-5">
            Join our community and stay informed!
          </Subheading>
          
          <ul className="mt-10 space-y-4">
            <li className="flex items-center gap-x-4">
              <Badge color="blue">01</Badge>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                Get more discount
              </span>
            </li>
            <li className="flex items-center gap-x-4">
              <Badge color="red">02</Badge>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                Update, Learn & Travel
              </span>
            </li>
          </ul>
          
          <form className="relative mt-10 max-w-sm" action={'#'} method="POST">
            <Input
              required
              aria-required
              placeholder={T['common']['Enter your email']}
              type="email"
              rounded="rounded-full"
              sizeClass="h-12 px-5 py-3"
            />
            <div className="absolute end-1.5 top-1/2 -translate-y-1/2">
              <ButtonCircle type="submit">
                <ArrowRightIcon className="size-4! rtl:rotate-180" />
              </ButtonCircle>
            </div>
          </form>
        </div>

        {/* Right Image */}
        <div className="grow relative h-64 lg:h-96">
          <Image 
            alt="newsletter subscription" 
            src="/images/hero-image-2.png"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 60vw"
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}

export default SectionSubscribe2
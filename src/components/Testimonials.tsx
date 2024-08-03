import Image from 'next/image'

import { Container } from '@/components/Container'
import Plansom from '~/public/images/Plansom.svg'
import Avatar from '~/public/images/Avatar.jpg'
function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section className="bg-[#1958B2] py-20 sm:py-32">
      <Container className="flex max-w-[53.2rem] flex-col items-center justify-center text-center text-white">
        <div>
          <Image src={Plansom} alt="plansom-logo" />
        </div>
        <p className="my-8 text-base font-medium lg:text-xl">
          {`“Recently, I created beta test campaign for my AI Tool - Plansom on
          Crowd. Crowd has great features if you're looking to create
          interactive surveys, beta tests, feedback campaigns for your team. I
          am using daily for beta tests.”`}
        </p>
        <div>
          <Image
            src={Avatar}
            alt="plansom-ceo"
            className="h-16 w-16 rounded-full"
          />
        </div>
        <p className="mt-4 text-lg font-semibold">Anshika Awasthi</p>
        <p className="text-[#99CCFF]">Sales Marketing Executive, Plansom</p>
      </Container>
    </section>
  )
}

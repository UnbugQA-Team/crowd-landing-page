import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
// import Sentinel from '~/public/images/logos/sentinel.t'
import VendorStack from '~/public/images/logos/vendorstack.svg'
import TechWave from '~/public/images/logos/techwave.svg'
import FlickWheel from '~/public/images/logos/flickwheel.svg'
import Kweeq from '~/public/images/kweeq.svg'
import HeroImage from '~/public/images/feature-1.jpg'
import Sentinel from '~/public/images/logos/Sentinel'
export function Hero() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <section className="flex flex-col items-center gap-8 lg:ml-28 lg:flex-row">
        <div className="mx-auto w-full max-w-[340px] text-center lg:max-w-[34rem] lg:text-left">
          <p className="text-center text-[2.25rem] font-semibold text-[#101828] lg:text-left lg:text-6xl">
            Run usability tests for free
          </p>
          <p className="mt-4 max-w-[32rem] text-lg text-[#344054] lg:mt-6 lg:text-xl">
            Uncover hidden insights, boost conversions, and create delightful
            user experiences with data-driven decisions.
          </p>
          <Button
            color="blue"
            className="mt-8 lg:mt-12"
            href="https://app.crowdapp.io/auth/sign-up"
            target="_blank"
          >
            Get started for free
          </Button>
        </div>
        <div className="max-w-[712px] px-[12px]">
          <Image src={HeroImage} alt="hero-image" />
        </div>
      </section>
      <Container className="pb-16">
        <div className="mt-10 text-center">
          <p className="font-display text-lg font-semibold text-[#475467]">
            Trusted by over 500 organisations
          </p>

          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-[772px] grid-cols-2 items-center justify-between gap-x-4 gap-y-3 lg:grid-cols-5"
          >
            {[
              { name: 'Sentinel', logo: <Sentinel /> },
              // { name: 'vendorstack', logo: VendorStack },
              // { name: 'techwave', logo: TechWave },
              // { name: 'flickwheel', logo: FlickWheel },
              // { name: 'kweeq', logo: Kweeq },
            ].map((company, groupIndex) => (
              <li
                key={groupIndex}
                className={` ${groupIndex === 4 ? 'col-span-2 mx-auto lg:col-span-1' : ''} `}
              >
                {company.logo}
                {/* <Image src={company.logo} alt={company.name} unoptimized /> */}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import Feature1 from '@/images/feature-2.jpg'
import Feature2 from '@/images/feature-3.jpg'
import Feature3 from '@/images/feature-4.jpg'
import Feature4 from '@/images/feature-5.jpg'

export function PrimaryFeatures() {
  return (
    <div className="mx-auto my-16 max-w-[1440px]">
      <section className="flex flex-col items-center justify-between px-4 text-center lg:ml-[131px] lg:mt-10 lg:flex-row lg:px-0 lg:text-left">
        <div className="w-full max-w-[31rem]">
          <p className="text-2xl font-semibold text-[#101828] lg:text-5xl">
            Uncover usability issues
          </p>
          <p className="mt-4 text-base text-[#475467] lg:text-lg">
            Quickly identify and address user experience challenges, optimizing
            your website or app for better performance.
          </p>
        </div>
        <div className="mt-10 lg:mt-0">
          <Image src={Feature1} alt="feature-image" />
        </div>
      </section>
      <section className="mt-16 flex flex-col-reverse items-center gap-24 px-4 text-center lg:mt-8 lg:flex-row lg:px-0 lg:text-left">
        <div className="-mt-10 lg:mt-0">
          <Image src={Feature2} alt="feature-image" />
        </div>
        <div className="w-full max-w-[32rem]">
          <p className="text-2xl font-semibold text-[#101828] lg:text-5xl">
            Launch to over 200k+ participants globally
          </p>
          <p className="mt-4 text-base text-[#475467] lg:text-lg">
            Capture diverse user perspectives in real-time to refine your
            product for a worldwide audience. Ensure your website resonates
            globally.
          </p>
        </div>
      </section>

      <section className="mt-12 flex flex-col items-center justify-between px-4 text-center lg:ml-[115px] lg:mr-[33px] lg:mt-8 lg:flex-row lg:px-0 lg:py-[52px] lg:text-left">
        <div className="w-full max-w-[31rem]">
          <p className="text-2xl font-semibold text-[#101828] lg:text-5xl">
            Deploy tests on your live websites
          </p>
          <p className="mt-4 text-base text-[#475467] lg:text-lg">
            Get authentic user feedback instantly by deploying tests on your
            live site. Get valuable insights from real interactions, without
            disrupting the user experience.
          </p>
        </div>
        <div className="mt-10 lg:mt-0">
          <Image src={Feature3} alt="feature-image" />
        </div>
      </section>

      <section className="mt-12 flex flex-col-reverse items-center justify-between px-4 text-center lg:mb-[112px] lg:ml-[109px] lg:mr-[44px] lg:mt-8 lg:flex-row lg:px-0 lg:py-[92px] lg:text-left">
        <div className="mt-10 lg:mt-0">
          <Image src={Feature4} alt="feature-image" />
        </div>
        <div className="w-full max-w-[31rem]">
          <p className="text-2xl font-semibold text-[#101828] lg:text-5xl">
            Get deep insights with AI analysis
          </p>
          <p className="mt-4 text-base text-[#475467] lg:text-lg">
            Harness AI-powered analysis to uncover hidden patterns and
            opportunities in your user data.
          </p>
        </div>
      </section>
    </div>
  )
}

import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import Slack from '@/images/slack.svg'
import Zapier from '@/images/zapier.svg'

export function CallToAction() {
  return (
    <Container className="py-16 lg:py-24">
      <section className="text-center">
        <p className="text-[1.88rem] font-semibold text-[#101828] lg:text-5xl">
          Integrate with your favourite tools
        </p>
        <p className="mx-auto mt-5 max-w-[41.4rem] text-lg text-[#475467] lg:text-xl">
          Connect your tools, connect your teams. Sync Crowd seamlessly with
          your team workspace
        </p>
        <div className="mb-24 mt-12 flex flex-col items-center justify-center gap-8 lg:mt-16 lg:flex-row">
          <span className="flex max-w-[21.5rem] flex-col items-center justify-center text-center">
            <Image src={Zapier} alt="zapier" />
            <p className="mt-4 text-lg font-semibold text-[#101828] lg:text-xl">
              Zapier
            </p>
            <p className="mt-2 text-[#475467]">
              Bridge the gap between Crowd and your other favorite apps with
              Zapier integration. Connect to over 5000 apps.
            </p>
          </span>
          <span className="flex max-w-[21.5rem] flex-col items-center justify-center text-center">
            <Image src={Slack} alt="slack" />
            <p className="mt-4 text-lg font-semibold text-[#101828] lg:text-xl">
              Slack
            </p>
            <p className="mt-2 text-[#475467]">
              Receive real-time updates in your chosen Slack channels as users
              complete tests and give feedback on your widgets.
            </p>
          </span>
        </div>
      </section>
      <section className="flex max-w-[1216px] flex-col items-start justify-between gap-8 rounded-2xl bg-[#1958B2] px-6 py-10 text-white lg:flex-row lg:p-16">
        <div className="w-full max-w-[54.2rem]">
          <p className="text-[1.88rem] font-semibold">
            Start gathering insights today
          </p>
          <p className="mt-4 text-lg lg:text-xl">
            With Crowd, you're not just gathering data; you're propelling your
            business forward. Experience comprehensive insights in a snap.
          </p>
        </div>
        <Button
          color="white"
          className="w-full text-[#344054] lg:w-2/12"
          href="https://app.crowdapp.io/auth/sign-up"
          target="_blank"
        >
          Get started for free
        </Button>
      </section>
    </Container>
  )
}

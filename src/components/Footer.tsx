import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import Image from 'next/image'
import X from '@/images/x.svg'
import LinkedIn from '@/images/linkedin.svg'
import Instagram from '@/images/instagram.svg'

export function Footer() {
  const company = [
    {
      id: 1,
      name: 'Contact us',
      link: 'mailto:support@crowdapp.io',
    },
    {
      id: 2,
      name: 'Privacy policy',
      link: 'https://usecrowd.notion.site/usecrowd/Privacy-Policy-e1b72924c8c94625a62ffc3c8b6dfef6',
    },
    {
      id: 3,
      name: 'Terms & Conditions',
      link: 'https://usecrowd.notion.site/usecrowd/Terms-of-Service-ec1f8ecb45de4cdfb285e1dc13d492f4',
    },
    {
      id: 4,
      name: 'Security',
      link: 'https://help.crowdapp.io/hc/crowd/articles/1706247580-safeguarding-your-data-and-privacy',
    },
  ]
  const platform = [
    {
      id: 1,
      name: 'Unmoderated tests',
      link: 'https://crowdapp.io/unmoderated-tests',
    },
    {
      id: 2,
      name: 'Moderated sessions',
      link: 'https://crowdapp.io/moderated-sessions',
    },
    {
      id: 3,
      name: 'Feedback widgets',
      link: 'https://crowdapp.io/feedback-widget',
    },
    {
      id: 4,
      name: 'Docs',
      link: 'https://crowdapp.io/docs',
    },
    {
      id: 5,
      name: 'Kanban board',
      link: 'https://crowdapp.io/kanban-boards',
    },
    // {
    //   id: 6,
    //   name: 'Contact',
    //   link: '',
    // },
  ]
  const resources = [
    {
      id: 1,
      name: 'Use cases',
      link: 'https://crowdapp.io/use-cases',
    },
    {
      id: 2,
      name: 'Blog',
      link: 'https://crowdapp.io/blog',
    },
    {
      id: 3,
      name: 'Help center',
      link: 'http://help.crowdapp.io/',
    },
    {
      id: 4,
      name: 'Status page',
      link: 'https://crowdapp.statuspage.io/',
    },
  ]
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-start gap-16 py-16 lg:flex-row">
          <span className="block max-w-[20rem]">
            <Logo className="mx-auto h-10 w-auto" />
            <p className="mt-6">
              Crowd provides you with the tools to understand your users so that
              you can create meaningful experiences for them and drive growth
              for your business.
            </p>
          </span>
          <div className="mt-10 grid w-full grid-cols-2 lg:mt-0 lg:grid-cols-3">
            <span className="block w-full max-w-[16rem]">
              <nav className="text-sm" aria-label="quick links">
                <div className="-my-1 flex flex-col justify-center gap-x-6">
                  <NavLink href="#" text>
                    Company
                  </NavLink>
                  {company.map((item) => (
                    <NavLink key={item.id} href={item.link}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </nav>
            </span>
            <span className="block w-full max-w-[16rem]">
              <nav className="text-sm" aria-label="quick links">
                <div className="-my-1 flex flex-col justify-center gap-x-6">
                  <NavLink href="#" text>
                    Platform
                  </NavLink>
                  {platform.map((item) => (
                    <NavLink key={item.id} href={item.link}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </nav>
            </span>
            <span className="block w-full max-w-[16rem]">
              <nav className="text-sm" aria-label="quick links">
                <div className="-my-1 flex flex-col justify-center gap-x-6">
                  <NavLink href="#" text>
                    Resources
                  </NavLink>
                  {resources.map((item) => (
                    <NavLink key={item.id} href={item.link}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </nav>
            </span>
          </div>
        </div>
        <div className="flex flex-col py-10 sm:flex-row-reverse sm:justify-between lg:items-center">
          <div className="flex gap-x-6">
            <Link
              href="https://x.com/usecrowd"
              className="group"
              aria-label="crowd on X"
            >
              <Image src={X} alt="X" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/usecrowdapp/"
              className="group"
              aria-label="crowd on Linkedin"
            >
              <Image src={LinkedIn} alt="LinkedIn" />
            </Link>
            <Link
              href="https://www.instagram.com/usecrowdapp"
              className="group"
              aria-label="crowd on instagram"
            >
              <Image src={Instagram} alt="Instagram" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            &copy; {new Date().getFullYear()}. All rights reserved by Crowd.
          </p>
        </div>
      </Container>
    </footer>
  )
}

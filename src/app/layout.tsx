import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Crowd',
    default: 'Crowd | All-in-one user research and feedback tool',
  },
  description:
    'Crowd is a comprehensive Customer Insights and User Research platform that empowers businesses to gather, analyze, and implement customer feedback effectively.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId setPersonProperties".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_vpQYSuHkbEmNzXCUb4ddjUoW8BkbeHYgjijJUQWdfOP',{api_host:'https://us.i.posthog.com', person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
                })
            `,
          }}
        />
     <script
    dangerouslySetInnerHTML={{
            __html: `
            (function () {
        fetch(
          "https://api.v2.crowdapp.io/workspace/script?pid=a53e3a79-5cb2-45bb-a294-dbf3e2fc9042"
        )
          .then((response) => response.json())
          .then((data) => {
            data.data.forEach((e) => {
              const sc = document.createElement("script");
              e.src ? (sc.src = e.src) : () => {};
              e.defer ? (sc.defer = true) : () => {};
              e.attributes.forEach((a) => {
                sc.setAttribute(a.name, a.value);
              });
              e.text ? (sc.text = e.text) : () => {};
              e.type ? (sc.type = e.type) : () => {};
              document.head.appendChild(sc);
            });
          })
          .catch((error) => console.error("Error loading scripts:", error));
      })();
            `,
          }}
/>
      </head>
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}

import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import { Bars3Icon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import Combobox from '../components/Combobox'
import { Button } from '../components/button'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative text-gray-900">
      {/* <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" /> */}
      <Container className="relative">
        {/* <Navbar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              Radiant raises $100M Series A from Tailwind Ventures
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        /> */}
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-900 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Pre-med course planner
          </h1>

          <Button className="mt-8 rounded bg-[#14B077]">
            {' '}
            Schedule a free 15 minute consultation
          </Button>

          <div className="pt-12">
            <Combobox />
          </div>

          {/* <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Radiant helps you sell more by revealing sensitive information about
            your customers.
          </p> */}
          {/* <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div> */}
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Sales</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Know more about your customers than they do.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />

      <main>
        {/* <Container className="mt-10">
          <LogoCloud />
        </Container> */}
        {/* <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div> */}
        {/* <DarkBentoSection /> */}
      </main>
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  )
}

const navigation = [
  { name: 'Free events', href: '#' },
  { name: 'Become a coach', href: '#' },
  { name: 'Partnerships', href: '#' },
]

function Header() {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 99 23"
            className="text-leland-primary h-6 shrink-0"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M20.572 2.334 6.822 6.46 2.24 20.667l14.208-4.125 4.125-14.208Zm-9.167 11.458a2.292 2.292 0 1 0 0-4.583 2.292 2.292 0 0 0 0 4.583Z"
              clip-rule="evenodd"
              vector-effect="non-scaling-stroke"
            ></path>
            <path
              fill="currentColor"
              d="M80.285 12.707v6.466h3.195v-7.165c0-2.896-.874-5.142-4.344-5.142-1.747 0-2.97.773-3.62 2.047h-.074l.025-1.823h-3.195v12.083h3.195v-6.017c0-2.022.674-3.67 2.646-3.67 1.847 0 2.172 1.424 2.172 3.221ZM66.415 17.775l.05 1.398h3.07v-6.915c0-2.047-.449-3.146-1.323-3.994-.898-.85-2.121-1.398-4.268-1.398a9.467 9.467 0 0 0-4.719 1.273l.974 2.047c.524-.4 1.847-.999 3.445-.999 1.673 0 2.696.724 2.696 2.272v.324l-2.896.2c-2.496.175-4.967 1.148-4.967 3.67 0 2.521 1.897 3.794 4.243 3.794 1.798 0 3.196-.799 3.695-1.672Zm-2.222-3.92 2.172-.125v2.222a3.249 3.249 0 0 1-2.596 1.323c-1.323 0-2.097-.699-2.097-1.722 0-1.024.824-1.598 2.521-1.698ZM41.979 14.155h8.887s.05-.999.05-1.623c0-3.22-2.247-5.666-5.966-5.666-3.446 0-6.266 2.596-6.266 6.465 0 3.895 2.696 6.116 6.34 6.116 2.946 0 4.768-1.248 5.442-1.947l-1.248-1.722c-.574.499-2.022 1.223-3.644 1.223-1.823 0-3.296-.924-3.595-2.846Zm2.946-4.918c2.246 0 2.746 1.523 2.795 2.846H41.93c.1-1.523 1.098-2.846 2.996-2.846ZM31.738 3.557v12.918h6.017v2.696h-9.237V3.557h3.22ZM56.332 3.557v15.614h-3.17V3.557h3.17Z"
              vector-effect="non-scaling-stroke"
            ></path>
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M98.594 3.557v15.614h-3.02l-.025-1.897h-.075c-.974 1.548-2.472 2.172-4.144 2.172-3.545 0-5.717-2.746-5.717-6.341 0-3.42 2.272-6.241 5.942-6.241 1.622 0 2.995.6 3.844 1.897h.05c-.025-.549-.025-1.198-.025-2.047V3.557h3.17Zm-9.735 9.548c0 2.097 1.298 3.744 3.37 3.744 1.922 0 3.27-1.472 3.27-3.744 0-2.022-1.323-3.795-3.37-3.795-2.072 0-3.27 1.773-3.27 3.795Z"
              clip-rule="evenodd"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
            </a>
          ))}
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

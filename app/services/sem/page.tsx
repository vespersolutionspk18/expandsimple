'use client'

import LeadChange from '@/app/homecomponents/LeadChange'
import Header from '@/app/components/Header'
import Hero from './components/Hero'
import Footer from '@/app/components/Footer'
import ServicesSection from '../service'
import { ServiceItem } from '@/app/types/service'
import React from 'react'
import Testimonials from '@/app/components/Testimonials'
import FAQ from '@/app/components/FAQ'
import StickyNavigation from '@/app/components/StickyNavigation'
import KeyFeatures from '@/app/components/KeyFeatures'

const semServices: ServiceItem[] = [
  {
    id: 'integrated-strategy',
    title: 'Integrated SEO + PPC Strategy',
    description: 'Stop treating SEO and PPC as separate channels. Our integrated approach uses PPC data to inform SEO strategy and vice versa. We identify high-converting keywords through PPC, then build SEO content around them. Use SEO insights to refine PPC targeting. This synergy captures more market share while reducing overall customer acquisition costs.',
    buttonText: 'Get Integrated Strategy',
    buttonHref: '/contact?service=integrated-sem',
    imageSrc: '/assets/sem1.png',
    imageAlt: 'Keyword research and analysis dashboard',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  },
  {
    id: 'serp-domination',
    title: 'SERP Feature Targeting',
    description: 'Own multiple positions on page one. We target featured snippets, local pack rankings, People Also Ask boxes, and video carousels in addition to traditional organic and paid listings. The more real estate you own on the search results page, the less visible your competitors become. Dominate the SERP, dominate your market.',
    buttonText: 'Dominate Search Results',
    buttonHref: '/contact?service=serp-domination',
    imageSrc: '/assets/sem2.png',
    imageAlt: 'SERP features and rich results',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  },
  {
    id: 'competitor-conquest',
    title: 'Competitor Conquest Campaigns',
    description: 'Capture customers researching your competitors. We bid on competitor brand names through PPC while creating comparison content for SEO. When homeowners search for "CompetitorName reviews" or "CompetitorName vs", they find you instead. Ethical, effective, and proven to steal market share from established competitors.',
    buttonText: 'Steal Market Share',
    buttonHref: '/contact?service=competitor-conquest',
    imageSrc: '/assets/sem3.png',
    imageAlt: 'Competitor conquesting strategy diagram',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  }
]

const semFAQs = [
  {
    id: 'faq-1',
    question: 'What\'s the difference between SEM and just doing SEO and PPC separately?',
    answer: 'SEM is the strategic integration of SEO and PPC working together. When done separately, you miss opportunities - PPC can tell you which keywords convert best before investing months in SEO. SEO can reduce PPC costs by capturing branded and high-volume terms organically. Integrated SEM means both channels inform and improve each other, resulting in better overall performance and lower customer acquisition costs.'
  },
  {
    id: 'faq-2',
    question: 'How does SEM help me dominate my market faster?',
    answer: 'SEM captures customers at every stage of their journey. PPC gets you immediate visibility and leads while SEO is building. SEO provides long-term sustainable traffic that reduces reliance on paid ads. Together, you own multiple positions on page one - paid ad, local pack, organic listings, featured snippets. Competitors see you everywhere, customers perceive you as the market leader.'
  },
  {
    id: 'faq-3',
    question: 'What are SERP features and why do they matter?',
    answer: 'SERP features are special result types beyond traditional blue links - featured snippets (answer boxes), local pack (map results), People Also Ask, image packs, and video carousels. They occupy prime real estate and get higher click-through rates. We optimize your content to win these features, giving you more visibility without additional ad spend.'
  },
  {
    id: 'faq-4',
    question: 'Is bidding on competitor names legal and ethical?',
    answer: 'Yes, competitor conquest campaigns are completely legal and widely used. Google allows bidding on competitor brand names (though you can\'t use their trademarks in ad copy without permission). It\'s ethical because you\'re offering consumers choice - if someone searches for a competitor, they deserve to know all their options. Many of your competitors are already bidding on your name.'
  },
  {
    id: 'faq-5',
    question: 'How much should I budget for an integrated SEM strategy?',
    answer: 'For comprehensive SEM (SEO + PPC combined), we typically recommend $5,000-$10,000/month total. This includes $2,500-$4,000 for SEO services, $1,500-$3,000 in PPC ad spend, and $1,000-$3,000 in PPC management. The exact split depends on your market, competition, and goals. We can start with one channel and scale up as you see ROI.'
  },
  {
    id: 'faq-6',
    question: 'How do you measure SEM success?',
    answer: 'We track comprehensive metrics: total market share of search results (organic + paid), overall cost per acquisition across both channels, branded vs non-branded traffic mix, SERP feature wins, competitor visibility analysis, and total revenue attributed to search. The goal is maximum visibility at the lowest total cost, not optimizing channels in silos.'
  }
]

const SEMPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'services', label: 'SEM Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'Keyword Gap Analysis',
      description: 'We identify gaps in your search visibility - keywords where competitors rank but you don\'t. Then we create integrated campaigns to capture those opportunities through both paid and organic strategies.'
    },
    {
      number: 2,
      title: 'Omnichannel Search Presence',
      description: 'We ensure you show up everywhere homeowners search - Google Search, Google Maps, YouTube, Google Images, and even voice search. Comprehensive visibility across all search touchpoints.'
    },
    {
      number: 3,
      title: 'Content Calendar Aligned with Paid Campaigns',
      description: 'Your content publishing schedule is strategically aligned with paid campaigns. When we run PPC for "kitchen remodel", we publish SEO content on the same topic to dominate the topic.'
    },
    {
      number: 4,
      title: 'Market Share Tracking',
      description: 'We track your total share of search results compared to competitors. See exactly what percentage of searches in your market you\'re capturing versus losing to competitors.'
    }
  ]

  return (
    <>
      <Header />
      <main className="pt-[7.40rem] md:pt-[7.02rem]">
      <div id="hero">
        <Hero />
      </div>
      <StickyNavigation items={navigationItems} />
      <div id="key-features">
        <KeyFeatures features={keyFeatures} />
      </div>      <div id="services">
        <ServicesSection
          services={semServices}
          sectionId="sem-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          title="SEM Success Stories"
          subtitle="Contractors Dominating Search with Integrated Strategy"
          testimonials={[
            {
              id: 1,
              body: "Expand's integrated SEM approach transformed our visibility. We now own 4-5 positions on page one for our top keywords - paid ad, local pack, organic listing, and featured snippet. Competitors barely exist anymore.",
              clientName: "Marcus Richardson",
              clientCompany: "Richardson Home Remodeling"
            },
            {
              id: 2,
              body: "The competitor conquest campaigns are genius. When people search for our biggest competitor, our ad appears above their organic listing. We've stolen 30% of their market share in 6 months.",
              clientName: "Sarah Chen",
              clientCompany: "Chen Construction & Remodeling"
            },
            {
              id: 3,
              body: "Combining SEO and PPC strategically cut our overall cost per lead by 38%. PPC provides instant leads while SEO builds long-term traffic. Together they're unstoppable.",
              clientName: "Tom Bradley",
              clientCompany: "Bradley Tile & Flooring"
            },
            {
              id: 4,
              body: "The SERP domination strategy is incredible. For 'roofing contractor [city]' we appear in 5 different places on the first page. Our lead volume tripled and competitors can't compete.",
              clientName: "Davis Miller",
              clientCompany: "Miller Roofing Co."
            },
            {
              id: 5,
              body: "Expand tracks our total market share across all search channels. We've gone from 12% to 47% market share in our area. The data proves their integrated approach works better than siloed marketing.",
              clientName: "Jennifer Santos",
              clientCompany: "Santos Kitchen & Bath"
            }
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          items={semFAQs}
          title="Search Engine Marketing FAQs"
          subtitle="Everything you need to know about integrated SEM"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Own Page One - Organic & Paid"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default SEMPage

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

const seoServices: ServiceItem[] = [
  {
    id: 'local-seo',
    title: 'Local SEO Domination',
    description: 'Rank #1 when homeowners search for contractors in your area. We optimize your Google Business Profile, build local citations, and implement proven strategies to dominate the local pack. Perfect for remodeling contractors, roofers, and home service businesses targeting specific cities and neighborhoods.',
    buttonText: 'Get Local SEO',
    buttonHref: '/contact?service=local-seo',
    imageSrc: '/assets/localseo.png',
    imageAlt: 'Google Maps local search results showing top rankings',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  },
  {
    id: 'on-page-seo',
    title: 'Technical SEO & On-Page Optimization',
    description: 'Fix technical issues holding back your rankings. We audit your website for speed, mobile responsiveness, and crawlability issues. Our technical optimization includes schema markup, core web vitals improvements, and structured data to help search engines understand your services better.',
    buttonText: 'Fix Technical Issues',
    buttonHref: '/contact?service=technical-seo',
    imageSrc: '/assets/technicalseo.png',
    imageAlt: 'Website speed and performance optimization dashboard',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  },
  {
    id: 'content-seo',
    title: 'Content Marketing & Link Building',
    description: 'Build authority with high-quality content and backlinks. We create SEO-optimized blog posts, service pages, and location pages that rank for high-intent keywords. Our link building strategies increase your domain authority and trust signals, pushing you higher in search results.',
    buttonText: 'Build Authority',
    buttonHref: '/contact?service=content-seo',
    imageSrc: '/assets/backlinks.webp',
    imageAlt: 'Content marketing strategy session with SEO planning',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  }
]

const seoFAQs = [
  {
    id: 'faq-1',
    question: 'How long does SEO take to work?',
    answer: 'SEO is a long-term investment. You\'ll typically start seeing movement in rankings within 3-4 months, with significant results by months 6-12. However, local SEO can show faster results - we\'ve gotten clients ranking in the local pack within 60-90 days. The timeline depends on your market competitiveness, current website status, and the keywords you\'re targeting.'
  },
  {
    id: 'faq-2',
    question: 'What\'s the difference between local SEO and regular SEO?',
    answer: 'Local SEO focuses on ranking for location-based searches like "remodeling contractor near me" or "roofer in [city]". It heavily involves Google Business Profile optimization, local citations, and geo-targeted content. Regular SEO focuses on broader, non-location-specific keywords. For home service businesses, local SEO is typically more valuable as most customers search locally.'
  },
  {
    id: 'faq-3',
    question: 'Do you guarantee rankings?',
    answer: 'We don\'t guarantee specific rankings because search engines control the algorithms, not us. However, we do guarantee that we\'ll follow proven best practices, provide transparent reporting, and work tirelessly to improve your visibility. Our track record speaks for itself - we\'ve helped 500+ home service businesses achieve top rankings in their markets.'
  },
  {
    id: 'faq-4',
    question: 'How much does SEO cost for home service businesses?',
    answer: 'Our SEO packages range from $1,500-$2,500/month for local SEO essentials, $3,000-$5,000/month for competitive market domination, and $7,500+/month for enterprise multi-location businesses. Pricing depends on your market competition, current website status, number of service areas, and growth goals. We provide custom quotes after a free audit.'
  },
  {
    id: 'faq-5',
    question: 'What if I already rank for my brand name?',
    answer: 'Ranking for your brand name is good, but it\'s not enough. Most homeowners don\'t know your company name yet - they search for "kitchen remodeler near me" or "roof replacement [city]". Our SEO focuses on these high-intent keywords that bring new customers who\'ve never heard of you. That\'s where real business growth happens.'
  },
  {
    id: 'faq-6',
    question: 'What\'s included in your SEO service?',
    answer: 'Our SEO service includes: Google Business Profile optimization, local citation building, on-page SEO, technical SEO audits and fixes, content creation and optimization, link building, schema markup, review generation strategy, monthly ranking reports, competitor analysis, and a dedicated SEO specialist. Everything you need to dominate local search.'
  }
]

const SEOPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'services', label: 'SEO Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'Google Business Profile Mastery',
      description: 'We optimize every element of your GBP to maximize visibility in local search and Google Maps. From posts and photos to Q&A management and review responses.'
    },
    {
      number: 2,
      title: 'Local Citation Building',
      description: 'We build and manage citations across 50+ directories including Yelp, HomeAdvisor, Angi, BBB, and industry-specific platforms to strengthen your local presence.'
    },
    {
      number: 3,
      title: 'Content That Ranks',
      description: 'Our team creates SEO-optimized content targeting high-intent keywords like "kitchen remodel cost" and "roof replacement near me" that drive qualified leads.'
    },
    {
      number: 4,
      title: 'Technical SEO Excellence',
      description: 'We fix speed issues, mobile problems, and technical errors that hold you back. Our sites load in under 3 seconds and pass Google\'s Core Web Vitals.'
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
      </div>
      <div id="services">
        <ServicesSection
          services={seoServices}
          sectionId="seo-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          title="SEO Success Stories"
          subtitle="Contractors Dominating Search with Expand"
          testimonials={[
            {
              id: 1,
              body: "Expand's SEO got us ranking #1 for 'kitchen remodeling [city]' in just 4 months. We went from 8 leads per month to 65+. Their team knows contractor SEO inside and out!",
              clientName: "Marcus Richardson",
              clientCompany: "Richardson Home Remodeling"
            },
            {
              id: 2,
              body: "We tried SEO agencies before but never got results. Expand is different - they actually understand the remodeling industry. Now we rank #1 for 15+ keywords and our phone won't stop ringing.",
              clientName: "Sarah Chen",
              clientCompany: "Chen Construction & Remodeling"
            },
            {
              id: 3,
              body: "The local SEO work Expand did transformed our business. We're showing up in the Google local pack for all our service areas. Lead quality is incredible - these are serious buyers ready to start projects.",
              clientName: "Tom Bradley",
              clientCompany: "Bradley Tile & Flooring"
            },
            {
              id: 4,
              body: "From #47 to #1 in 5 months for 'roofing contractor near me'. Their SEO strategies actually work. Best part? They explain everything in plain English, no technical jargon.",
              clientName: "Davis Miller",
              clientCompany: "Miller Roofing Co."
            },
            {
              id: 5,
              body: "Expand's content marketing fills our blog with articles that actually rank and bring in leads. We're now the go-to authority in our market. Our website traffic is up 320% year over year.",
              clientName: "Jennifer Santos",
              clientCompany: "Santos Kitchen & Bath"
            }
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          items={seoFAQs}
          title="SEO FAQs"
          subtitle="Everything you need to know about SEO for home service businesses"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Ready to Rank #1 in Your Market?"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default SEOPage

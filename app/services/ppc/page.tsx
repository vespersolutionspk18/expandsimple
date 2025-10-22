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

const ppcServices: ServiceItem[] = [
  {
    id: 'google-ads',
    title: 'Google Search Ads',
    description: 'Appear at the top of Google when homeowners search for remodeling contractors. We target high-intent keywords like "kitchen remodel near me" and "bathroom renovation cost" to capture customers ready to buy. Our campaigns include call tracking, conversion optimization, and strategic bid management to maximize your budget.',
    buttonText: 'Start Google Ads',
    buttonHref: '/contact?service=google-ads',
    imageSrc: '/assets/homeremodeling.png',
    imageAlt: 'Google Ads search campaign dashboard',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'local-services-ads',
    title: 'Google Local Services Ads',
    description: 'Get the coveted "Google Verified" badge and appear above regular search ads. Perfect for contractors who want maximum trust and visibility. We handle your LSA setup, profile optimization, and review management. Only pay for qualified leads that contact you directly - no wasted clicks.',
    buttonText: 'Get Google Verified',
    buttonHref: '/contact?service=local-services-ads',
    imageSrc: '/assets/verify.png',
    imageAlt: 'Google Local Services Ads with Google Verified badge',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'social-media-ads',
    title: 'Facebook & Instagram Ads',
    description: 'Reach homeowners where they spend time scrolling. Our social media ads showcase your best projects with stunning before/after photos and video. Perfect for building brand awareness and capturing homeowners in the early stages of planning their remodel. We target by demographics, interests, and behaviors to reach your ideal clients.',
    buttonText: 'Launch Social Ads',
    buttonHref: '/contact?service=social-ads',
    imageSrc: '/assets/instads.jpg',
    imageAlt: 'Facebook and Instagram ad campaigns for contractors',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  }
]

const ppcFAQs = [
  {
    id: 'faq-1',
    question: 'How much should I spend on Google Ads?',
    answer: 'For most remodeling contractors, we recommend starting with $1,500-$3,000/month in ad spend plus management fees. This allows enough data to test keywords and optimize performance. In competitive markets, $5,000-$10,000/month is more effective. The key is your customer lifetime value - if one kitchen remodel brings in $50K, spending $500 to acquire that customer is excellent ROI.'
  },
  {
    id: 'faq-2',
    question: 'What\'s the difference between Google Ads and Local Services Ads?',
    answer: 'Google Ads are traditional pay-per-click ads where you pay for each click. Local Services Ads (LSA) appear above regular ads with a "Google Verified" badge, and you only pay when someone contacts you directly (pay-per-lead). LSA requires background checks and license verification. Both are valuable - LSA for trust and qualified leads, Google Ads for volume and targeting flexibility.'
  },
  {
    id: 'faq-3',
    question: 'How do you track phone calls from ads?',
    answer: 'We use call tracking technology that assigns unique phone numbers to your campaigns. When someone calls from an ad, we record the source, keyword, campaign, and call duration. You get detailed reports showing which campaigns drive actual phone conversations, not just website visits. This data is crucial for optimizing your ad spend toward what actually generates revenue.'
  },
  {
    id: 'faq-4',
    question: 'Can I pause my campaigns anytime?',
    answer: 'Absolutely. There are no long-term contracts. You can pause campaigns anytime, though we typically recommend running campaigns for at least 90 days to gather enough data for optimization. PPC works best as a consistent lead generation channel, but you have complete control over when to run campaigns and adjust budgets.'
  },
  {
    id: 'faq-5',
    question: 'What\'s a good conversion rate for home services?',
    answer: 'For Google Search Ads targeting high-intent keywords, 5-10% conversion rate (form fills or calls) is solid. For Local Services Ads, 15-25% is typical since leads are more qualified. Social media ads typically see 2-5% conversion rates since people aren\'t actively searching. More important than percentages is your cost per lead and ROI - we optimize for profitable customer acquisition, not vanity metrics.'
  },
  {
    id: 'faq-6',
    question: 'How quickly will I see results?',
    answer: 'PPC delivers faster results than SEO. You can start getting clicks and leads within 24-48 hours of launching campaigns. However, optimization takes time. Month 1 is about gathering data, month 2-3 is optimization, and by month 4+ you should see strong ROI as we refine targeting, ads, and landing pages based on what converts best.'
  }
]

const PPCPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'services', label: 'PPC Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'Strategic Keyword Targeting',
      description: 'We target high-intent keywords that indicate buying readiness: "cost", "contractor", "near me", "estimate". No wasted spend on research keywords that don\'t convert.'
    },
    {
      number: 2,
      title: 'Conversion-Optimized Landing Pages',
      description: 'Every campaign gets custom landing pages designed specifically to convert clicks into calls and form submissions. Fast loading, mobile-optimized, with clear CTAs.'
    },
    {
      number: 3,
      title: 'Advanced Call Tracking',
      description: 'Know exactly which campaigns, keywords, and ads drive phone calls. We track call duration, source, and can even record calls for quality assurance and training.'
    },
    {
      number: 4,
      title: 'Weekly Performance Optimization',
      description: 'We don\'t set-and-forget. Our team reviews campaigns weekly, adjusting bids, adding negative keywords, and testing new ad copy to continuously improve ROI.'
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
          services={ppcServices}
          sectionId="ppc-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          title="PPC Success Stories"
          subtitle="Contractors Generating Leads with Expand"
          testimonials={[
            {
              id: 1,
              body: "The PPC campaigns Expand runs deliver a 4.8x ROI. Every dollar we spend comes back almost 5x. We're booking out 3 months in advance thanks to the consistent lead flow.",
              clientName: "Marcus Richardson",
              clientCompany: "Richardson Home Remodeling"
            },
            {
              id: 2,
              body: "We tried managing Google Ads ourselves and burned through $8K with barely any leads. Expand took over and within 60 days we were getting 40+ qualified leads per month at half the cost.",
              clientName: "Sarah Chen",
              clientCompany: "Chen Construction & Remodeling"
            },
            {
              id: 3,
              body: "The Google Local Services Ads setup was game-changing. Getting the Google Verified badge instantly built trust. We're now the top LSA result in our area and the phone rings constantly.",
              clientName: "Tom Bradley",
              clientCompany: "Bradley Tile & Flooring"
            },
            {
              id: 4,
              body: "Facebook ads seemed like a waste for contractors until Expand showed us how to do it right. The before/after campaigns they created generated 180 inquiries in 3 months. Conversion rate is incredible.",
              clientName: "Davis Miller",
              clientCompany: "Miller Roofing Co."
            },
            {
              id: 5,
              body: "Call tracking changed everything for us. Now we know exactly which keywords bring in the best projects. Expand's weekly optimization keeps our cost per lead dropping while lead quality goes up.",
              clientName: "Jennifer Santos",
              clientCompany: "Santos Kitchen & Bath"
            }
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          items={ppcFAQs}
          title="PPC Advertising FAQs"
          subtitle="Everything you need to know about PPC for contractors"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Start Getting Leads Tomorrow"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default PPCPage

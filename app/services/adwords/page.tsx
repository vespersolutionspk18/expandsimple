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

const adwordsServices: ServiceItem[] = [
  {
    id: 'project-based-campaigns',
    title: 'Project-Based Campaign Optimization',
    description: 'Specialized campaigns for high-value projects like kitchen remodels, bathroom renovations, and roof replacements. We target homeowners at the exact moment they\'re ready to hire, using keywords like "kitchen remodel cost [city]" and "bathroom renovation contractor near me". Strategic budget allocation ensures you win the projects that matter most.',
    buttonText: 'Optimize Campaigns',
    buttonHref: '/contact?service=project-campaigns',
    imageSrc: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Google AdWords campaign focused on remodeling projects',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'seasonal-campaigns',
    title: 'Seasonal Campaign Management',
    description: 'Capitalize on seasonal demand with perfectly timed campaigns. Roofing campaigns in summer/fall when storms hit. Interior remodeling in winter when outdoor work slows. Exterior projects in spring when weather improves. We adjust bids, budgets, and messaging to match seasonal buying patterns in your market.',
    buttonText: 'Plan Seasonal Strategy',
    buttonHref: '/contact?service=seasonal-campaigns',
    imageSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Seasonal marketing calendar for contractors',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'quality-score-optimization',
    title: 'Quality Score & Cost Reduction',
    description: 'Lower your cost-per-click by up to 50% through Quality Score optimization. We improve ad relevance, landing page experience, and expected click-through rate - the three factors Google uses to calculate Quality Score. Higher scores mean lower costs and better ad positions, giving you more leads for the same budget.',
    buttonText: 'Reduce Ad Costs',
    buttonHref: '/contact?service=quality-score',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Google Ads Quality Score optimization dashboard',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  }
]

const adwordsFAQs = [
  {
    id: 'faq-1',
    question: 'What\'s the difference between your Google AdWords service and regular PPC?',
    answer: 'Our Google AdWords service is specifically focused on advanced optimization within the Google Ads platform - Quality Score improvement, smart bidding strategies, ad extensions, audience targeting, and device-specific bidding. While our PPC service covers Google Ads plus other platforms (Facebook, LSA), this service goes deeper into Google Ads-specific optimization techniques to maximize performance.'
  },
  {
    id: 'faq-2',
    question: 'How do you lower my cost-per-click?',
    answer: 'We focus on Quality Score optimization - the score Google assigns based on ad relevance, landing page experience, and expected CTR. Higher Quality Scores get discounts on CPC. We achieve this through tightly themed ad groups, highly relevant ad copy, optimized landing pages, and strategic keyword selection. We\'ve reduced CPC by 40-60% for clients through these methods.'
  },
  {
    id: 'faq-3',
    question: 'What are smart bidding strategies and should I use them?',
    answer: 'Smart bidding uses Google\'s machine learning to automatically optimize bids based on conversion likelihood. Strategies like Target CPA and Target ROAS can work well once you have enough conversion data (typically 30+ conversions per month). We start with manual bidding for control, then transition to smart bidding once campaigns are optimized and have sufficient data.'
  },
  {
    id: 'faq-4',
    question: 'How do you handle mobile vs desktop bidding?',
    answer: 'Mobile users often have higher intent for contractors (they need help now), but desktop users may research more before calling. We analyze your conversion data to set device-specific bid adjustments. Typically, we bid 20-40% higher on mobile for emergency services and 10-20% lower for large remodeling projects where desktop users convert better.'
  },
  {
    id: 'faq-5',
    question: 'What ad extensions do you use?',
    answer: 'We implement all relevant extensions: sitelinks (link to specific services), callouts (24/7 availability, free estimates), structured snippets (services offered), call extensions (click-to-call), location extensions (show your address), and price extensions (transparent pricing). Extensions increase ad size, improve click-through rate, and provide more information to potential customers.'
  },
  {
    id: 'faq-6',
    question: 'Do I get a dedicated Google Ads specialist?',
    answer: 'Yes, every AdWords client gets a certified Google Ads specialist as their dedicated account manager. They\'ll handle campaign setup, ongoing optimization, weekly performance reviews, and monthly strategy calls. You have direct access via email and phone - no ticket systems or offshore support.'
  }
]

const AdWordsPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'services', label: 'AdWords Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'Google Ads Certified Specialists',
      description: 'Our team holds current Google Ads certifications in Search, Display, and Measurement. We stay updated on platform changes and beta features to keep your campaigns ahead.'
    },
    {
      number: 2,
      title: 'Advanced Ad Extensions',
      description: 'We implement all available extensions - sitelinks, callouts, structured snippets, call extensions, location extensions, and price extensions - to maximize your ad real estate and CTR.'
    },
    {
      number: 3,
      title: 'Smart Bidding Implementation',
      description: 'Once we have sufficient conversion data, we transition to Google\'s AI-powered smart bidding strategies like Target CPA and Maximize Conversions to automate bid optimization.'
    },
    {
      number: 4,
      title: 'Ad Schedule Optimization',
      description: 'We analyze when your best leads come in and adjust bids by time of day and day of week. Bid higher during business hours when you can answer calls, lower after hours.'
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
          services={adwordsServices}
          sectionId="adwords-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          title="AdWords Success Stories"
          subtitle="Contractors Maximizing ROI with Expand"
          testimonials={[
            {
              id: 1,
              body: "Expand cut our cost-per-click by 47% through Quality Score optimization. Same budget, almost double the leads. Their Google Ads expertise is unmatched.",
              clientName: "Marcus Richardson",
              clientCompany: "Richardson Home Remodeling"
            },
            {
              id: 2,
              body: "The seasonal campaign strategy is brilliant. They ramp up our roofing ads right when storm season hits and adjust budgets for interior work in winter. Maximizes every dollar we spend.",
              clientName: "Davis Miller",
              clientCompany: "Miller Roofing Co."
            },
            {
              id: 3,
              body: "Moving to smart bidding strategies was game-changing. The machine learning optimizes better than we ever could manually. Our conversion rate jumped from 8% to 14% in 3 months.",
              clientName: "Sarah Chen",
              clientCompany: "Chen Construction & Remodeling"
            },
            {
              id: 4,
              body: "The ad extensions they set up make our ads huge - they take up half the mobile screen. Our click-through rate tripled and we're getting way more calls from mobile users.",
              clientName: "Tom Bradley",
              clientCompany: "Bradley Tile & Flooring"
            },
            {
              id: 5,
              body: "Having a dedicated Google Ads specialist who actually answers the phone is incredible. No ticket systems, no waiting days for responses. They manage our $15K/month budget like it's their own money.",
              clientName: "Jennifer Santos",
              clientCompany: "Santos Kitchen & Bath"
            }
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          items={adwordsFAQs}
          title="Google AdWords FAQs"
          subtitle="Expert answers to your Google Ads questions"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Lower Your Costs, Increase Your Leads"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default AdWordsPage

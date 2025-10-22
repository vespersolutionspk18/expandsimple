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

const brandingServices: ServiceItem[] = [
  {
    id: 'brand-identity',
    title: 'Complete Brand Identity Design',
    description: 'Your logo, colors, typography, and visual style define how customers perceive you. We create cohesive brand identities that communicate professionalism, quality, and trust. Includes logo design (primary and secondary marks), color palette, typography system, brand style guide, business cards, letterhead, and all the assets you need. A strong visual identity helps you charge 20-30% more than competitors with generic branding.',
    buttonText: 'Build Your Brand',
    buttonHref: '/contact?service=brand-identity',
    imageSrc: '/assets/brandingidentity.webp',
    imageAlt: 'Professional brand identity design with logo and style guide',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'vehicle-wraps',
    title: 'Vehicle Wraps & Fleet Branding',
    description: 'Your trucks are mobile billboards driving thousands of impressions daily. Professional vehicle wraps turn your fleet into a marketing asset. We design eye-catching wraps that include your logo, tagline, services, phone number, and website - all optimized for visibility and readability at a distance. Consistent fleet branding makes you look established and builds brand recognition in your service area. One branded truck generates 30,000-70,000 daily impressions.',
    buttonText: 'Design Vehicle Wraps',
    buttonHref: '/contact?service=vehicle-wraps',
    imageSrc: '/assets/vehiclewraps.webp',
    imageAlt: 'Professional vehicle wrap design for contractor trucks',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy & Positioning',
    description: 'What makes you different? Why should homeowners choose you over competitors? We develop brand positioning that clearly communicates your unique value. This includes target audience definition, competitive differentiation, value proposition development, brand messaging framework, tagline creation, and brand voice guidelines. Strategic positioning helps you attract ideal customers who value quality over price - the ones willing to pay premium rates for premium work.',
    buttonText: 'Define Your Position',
    buttonHref: '/contact?service=brand-strategy',
    imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Brand strategy and market positioning',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  }
]

const brandingFAQs = [
  {
    id: 'faq-1',
    question: 'Why does branding matter for contractors?',
    answer: 'Branding is the difference between being seen as a commodity (lowest price wins) versus a premium service provider. Strong branding builds trust before you meet prospects, justifies higher prices, increases referrals, attracts better employees, and creates customer loyalty. Homeowners hiring for $50K+ remodeling projects want to work with established, professional companies - branding signals that you\'re the real deal.'
  },
  {
    id: 'faq-2',
    question: 'What\'s included in a complete brand identity?',
    answer: 'Complete brand identity includes: primary logo and variations (horizontal, stacked, icon-only), color palette (primary and secondary colors with codes), typography system (fonts for headings and body text), brand style guide document, business card design, letterhead and envelope design, email signature template, social media profile images, and brand usage guidelines. Everything you need for consistent branding across all touchpoints.'
  },
  {
    id: 'faq-3',
    question: 'Can you rebrand an existing company?',
    answer: 'Absolutely. Rebranding breathes new life into established businesses. We assess your current brand, identify what\'s working and what needs improvement, and either refresh or completely overhaul your identity. Rebrands are common when companies outgrow their original branding, expand services, target higher-end markets, or need to modernize. We handle the entire transition - new designs, updated materials, and rollout strategy.'
  },
  {
    id: 'faq-4',
    question: 'How long does branding take?',
    answer: 'Brand refresh (logo update + guidelines): 3-4 weeks. Complete rebrand (full identity overhaul): 6-8 weeks. Enterprise brand system (multi-location, franchise): 8-12 weeks. Timeline includes discovery workshop, concept development, revision rounds, final delivery, and implementation support. We don\'t rush - great branding requires strategic thinking, creative exploration, and refinement.'
  },
  {
    id: 'faq-5',
    question: 'Do you handle implementation (signs, uniforms, wraps)?',
    answer: 'We design everything and can coordinate production through our trusted vendors. This includes vehicle wraps, yard signs, uniforms/apparel, building signage, banners, door hangers, and promotional materials. We ensure brand consistency across all physical applications. You can use our vendors or take the designs to your own - you own all files and have complete flexibility.'
  },
  {
    id: 'faq-6',
    question: 'What\'s the ROI of professional branding?',
    answer: 'Professional branding allows you to charge 20-30% higher prices than competitors with weak branding. It increases close rates (trust factor), referral rates (memorable and recommend-able), employee retention (pride in working for professional company), and customer lifetime value (loyalty). Many clients report their branding investment pays for itself within 3-6 months through higher-value projects and increased referrals.'
  }
]

const BrandingPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'services', label: 'Branding Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'Strategic Brand Positioning',
      description: 'We don\'t just design logos - we develop brand strategy. Through discovery workshops and market research, we identify your unique value proposition, target audience, and competitive differentiation. Strategic positioning drives all visual and messaging decisions.'
    },
    {
      number: 2,
      title: 'Complete Visual Identity Systems',
      description: 'Cohesive branding across all touchpoints. Logo variations for different uses, color palettes that communicate your brand personality, typography that enhances readability, and comprehensive brand guidelines ensuring consistency.'
    },
    {
      number: 3,
      title: 'Contractor-Specific Design Expertise',
      description: 'We understand home service branding - what builds trust with homeowners, what differentiates you from competitors, what works on trucks and yard signs. Our designs are functional, memorable, and optimized for your industry.'
    },
    {
      number: 4,
      title: 'Implementation Support',
      description: 'We don\'t disappear after design delivery. We help implement your brand across website, marketing materials, vehicle wraps, uniforms, signage, and social media. Full rollout support ensures consistent execution everywhere.'
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
          services={brandingServices}
          sectionId="branding-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          title="Branding Success Stories"
          subtitle="How Professional Branding Transforms Contractor Businesses"
          testimonials={[
            {
              id: 1,
              body: "The rebrand was transformational. New logo, vehicle wraps, website, everything. We immediately started attracting higher-end clients. Our average project value went from $35K to $62K in 6 months. Premium branding = premium customers.",
              clientName: "Sarah Chen",
              clientCompany: "Chen Construction & Remodeling"
            },
            {
              id: 2,
              body: "The vehicle wraps turn heads everywhere we go. Homeowners literally flag down our trucks to ask for business cards. We're getting 5-8 inquiries per month just from people seeing our trucks. Best marketing investment ever.",
              clientName: "Davis Miller",
              clientCompany: "Miller Roofing Co."
            },
            {
              id: 3,
              body: "Before the rebrand, we looked like every other tiling company. Now we have a distinct, professional identity that communicates luxury. Our close rate improved because we look like the premium option we are. Worth every dollar.",
              clientName: "Tom Bradley",
              clientCompany: "Bradley Tile & Flooring"
            },
            {
              id: 4,
              body: "The brand strategy work was eye-opening. They helped us articulate why we're different and who our ideal customer is. Now all our marketing is laser-focused on high-end remodels instead of trying to be everything to everyone.",
              clientName: "Jennifer Santos",
              clientCompany: "Santos Kitchen & Bath"
            },
            {
              id: 5,
              body: "We were embarrassed by our old logo and inconsistent branding. Expand created a cohesive brand identity that makes us proud. Employee morale improved - they want to wear the uniforms and drive the trucks. Culture shift.",
              clientName: "Marcus Richardson",
              clientCompany: "Richardson Home Remodeling"
            }
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          items={brandingFAQs}
          title="Branding FAQs"
          subtitle="Your questions about professional branding answered"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Build a Brand That Commands Premium Prices"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default BrandingPage

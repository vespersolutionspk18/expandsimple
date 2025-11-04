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

const webDesignServices: ServiceItem[] = [
  {
    id: 'conversion-optimized',
    title: 'Conversion-Optimized Website Design',
    description: 'Beautiful websites mean nothing if they don\'t generate leads. We design mobile-first, fast-loading websites with strategic CTAs, click-to-call buttons, lead capture forms, and booking systems. Every element is positioned to convert visitors into customers. Your website becomes your best salesperson - working 24/7 to fill your pipeline.',
    buttonText: 'Get Conversion Design',
    buttonHref: '/contact?service=conversion-design',
    imageSrc: '/assets/convert.webp',
    imageAlt: 'High-converting website design with strategic CTAs',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  },
  {
    id: 'service-area-pages',
    title: 'Service Area Page Development',
    description: 'Dominate local search with dedicated pages for every city and neighborhood you serve. We create comprehensive, SEO-optimized service area pages that rank for "[your service] in [city]" searches. Each page includes local keywords, service descriptions, testimonials from that area, and clear CTAs. More pages = more rankings = more local leads.',
    buttonText: 'Expand Local Reach',
    buttonHref: '/contact?service=service-area-pages',
    imageSrc: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Map showing service areas with location-specific pages',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  },
  {
    id: 'portfolio-showcase',
    title: 'Project Portfolio & Before/After Galleries',
    description: 'Show, don\'t just tell. We build stunning portfolio galleries that showcase your best work with professional before/after sliders, project details, cost ranges, and client testimonials. Homeowners want proof you can deliver. A well-organized portfolio builds instant credibility and helps them visualize their own project - accelerating the buying decision.',
    buttonText: 'Showcase Your Work',
    buttonHref: '/contact?service=portfolio-showcase',
    imageSrc: '/assets/beforeafter.jpg',
    imageAlt: 'Before and after project gallery showcase',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  }
]

const webDesignFAQs = [
  {
    id: 'faq-1',
    question: 'How long does it take to build a custom website?',
    answer: 'Typical timeline is 4-8 weeks depending on complexity. Essential websites (5-10 pages) take 4-6 weeks. Professional growth sites (10-20 pages with advanced features) take 6-8 weeks. Enterprise custom solutions can take 8-12 weeks. Timeline includes discovery, design mockups, revisions, development, testing, and launch. We provide a detailed timeline during the proposal phase.'
  },
  {
    id: 'faq-2',
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely. We design mobile-first because 60-70% of home service website traffic comes from mobile devices. Your site will be fully responsive, load fast on phones, have large tap-friendly buttons for calls/forms, and provide an excellent user experience on all screen sizes. Google prioritizes mobile-friendly sites in search rankings, so this is non-negotiable.'
  },
  {
    id: 'faq-3',
    question: 'Do you provide hosting and maintenance?',
    answer: 'Yes. All our websites include hosting on high-performance servers, SSL certificate (HTTPS security), automatic backups, security monitoring, software updates, and technical support. Hosting is $50-$150/month depending on site size and traffic. We handle all technical maintenance so you can focus on running your business, not managing a website.'
  },
  {
    id: 'faq-4',
    question: 'Can you integrate with my CRM or scheduling software?',
    answer: 'Yes, we integrate with all major home service software platforms - ServiceTitan, Jobber, Housecall Pro, FieldPulse, HubSpot, Salesforce, Calendly, Acuity Scheduling, and more. Forms, calls, and bookings flow directly into your CRM. We can also integrate payment processors, review platforms, email marketing tools, and accounting software. Seamless integration eliminates double data entry.'
  },
  {
    id: 'faq-5',
    question: 'What if I need changes after the website launches?',
    answer: 'We provide training so you can make basic content updates yourself (blog posts, images, service descriptions). For design changes, new pages, or technical updates, we offer ongoing support packages starting at $150/month for minor monthly updates, or hourly rates for larger changes. Most clients opt for monthly support to keep content fresh and site optimized.'
  },
  {
    id: 'faq-6',
    question: 'How do you ensure the website generates leads?',
    answer: 'Conversion-focused design is our specialty. We implement strategic CTAs above the fold, prominent click-to-call buttons on mobile, lead capture forms on every page, live chat for instant engagement, consultation schedulers, cost calculators, social proof (reviews, testimonials, awards), trust signals (licenses, certifications, guarantees), and clear service descriptions. We also implement heat mapping to track user behavior and continuously optimize conversion rates post-launch.'
  }
]

const WebDesignPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'services', label: 'Web Design Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'Mobile-First Responsive Design',
      description: 'Over 60% of home service traffic is mobile. We design for phones first, ensuring fast loading, easy navigation, and prominent click-to-call buttons. Desktop versions are equally polished.'
    },
    {
      number: 2,
      title: 'Speed Optimization (Sub-3 Second Load Times)',
      description: 'Slow websites lose customers. We optimize images, code, and server performance to achieve load times under 3 seconds - a critical ranking factor for Google and user experience.'
    },
    {
      number: 3,
      title: 'Lead Capture & Conversion Tools',
      description: 'Every page includes strategic forms, CTAs, click-to-call buttons, live chat, booking calendars, and cost calculators. We make it easy for visitors to take action and become leads.'
    },
    {
      number: 4,
      title: 'SEO Foundation Built-In',
      description: 'We build websites with SEO in mind from day one - proper heading structure, meta tags, schema markup, fast loading, mobile optimization, and clean code. This gives you a head start on rankings.'
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
          services={webDesignServices}
          sectionId="web-design-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          title="Web Design Success Stories"
          subtitle="Websites That Drive Real Business Growth"
          testimonials={[
            {
              id: 1,
              body: "Our old website looked like it was built in 2005. Expand created a modern, mobile-friendly site that loads instantly and actually converts. We went from 2-3 web leads per month to 20-30. ROI paid for itself in 60 days.",
              clientName: "Marcus Richardson",
              clientCompany: "Richardson Home Remodeling"
            },
            {
              id: 2,
              body: "The before/after gallery feature is incredible. Homeowners spend 5+ minutes browsing our projects, and our consultation booking rate tripled. The website sells our quality before we even talk to prospects.",
              clientName: "Sarah Chen",
              clientCompany: "Chen Construction & Remodeling"
            },
            {
              id: 3,
              body: "Mobile traffic was 70% of our visitors, but our old site was impossible to use on phones. Expand built a mobile-first design with huge call buttons. Mobile conversions went from 1% to 8%. Game changer.",
              clientName: "Tom Bradley",
              clientCompany: "Bradley Tile & Flooring"
            },
            {
              id: 4,
              body: "The service area pages they created rank for every city we serve. We're getting organic leads from towns we never advertised in before. 15 new service area pages = 15 new lead sources. Smart strategy.",
              clientName: "Davis Miller",
              clientCompany: "Miller Roofing Co."
            },
            {
              id: 5,
              body: "They integrated our scheduling software, CRM, and payment processor seamlessly. Customers can book consultations, get estimates, and even pay deposits online. Reduced our admin time by 10 hours per week.",
              clientName: "Jennifer Santos",
              clientCompany: "Santos Kitchen & Bath"
            }
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          items={webDesignFAQs}
          title="Web Design FAQs"
          subtitle="Everything you need to know about getting a high-converting website"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Get a Website That Converts"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default WebDesignPage

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

const crmServices: ServiceItem[] = [
  {
    id: 'open-source-implementation',
    title: 'Open Source CRM Implementation',
    description: 'We implement open source CRM platforms like SuiteCRM, Odoo, EspoCRM, and Vtiger, customized specifically for home service contractors. You retain control of your software and data, with flexible hosting and no vendor lock-in. We handle installation, configuration, customization, and training around your workflows.',
    buttonText: 'Get Open Source CRM',
    buttonHref: '/contact?service=open-source-crm',
    imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Open source CRM implementation dashboard',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  },
  {
    id: 'custom-crm-workflows',
    title: 'Custom Workflows & Automation',
    description: 'Your sales process is unique - your CRM should reflect that. We build custom workflows tailored to how you actually sell. Automated lead assignment, follow-up sequences, estimate reminders, project milestone tracking, and post-project nurturing. When a lead comes in, the CRM automatically assigns it based on location or service type, sends immediate confirmation, schedules follow-ups, and tracks every interaction. No manual data entry, no forgotten leads, complete pipeline visibility.',
    buttonText: 'Build Custom Workflows',
    buttonHref: '/contact?service=custom-workflows',
    imageSrc: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Custom CRM workflow automation',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  },
  {
    id: 'crm-integrations',
    title: 'CRM Integration & Data Migration',
    description: 'Your CRM should be the hub connecting all your business systems. We integrate your CRM with website forms, email marketing, SMS platforms, accounting software (QuickBooks, Xero), call tracking, scheduling tools, and payment processors. All data flows automatically between systems - no double entry. Migrating from spreadsheets or another CRM? We handle complete data migration, ensuring zero data loss and clean, organized records from day one.',
    buttonText: 'Integrate Your Systems',
    buttonHref: '/contact?service=crm-integration',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'CRM integration with business systems',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  }
]

const crmFAQs = [
  {
    id: 'faq-1',
    question: 'What is open source CRM and why is it better?',
    answer: 'Open source CRM gives you access to customizable software with greater control over your workflows and data. Benefits include flexibility, no vendor lock-in, self-hosting options, and active community support. We assess your requirements and recommend a platform and implementation approach that fits your team.'
  },
  {
    id: 'faq-2',
    question: 'Which open source CRM platforms do you recommend?',
    answer: 'We specialize in four platforms: SuiteCRM (most feature-rich, enterprise-grade), Odoo (all-in-one business management), EspoCRM (modern, lightweight, fast), and Vtiger (great for small teams). Choice depends on your needs, team size, and technical comfort. We assess your requirements and recommend the best fit, then handle complete implementation. All four are contractor-friendly and proven in home services businesses.'
  },
  {
    id: 'faq-3',
    question: 'Is open source CRM as good as Salesforce or HubSpot?',
    answer: 'For contractors, open source CRMs can be a strong fit. Unlike general-purpose platforms, they can be customized for contractor workflows such as estimates, projects, and seasonal follow-ups. We help you choose and configure a system around the way your team works.'
  },
  {
    id: 'faq-4',
    question: 'Do you provide ongoing CRM support and training?',
    answer: 'Yes. Initial implementation includes full team training and documentation. Ongoing support is available for CRM audits, optimization, troubleshooting, and additional training as your team grows. Contact us to discuss the support that fits your system and needs.'
  },
  {
    id: 'faq-5',
    question: 'How long does CRM implementation take?',
    answer: 'Basic setup (platform selection, installation, basic configuration): 2-3 weeks. Full implementation (custom workflows, integrations, data migration, team training): 4-8 weeks. Enterprise custom development (complex multi-location, franchise systems): 8-12 weeks. Timeline depends on complexity and how much customization you need. We work in phases so you start seeing value quickly, even before complete implementation.'
  },
  {
    id: 'faq-6',
    question: 'Can you migrate data from our current system?',
    answer: 'Absolutely. We migrate from spreadsheets, proprietary CRMs (Salesforce, HubSpot, Zoho), contractor-specific platforms (ServiceTitan, Jobber, Housecall Pro), or any database. We map fields, clean data, deduplicate records, and ensure 100% data integrity. You\'ll review all data before final migration. We also run parallel systems during transition so there\'s zero business disruption.'
  }
]

const CRMConsultancyPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'services', label: 'CRM Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'Flexible Open Source, Full Ownership',
      description: 'You maintain control of your CRM and data, with the flexibility to customize workflows as your business changes. Avoid vendor lock-in and choose an implementation that fits your team.'
    },
    {
      number: 2,
      title: 'Contractor-Specific Customization',
      description: 'We customize every CRM for home service workflows - lead qualification, estimate tracking, project pipelines, seasonal follow-ups, review requests, and referral tracking. Built around how contractors actually sell, not generic sales processes.'
    },
    {
      number: 3,
      title: 'Complete System Integration',
      description: 'Your CRM becomes the central hub. We integrate with your website, email marketing, call tracking, accounting software, scheduling tools, payment processors, and SMS platforms. All data flows automatically between systems.'
    },
    {
      number: 4,
      title: 'Self-Hosted or Cloud Deployment',
      description: 'You choose between self-hosting on your own servers for maximum control or cloud hosting through platforms like DigitalOcean, Linode, or AWS. We handle technical setup and maintenance based on your requirements.'
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
          services={crmServices}
          sectionId="crm-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          title="CRM Success Stories"
          subtitle="How Open Source CRM Transforms Contractor Operations"
          testimonials={[
            {
              id: 1,
              body: "We were stuck with a CRM we barely used because it was too complicated. Expand implemented SuiteCRM around our remodeling process. The workflow is simpler, fits our team, and we actually use it every day.",
              clientName: "Sarah Chen",
              clientCompany: "Chen Construction & Remodeling"
            },
            {
              id: 2,
              body: "The automated workflows are game-changing. Leads come in from our website, automatically assign to the right estimator based on location, trigger follow-up sequences, and track every touchpoint. We've never lost a lead since implementation.",
              clientName: "Marcus Richardson",
              clientCompany: "Richardson Home Remodeling"
            },
            {
              id: 3,
              body: "Data migration from our old spreadsheet system was seamless. 8 years of customer data, projects, and notes all organized in the CRM. Now we can actually segment customers, track referrals, and send targeted marketing. Should have done this years ago.",
              clientName: "Tom Bradley",
              clientCompany: "Bradley Tile & Flooring"
            },
            {
              id: 4,
              body: "The integration with QuickBooks and our call tracking system is perfect. Every phone call, form submission, and invoice automatically links to the customer record. Complete visibility into our sales pipeline and project status in real-time.",
              clientName: "Davis Miller",
              clientCompany: "Miller Roofing Co."
            },
            {
              id: 5,
              body: "Open source was the right call. We own it, control it, and customize it as we grow. There is no vendor lock-in, and the system works around our business instead of forcing us into a generic process.",
              clientName: "Jennifer Santos",
              clientCompany: "Santos Kitchen & Bath"
            }
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          items={crmFAQs}
          title="CRM Consultancy FAQs"
          subtitle="Everything you need to know about open source CRM"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Own Your CRM, Control Your Data"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default CRMConsultancyPage

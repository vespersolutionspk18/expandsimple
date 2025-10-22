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

const aiServices: ServiceItem[] = [
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots & 24/7 Customer Service',
    description: 'Never miss a lead because you can\'t answer after hours. AI chatbots handle common questions, qualify leads, collect contact information, and schedule appointments automatically - even at 11 PM on Sunday. Integrated with your website and Facebook Messenger. Homeowners get instant responses, you wake up to qualified appointments. The chatbot learns from your FAQs and provides accurate, helpful answers that sound natural, not robotic.',
    buttonText: 'Get AI Chatbot',
    buttonHref: '/contact?service=ai-chatbot',
    imageSrc: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'AI chatbot providing 24/7 customer service',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation & Lead Nurturing',
    description: 'Stop manually sending follow-up emails and review requests. AI-powered marketing automation handles personalized email campaigns, SMS follow-ups, review request sequences, and lead nurturing workflows. The system tracks customer behavior and sends the right message at the right time. Post-project, it automatically requests reviews. For estimates that didn\'t close, it sends periodic check-ins. For past customers, it promotes seasonal services. Set it once, generate leads forever.',
    buttonText: 'Automate Marketing',
    buttonHref: '/contact?service=marketing-automation',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'Marketing automation dashboard with workflows',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'ai-operations',
    title: 'Operational AI & Efficiency Tools',
    description: 'AI optimizes operations beyond marketing. Route optimization ensures your crews take the most efficient paths, saving fuel and time. Predictive scheduling identifies ideal appointment times based on location and job type. Automated proposal generation creates professional estimates in minutes, not hours. Smart inventory management predicts material needs and automates reordering. These tools reduce administrative burden, improve margins, and let you focus on growing the business instead of managing logistics.',
    buttonText: 'Optimize Operations',
    buttonHref: '/contact?service=ai-operations',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    imageAlt: 'AI-powered operational efficiency tools',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  }
]

const aiFAQs = [
  {
    id: 'faq-1',
    question: 'What AI tools are actually useful for contractors?',
    answer: 'The most impactful AI tools for home service businesses: 24/7 chatbots (capture after-hours leads), automated appointment scheduling (reduce no-shows and admin time), review request automation (boost online reputation), email/SMS follow-up sequences (nurture leads without manual work), proposal generation (create estimates faster), and route optimization (save fuel and time). We focus on AI that has clear ROI, not gimmicks.'
  },
  {
    id: 'faq-2',
    question: 'Will AI replace my staff?',
    answer: 'No - AI augments your team, not replaces them. AI handles repetitive tasks (answering FAQs, scheduling, follow-ups) so your team can focus on high-value activities (closing sales, managing projects, building relationships). Think of AI as a 24/7 assistant that never sleeps, never takes vacation, and handles the boring stuff. Your team becomes more productive and focuses on what humans do best - building trust and delivering quality.'
  },
  {
    id: 'faq-3',
    question: 'How much time does AI actually save?',
    answer: 'Typical time savings: 5-10 hours/week on customer inquiries and appointment scheduling, 3-5 hours/week on follow-up emails and review requests, 2-4 hours/week on proposal creation, 5-10 hours/week on administrative tasks. Total: 15-30 hours weekly. That\'s equivalent to hiring 0.5-1 full-time employee, but without payroll, benefits, or management overhead. The ROI is immediate and measurable.'
  },
  {
    id: 'faq-4',
    question: 'Is AI expensive to implement?',
    answer: 'Not compared to the cost of manual processes or missed leads. AI Quick Wins package ($2,500-$5,000 one-time) implements 1-2 essential tools like chatbot and review automation. AI Transformation ($10,000-$25,000) is comprehensive integration across marketing and operations. Ongoing costs are minimal ($100-$500/month for software). Most clients see ROI within 2-4 months through time savings and captured leads they would have missed.'
  },
  {
    id: 'faq-5',
    question: 'How do you measure AI performance?',
    answer: 'We track concrete metrics: leads captured after hours (would have been lost), appointment booking rate (AI vs manual), review request response rate (before vs after automation), time saved per week (documented), cost per lead reduction, and revenue attributed to AI-captured leads. Monthly reports show exactly how AI is performing and ROI. We continuously optimize based on data.'
  },
  {
    id: 'faq-6',
    question: 'What if the AI gives wrong information?',
    answer: 'We train AI systems on YOUR specific information - services, pricing ranges, service areas, processes, FAQs. The AI only answers questions it\'s been trained on. For complex or unique questions, it collects contact info and notifies your team for personal follow-up. We continuously monitor conversations, identify gaps, and refine training. AI gets smarter over time and error rates drop to near-zero within 30-60 days.'
  }
]

const AIConsultancyPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'services', label: 'AI Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: '24/7 Lead Capture & Qualification',
      description: 'AI chatbots work around the clock, answering questions and collecting contact information when you can\'t. Homeowners get instant responses at 9 PM on Saturday. You wake up to qualified leads ready for follow-up.'
    },
    {
      number: 2,
      title: 'Automated Appointment Scheduling',
      description: 'AI integrates with your calendar and automatically books estimate appointments based on availability. No more phone tag. Customers choose their preferred time slot, receive confirmation, and get automated reminders to reduce no-shows.'
    },
    {
      number: 3,
      title: 'Smart Follow-Up Sequences',
      description: 'AI tracks every lead and customer interaction, triggering personalized follow-ups at optimal times. Estimate didn\'t close? Automated check-in 2 weeks later. Project complete? Review request 3 days later. Never forget a follow-up again.'
    },
    {
      number: 4,
      title: 'Contractor-Specific AI Training',
      description: 'We customize AI for your business - your services, pricing philosophy, service area, process, and brand voice. The AI sounds like your team, not a generic robot. It understands home service industry terminology and homeowner concerns.'
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
          services={aiServices}
          sectionId="ai-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          title="AI Consultancy Success Stories"
          subtitle="How AI Automation Transforms Contractor Operations"
          testimonials={[
            {
              id: 1,
              body: "The AI chatbot captures 12-15 leads per month that would have been lost because they contacted us after hours. It pays for itself 10x over. Homeowners love getting instant responses instead of waiting until morning.",
              clientName: "Marcus Richardson",
              clientCompany: "Richardson Home Remodeling"
            },
            {
              id: 2,
              body: "Automated review requests transformed our reputation. We went from 12 Google reviews to 87 in 6 months because the system asks every customer automatically 3 days after project completion. Set it and forget it.",
              clientName: "Sarah Chen",
              clientCompany: "Chen Construction & Remodeling"
            },
            {
              id: 3,
              body: "The proposal automation is incredible. What used to take 45 minutes now takes 5 minutes. We're sending estimates same-day instead of 2-3 days later, and our close rate improved because we respond faster.",
              clientName: "Tom Bradley",
              clientCompany: "Bradley Tile & Flooring"
            },
            {
              id: 4,
              body: "Route optimization saved us 8-12 hours per week in drive time. That's one extra job per week. The fuel savings alone paid for the AI implementation in 3 months. Now it's pure profit.",
              clientName: "Davis Miller",
              clientCompany: "Miller Roofing Co."
            },
            {
              id: 5,
              body: "The automated follow-up sequences keep us top-of-mind. Estimates we thought were dead get revisited months later because the AI gently checks in. We're closing 15-20% more deals just from better follow-up.",
              clientName: "Jennifer Santos",
              clientCompany: "Santos Kitchen & Bath"
            }
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          items={aiFAQs}
          title="AI Consultancy FAQs"
          subtitle="Everything you need to know about AI for contractors"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Automate Your Business with AI"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default AIConsultancyPage

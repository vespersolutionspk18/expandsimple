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

const aieoServices: ServiceItem[] = [
  {
    id: 'ai-content-optimization',
    title: 'AI Content Optimization',
    description: 'Optimize your website content for AI comprehension. We restructure your content using natural language patterns that AI models prefer - clear hierarchies, conversational tone, and comprehensive answers. When ChatGPT or Perplexity crawls your site, they understand exactly what you offer and recommend you to users searching for remodeling contractors.',
    buttonText: 'Optimize for AI',
    buttonHref: '/contact?service=ai-content',
    imageSrc: '/assets/aicontent.png',
    imageAlt: 'AI analyzing website content for optimization',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  },
  {
    id: 'voice-search-optimization',
    title: 'Voice Search & Smart Assistant Optimization',
    description: 'Capture the growing voice search market. 40% of searches now happen via voice - Alexa, Google Assistant, Siri. We optimize for conversational queries like "find me a kitchen remodeler near me" and "who\'s the best roofing contractor in [city]". Different from text search, voice requires natural language optimization and featured snippet targeting.',
    buttonText: 'Optimize for Voice',
    buttonHref: '/contact?service=voice-search',
    imageSrc: '/assets/voice.webp',
    imageAlt: 'Person using voice search on smart speaker',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  },
  {
    id: 'knowledge-graph-enhancement',
    title: 'Knowledge Graph & Entity Optimization',
    description: 'Build your brand as a recognized entity in AI knowledge bases. We implement advanced schema markup, optimize your brand mentions across the web, and create comprehensive entity relationships. This tells AI systems who you are, what you do, and why you\'re authoritative - leading to recommendations when homeowners ask for contractor suggestions.',
    buttonText: 'Build Entity Authority',
    buttonHref: '/contact?service=knowledge-graph',
    imageSrc: '/assets/knowledge.png',
    imageAlt: 'Knowledge graph visualization showing entity connections',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 100
  }
]

const aieoFAQs = [
  {
    id: 'faq-1',
    question: 'What is AIEO and why does it matter?',
    answer: 'AIEO (AI Engine Optimization) is optimizing your digital presence for AI-powered search engines and chatbots like ChatGPT, Perplexity, Google Bard, and Claude. As more people use AI to find contractors instead of traditional Google searches, your business needs to be discoverable and recommended by these AI systems. Early adopters will dominate this channel while competitors are still focused only on traditional SEO.'
  },
  {
    id: 'faq-2',
    question: 'How do AI search engines differ from Google?',
    answer: 'AI search engines provide direct answers with recommendations, not just a list of links. When someone asks ChatGPT "Who\'s the best kitchen remodeler in [city]?", it responds with specific business names and reasons. Traditional SEO focuses on ranking in a list. AIEO focuses on being the answer AI provides. The content structure, language patterns, and data requirements are completely different.'
  },
  {
    id: 'faq-3',
    question: 'Will AIEO replace traditional SEO?',
    answer: 'No, AIEO complements traditional SEO. Google is still the dominant search platform, but AI search is rapidly growing. Think of AIEO as future-proofing - you want to be visible everywhere homeowners search for contractors. Many AIEO tactics (structured data, comprehensive content, entity building) also improve traditional SEO performance. It\'s an integrated strategy, not either/or.'
  },
  {
    id: 'faq-4',
    question: 'How do you track AIEO results?',
    answer: 'We test AI platforms regularly by asking them contractor-related queries in your market and tracking if/how your business appears. We monitor brand mentions in AI responses, track referral traffic from AI platforms, and measure voice search visibility. As AI search analytics tools mature, we\'ll incorporate more sophisticated tracking. Right now, it\'s a first-mover advantage opportunity.'
  },
  {
    id: 'faq-5',
    question: 'How long does AIEO take to show results?',
    answer: 'Faster than traditional SEO. AI platforms crawl and update their knowledge bases more dynamically than Google. We typically see initial mentions within 30-60 days of optimization. However, this is an emerging field - the contractors who start now will have established authority when AI search becomes mainstream. Think of it as planting seeds for future dominance.'
  },
  {
    id: 'faq-6',
    question: 'Can I do AIEO without traditional SEO?',
    answer: 'Not recommended. AIEO works best when combined with traditional SEO because AI systems often pull information from websites that already rank well and have strong authority signals. We recommend AIEO as an add-on to existing SEO efforts. The synergy between the two creates stronger results than either alone. Pricing starts at $500-$1,000/month additional to your SEO package.'
  }
]

const AIEOPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'services', label: 'AIEO Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'Conversational Keyword Optimization',
      description: 'We optimize for how people actually talk to AI - natural questions like "who should I hire to remodel my kitchen?" instead of keyword phrases like "kitchen remodel contractor".'
    },
    {
      number: 2,
      title: 'Structured Data Implementation',
      description: 'Advanced schema markup tells AI systems exactly what services you offer, your service areas, credentials, and customer reviews. This structured data feeds directly into AI recommendations.'
    },
    {
      number: 3,
      title: 'FAQ Schema & Answer Optimization',
      description: 'AI engines love FAQ content because it directly answers questions. We create comprehensive FAQ sections with proper schema markup that AI systems can easily extract and cite.'
    },
    {
      number: 4,
      title: 'Brand Entity Building',
      description: 'We build your brand as a recognized entity through consistent NAP citations, brand mentions, reviews, and relationships with other entities. This establishes authority in AI knowledge bases.'
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
          services={aieoServices}
          sectionId="aieo-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          title="AIEO Success Stories"
          subtitle="Contractors Future-Proofing with AI Optimization"
          testimonials={[
            {
              id: 1,
              body: "The AIEO service is incredible - when people ask ChatGPT for roofing recommendations in our area, we're the first name mentioned. That's the future of marketing and we're already there!",
              clientName: "Davis Miller",
              clientCompany: "Miller Roofing Co."
            },
            {
              id: 2,
              body: "Voice search optimization brought us 40+ leads last month from smart speakers. People literally tell Alexa 'find me a kitchen remodeler' and we get the call. Mind-blowing technology.",
              clientName: "Marcus Richardson",
              clientCompany: "Richardson Home Remodeling"
            },
            {
              id: 3,
              body: "Expand showed us ChatGPT recommendations for contractors in our city - we were nowhere. After 60 days of AIEO, we're being recommended alongside the biggest names. Worth every penny.",
              clientName: "Sarah Chen",
              clientCompany: "Chen Construction & Remodeling"
            },
            {
              id: 4,
              body: "The knowledge graph optimization established us as the authoritative tiling contractor in our market. AI systems now understand who we are and what we do - it's like having a perfect sales pitch embedded in AI.",
              clientName: "Tom Bradley",
              clientCompany: "Bradley Tile & Flooring"
            },
            {
              id: 5,
              body: "Our competitors don't even know AIEO exists yet. While they fight over Google rankings, we're dominating the AI search channel. In 2 years when this becomes mainstream, we'll already own the market.",
              clientName: "Jennifer Santos",
              clientCompany: "Santos Kitchen & Bath"
            }
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          items={aieoFAQs}
          title="AIEO FAQs"
          subtitle="Your questions about AI Engine Optimization answered"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Be the AI's First Recommendation"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default AIEOPage

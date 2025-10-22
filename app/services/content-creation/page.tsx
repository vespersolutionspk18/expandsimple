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

const contentServices: ServiceItem[] = [
  {
    id: 'blog-content',
    title: 'SEO Blog Writing & Content Marketing',
    description: 'Rank for hundreds of keywords with strategic blog content. We create educational, how-to, and troubleshooting articles optimized for search engines and homeowners. Topics like "kitchen remodel cost breakdown," "signs you need a new roof," and "tile vs hardwood flooring" attract ready-to-buy homeowners. Each post is 1,500-2,500 words, keyword-optimized, and designed to convert readers into leads.',
    buttonText: 'Start Blogging',
    buttonHref: '/contact?service=blog-content',
    imageSrc: '/assets/blogs.png',
    imageAlt: 'Professional blog writing and content marketing',
    priority: true,
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'video-production',
    title: 'Video Production & YouTube Marketing',
    description: 'Video is the most engaging content format and ranks well on Google. We produce service explainer videos, customer testimonial videos, before/after project showcases, educational tutorials, and team introduction videos. Professionally edited with captions, branded graphics, and optimized for YouTube SEO. Video builds trust faster than any other content type - homeowners want to see your work and hear from real customers.',
    buttonText: 'Get Video Content',
    buttonHref: '/contact?service=video-production',
    imageSrc: '/assets/videoediting.jpeg',
    imageAlt: 'Professional video production for contractors',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 90
  },
  {
    id: 'photography',
    title: 'Professional Photography & Before/After Documentation',
    description: 'Your work deserves professional photography. We provide project photography with before/after documentation, team headshots, office/workspace photos, and action shots of your crew in the field. High-quality imagery improves website engagement, social media performance, and builds credibility. Stop using blurry phone photos - professional photography makes you look like the premium contractor you are.',
    buttonText: 'Book Photography',
    buttonHref: '/contact?service=photography',
    imageSrc: '/assets/interiorphoto.jpg',
    imageAlt: 'Professional photography for contractors',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
    imageQuality: 85
  }
]

const contentFAQs = [
  {
    id: 'faq-1',
    question: 'How often should we publish blog content?',
    answer: 'For meaningful SEO results, minimum 2-4 blog posts per month (8-16 per month optimal). More content = more keywords ranked = more organic traffic. Each post targets different search queries, expanding your visibility. We recommend starting with 4 posts/month and scaling up as you see ROI. Consistency matters more than volume - regular publishing signals to Google that your site is active and authoritative.'
  },
  {
    id: 'faq-2',
    question: 'Do you understand our industry well enough to write about it?',
    answer: 'Yes. We specialize exclusively in home services and have written thousands of articles for remodeling contractors, roofers, tiling companies, plumbers, and other trades. We understand technical terminology, project processes, materials, pricing considerations, and homeowner concerns. Every piece is reviewed for technical accuracy and written in language homeowners understand. You approve all content before publishing.'
  },
  {
    id: 'faq-3',
    question: 'What types of videos work best for contractors?',
    answer: 'Customer testimonial videos (1-2 min) have the highest conversion impact - real customers describing their experience. Project showcase videos with before/after transformations (2-3 min) demonstrate quality. Service explainer videos (1 min) clarify what you do and how you\'re different. Educational how-to videos (5-10 min) build authority and rank on YouTube. We recommend starting with 3-5 testimonial videos and one service explainer.'
  },
  {
    id: 'faq-4',
    question: 'Can you handle social media content too?',
    answer: 'Absolutely. We create platform-specific content for Facebook, Instagram, LinkedIn, and YouTube. This includes post captions, graphics, short-form videos, and content calendars. Social media content is adapted from blog posts and videos to maximize your content investment. We post 3-5x per week per platform and engage with comments. Social media keeps your brand top-of-mind between projects.'
  },
  {
    id: 'faq-5',
    question: 'How do you measure content performance?',
    answer: 'We track organic traffic growth, keyword rankings, time on page, bounce rate, social shares, video views, engagement rates, and most importantly - leads generated from content. You get monthly reports showing which content pieces drive the most traffic and leads. We continuously optimize based on performance data - doubling down on what works, refreshing underperforming content.'
  },
  {
    id: 'faq-6',
    question: 'What if we already have some content?',
    answer: 'Perfect - we\'ll audit your existing content and refresh/optimize it before creating new pieces. Old blog posts can be updated with current information, better keywords, and improved CTAs. Existing photos can be professionally edited. We build on what you have rather than starting from scratch. Content refreshes often perform better than new content because they already have some authority and backlinks.'
  }
]

const ContentCreationPage = () => {
  const handleServiceInquiry = (serviceId: string) => {
    console.log(`Inquiry for service: ${serviceId}`)
  }

  const navigationItems = [
    { id: 'key-features', label: 'Key Features' },
    { id: 'services', label: 'Content Services' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Get Started' }
  ]

  const keyFeatures = [
    {
      number: 1,
      title: 'SEO-Optimized Written Content',
      description: 'Every blog post, service page, and article is keyword-researched and optimized for search engines. We target high-intent keywords homeowners actually search for, with proper heading structure, meta descriptions, and internal linking.'
    },
    {
      number: 2,
      title: 'Professional Video Production',
      description: 'From filming to editing, we handle full video production. Includes scriptwriting, on-site filming, professional editing with graphics and captions, background music, and YouTube optimization. Videos showcase your expertise and build trust.'
    },
    {
      number: 3,
      title: 'High-Quality Photography',
      description: 'Professional photography makes you look premium. We capture your best work with proper lighting, composition, and editing. Before/after shots, team photos, and project documentation that you can use across all marketing channels.'
    },
    {
      number: 4,
      title: 'Content Calendar & Strategy',
      description: 'We plan content months in advance based on seasonal trends, keyword opportunities, and your business goals. You always know what\'s publishing and when. Strategic planning ensures consistent output and topic diversity.'
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
          services={contentServices}
          sectionId="content-services"
          sectionClassName="bg-gradient-to-b from-white to-gray-50"
          onButtonClick={handleServiceInquiry}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
        />
      </div>
      <div id="testimonials">
        <Testimonials
          title="Content Creation Success Stories"
          subtitle="How Quality Content Drives Real Business Growth"
          testimonials={[
            {
              id: 1,
              body: "The blog content Expand creates ranks for everything. We went from 0 organic traffic to 8,000 monthly visitors in 8 months. Best part? 15-20 of those visitors become leads every month. Content marketing actually works.",
              clientName: "Sarah Chen",
              clientCompany: "Chen Construction & Remodeling"
            },
            {
              id: 2,
              body: "The customer testimonial videos are incredible sales tools. We send them to every prospect before the estimate appointment. Our close rate went from 35% to 58% because people already trust us before we show up.",
              clientName: "Marcus Richardson",
              clientCompany: "Richardson Home Remodeling"
            },
            {
              id: 3,
              body: "Professional photography transformed our website and social media. We look like a premium company because we finally have premium visuals. Homeowners comment on our 'beautiful portfolio' constantly. Worth every penny.",
              clientName: "Tom Bradley",
              clientCompany: "Bradley Tile & Flooring"
            },
            {
              id: 4,
              body: "The YouTube videos rank in Google search results alongside our website. Now we own multiple spots on page one - our site, our YouTube channel, our blog posts. Total market domination through content.",
              clientName: "Davis Miller",
              clientCompany: "Miller Roofing Co."
            },
            {
              id: 5,
              body: "They created 6 months of social media content in advance. Every post is professional, on-brand, and strategic. Our social following tripled and we're getting DMs from potential customers weekly. Consistency is everything.",
              clientName: "Jennifer Santos",
              clientCompany: "Santos Kitchen & Bath"
            }
          ]}
        />
      </div>
      <div id="faq">
        <FAQ
          items={contentFAQs}
          title="Content Creation FAQs"
          subtitle="Everything you need to know about professional content marketing"
          schemaOrg={true}
        />
      </div>
      <div id="contact">
        <LeadChange text="Start Building Your Content Library"/>
      </div>
      <Footer />
      </main>
    </>
  )
}

export default ContentCreationPage

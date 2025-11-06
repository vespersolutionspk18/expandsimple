'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServicesSection from './service'
import { ServiceItem } from '../types/service'
import LeadChange from '../homecomponents/LeadChange'
import { Sparkles, TrendingUp, Rocket } from 'lucide-react'

const ServicesPage = () => {
  const services: ServiceItem[] = [
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      description: 'Dominate local search results and get found by homeowners actively searching for your services. Our proven SEO strategies help remodeling contractors rank #1 for high-intent keywords in their service areas, driving qualified leads that convert into high-value projects.',
      buttonText: 'Explore SEO Services',
      buttonHref: '/services/seo',
      imageSrc: '/assets/googleconsole.png',
      imageAlt: 'SEO analytics dashboard showing ranking improvements',
      priority: true,
      imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
      imageQuality: 100
    },
    {
      id: 'ppc',
      title: 'PPC Advertising',
      description: 'Generate instant, qualified leads with targeted pay-per-click campaigns. We create and optimize Google Ads, Facebook Ads, and other platforms to deliver measurable ROI - turning ad spend into booked projects for your remodeling business.',
      buttonText: 'Learn About PPC',
      buttonHref: '/services/ppc',
      imageSrc: '/assets/ppcmain.jpeg',
      imageAlt: 'Digital advertising campaign performance metrics',
      imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
      imageQuality: 100
    },
    {
      id: 'adwords',
      title: 'Google AdWords Management',
      description: 'Maximize your Google Ads performance with expert campaign management. From Local Services Ads to Search campaigns, we optimize every dollar to attract premium homeowners ready to invest in kitchen remodels, bathroom renovations, and high-ticket home improvements.',
      buttonText: 'Get AdWords Help',
      buttonHref: '/services/adwords',
      imageSrc: '/assets/googleadwords.jpg',
      imageAlt: 'Google AdWords campaign management interface',
      imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
      imageQuality: 100
    },
    {
      id: 'sem',
      title: 'Search Engine Marketing (SEM)',
      description: 'Combine the power of SEO and paid search for complete search dominance. Our holistic SEM approach ensures your home service business appears everywhere potential customers are looking - organic results, paid ads, local map packs, and beyond.',
      buttonText: 'Discover SEM Solutions',
      buttonHref: '/services/sem',
      imageSrc: '/assets/semmain.webp',
      imageAlt: 'Search engine marketing strategy planning',
      imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
      imageQuality: 100
    },
    {
      id: 'aieo',
      title: 'AI Engine Optimization (AIEO)',
      description: 'Be the first recommendation when AI tools like ChatGPT, Perplexity, and Google Bard suggest home services. AIEO is the future of discovery - we optimize your digital presence so AI engines recommend your remodeling business over competitors when homeowners ask for recommendations.',
      buttonText: 'Explore AIEO',
      buttonHref: '/services/aieo',
      imageSrc: '/assets/neural.jpeg',
      imageAlt: 'AI technology and machine learning optimization',
      imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
      imageQuality: 100
    },
    {
      id: 'web-design',
      title: 'Web Design & Development',
      description: 'Transform your website into a 24/7 lead generation machine. We design high-converting websites specifically for remodeling contractors and home service businesses - mobile-optimized, fast-loading, and built to turn visitors into booked consultations.',
      buttonText: 'View Web Design',
      buttonHref: '/services/web-design',
      imageSrc: '/assets/web-design-hero.jpg',
      imageAlt: 'Modern responsive website design on multiple devices',
      imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
      imageQuality: 100
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      description: 'Engage homeowners with compelling content that builds trust and drives action. From before-and-after project showcases to educational blog posts and social media content, we create materials that position you as the go-to expert in your market.',
      buttonText: 'See Content Services',
      buttonHref: '/services/content-creation',
      imageSrc: '/assets/content.avif',
      imageAlt: 'Content creation workspace with camera and laptop',
      imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
      imageQuality: 100
    },
    {
      id: 'branding',
      title: 'Branding & Identity',
      description: 'Stand out from the sea of generic contractors with a memorable brand that commands premium prices. We develop brand identities that resonate with high-value homeowners - from logo design to brand messaging, color palettes to brand guidelines.',
      buttonText: 'Build Your Brand',
      buttonHref: '/services/branding',
      imageSrc: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2800&auto=format&fit=crop',
      imageAlt: 'Brand identity design elements and color palettes',
      imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
      imageQuality: 100
    },
    {
      id: 'ai-consultancy',
      title: 'AI Consultancy & Automation',
      description: 'Leverage artificial intelligence to automate workflows, reduce costs, and scale your business. From AI-powered chatbots and automated scheduling to intelligent customer service and lead qualification, we help you work smarter, not harder.',
      buttonText: 'Automate with AI',
      buttonHref: '/services/ai-consultancy',
      imageSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2800&auto=format&fit=crop',
      imageAlt: 'Artificial intelligence automation technology',
      imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
      imageQuality: 100
    },
    {
      id: 'crm',
      title: 'CRM Consultancy & Optimization',
      description: 'Never lose a lead again. We implement and optimize CRM systems specifically designed for home service businesses - tracking every lead, automating follow-ups, and ensuring your sales pipeline flows smoothly from first contact to signed contract.',
      buttonText: 'Optimize Your CRM',
      buttonHref: '/services/crm-consultancy',
      imageSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2800&auto=format&fit=crop',
      imageAlt: 'CRM dashboard showing customer pipeline and analytics',
      imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw',
      imageQuality: 100
    }
  ]

  return (
    <>
      <Header />
      <main className="pt-[11.8rem] md:pt-[11.2rem]">
        {/* Hero Section */}
        <div className="p-5 md:p-10">
          <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#1d4ed8] to-[#1e40af] text-white p-8 md:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col gap-6 md:gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 w-fit mx-auto bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium">10 Comprehensive Marketing Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
                Everything You Need to Dominate Your Market
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl tracking-tight text-white/90 max-w-3xl mx-auto">
                From SEO to AI optimization, we offer a complete suite of digital marketing services designed exclusively for home service businesses. No more juggling multiple agencies - we handle it all.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6">
                <div className="flex flex-col gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2 text-white/80">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Average ROI</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold">3.8x</div>
                  <p className="text-sm text-white/70">Return on marketing investment</p>
                </div>

                <div className="flex flex-col gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2 text-white/80">
                    <Rocket className="w-5 h-5" />
                    <span className="text-sm font-medium">Lead Growth</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold">285%</div>
                  <p className="text-sm text-white/70">Average increase in qualified leads</p>
                </div>

                <div className="flex flex-col gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2 text-white/80">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-medium">Client Retention</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold">92%</div>
                  <p className="text-sm text-white/70">Contractors stay with us long-term</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Introduction */}
        <div className="p-6 md:p-10 flex flex-col gap-8 md:gap-10 tracking-tighter">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black/80 font-medium tracking-tighter w-full lg:w-[28%]">
              Our Services
            </h2>
            <p className="text-black/75 text-xl md:text-2xl tracking-tighter w-full lg:w-[68%] leading-relaxed">
              We don&apos;t do cookie-cutter marketing. Every service is tailored specifically for remodeling contractors, roofers, tiling companies, plumbers, and home service professionals. We speak your language, understand your customers, and deliver results that matter - more leads, higher conversion rates, and bigger projects.
            </p>
          </div>
        </div>

        {/* All Services */}
        <ServicesSection
          services={services}
          headingLevel="h2"
          lazyLoadImages={true}
          animateOnScroll={true}
          buttonVariant="blue"
        />

        {/* Why Choose All Services Section */}
        <div className="p-5 md:p-10">
          <div className="rounded-2xl md:rounded-3xl bg-stone-100 p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black/90 tracking-tighter">
                Why Work With One Agency for Everything?
              </h2>

              <p className="text-lg md:text-xl text-black/75 tracking-tight leading-relaxed">
                Most contractors make the mistake of hiring different vendors for different services. The result? Disjointed messaging, wasted budgets, and finger-pointing when results don&apos;t materialize.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-left">
                <div className="bg-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-xl font-semibold text-black/85 mb-3">Unified Strategy</h3>
                  <p className="text-black/70">All services work together toward one goal - filling your pipeline with high-value projects. No silos, no conflicts.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-xl font-semibold text-black/85 mb-3">Better ROI</h3>
                  <p className="text-black/70">When SEO, PPC, and web design align, every dollar works harder. We optimize across all channels for maximum impact.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-xl font-semibold text-black/85 mb-3">Single Point of Contact</h3>
                  <p className="text-black/70">One team, one strategy, one dashboard. No more juggling emails with five different agencies.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-xl font-semibold text-black/85 mb-3">Faster Results</h3>
                  <p className="text-black/70">Integrated campaigns launch faster and perform better. We move quickly because there&apos;s no waiting on external vendors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <LeadChange text="Ready To Expand?" />

        <Footer />
      </main>
    </>
  )
}

export default ServicesPage

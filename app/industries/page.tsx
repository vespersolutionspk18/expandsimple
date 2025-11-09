'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import LeadChange from '../homecomponents/LeadChange'
import { industries } from '../types/industry'
import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Building2, TrendingUp } from 'lucide-react'

const IndustriesPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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
              <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col gap-6 md:gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 w-fit mx-auto bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <Building2 className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium">Exclusively Home Service Focused</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
                We Know Your Industry Inside Out
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl tracking-tight text-white/90 max-w-3xl mx-auto">
                From emergency repairs to premium remodels, we exclusively serve home service businesses. No generic strategies, no learning curves—just proven results in your industry.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6">
                <div className="flex flex-col gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2 text-white/80">
                    <Building2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Industries Served</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold">12+</div>
                  <p className="text-sm text-white/70">Home service specializations</p>
                </div>

                <div className="flex flex-col gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2 text-white/80">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Client Success</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold">500+</div>
                  <p className="text-sm text-white/70">Businesses helped to scale</p>
                </div>

                <div className="flex flex-col gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2 text-white/80">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-medium">Specialization</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold">100%</div>
                  <p className="text-sm text-white/70">Home services only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="p-6 md:p-10 flex flex-col gap-8 md:gap-10 tracking-tighter">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black/80 font-medium tracking-tighter w-full lg:w-[28%]">
              Industries We Serve
            </h2>
            <p className="text-black/75 text-xl md:text-2xl tracking-tighter w-full lg:w-[68%] leading-relaxed">
              Click your industry to see exactly how we help businesses like yours dominate local search and scale profitably. Every strategy is tailored to your specific market dynamics and customer behavior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {industries.map((industry, index) => {
              const isHovered = hoveredCard === index

              return (
                <Link
                  key={industry.id}
                  href={`/industries/${industry.slug}`}
                  className="group"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden border-2 border-stone-200 hover:border-[#1d4ed8] transition-all duration-300 hover:shadow-xl h-full">
                    {/* Industry Image */}
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <Image
                        src={industry.heroImage}
                        alt={industry.title}
                        fill
                        className={`object-cover transition-transform duration-700 ${
                          isHovered ? 'scale-110' : 'scale-100'
                        }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Emoji Badge */}
                      <div className={`absolute bottom-4 left-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-3 transition-all duration-500 ${
                        isHovered ? 'bg-white/20 scale-110' : ''
                      }`}>
                        <span className="text-4xl">{industry.emoji}</span>
                      </div>
                    </div>

                    {/* Industry Info */}
                    <div className="p-6 flex flex-col gap-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-black/90 tracking-tighter group-hover:text-[#1d4ed8] transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-base text-black/70 tracking-tight leading-relaxed">
                        {industry.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Why We Only Serve Home Services */}
        <div className="p-5 md:p-10">
          <div className="rounded-2xl md:rounded-3xl bg-stone-100 p-8 md:p-12 lg:p-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1d4ed8]/10 rounded-full mb-4">
                  <span className="text-sm font-semibold text-[#1d4ed8]">Our Focus</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black/90 tracking-tighter mb-4">
                  Why We Only Serve Home Services
                </h2>
                <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
                  Specialization isn&apos;t a limitation—it&apos;s our superpower. Here&apos;s why our exclusive focus delivers better results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 hover:border-[#1d4ed8]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#1d4ed8]/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-black/85 mb-3">We Know Your Customers</h3>
                  <p className="text-base md:text-lg text-black/70 leading-relaxed tracking-tight">
                    Homeowners search differently than B2B buyers. They need emergency repairs, compare reviews obsessively, and want instant quotes. We know exactly how to rank for &quot;near me&quot; searches, generate reviews, and convert panicked 2am visitors into booked jobs.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 hover:border-[#1d4ed8]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#1d4ed8]/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-black/85 mb-3">We Understand Your Business Model</h3>
                  <p className="text-base md:text-lg text-black/70 leading-relaxed tracking-tight">
                    Seasonal fluctuations, service area targeting, emergency vs. planned jobs, recurring contracts, crew capacity—we&apos;ve optimized marketing for hundreds of contractors. We know what moves the needle because we&apos;ve seen it work.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 hover:border-[#1d4ed8]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#1d4ed8]/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-black/85 mb-3">We Speak Your Language</h3>
                  <p className="text-base md:text-lg text-black/70 leading-relaxed tracking-tight">
                    No marketing jargon or theoretical BS. We talk ROI, cost per lead, booking rates, and revenue per job. You&apos;re not paying for &quot;brand awareness&quot;—you&apos;re investing in phone calls, online bookings, and closed contracts.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 hover:border-[#1d4ed8]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#1d4ed8]/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-black/85 mb-3">Proven Playbooks for Your Industry</h3>
                  <p className="text-base md:text-lg text-black/70 leading-relaxed tracking-tight">
                    We don&apos;t start from scratch with every client. We have battle-tested strategies, keyword lists, ad templates, and content frameworks specifically for plumbers, HVAC, landscapers, and every home service niche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-5 md:p-10">
          <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#1d4ed8] to-[#1e40af] text-white p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                By the Numbers
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                These aren&apos;t projections—they&apos;re real results from home service businesses we&apos;ve partnered with.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
                  <p className="text-base md:text-lg text-white/80">Home Service Businesses Served</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-5xl md:text-6xl font-bold mb-2">$47M+</div>
                  <p className="text-base md:text-lg text-white/80">Revenue Generated for Clients</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-5xl md:text-6xl font-bold mb-2">3.8x</div>
                  <p className="text-base md:text-lg text-white/80">Average Return on Investment</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <Button variant="white" href="/contact" size="lg">
                  Get Your Free Audit
                </Button>
                <Button variant="secondary" href="/work" size="lg">
                  See Success Stories
                </Button>
              </div>
            </div>
          </div>
        </div>

        <LeadChange text="Let's Grow Together" />

        <Footer />
      </main>
    </>
  )
}

export default IndustriesPage

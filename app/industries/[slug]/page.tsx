'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Button from '@/app/components/Button'
import LeadChange from '@/app/homecomponents/LeadChange'
import { industries } from '@/app/types/industry'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, AlertCircle, TrendingUp, Zap } from 'lucide-react'

const IndustryDetailPage = () => {
  const params = useParams()
  const slug = params.slug as string

  // Find the industry by slug
  const industry = industries.find(i => i.slug === slug)

  // If industry not found, show 404-like message
  if (!industry) {
    return (
      <>
        <Header />
        <main className="pt-[10rem] md:pt-[9.5rem]">
          <div className="p-10 text-center">
            <h1 className="text-4xl font-bold text-black/80 mb-4">Industry Not Found</h1>
            <p className="text-xl text-black/60 mb-8">The industry you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/industries" className="text-[#1d4ed8] underline">
              Back to All Industries
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-[11.8rem] md:pt-[11.2rem]">
        {/* Back Button */}
        <div className="px-5 md:px-10 pt-2 pb-4">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-black/70 hover:text-[#1d4ed8] transition-colors font-medium text-base"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Industries</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="px-5 md:px-10 pb-8">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden relative bg-gradient-to-br from-[#1d4ed8] to-[#1e40af]">
            {/* Background Image with Overlay */}
            <div className="relative h-[500px] md:h-[600px]">
              <Image
                src={industry.heroImage}
                alt={industry.title}
                fill
                className="object-cover mix-blend-overlay opacity-40"
                priority
                sizes="100vw"
              />

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>

              {/* Hero Content */}
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                <div className="max-w-5xl text-center text-white">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
                    <span className="text-5xl">{industry.emoji}</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-6">
                    {industry.title}
                  </h1>

                  <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
                    {industry.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button variant="white" href="/contact" size="lg">
                      Get Your Free Audit
                    </Button>
                    <Button variant="secondary" href="/services" size="lg">
                      View Our Services
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Description */}
        <div className="p-6 md:p-10 flex flex-col gap-8 md:gap-10 tracking-tighter">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black/80 font-medium tracking-tighter w-full lg:w-[28%]">
              Why We're Different
            </h2>
            <p className="text-black/75 text-xl md:text-2xl tracking-tighter w-full lg:w-[68%] leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>

        {/* Pain Points Section */}
        <div className="p-5 md:p-10">
          <div className="rounded-2xl md:rounded-3xl bg-stone-100 p-8 md:p-12 lg:p-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-semibold text-red-900">Common Challenges</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black/85 tracking-tighter mb-4">
                  Sound Familiar?
                </h2>
                <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
                  These are the problems {industry.title.toLowerCase()} businesses tell us about every single day:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {industry.painPoints.map((pain, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border-2 border-stone-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors duration-300">
                        <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                      </div>
                      <p className="text-base md:text-lg text-black/80 leading-relaxed tracking-tight pt-1">
                        {pain}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How We Help Section */}
        <div className="p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
                <Zap className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-900">Our Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black/85 tracking-tighter mb-4">
                How We Help {industry.title} Businesses Win
              </h2>
              <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
                These aren&apos;t generic marketing tactics. These are proven strategies specifically for your industry:
              </p>
            </div>

            <div className="space-y-4">
              {industry.howWeHelp.map((solution, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 md:p-8 border-2 border-stone-200 hover:border-[#1d4ed8] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#1d4ed8] to-[#1e40af] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-black/90 mb-3 tracking-tight">
                        {solution.service}
                      </h3>
                      <p className="text-base md:text-lg text-black/70 leading-relaxed tracking-tight">
                        {solution.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Services Tags */}
            <div className="mt-10 pt-10 border-t border-stone-200">
              <h3 className="text-xl md:text-2xl font-semibold text-black/80 mb-6 tracking-tight">Services We Provide:</h3>
              <div className="flex flex-wrap gap-3">
                {industry.services.map((service) => (
                  <span
                    key={service}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#1d4ed8]/10 to-[#1e40af]/10 text-[#1d4ed8] font-medium rounded-full text-sm border border-[#1d4ed8]/20 hover:border-[#1d4ed8]/40 transition-colors"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-5 md:p-10">
          <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#1d4ed8] to-[#1e40af] p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-white">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-semibold">Real Results</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
                  What {industry.title} Businesses Achieve
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                  These numbers aren&apos;t projections or estimates—they&apos;re real results from {industry.title.toLowerCase()} businesses we&apos;ve worked with.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industry.results.map((result, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      {result.value}
                    </div>
                    <div className="text-sm font-semibold text-white/90 mb-2">
                      {result.metric}
                    </div>
                    <div className="text-sm text-white/70 leading-relaxed">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-5 md:p-10">
          <div className="max-w-5xl mx-auto bg-stone-100 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black/90 tracking-tighter mb-6">
              {industry.cta.headline}
            </h2>
            <p className="text-lg md:text-xl text-black/70 mb-8 max-w-3xl mx-auto leading-relaxed tracking-tight">
              {industry.cta.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="blue" href="/contact" size="lg">
                Get Your Free Audit
              </Button>
              <Button variant="secondary" href="/work" size="lg">
                See Case Studies
              </Button>
            </div>
          </div>
        </div>

        {/* More Industries */}
        <div className="p-5 md:p-10">
          <div className="rounded-2xl md:rounded-3xl bg-stone-100 p-8 md:p-12 lg:p-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black/85 tracking-tighter mb-4">
                  We Also Serve These Industries
                </h2>
                <p className="text-lg md:text-xl text-black/70">
                  Explore how we help other home service businesses dominate their markets
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {industries
                  .filter(i => i.id !== industry.id)
                  .slice(0, 4)
                  .map((relatedIndustry) => (
                    <Link
                      key={relatedIndustry.id}
                      href={`/industries/${relatedIndustry.slug}`}
                      className="bg-white rounded-2xl p-6 border-2 border-stone-200 hover:border-[#1d4ed8] hover:shadow-lg transition-all duration-300 text-center group"
                    >
                      <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {relatedIndustry.emoji}
                      </div>
                      <h3 className="text-sm md:text-base font-semibold text-black/80 group-hover:text-[#1d4ed8] transition-colors">
                        {relatedIndustry.title}
                      </h3>
                    </Link>
                  ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 text-[#1d4ed8] font-semibold hover:gap-3 transition-all text-lg"
                >
                  <span>View All Industries</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <LeadChange text="Ready To Expand?" />

        <Footer />
      </main>
    </>
  )
}

export default IndustryDetailPage

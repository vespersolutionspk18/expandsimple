'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LeadChange from '../homecomponents/LeadChange'
import { projects } from '../types/project'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Briefcase } from 'lucide-react'

const WorkPage = () => {
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
                <Briefcase className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium">Our Success Stories</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
                Real Results for Real Businesses
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl tracking-tight text-white/90 max-w-3xl mx-auto">
                See how we&apos;ve helped home service businesses dominate their markets, increase revenue, and build brands that last. These aren&apos;t just case studies - they&apos;re blueprints for your success.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6">
                <div className="flex flex-col gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold">$47M+</div>
                  <p className="text-sm text-white/70">Revenue Generated for Clients</p>
                </div>

                <div className="flex flex-col gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold">500+</div>
                  <p className="text-sm text-white/70">Successful Projects Completed</p>
                </div>

                <div className="flex flex-col gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold">3.8x</div>
                  <p className="text-sm text-white/70">Average Return on Investment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid Section */}
        <div className="p-6 md:p-10 flex flex-col gap-8 md:gap-10 tracking-tighter">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black/80 font-medium tracking-tighter w-full lg:w-[28%]">
              Featured Projects
            </h2>
            <p className="text-black/75 text-xl md:text-2xl tracking-tighter w-full lg:w-[68%] leading-relaxed">
              Each project represents a home service business that trusted us to transform their digital presence. From SEO domination to AI optimization, these success stories show what&apos;s possible when strategy meets execution.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden border-2 border-stone-200 hover:border-[#1d4ed8] transition-all duration-300 hover:shadow-xl">
                  {/* Project Image */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-black">{project.year}</span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-black/90 tracking-tighter mb-2 group-hover:text-[#1d4ed8] transition-colors">
                        {project.clientName}
                      </h3>
                      <p className="text-sm text-black/60 tracking-tight mb-3">
                        {project.industry}
                      </p>
                      <p className="text-base text-black/75 tracking-tight leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-stone-100 text-black/70 text-xs font-medium rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                      {project.services.length > 3 && (
                        <span className="px-3 py-1 bg-stone-100 text-black/70 text-xs font-medium rounded-full">
                          +{project.services.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Key Result */}
                    {project.results[0] && (
                      <div className="pt-4 border-t border-stone-200">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl md:text-3xl font-bold text-[#1d4ed8]">
                            {project.results[0].value}
                          </span>
                          <span className="text-sm text-black/60">
                            {project.results[0].metric}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* View Case Study Link */}
                    <div className="flex items-center gap-2 text-[#1d4ed8] font-medium text-sm group-hover:gap-3 transition-all">
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-5 md:p-10">
          <div className="rounded-2xl md:rounded-3xl bg-stone-100 p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black/90 tracking-tighter">
                Ready to Write Your Success Story?
              </h2>

              <p className="text-lg md:text-xl text-black/75 tracking-tight leading-relaxed">
                These results aren&apos;t accidents - they&apos;re the outcome of proven strategies executed by a team that understands home service businesses. Let&apos;s build your case study next.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#1d4ed8] text-white font-medium rounded-full hover:bg-[#1e40af] transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get Your Free Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-white text-black font-medium rounded-full border-2 border-stone-300 hover:border-[#1d4ed8] transition-colors inline-flex items-center justify-center gap-2"
                >
                  See Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Change CTA */}
        <LeadChange text="Start Your Transformation" />

        <Footer />
      </main>
    </>
  )
}

export default WorkPage

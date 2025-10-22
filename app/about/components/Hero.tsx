"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl text-black/95 tracking-tighter w-[40%]">
            A Global Team Helping Home Service Businesses Get Found Online
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
We help remodeling contractors, roofers, tiling companies, plumbers, and other home service businesses grow their revenue and build brands people remember. Through specialized SEO, PPC, web design, and AI-powered marketing, we make sure your business dominates local search and wins high-value projects.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
        <img
          src="/assets/about.jpg"
          alt="Team collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero

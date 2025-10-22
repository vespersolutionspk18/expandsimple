"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            SEO for Home Service Businesses
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Dominate local search results and get more calls from homeowners actively searching for your services. Our proven SEO strategies help remodeling contractors, roofers, and home service businesses rank #1 in their markets and generate qualified leads consistently.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px] border border-black/20">
        <img
          src="/assets/googleconsole.png"
          alt="Google Search Console dashboard"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '0% 50%' }}
        />
      </div>
    </div>
  )
}

export default Hero

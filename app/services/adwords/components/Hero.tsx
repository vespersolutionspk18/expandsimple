"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            Google AdWords Management
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Stop wasting money on clicks that don&apos;t convert. Our certified Google Ads specialists create high-converting campaigns specifically for remodeling contractors. We optimize Quality Score, reduce cost-per-click, and maximize ROI through strategic bid management and continuous A/B testing.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2800&auto=format&fit=crop"
          alt="Google AdWords campaign dashboard with performance metrics"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero

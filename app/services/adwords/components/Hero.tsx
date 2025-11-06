"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-4 sm:p-6 md:p-8 lg:p-10 mt-16 sm:mt-20 md:mt-24 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 justify-between w-full" >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thick text-black/95 tracking-tighter w-full lg:w-[40%]">
            Google AdWords Management
        </h1>
        <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-tighter leading-tight text-black/90 w-full lg:w-[50%]">
Stop wasting money on clicks that don&apos;t convert. Our certified Google Ads specialists create high-converting campaigns specifically for remodeling contractors. We optimize Quality Score, reduce cost-per-click, and maximize ROI through strategic bid management and continuous A/B testing.
        </h5>
      </div>
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src="/assets/ gadshero.png"
          alt="Google AdWords paid results vs organic results"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
      </div>
    </div>
  )
}

export default Hero

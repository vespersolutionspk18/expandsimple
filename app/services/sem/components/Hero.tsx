"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            Search Engine Marketing (SEM)
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Own the first page - organic and paid combined. Our integrated SEM strategies combine SEO and PPC to capture maximum market share. We help remodeling contractors dominate search results through coordinated campaigns that work together, not separately, for exponential growth.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?q=80&w=2800&auto=format&fit=crop"
          alt="Search engine results page showing integrated SEM strategy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero

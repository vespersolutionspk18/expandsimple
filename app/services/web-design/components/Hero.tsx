"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            Web Design & Development
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Websites that turn visitors into customers. Custom web design for home service businesses that need to grow. Mobile-first, conversion-optimized, and built to generate leads—not just look pretty. Get a website that works as hard as you do.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px] border border-black/20">
        <img
          src="/assets/web-design-hero.jpg"
          alt="Apple monitors displaying web design"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero

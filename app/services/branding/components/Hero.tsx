"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            Branding
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Stand out and be remembered in your market. Professional branding that makes you the go-to choice for high-value projects. From logo design to complete brand identity systems, we help contractors charge premium prices, build customer loyalty, and dominate their local market.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2800&auto=format&fit=crop"
          alt="Professional brand identity design and strategy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero

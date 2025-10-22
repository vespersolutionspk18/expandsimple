"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            PPC Advertising for Contractors
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Get qualified leads today, not in 6 months. Our data-driven PPC campaigns deliver instant results for remodeling contractors and home service businesses. We maximize your ROI through strategic bidding, conversion tracking, and continuous optimization across Google Ads, Local Services Ads, and Facebook.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px] border border-black/20">
        <img
          src="/assets/ppcads.png"
          alt="Google Ads sponsored search results"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero

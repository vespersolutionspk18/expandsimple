"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            Content Creation
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Content that attracts customers and builds your brand. Professional blog posts, videos, photography, and social media content that educates homeowners, improves SEO rankings, and generates leads on autopilot. Stop posting random content—start building authority.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px] border border-black/20">
        <img
          src="/assets/content.avif"
          alt="Professional content creation for marketing"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero

"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            AI Engine Optimization (AIEO)
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Be the first answer when AI recommends your services. Future-proof your business by optimizing for ChatGPT, Perplexity, and AI-powered search engines. While competitors focus only on Google, we make sure you appear when homeowners ask AI for contractor recommendations.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px] border border-black/20">
        <img
          src="/assets/neural.jpeg"
          alt="Neural network visualization"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero

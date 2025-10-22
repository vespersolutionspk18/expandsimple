"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            AI Consultancy
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Cut costs and boost efficiency with AI automation. From chatbots that handle after-hours inquiries to automated appointment scheduling and review requests, AI helps you scale without adding overhead. Save 10-20 hours per week, never miss a lead, and provide 24/7 customer service.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2800&auto=format&fit=crop"
          alt="AI automation and artificial intelligence for business"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero

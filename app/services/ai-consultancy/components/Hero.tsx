"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-4 sm:p-6 md:p-8 lg:p-10 mt-16 sm:mt-20 md:mt-24 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 justify-between w-full" >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thick text-black/95 tracking-tighter w-full lg:w-[40%]">
            AI Consultancy
        </h1>
        <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-tighter leading-tight text-black/90 w-full lg:w-[50%]">
Cut costs and boost efficiency with AI automation. From chatbots that handle after-hours inquiries to automated appointment scheduling and review requests, AI helps you scale without adding overhead. Save 10-20 hours per week, never miss a lead, and provide 24/7 customer service.
        </h5>
      </div>
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
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

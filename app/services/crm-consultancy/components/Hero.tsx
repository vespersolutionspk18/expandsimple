"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-4 sm:p-6 md:p-8 lg:p-10 mt-16 sm:mt-20 md:mt-24 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 justify-between w-full" >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thick text-black/95 tracking-tighter w-full lg:w-[40%]">
            CRM Consultancy
        </h1>
        <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-tighter leading-tight text-black/90 w-full lg:w-[50%]">
Never lose a lead or miss a follow-up again. Open source CRM implementation that gives you full control without the enterprise price tag. Custom-built for contractors, no vendor lock-in, no per-user fees. Own your data, automate your pipeline, and scale without breaking the bank.
        </h5>
      </div>
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2800&auto=format&fit=crop"
          alt="CRM system dashboard showing pipeline and automation"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero

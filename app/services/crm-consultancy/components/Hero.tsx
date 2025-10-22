"use client";
import React from 'react'

const Hero = () => {
  return (
  <div className="p-10 mt-24 flex flex-col gap-16">
        <div className="flex flex-row gap-10 justify-between w-full" >
        <h1 className="text-7xl font-thick text-black/95 tracking-tighter w-[40%]">
            CRM Consultancy
        </h1>
        <h5 className="text-2xl tracking-tighter leading-tight text-black/90 w-[50%]">
Never lose a lead or miss a follow-up again. Open source CRM implementation that gives you full control without the enterprise price tag. Custom-built for contractors, no vendor lock-in, no per-user fees. Own your data, automate your pipeline, and scale without breaking the bank.
        </h5>
      </div>
      <div className="rounded-3xl overflow-hidden relative w-full h-[600px]">
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

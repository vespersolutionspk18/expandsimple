'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

interface FooterProps {
  backgroundColor?: string;
}

const Footer = ({ backgroundColor = '#1d4ed8' }: FooterProps) => {
  const router = useRouter();
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  return (
    <div className="p-3 sm:p-5">
        <div className="tracking-tighter text-white px-4 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-12 md:pt-16 pb-4 rounded-2xl sm:rounded-3xl flex flex-col gap-6 sm:gap-8 md:gap-10" style={{ backgroundColor }}>
        <div className="w-full flex flex-col xl:flex-row gap-6 sm:gap-8 xl:gap-8">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-7 w-full xl:w-[28%] flex-shrink-0">
                <h5 className="text-2xl sm:text-3xl md:text-4xl lg:w-[90%]">Ready to Dominate Your Market?</h5>
                <div className="relative w-full max-w-md">
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 px-4 sm:px-6 py-3 sm:py-4 pr-14 sm:pr-16 rounded-full border border-white/20 focus:outline-none focus:border-white/40 transition-all text-base sm:text-lg"
                    />
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-white/90 text-black p-2 sm:p-3 rounded-full transition-all"
                        onClick={() => router.push('/contact')}
                        onMouseEnter={() => setIsArrowHovered(true)}
                        onMouseLeave={() => setIsArrowHovered(false)}
                    >
                        <ArrowUpRight
                            size={20}
                            className="sm:w-6 sm:h-6"
                            style={{
                                transform: isArrowHovered ? 'scaleY(-1)' : 'scaleY(1)',
                                transition: 'transform 0.3s ease-in-out'
                            }}
                        />
                    </button>
                </div>
            </div>

            {/* Navigation Links Grid */}
            <div className="w-full xl:flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.5fr] gap-6 sm:gap-8 xl:gap-6">
            <div className="flex flex-col gap-2 sm:gap-3">
            <h5 className="text-xl sm:text-2xl text-white">
                Navigation
            </h5>
            <ul className="text-base sm:text-lg md:text-xl text-white font-normal">
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/')}>Home</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/about')}>About</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services')}>Services</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/industries')}>Industries</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/work')}>See Our Work</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/contact')}>Contact</li>
            </ul>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
            <h5 className="text-xl sm:text-2xl text-white">
                Services
            </h5>
            <ul className="text-base sm:text-lg md:text-xl text-white font-normal">
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/seo')}>SEO</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/ppc')}>PPC Advertising</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/aieo')}>AIEO</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/sem')}>SEM</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/web-design')}>Web Design</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/content-creation')}>Content Creation</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/branding')}>Branding</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/services/crm-consultancy')}>CRM Consultancy</li>
            </ul>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
            <h5 className="text-xl sm:text-2xl text-white">
                Industries
            </h5>
            <ul className="text-base sm:text-lg md:text-xl text-white font-normal">
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/industries/home-repair-maintenance')}>Home Repair</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/industries/cleaning-sanitation')}>Cleaning</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/industries/outdoor-landscaping')}>Landscaping</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/industries/home-improvement-remodeling')}>Remodeling</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/industries/energy-safety-technology')}>Energy & Tech</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/industries/moving-storage')}>Moving</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/industries/specialty-niche-services')}>Specialty Services</li>
                <li className="cursor-pointer hover:text-white/80 transition-colors" onClick={() => router.push('/industries/personal-in-home-care')}>Personal Care</li>
            </ul>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
            <h5 className="text-xl sm:text-2xl text-white" id="info's here">
               Get In Touch
            </h5>
            <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                    <Phone className="!text-white group-hover:!text-black transition-colors duration-150 flex-shrink-0" size={18} />
                    <span className="text-base sm:text-lg md:text-xl font-normal !text-white group-hover:!text-black transition-colors duration-150 whitespace-nowrap">1-800-EXPAND</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                    <Mail className="!text-white group-hover:!text-black transition-colors duration-150 flex-shrink-0" size={18} />
                    <span className="text-base sm:text-lg md:text-xl font-normal !text-white group-hover:!text-black transition-colors duration-150 whitespace-nowrap">hello@expandmarketing.com</span>
                </div>
                <div className="flex gap-2 sm:gap-3 group cursor-pointer">
                    <MapPin className="!text-white group-hover:!text-black transition-colors duration-150 flex-shrink-0 mt-1" size={18} />
                    <span className="text-base sm:text-lg md:text-xl font-normal !text-white group-hover:!text-black transition-colors duration-150">Serving Home Services Nationwide</span>
                </div>

            </div>
            </div>
            </div>
            {/* End Navigation Links Grid */}

        </div>
        <h5
            className="text-white tracking-tighter mt-3 sm:mt-5 text-center sm:text-left"
            style={{
                fontSize: 'clamp(2rem, 10vw, 10vw)',
                lineHeight: '1',
                whiteSpace: 'normal'
            }}
        >
            Marketing Since 2015
        </h5>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 py-4 border-t border-white/20" id="here">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <Image
                  src="/assets/expandwhite.svg"
                  alt="Expand Marketing"
                  width={120}
                  height={50}
                  className="h-8 w-auto"
                />
                <span className="text-white/80 text-xs sm:text-sm ml-0 sm:ml-4">© Expand Marketing 2025</span>
                <span className="text-white/60 text-xs sm:text-sm hidden sm:inline">|</span>
              
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
                <a href="#" className="hover:text-white transition-colors">Home Services Marketing</a>
                <span className="text-white/60 hidden sm:inline">|</span>
                <a href="#" className="hover:text-white transition-colors">All Rights Reserved</a>
                <span className="text-white/60 hidden sm:inline">|</span>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy </a>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Footer

'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import MegaMenu from './MegaMenu'
import Button from './Button'

interface HeaderProps {
  enableScrollEffects?: boolean
  buttonText?: string
  buttonColor?: string
  hoverColor?: string
  promoBannerColor?: string
}

const Header = ({ enableScrollEffects = false, buttonText = 'Get Free Ranking Report', buttonColor, hoverColor = '#1d4ed8', promoBannerColor = '#1d4ed8' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0)
  const [resetKey, setResetKey] = useState(0)

  const promos = [
    {
      text: "Helping 500+ Contractors Dominate Their Local Market",
      link: true
    },
    {
      text: "Turn Your Website Into a 24/7 Lead Generation Machine",
      link: true
    },
    {
      text: "Rank #1 on Google for Your Service Area",
      link: true
    },
    {
      text: "Generate High-Value Remodeling Leads on Autopilot",
      link: true
    },
    {
      text: "Proven Marketing Strategies Built Exclusively for Contractors",
      link: true
    },
    {
      text: "Is Your Business Invisible on Google? Find Out Free",
      link: true
    },
    {
      text: "See How You Rank vs Competitors - Free Audit Available",
      link: true
    },
    {
      text: "Losing Leads to Competitors? Check Your Rankings Now",
      link: true
    },
    {
      text: "Most Contractors Lose 60% of Leads - Are You One of Them?",
      link: true
    },
    {
      text: "How Does Your Business Show Up Online? Free Check",
      link: true
    }
  ]

  const nextPromo = () => {
    setCurrentPromoIndex((prev) => (prev + 1) % promos.length)
    setResetKey(prev => prev + 1)
  }

  const prevPromo = () => {
    setCurrentPromoIndex((prev) => (prev - 1 + promos.length) % promos.length)
    setResetKey(prev => prev + 1)
  }

  // Auto-advance carousel every 4.9 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromoIndex((current) => (current + 1) % promos.length)
      setResetKey(prev => prev + 1)
    }, 4900)

    return () => clearInterval(timer)
  }, [promos.length, resetKey])

  useEffect(() => {
    if (!enableScrollEffects) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [enableScrollEffects])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const currentPromo = promos[currentPromoIndex]

  return (
    <>
      {/* Promotional Banner */}
      <div
        className={`${enableScrollEffects ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-[10000] border-b-2 border-gray-300 transition-all duration-500 ${
          enableScrollEffects && isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'opacity-100'
        }`}
        style={{ backgroundColor: promoBannerColor }}
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center px-4 py-3">
          {/* Left Arrow */}
          <button
            onClick={prevPromo}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors"
            aria-label="Previous promotion"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Center Content */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-white font-semibold text-md sm:text-lg md:text-xl" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}>
              {currentPromo.text}
            </span>
            {currentPromo.link && (
              <a
                href="/contact"
                className="text-white font-semibold text-sm sm:text-base md:text-lg underline hover:text-white/80 transition-colors"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                Get Started
              </a>
            )}
          </div>

          {/* Progressive Dot Indicators */}
          <style jsx>{`
            @keyframes progressFill {
              0% {
                transform: scaleX(0);
              }
              100% {
                transform: scaleX(1);
              }
            }
            .active-progress-dot {
              width: 24px;
              background: rgba(156, 163, 175, 0.4);
              position: relative;
              overflow: hidden;
            }
            .active-progress-dot::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: white;
              border-radius: 9999px;
              transform-origin: left;
              animation: progressFill 4.9s linear forwards;
              will-change: transform;
            }
          `}</style>
          <div className="flex items-center gap-2 mt-2">
            {promos.map((_, index) => (
              <button
                key={`${index}-${resetKey}`}
                onClick={() => {
                  setCurrentPromoIndex(index)
                  setResetKey(prev => prev + 1)
                }}
                className={`h-2 rounded-full ${
                  index === currentPromoIndex ? 'active-progress-dot' : 'w-2 bg-gray-400'
                }`}
                aria-label={`Go to promotion ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextPromo}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors"
            aria-label="Next promotion"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Header - Fixed on home page, absolute on others */}
      <header className={`${enableScrollEffects ? 'fixed' : 'absolute'} z-[9999] transition-all duration-500 ${
        enableScrollEffects && isScrolled ? 'top-2 left-2 right-2 md:left-4 md:right-4' : 'top-[5.5rem] left-0 right-0'
      }`}>
        <div className={`bg-white/50 backdrop-blur-xl transition-all duration-500 ${
          enableScrollEffects && isScrolled ? 'border-[2px] border-black/20 shadow-lg rounded-2xl' : 'border-t-2 border-b-2 border-gray-300'
        }`}>
        <div className="w-full px-4 sm:px-6 md:px-10">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image
                src="/assets/expandmain.svg"
                alt="Expand Marketing"
                width={120}
                height={50}
                className="h-8 w-auto"
              />
            </Link>

            {/* Primary Navigation - Centered - Desktop Only */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
              <MegaMenu hoverColor={hoverColor} />
            </div>

            {/* Right Side - CTA Button (Desktop) and Hamburger (Mobile) */}
            <div className="flex items-center gap-3">
              {/* CTA Button - Hidden on mobile */}
              <div className="hidden md:block">
                <Button variant="blue" customBackgroundColor={buttonColor} href="/contact">{buttonText}</Button>
              </div>

              {/* Hamburger Menu Button - Mobile Only */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-black hover:bg-white/50 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[9999] transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-xl font-semibold text-black">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="flex flex-col gap-2">
              {/* Home Link */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-lg text-black hover:bg-gray-100 rounded-lg transition-colors"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
              >
                Home
              </Link>

              {/* Services Section */}
              <div className="mt-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Services
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <Link
                    href="/services/seo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    SEO
                  </Link>
                  <Link
                    href="/services/ppc"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    PPC Advertising
                  </Link>
                  <Link
                    href="/services/adwords"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Google AdWords
                  </Link>
                  <Link
                    href="/services/sem"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    SEM
                  </Link>
                  <Link
                    href="/services/aieo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    <span className="text-black">AIEO</span>
                    <span className="px-2 py-0.5 text-xs font-medium text-white rounded-full" style={{ backgroundColor: hoverColor }}>
                      New
                    </span>
                  </Link>
                  <Link
                    href="/services/web-design"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Web Design & Development
                  </Link>
                  <Link
                    href="/services/content-creation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Content Creation
                  </Link>
                  <Link
                    href="/services/branding"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    Branding
                  </Link>
                  <Link
                    href="/services/ai-consultancy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    AI Consultancy
                  </Link>
                  <Link
                    href="/services/crm-consultancy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    CRM Consultancy
                  </Link>
                </div>
              </div>

              {/* About Section */}
              <div className="mt-4">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  About
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-base text-black hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}
                  >
                    About Us
                  </Link>
                </div>
              </div>

              {/* Other Pages */}
              <div className="mt-4">
                <Link
                  href="/work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg text-black hover:bg-gray-100 rounded-lg transition-colors block"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                >
                  Work
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg text-black hover:bg-gray-100 rounded-lg transition-colors block"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg text-black hover:bg-gray-100 rounded-lg transition-colors block"
                  style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>

          {/* Mobile Menu Footer - CTA Button */}
          <div className="p-4 border-t border-gray-200">
            <Button
              variant="blue"
              customBackgroundColor={buttonColor}
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
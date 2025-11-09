'use client'

import React, { useState, useEffect } from 'react'
import { X, TrendingDown, Search, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface StickyPopupProps {
  delay?: number; // Delay in milliseconds before showing
}

const StickyPopup: React.FC<StickyPopupProps> = ({ delay = 5000 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user has already dismissed the popup
    const hasSeenPopup = localStorage.getItem('hasSeenPopup')

    if (hasSeenPopup) {
      return // Don't show if they've seen it before
    }

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const handleClose = () => {
    setIsVisible(false)
    // Remember that user has seen the popup
    localStorage.setItem('hasSeenPopup', 'true')
  }

  const handleCTA = () => {
    handleClose()
    router.push('/contact')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000]"
            onClick={handleClose}
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10001] w-[90%] max-w-lg"
          >
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-black/70" />
              </button>

              {/* Top Section - Blue Gradient */}
              <div className="bg-gradient-to-br from-[#1d4ed8] to-[#1e40af] p-6 md:p-8 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  {/* Warning Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-xs md:text-sm font-medium">Free Assessment Available</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-3">
                    Is Your Business Invisible Online?
                  </h2>
                  <p className="text-base md:text-lg text-white/90 tracking-tight leading-relaxed">
                    Most contractors lose 60% of potential leads because they can&apos;t be found online when homeowners search.
                  </p>
                </div>
              </div>

              {/* Bottom Section - White */}
              <div className="p-6 md:p-8">
                {/* Problem Indicators */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-black/90 mb-0.5">Not Ranking on Google?</h4>
                      <p className="text-xs text-black/60">Your competitors are getting those high-value leads instead.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Search className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-black/90 mb-0.5">Low Website Traffic?</h4>
                      <p className="text-xs text-black/60">You&apos;re leaving money on the table every single day.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-stone-100 rounded-xl p-4 mb-4">
                  <p className="text-sm font-medium text-black/80 text-center mb-1">
                    Get Your Free Digital Performance Audit
                  </p>
                  <p className="text-xs text-black/60 text-center">
                    See exactly where you stand and what&apos;s costing you leads. No obligation.
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleCTA}
                  className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold py-3.5 md:py-4 rounded-full transition-all duration-200 hover:shadow-lg text-base md:text-lg"
                >
                  Check My Online Presence (Free)
                </button>

                {/* Trust Badge */}
                <p className="text-xs text-center text-black/50 mt-4">
                  ✓ Used by 500+ home service businesses • No credit card required
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default StickyPopup

"use client";
import React, { useState } from "react";
import { Users, DollarSign, Database, Globe, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const PurpleBoxSection = () => {
  const [isHoveredLearn, setIsHoveredLearn] = useState(false);
  const [isHoveredDemo, setIsHoveredDemo] = useState(false);
  const [isHoveredLearn2, setIsHoveredLearn2] = useState(false);
  const [isHoveredDemo2, setIsHoveredDemo2] = useState(false);

  const textVariants = {
    initial: { y: 0 },
    hover: { y: '-150%' }
  };

  const textVariantsHover = {
    initial: { y: '150%' },
    hover: { y: 0 }
  };

  return (
    <div className="p-4 md:p-10">
      {/* White Section */}
      <div className="rounded-2xl md:rounded-4xl p-6 md:p-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[67px] items-center">
          {/* Left Column - Content Section */}
          <div className="flex flex-col gap-4 md:gap-[19px]">
            {/* Header with Icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1d4ed8] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-base md:text-lg text-gray-600" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                SEO & Digital Marketing
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Dominate Local Search<br />Win More High-Value Projects
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
              Our proven SEO and PPC strategies help remodeling contractors and home service businesses rank #1 in their markets and generate qualified leads consistently.
            </p>

            {/* Feature List - Two column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 mt-3 md:mt-[11px]">
              {/* Local SEO Experts Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  Industry Specialists
                </h3>
                <p className="text-gray-600 leading-tight text-base md:text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Our team exclusively serves home service businesses - we know your industry, your customers, and what drives results.
                </p>
              </div>

              {/* Performance-Based Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  ROI-Focused
                </h3>
                <p className="text-gray-600 leading-tight text-base md:text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Every dollar you invest is tracked. We focus on revenue growth, not vanity metrics. Your success is our success.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-3 md:mt-[11px]">
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredLearn(true)}
                onHoverEnd={() => setIsHoveredLearn(false)}
                className="px-8 py-3 bg-[#1d4ed8] text-white hover:bg-[#1d4ed8]/90 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    View SEO Services
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    View SEO Services
                  </motion.span>
                </div>
              </motion.button>
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredDemo(true)}
                onHoverEnd={() => setIsHoveredDemo(false)}
                className="px-8 py-3 bg-gray-100 text-black hover:bg-gray-200 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    Get Free Audit
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Get Free Audit
                  </motion.span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Right Column - Visuals Section */}
          <div className="relative pr-12 flex justify-end">
            <div className="relative">
              {/* Main Application UI Screenshot */}
              <div className="w-[500px] h-[336px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-black">
                <img
                  src="/assets/google-search.jpg"
                  alt="Google Search Engine"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social Media Widget - Bottom Right overlapping */}
              <div className="absolute bottom-0 -right-20 h-[150px] w-[250px] bg-white border border-black rounded-xl overflow-hidden shadow-lg z-10">
                <img
                  src="/assets/pexels-photo-267350.jpg"
                  alt="Social Media Apps"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Inverted */}
      <div className="rounded-2xl md:rounded-4xl p-6 md:p-12 bg-white mt-6 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[67px] items-center">
          {/* Left Column - Visuals Section */}
          <div className="relative pl-12 flex justify-start">
            <div className="relative">
              {/* Main Application UI Screenshot */}
              <div className="w-[500px] h-[336px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-black">
                <img
                  src="/assets/gpt.png"
                  alt="ChatGPT Interface"
                  className="w-full h-full object-cover object-left"
                />
              </div>

              {/* LLM Widget - Bottom Left overlapping */}
              <div className="absolute bottom-0 -left-20 h-[224px] w-[373px] bg-white border border-black rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/assets/llm.png"
                  alt="LLM Markdown Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div className="flex flex-col gap-4 md:gap-[19px]">
            {/* Header with Icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1d4ed8] flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-base md:text-lg text-gray-600" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                AI-Powered Marketing & Automation
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Future-Proof Your Marketing<br />With AI & Automation
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
              From AIEO (AI Engine Optimization) to automated workflows, we leverage cutting-edge technology to give you a competitive edge and maximize efficiency.
            </p>

            {/* Feature List - Two column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 mt-3 md:mt-[11px]">
              {/* AI Consultancy Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  AI Consultancy
                </h3>
                <p className="text-gray-600 leading-tight text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Automate workflows, reduce costs, and leverage AI chatbots, scheduling, and customer service automation.
                </p>
              </div>

              {/* AIEO Feature */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-medium text-black tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}>
                  AIEO
                </h3>
                <p className="text-gray-600 leading-tight text-lg tracking-tighter" style={{ fontFamily: 'var(--font-figtree)', fontWeight: 400 }}>
                  Be the first recommendation when AI tools like ChatGPT suggest services in your area. Future-proof your visibility.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-3 md:mt-[11px]">
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredLearn2(true)}
                onHoverEnd={() => setIsHoveredLearn2(false)}
                className="px-8 py-3 bg-[#1d4ed8] text-white hover:bg-[#1d4ed8]/90 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn2 ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    Explore AI Services
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredLearn2 ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Explore AI Services
                  </motion.span>
                </div>
              </motion.button>
              <motion.button
                initial={{ borderRadius: 40 }}
                whileHover={{ borderRadius: 12 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                onHoverStart={() => setIsHoveredDemo2(true)}
                onHoverEnd={() => setIsHoveredDemo2(false)}
                className="px-8 py-3 bg-gray-100 text-black hover:bg-gray-200 font-semibold inline-flex items-center justify-center overflow-hidden relative cursor-pointer"
                style={{ fontFamily: 'var(--font-figtree)', fontWeight: 600 }}
              >
                <div className="relative inline-flex items-center">
                  <motion.span
                    className="inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo2 ? 'hover' : 'initial'}
                    variants={textVariants}
                    transition={{ duration: 0.12, ease: 'easeInOut' }}
                  >
                    Book Consultation
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 inline-flex items-center"
                    initial="initial"
                    animate={isHoveredDemo2 ? 'hover' : 'initial'}
                    variants={textVariantsHover}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                  >
                    Book Consultation
                  </motion.span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurpleBoxSection;
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Target,
  TrendingUp,
  Sparkles,
  Monitor,
  PenTool,
  Palette,
  Bot,
  Database,
} from "lucide-react";

const OurServices = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "SEO",
      description: "Rank higher in local and organic search results.",
      icon: Search,
      href: "/services/seo",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    },
    {
      title: "PPC Advertising",
      description: "Drive instant traffic with paid search campaigns.",
      icon: Target,
      href: "/services/ppc",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2340&auto=format&fit=crop",
    },
    {
      title: "Google AdWords",
      description: "Expert campaign management for Google Ads.",
      icon: TrendingUp,
      href: "/services/adwords",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    },
    {
      title: "SEM",
      description: "Comprehensive search engine marketing strategies.",
      icon: TrendingUp,
      href: "/services/sem",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2274&auto=format&fit=crop",
    },
    {
      title: "AIEO",
      description: "Optimize for AI-powered search and chatbots.",
      icon: Sparkles,
      href: "/services/aieo",
      isNew: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    },
    {
      title: "Web Design & Development",
      description: "High-performance websites that convert visitors.",
      icon: Monitor,
      href: "/services/web-design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2369&auto=format&fit=crop",
    },
    {
      title: "Content Creation",
      description: "Compelling blogs, videos, and social content.",
      icon: PenTool,
      href: "/services/content-creation",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2340&auto=format&fit=crop",
    },
    {
      title: "Branding",
      description: "Build a memorable identity that stands out.",
      icon: Palette,
      href: "/services/branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2364&auto=format&fit=crop",
    },
    {
      title: "AI Consultancy",
      description: "Intelligent automation for your operations.",
      icon: Bot,
      href: "/services/ai-consultancy",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2340&auto=format&fit=crop",
    },
    {
      title: "CRM Consultancy",
      description: "Optimize your sales pipeline and relationships.",
      icon: Database,
      href: "/services/crm-consultancy",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop",
    },
  ];

  return (
    <div className="py-16 px-10">
      <div className="max-w-[1400px] lg:max-w-[1600px] xl:max-w-[1800px] 2xl:max-w-[2200px] mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4 tracking-tight">
          Our Marketing Services
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Everything your home service business needs to dominate your local market and scale profitably
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4 xl:gap-5 2xl:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;

            return (
              <Link
                key={index}
                href={service.href}
                className="flex flex-col items-start p-4 bg-white border border-stone-200 rounded-2xl hover:border-stone-300 hover:shadow-xl transition-all duration-300 group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Inset Image with rounded corners */}
                <div className="relative w-full h-40 lg:h-44 xl:h-48 2xl:h-56 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Icon overlay on image */}
                  <div className={`absolute bottom-3 left-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-2.5 transition-all duration-500 ${
                    isHovered ? "bg-white/20 scale-110" : ""
                  }`}>
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white stroke-[1.5]" />
                  </div>
                </div>

                {/* Title and Description */}
                <div className="flex flex-col text-left gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-gray-900 group-hover:text-[#1d4ed8] transition-colors">
                      {service.title}
                    </h3>
                    {service.isNew && (
                      <span className="px-2 py-0.5 text-xs font-medium text-white bg-[#1d4ed8] rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="blue-cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#1d4ed8", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#93c5fd", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default OurServices;

"use client";

import React from "react";
import Link from "next/link";
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
  const services = [
    {
      title: "SEO",
      description: "Rank higher in local and organic search results.",
      icon: Search,
      href: "/services/seo",
    },
    {
      title: "PPC Advertising",
      description: "Drive instant traffic with paid search campaigns.",
      icon: Target,
      href: "/services/ppc",
    },
    {
      title: "Google AdWords",
      description: "Expert campaign management for Google Ads.",
      icon: TrendingUp,
      href: "/services/adwords",
    },
    {
      title: "SEM",
      description: "Comprehensive search engine marketing strategies.",
      icon: TrendingUp,
      href: "/services/sem",
    },
    {
      title: "AIEO",
      description: "Optimize for AI-powered search and chatbots.",
      icon: Sparkles,
      href: "/services/aieo",
      isNew: true
    },
    {
      title: "Web Design & Development",
      description: "High-performance websites that convert visitors.",
      icon: Monitor,
      href: "/services/web-design",
    },
    {
      title: "Content Creation",
      description: "Compelling blogs, videos, and social content.",
      icon: PenTool,
      href: "/services/content-creation",
    },
    {
      title: "Branding",
      description: "Build a memorable identity that stands out.",
      icon: Palette,
      href: "/services/branding",
    },
    {
      title: "AI Consultancy",
      description: "Intelligent automation for your operations.",
      icon: Bot,
      href: "/services/ai-consultancy",
    },
    {
      title: "CRM Consultancy",
      description: "Optimize your sales pipeline and relationships.",
      icon: Database,
      href: "/services/crm-consultancy",
    },
  ];

  return (
    <div className="py-16 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4 tracking-tight">
          Our Marketing Services
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Everything your home service business needs to dominate your local market and scale profitably
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="flex flex-col items-start p-6 bg-white border border-stone-200 rounded-2xl hover:border-stone-300 hover:shadow-md transition-all duration-300 group"
              >
                {/* Icon in rounded white container */}
                <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-stone-100 flex items-center justify-center mb-4">
                  <Icon
                    className="w-7 h-7 stroke-[1.5]"
                    style={{
                      stroke: "url(#blue-cyan-gradient)",
                    }}
                  />
                </div>

                {/* Title and Description */}
                <div className="flex flex-col text-left gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1d4ed8] transition-colors">
                      {service.title}
                    </h3>
                    {service.isNew && (
                      <span className="px-2 py-0.5 text-xs font-medium text-white bg-[#1d4ed8] rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
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

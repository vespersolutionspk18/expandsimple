"use client";
import React from "react";
import AboutUs from "./homecomponents/AboutUs";
import Hero from "./homecomponents/Hero";
import OurServices from "./homecomponents/OurServices";
import WhyChooseUs from "./homecomponents/WhyChooseUs";

import LeadChange from "./homecomponents/LeadChange";

import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import PurpleBoxSection from "./homecomponents/PurpleBoxSection";
import Header from "./components/Header";
import StickyPopup from "./components/StickyPopup";


export default function Home() {
  return (
   <>
   <Header enableScrollEffects={true} />
   <main className="pt-[11.8rem] md:pt-[11.2rem]">
   <Hero
     headline="Ready to expand your reach?"
   />
   <AboutUs />
   <OurServices />
   <PurpleBoxSection />
    <WhyChooseUs />

    <Testimonials
      title="Success Stories"
      subtitle="Home Service Businesses Thriving with Expand"
      testimonials={[
        {
          id: 1,
          body: "Expand transformed our entire digital presence. We went from averaging $180K projects to closing $350K+ kitchen remodels consistently. Our pipeline has never been fuller!",
          clientName: "Marcus Richardson",
          clientCompany: "Richardson Home Remodeling"
        },
        {
          id: 2,
          body: "The AIEO service is incredible, when people ask ChatGPT for roofing recommendations in our area, we're the first name mentioned. That's the future of marketing!",
          clientName: "Davis Miller",
          clientCompany: "Miller Roofing Co."
        },
        {
          id: 3,
          body: "Their PPC campaigns for our bathroom remodeling services deliver a 5.1x ROI. We're booking out 3 months in advance now. Best investment we've ever made.",
          clientName: "Jennifer Santos",
          clientCompany: "Santos Kitchen & Bath"
        },
        {
          id: 4,
          body: "From website design to content creation to Google Ads, Expand handles it all. Our booking rate is up 67% and we've hired 3 new crews to keep up with demand!",
          clientName: "Tom Bradley",
          clientCompany: "Bradley Tile & Flooring"
        },
        {
          id: 5,
          body: "Expand's SEO strategy got us ranking #1 for 'general contractor near me' in just 5 months. We went from 12 leads per month to 95+. They understand the remodeling business!",
          clientName: "Sarah Chen",
          clientCompany: "Chen Construction & Remodeling"
        }
      ]}
    />
    <LeadChange text="Ready To Expand?"/>
    <Footer />
    </main>
    <StickyPopup delay={5000} />
   </>
  );
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  painPoints: string[];
  howWeHelp: {
    service: string;
    benefit: string;
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  services: string[];
  heroImage: string;
  cta: {
    headline: string;
    subheadline: string;
  };
}

export const industries: Industry[] = [
  {
    id: '1',
    slug: 'home-repair-maintenance',
    title: 'Home Repair & Maintenance',
    emoji: '🧰',
    subtitle: 'Plumbers, Electricians, HVAC, Handymen & Essential Home Services',
    description: 'When a pipe bursts or the AC breaks in July, homeowners don\'t scroll past page 1 of Google. They call the first qualified contractor they find. If that\'s not you, you\'re losing thousands in emergency repair revenue every month. We get home repair contractors to the top of search results, fill your calendar with high-value jobs, and turn your website into a 24/7 booking machine.',
    painPoints: [
      'Losing emergency calls to competitors who rank higher on Google',
      'Phone ringing with tire-kickers instead of qualified, ready-to-book homeowners',
      'Spending thousands on leads that don\'t convert or ghost after the quote',
      'Website looks outdated and doesn\'t work on mobile - homeowners bounce immediately',
      'Can\'t compete with big franchise operations that dominate Google Ads'
    ],
    howWeHelp: [
      {
        service: 'Local SEO',
        benefit: 'Rank #1 for "plumber near me," "emergency HVAC repair," and "electrician [your city]" - own the searches that drive immediate bookings.'
      },
      {
        service: 'Google Ads & PPC',
        benefit: 'Show up at the exact moment homeowners search for emergency repairs. Stop wasting money on unqualified clicks - we target high-intent keywords that convert.'
      },
      {
        service: 'Web Design',
        benefit: 'Fast-loading, mobile-optimized websites with click-to-call buttons, online booking, and trust signals that turn visitors into booked jobs in 60 seconds.'
      },
      {
        service: 'AIEO (AI Engine Optimization)',
        benefit: 'Be the first contractor ChatGPT, Perplexity, and AI assistants recommend when homeowners ask "Who\'s the best plumber in [city]?"'
      },
      {
        service: 'CRM & Lead Management',
        benefit: 'Never miss a call, lose a lead, or forget to follow up. Automate estimates, reminders, and review requests to maximize every opportunity.'
      }
    ],
    results: [
      { metric: 'Average Lead Increase', value: '210%', description: 'More qualified calls and online bookings' },
      { metric: 'Cost Per Lead', value: '-58%', description: 'Reduced by targeting high-intent keywords' },
      { metric: 'Emergency Call Volume', value: '+165%', description: 'Dominate urgent searches like "emergency plumber"' },
      { metric: 'Booking Rate', value: '3x Higher', description: 'Optimized websites convert more visitors' }
    ],
    services: ['SEO', 'Google Ads', 'Web Design', 'AIEO', 'CRM Consultancy'],
    heroImage: 'https://images.pexels.com/photos/5691608/pexels-photo-5691608.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: {
      headline: 'Stop Losing Emergency Calls to Competitors',
      subheadline: 'Get a free audit showing exactly where you\'re losing leads and how to fix it in 30 days or less.'
    }
  },
  {
    id: '2',
    slug: 'cleaning-sanitation',
    title: 'Cleaning & Sanitation',
    emoji: '🧹',
    subtitle: 'House Cleaning, Maid Services, Carpet Cleaning & Janitorial',
    description: 'Homeowners research cleaning services extensively before inviting anyone into their homes. They read reviews, compare prices, and judge professionalism based on your online presence. If your website looks cheap, your photos are grainy, or you don\'t show up on Google, they\'re booking your competitor. We build trust online, fill your calendar with recurring clients, and turn one-time deep cleans into monthly contracts.',
    painPoints: [
      'Calendar isn\'t full - struggling to book enough weekly/monthly recurring clients',
      'Competing on price instead of value - homeowners shop around and ghost after quotes',
      'Not ranking on Google Maps for "house cleaning near me" or "maid service [city]"',
      'Cheap-looking website with stock photos that doesn\'t build trust or credibility',
      'Can\'t generate enough positive reviews to compete with established cleaning companies'
    ],
    howWeHelp: [
      {
        service: 'Local SEO & Google My Business',
        benefit: 'Dominate "house cleaning near me" searches and show up in the Google 3-pack with 5-star reviews front and center.'
      },
      {
        service: 'Web Design & Photography',
        benefit: 'Professional website with real photos of your team, before/after galleries, and easy online booking that builds immediate trust.'
      },
      {
        service: 'Review Generation & Reputation Management',
        benefit: 'Automated system that gets you 5-star Google reviews from happy clients - social proof that books more jobs.'
      },
      {
        service: 'PPC Advertising',
        benefit: 'Target homeowners searching for "deep cleaning," "move-out cleaning," and "recurring maid service" - capture high-value contracts.'
      },
      {
        service: 'Content Marketing & Social Media',
        benefit: 'Cleaning tips, seasonal checklists, and transformation videos that establish you as the local expert and keep your brand top of mind.'
      }
    ],
    results: [
      { metric: 'Recurring Clients', value: '+187%', description: 'More weekly/monthly cleaning contracts' },
      { metric: 'Average Contract Value', value: '$450/mo', description: 'Upsell deep cleaning and recurring services' },
      { metric: 'Google Reviews', value: '5-Star Avg', description: 'Automated review system builds trust' },
      { metric: 'Booking Rate', value: '68%', description: 'Professional website converts more visitors' }
    ],
    services: ['SEO', 'Web Design', 'Google Ads', 'Content Creation', 'CRM Consultancy'],
    heroImage: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: {
      headline: 'Fill Your Calendar with Recurring Cleaning Clients',
      subheadline: 'See how the top cleaning companies in your area are dominating Google - and how you can outrank them.'
    }
  },
  {
    id: '3',
    slug: 'outdoor-landscaping',
    title: 'Outdoor & Landscaping',
    emoji: '🌿',
    subtitle: 'Lawn Care, Landscaping, Tree Services, Hardscaping & Snow Removal',
    description: 'Curb appeal sells itself - but only if homeowners know you exist. Landscaping is visual, referral-driven, and seasonal. Without strong online presence, you\'re stuck mowing lawns for $40/week instead of closing $15K hardscape projects. We showcase your transformations, dominate local search year-round, and position you as the premium landscape company homeowners trust for high-dollar projects.',
    painPoints: [
      'Stuck doing low-margin lawn maintenance instead of landing high-ticket landscape design jobs',
      'Can\'t showcase your work online - no professional photography or portfolio to close premium clients',
      'Slow seasons crush cash flow - no marketing strategy to generate winter revenue (snow removal, holiday lighting)',
      'Losing landscape projects to companies with better websites and before/after galleries',
      'Referrals are inconsistent - need predictable lead generation to scale crews'
    ],
    howWeHelp: [
      {
        service: 'SEO & Local Search',
        benefit: 'Rank #1 for "landscaping company [city]," "hardscaping near me," and "landscape design" - capture homeowners ready to invest in premium projects.'
      },
      {
        service: 'Web Design & Portfolio Development',
        benefit: 'Stunning website with professional before/after galleries, project showcases, and design visualizers that close high-ticket jobs before you even visit.'
      },
      {
        service: 'Seasonal PPC Campaigns',
        benefit: 'Run targeted ads for lawn care (spring), irrigation (summer), leaf removal (fall), and snow plowing (winter) - maximize revenue every season.'
      },
      {
        service: 'Social Media & Content Marketing',
        benefit: 'Post transformation videos, time-lapses, and landscape tips that build authority and generate organic leads on Facebook and Instagram.'
      },
      {
        service: 'Google Ads',
        benefit: 'Target high-intent searches like "patio installation," "outdoor kitchen builder," and "retaining wall contractor" - the keywords that drive $10K+ projects.'
      }
    ],
    results: [
      { metric: 'Average Project Value', value: '$12K+', description: 'Shift from maintenance to design/hardscaping' },
      { metric: 'Lead Volume', value: '+245%', description: 'Consistent flow of qualified landscape projects' },
      { metric: 'Year-Round Revenue', value: '+130%', description: 'Seasonal campaigns eliminate slow periods' },
      { metric: 'Maintenance Contracts', value: '$350/mo avg', description: 'Upsell irrigation, lawn care, snow removal' }
    ],
    services: ['SEO', 'Web Design', 'Google Ads', 'Content Creation', 'Branding'],
    heroImage: 'https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: {
      headline: 'Stop Competing on Lawn Mowing - Win Premium Landscape Projects',
      subheadline: 'We\'ll show you how to attract homeowners planning $15K-$50K outdoor transformations, not $40 weekly cuts.'
    }
  },
  {
    id: '4',
    slug: 'home-improvement-remodeling',
    title: 'Home Improvement & Remodeling',
    emoji: '🏗️',
    subtitle: 'Kitchen & Bath Remodeling, Flooring, Painting, Carpentry & General Contracting',
    description: 'Remodeling projects start with months of research. Homeowners compare portfolios, read reviews, watch videos, and obsess over before/after photos before they ever request a quote. If your online presence doesn\'t scream craftsmanship and trust, you won\'t even get on the shortlist. We position remodeling contractors as the premium choice, showcase your work like a showroom, and fill your pipeline with $30K-$80K projects.',
    painPoints: [
      'Leads request quotes but never follow through - stuck in endless bid cycles without closing',
      'Can\'t showcase craftsmanship online - no professional photos or case studies to justify premium pricing',
      'Competing with low-budget contractors who undercut on price - racing to the bottom',
      'Long sales cycles drain time and energy - need systems to nurture leads until they\'re ready',
      'Referrals are great but inconsistent - can\'t scale the business without predictable lead flow'
    ],
    howWeHelp: [
      {
        service: 'Web Design & Portfolio Showcase',
        benefit: 'Showroom-quality website with professional photography, 360° virtual tours, and detailed case studies that pre-sell your craftsmanship before the consult.'
      },
      {
        service: 'SEO for High-Intent Keywords',
        benefit: 'Dominate searches like "kitchen remodel [city]," "bathroom renovation cost," and "custom home builder" - capture homeowners actively planning projects.'
      },
      {
        service: 'Content Marketing & Video',
        benefit: 'Project reveal videos, remodeling guides, and cost breakdowns establish authority and nurture leads through the decision process.'
      },
      {
        service: 'Lead Nurturing & CRM',
        benefit: 'Automated email sequences, follow-up reminders, and retargeting ads keep you top-of-mind during 60-90 day sales cycles.'
      },
      {
        service: 'Google Ads & LSA',
        benefit: 'Show up first for "kitchen remodeler near me" and "bathroom contractor" with Google Local Services Ads - verified, trusted, at the top.'
      }
    ],
    results: [
      { metric: 'Average Project Size', value: '$45K+', description: 'Attract premium remodeling clients' },
      { metric: 'Quote-to-Close Rate', value: '+89%', description: 'Portfolio and content pre-sell projects' },
      { metric: 'Pipeline Value', value: '$380K', description: 'Consistent flow of high-ticket projects' },
      { metric: 'Sales Cycle', value: '-30 days', description: 'Nurture campaigns speed up decisions' }
    ],
    services: ['Web Design', 'SEO', 'Content Creation', 'Google Ads', 'CRM Consultancy'],
    heroImage: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: {
      headline: 'Stop Chasing Low-Budget Remodels - Land Premium Projects',
      subheadline: 'We\'ll show you how top remodelers attract $50K+ kitchen and bath projects while competitors fight over $10K jobs.'
    }
  },
  {
    id: '5',
    slug: 'energy-safety-technology',
    title: 'Energy, Safety & Technology',
    emoji: '💡',
    subtitle: 'Solar Installation, Smart Home, Security Systems, Generators & Energy Audits',
    description: 'Solar, smart home, and security services require education before conversion. Homeowners need to understand ROI, rebates, technology, and installation process before spending $20K-$40K. If you can\'t explain complex benefits simply online, you\'re losing qualified buyers to competitors who do. We create content that educates, builds trust, and positions you as the expert - turning curious browsers into booked consultations.',
    painPoints: [
      'Leads don\'t understand ROI, rebates, or how solar/smart home systems work - high abandonment rates',
      'Long sales cycles (90-180 days) require constant follow-up and nurturing - losing prospects in the gap',
      'Can\'t compete with big brands like Tesla Solar or ADT Security without strong local positioning',
      'Website doesn\'t explain benefits clearly - homeowners leave confused instead of booking consultations',
      'Need to educate market on new technology (AIEO for smart homes, battery backup for solar) to create demand'
    ],
    howWeHelp: [
      {
        service: 'Content Marketing & Education',
        benefit: 'ROI calculators, rebate guides, explainer videos, and comparison charts that educate homeowners and build trust before they ever call.'
      },
      {
        service: 'SEO for Educational Keywords',
        benefit: 'Rank for "how much does solar save," "smart home installation cost," and "best home security system [city]" - capture homeowners researching.'
      },
      {
        service: 'Lead Nurturing & Email Campaigns',
        benefit: 'Automated email sequences with educational content, success stories, and financing options that nurture leads through 90-day decision cycles.'
      },
      {
        service: 'Web Design with Interactive Tools',
        benefit: 'Savings calculators, financing wizards, and virtual consultations that make complex decisions simple and build momentum toward booking.'
      },
      {
        service: 'PPC & Retargeting',
        benefit: 'Target homeowners searching for "solar quotes," "smart home installer," and "generator installation" - stay visible throughout long buying journeys.'
      }
    ],
    results: [
      { metric: 'Average Project Value', value: '$28K', description: 'Solar, smart home, and security installations' },
      { metric: 'Consultation Bookings', value: '+320%', description: 'Educational content drives qualified leads' },
      { metric: 'Sales Cycle', value: '-45 days', description: 'Nurture campaigns accelerate decisions' },
      { metric: 'Close Rate', value: '42%', description: 'Educated leads convert at higher rates' }
    ],
    services: ['Content Creation', 'SEO', 'Web Design', 'Google Ads', 'CRM Consultancy'],
    heroImage: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: {
      headline: 'Turn Complex Technology into Simple Buying Decisions',
      subheadline: 'See how top solar and smart home companies educate and convert homeowners online - without pushy sales tactics.'
    }
  },
  {
    id: '6',
    slug: 'moving-storage',
    title: 'Moving & Storage',
    emoji: '🚚',
    subtitle: 'Local & Long-Distance Moving, Packing Services, Storage & Furniture Assembly',
    description: 'Moving is stressful, high-stakes, and review-driven. One bad Google review can sink your business. Homeowners book movers based on trust, availability, and price - in that order. If you\'re not showing up with 5-star reviews, instant quotes, and same-day availability, you\'re losing jobs to whoever is. We get moving companies to the top of local search, build bulletproof reputations, and automate booking so you never miss a call.',
    painPoints: [
      'Inconsistent bookings - summer is slammed, winter is dead, can\'t predict cash flow',
      'Losing jobs to competitors with more Google reviews or better availability',
      'Phone rings but you miss calls during jobs - losing 30% of potential bookings',
      'Price shoppers ghost after quotes - no system to follow up or close',
      'Bad reviews from one difficult customer tank your Google rating and cost you thousands in lost bookings'
    ],
    howWeHelp: [
      {
        service: 'Local SEO & Google My Business',
        benefit: 'Rank #1 for "movers near me" and "moving company [city]" with optimized profiles, 5-star reviews, and real-time availability.'
      },
      {
        service: 'Reputation Management',
        benefit: 'Automated review requests after every move, proactive reputation monitoring, and response management to protect and grow your rating.'
      },
      {
        service: 'Web Design with Instant Quotes',
        benefit: 'Fast-loading website with online booking, instant quote calculators, and click-to-call buttons - capture leads 24/7 even when you\'re busy.'
      },
      {
        service: 'PPC & Seasonal Campaigns',
        benefit: 'Run aggressive Google Ads during peak summer season, target long-distance keywords, and retarget quote requests who didn\'t book.'
      },
      {
        service: 'CRM & Booking Automation',
        benefit: 'Automated follow-ups, SMS reminders, and booking confirmations that reduce no-shows and maximize every lead opportunity.'
      }
    ],
    results: [
      { metric: 'Booking Rate', value: '+175%', description: 'Instant quotes and automation capture more jobs' },
      { metric: 'Google Reviews', value: '4.9 stars', description: 'Automated system builds unbeatable reputation' },
      { metric: 'Summer Revenue', value: '+$120K', description: 'Seasonal PPC maximizes peak moving season' },
      { metric: 'Missed Calls', value: '-85%', description: 'Online booking captures leads 24/7' }
    ],
    services: ['SEO', 'Web Design', 'Google Ads', 'CRM Consultancy', 'Content Creation'],
    heroImage: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: {
      headline: 'Stop Missing Bookings During Your Busiest Season',
      subheadline: 'See how top moving companies automate quotes, capture every lead, and dominate Google Maps during peak season.'
    }
  },
  {
    id: '7',
    slug: 'specialty-niche-services',
    title: 'Specialty & Niche Services',
    emoji: '🧵',
    subtitle: 'Water Damage Restoration, Mold Remediation, Pest Control, Pool Service & Holiday Lighting',
    description: 'Niche services = less competition but smaller markets. You need to own your local niche completely - rank #1, have the most reviews, and be the obvious expert. Specialty services often involve urgent needs (water damage, pest infestations) or seasonal demand (holiday lighting, pool opening). We help niche contractors dominate local search, establish authority through content, and capture 100% of available demand in their market.',
    painPoints: [
      'Small market means you can\'t afford to miss a single lead - every call counts',
      'Competing against national franchises (ServPro, TruGreen, Orkin) with huge marketing budgets',
      'Homeowners don\'t know you exist - no visibility for niche keywords like "mold testing [city]"',
      'Seasonal services (pool opening, holiday lights) mean 90% of revenue in 3-4 months - need to maximize that window',
      'Hard to establish credibility without content showing expertise and certifications'
    ],
    howWeHelp: [
      {
        service: 'Hyper-Local SEO',
        benefit: 'Own every niche keyword in your city - "water damage restoration [neighborhood]," "mold removal near me," "pest control [city]."'
      },
      {
        service: 'Authority Content & Certifications',
        benefit: 'Educational blogs, video guides, and credential showcases that position you as THE local expert above national franchises.'
      },
      {
        service: 'Emergency PPC Campaigns',
        benefit: 'Show up instantly for urgent searches like "emergency water damage," "bed bug exterminator," "same-day pest control."'
      },
      {
        service: 'Seasonal Campaign Maximization',
        benefit: 'Go all-in during peak season (holiday lights Nov-Jan, pool service Apr-Jun) with aggressive ads, SEO, and social to capture 100% of demand.'
      },
      {
        service: 'Review Generation',
        benefit: 'Build an unbeatable reputation in your niche - 50+ 5-star reviews make you the obvious choice over franchises.'
      }
    ],
    results: [
      { metric: 'Market Share', value: '78%', description: 'Dominate your local niche completely' },
      { metric: 'Emergency Calls', value: '+290%', description: 'Rank #1 for urgent restoration and pest keywords' },
      { metric: 'Seasonal Revenue', value: '+$85K', description: 'Maximize holiday lighting and pool service peak seasons' },
      { metric: 'Cost Per Lead', value: '-62%', description: 'Less competition = cheaper clicks and better ROI' }
    ],
    services: ['SEO', 'Google Ads', 'Content Creation', 'Web Design', 'AIEO'],
    heroImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: {
      headline: 'Dominate Your Niche - Own Every Lead in Your Market',
      subheadline: 'Small markets require 100% capture. We\'ll show you how to outrank franchises and become THE local expert.'
    }
  },
  {
    id: '8',
    slug: 'personal-in-home-care',
    title: 'Personal & In-Home Care',
    emoji: '👪',
    subtitle: 'Elderly Care, Pet Sitting, Dog Walking, Home Organization & Childproofing',
    description: 'Personal care services require the highest level of trust. Families research extensively, prioritize credentials and reviews, and need reassurance before inviting anyone into their homes. Without professional branding, spotless online reputation, and compassionate messaging, you\'ll never get past the initial screening. We build trust online, showcase your team and qualifications, and create marketing that speaks directly to concerned families.',
    painPoints: [
      'Can\'t build trust online - families won\'t book without extensive credentials, reviews, and background checks visible',
      'Word-of-mouth referrals are great but inconsistent - need predictable client acquisition to scale',
      'Competing with big platforms (Care.com, Rover) that take 20-30% commission',
      'No professional branding or website - families judge credibility instantly and move on',
      'Recurring services (weekly pet care, daily elder care) are gold but hard to convert cold leads into long-term clients'
    ],
    howWeHelp: [
      {
        service: 'Trust-Building Web Design',
        benefit: 'Professional website showcasing team bios, credentials, certifications, and background check badges that establish immediate credibility.'
      },
      {
        service: 'Local SEO & Google My Business',
        benefit: 'Rank for "pet sitter near me," "in-home care [city]," and "dog walker" with 5-star reviews and service area targeting.'
      },
      {
        service: 'Review & Reputation Management',
        benefit: 'Automated review collection and showcase testimonials from families to build social proof and overcome trust barriers.'
      },
      {
        service: 'Content Marketing',
        benefit: 'Educational blogs, safety checklists, and caregiver tips that demonstrate expertise and compassion - builds trust before first contact.'
      },
      {
        service: 'CRM & Client Retention',
        benefit: 'Automated onboarding, service reminders, and loyalty programs that convert one-time clients into recurring monthly contracts.'
      }
    ],
    results: [
      { metric: 'Client Acquisition Cost', value: '-70%', description: 'Direct bookings eliminate platform fees' },
      { metric: 'Recurring Contracts', value: '+245%', description: 'Build stable monthly revenue from loyal families' },
      { metric: 'Consultation Requests', value: '+180%', description: 'Trust-focused website converts more visitors' },
      { metric: 'Client Retention', value: '91%', description: 'CRM and communication keep families long-term' }
    ],
    services: ['Web Design', 'SEO', 'Content Creation', 'CRM Consultancy', 'Branding'],
    heroImage: 'https://images.pexels.com/photos/4473622/pexels-photo-4473622.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: {
      headline: 'Build Trust Online - Win Families Looking for Reliable Care',
      subheadline: 'See how top in-home care providers showcase credentials, collect reviews, and convert website visitors into long-term clients.'
    }
  }
];

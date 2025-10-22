'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'

interface Position {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string
}

const positions: Position[] = [
  {
    id: 1,
    title: 'SEO Specialist',
    department: 'Marketing',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Drive local SEO strategies for home service businesses. Help HVAC, plumbing, and electrical companies rank #1 in their markets.'
  },
  {
    id: 2,
    title: 'PPC Manager',
    department: 'Marketing',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Manage Google Ads and Facebook campaigns for home service clients. Optimize ad spend and drive qualified leads.'
  },
  {
    id: 3,
    title: 'Content Writer',
    department: 'Content',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create compelling blog posts, service pages, and marketing content for home service businesses nationwide.'
  },
  {
    id: 4,
    title: 'Web Designer',
    department: 'Design',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Design high-converting websites for HVAC, plumbing, and home service businesses using Figma and Webflow.'
  },
  {
    id: 5,
    title: 'Account Manager',
    department: 'Client Success',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Build relationships with home service clients, report on campaign performance, and ensure client satisfaction.'
  },
  {
    id: 6,
    title: 'Sales Representative',
    department: 'Sales',
    location: 'Remote',
    type: 'Full-time',
    description: 'Connect with home service business owners nationwide to introduce them to our marketing solutions.'
  },
  {
    id: 7,
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build marketing tools, dashboards, and web solutions for our home service clients using Next.js and React.'
  }
]

const OpenPositions = () => {
  const router = useRouter()
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [hoveredButton, setHoveredButton] = useState<number | null>(null)

  const departments = ['All', ...new Set(positions.map(p => p.department))]
  const filteredPositions = selectedDepartment === 'All'
    ? positions
    : positions.filter(p => p.department === selectedDepartment)

  const navigateToApply = (positionTitle: string) => {
    router.push(`/applynow?position=${encodeURIComponent(positionTitle)}`)
  }

  const textVariants = {
    initial: { y: 0 },
    hover: { y: '-150%' }
  }

  const textVariantsHover = {
    initial: { y: '150%' },
    hover: { y: 0 }
  }

  return (
    <div id="open-positions" className="p-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl text-black/85 tracking-tighter">Open Positions</h2>
          <p className="text-xl text-black/65 tracking-tighter">
            Find your next opportunity to make an impact
          </p>
        </div>

        <div className="flex flex-row gap-2">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-full text-base font-medium transition-all ${
                selectedDepartment === dept 
                  ? 'bg-black text-white' 
                  : 'bg-black/5 text-black/70 hover:bg-black/10'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {filteredPositions.map(position => (
            <div
              key={position.id}
              className="group border border-black/10 rounded-2xl p-6 hover:border-black/30 transition-all"
            >
              <div className="flex flex-row justify-between items-start">
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-2xl text-black/85 tracking-tighter font-medium">
                      {position.title}
                    </h3>
                    <div className="flex flex-row gap-4 mt-2">
                      <span className="text-sm text-black/60">{position.department}</span>
                      <span className="text-sm text-black/60">•</span>
                      <span className="text-sm text-black/60">{position.location}</span>
                      <span className="text-sm text-black/60">•</span>
                      <span className="text-sm text-black/60">{position.type}</span>
                    </div>
                  </div>
                  <p className="text-base text-black/70 tracking-tight">
                    {position.description}
                  </p>
                </div>
                <motion.button
                  onClick={() => navigateToApply(position.title)}
                  initial={{ borderRadius: 40 }}
                  whileHover={{ borderRadius: 12 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  onHoverStart={() => setHoveredButton(position.id)}
                  onHoverEnd={() => setHoveredButton(null)}
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium overflow-hidden relative cursor-pointer"
                >
                  <div className="relative inline-flex items-center">
                    <motion.span
                      className="inline-flex items-center gap-2"
                      initial="initial"
                      animate={hoveredButton === position.id ? 'hover' : 'initial'}
                      variants={textVariants}
                      transition={{ duration: 0.12, ease: 'easeInOut' }}
                    >
                      <span>Apply Now</span>
                      <HiArrowUpRight className="text-xs stroke-2" />
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 inline-flex items-center gap-2"
                      initial="initial"
                      animate={hoveredButton === position.id ? 'hover' : 'initial'}
                      variants={textVariantsHover}
                      transition={{ duration: 0.18, ease: 'easeInOut' }}
                    >
                      <span>Apply Now</span>
                      <HiArrowUpRight className="text-xs stroke-2" />
                    </motion.span>
                  </div>
                </motion.button>
              </div>
            </div>
          ))}
        </div>

        {filteredPositions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-black/50 tracking-tighter">
              No positions available in this department at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default OpenPositions
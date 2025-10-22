import React from 'react'

const OurStory = () => {
  return (
    <div className="p-5 lg:p-10 flex flex-row w-full gap-12 justify-between my-16">
      <div className="w-1/2 tracking-tighter flex flex-col gap-8">
        <h5 className="text-4xl text-black/90 font-medium">What We Do</h5>
        <p className="text-2xl leading-tight tracking-tighter text-justify text-black/90">
            We build brands people search for. The best remodeling and home service brands don&apos;t wait for homeowners to search for them. They show up early, create conversations, and shape what people are looking for in the first place. That&apos;s where we focus.

<br></br><br></br>We combine SEO with content marketing, digital PR, and social media to make sure your brand gets found everywhere your customers are looking. Not just Google. Everywhere.

<br></br><br></br>Our strategies evolve with the platforms. When something changes or a new opportunity opens up, we adapt fast. No rigid playbooks, no waiting months to pivot.

<br></br><br></br>We&apos;ve built our reputation on creative SEO and multi-channel campaigns that fill your pipeline with high-value projects. No fluff, just measurable results that grow your revenue.

<br></br><br></br>While other agencies copy what&apos;s already working, we&apos;re testing what&apos;s next. The tactics that become industry standard in a few years? We&apos;re running them now. That&apos;s the Expand advantage.
        </p>
      </div>
      <div className="w-1/2 rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
          alt="Team collaboration and marketing strategy"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default OurStory

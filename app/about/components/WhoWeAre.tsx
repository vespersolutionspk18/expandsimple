import React from 'react'

const WhoWeAre = () => {
  return (
    <div className="p-5">
        <div className="p-5 flex flex-col gap-16">
            <div className="flex flex-row gap-16 justify-between">
            <h5 className="text-4xl text-black/80 font-medium tracking-tighter w-[28%]">
            Who We Are
          </h5>
          <p className="text-black/75 text-2xl tracking-tighter w-[68%]">
            Expand is more than a marketing agency - we&apos;re your strategic partner in winning high-value projects and dominating your local market. We combine SEO, content marketing, digital PR, and social media to make sure remodeling contractors and home service businesses get found everywhere homeowners are looking. Not just Google. Everywhere.
          </p>
            </div>
            <div className="flex flex-row gap-5 justify-between">
                <div className="p-8 w-[25%] border-l-1 border-l-stone-200 flex flex-col gap-3s">
                <h5 className="text-7xl text-black font-medium mt-10">4</h5>
                <p className="text-xl text-black/90 tracking-tighter">
                    Global Offices
                </p>
                </div>
                <div className="p-8 w-[25%] border-l-1 border-l-stone-200 flex flex-col gap-3s">
                <h5 className="text-7xl text-black font-medium mt-10">500+</h5>
                <p className="text-xl text-black/90 tracking-tighter">
                    Clients Served
                </p>
                </div>
                <div className="p-8 w-[25%] border-l-1 border-l-stone-200 flex flex-col gap-3s">
                <h5 className="text-7xl text-black font-medium mt-10">60</h5>
                <p className="text-xl text-black/90 tracking-tighter">
                    Minutes to Results
                </p>
                </div>
                <div className="p-8 w-[25%] border-l-1 border-l-stone-200 flex flex-col gap-3s">
                <h5 className="text-7xl text-black font-medium mt-10">#1</h5>
                <p className="text-xl text-black/90 tracking-tighter">
                    Most Recommended
                </p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default WhoWeAre

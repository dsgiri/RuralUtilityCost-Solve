import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="flex-grow bg-[#F9FAF8] py-16 px-4 sm:px-8">
      <SEO 
        title="About Us | Rural Utility Cost" 
        description="Learn about the Rural Utility Cost platform, our connected ecosystem of calculators, and our mission to simplify agricultural financial planning." 
        keywords="rural utility cost, agricultural estimation, farm budgeting, rural infrastructure"
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4">About Us</h1>
          <div className="w-16 h-2 bg-[#1E3A8A] mb-8"></div>
          <p className="text-sm font-medium text-gray-700 leading-relaxed max-w-2xl">
            Rural Utility Cost is a comprehensive ecosystem of tools and calculators designed to simplify financial planning, procurement, and cost analysis for agriculture, utility infrastructure, and rural development.
          </p>
        </div>

        <div className="space-y-12 text-[#1A1A1A] max-w-2xl">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#4D7C0F] mb-3">Our Mission</h2>
            <p className="text-sm leading-relaxed mb-6">
              Our mission is to bring transparency and financial clarity to physical infrastructure, land management, and technological deployments in rural environments. We aim to help decision-makers—farmers, ranchers, integrators, and developers—make practical capital decisions through simple, reliable estimation tools.
            </p>
          </div>
          
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#4D7C0F] mb-3">The Ecosystem</h2>
            <p className="text-sm leading-relaxed mb-6">
              The Rural Utility Cost platform consists of multiple specialized subdomains, each focusing on a specific area of agricultural and rural cost modeling (such as Forecast, WhatIf, Habitat, Solve, Grid, and many more). This connected network of tools is designed to provide holistic insights by breaking complex systems down into manageable, independent calculators.
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-white border border-[#E5E7EB] rounded-lg">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Informational Purposes Only</h3>
            <p className="text-[12px] text-gray-500 italic">
              All tools, calculators, and models provided across the Rural Utility Cost network are intended for informational, estimation, and decision-support purposes only. They do not constitute professional financial, legal, engineering, or agronomic advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

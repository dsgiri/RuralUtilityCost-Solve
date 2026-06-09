import React from 'react';
import { SEO } from '../components/SEO';

export function TermsOfUse() {
  return (
    <div className="flex-grow bg-[#F9FAF8] py-16 px-4 sm:px-8">
      <SEO 
        title="Terms of Use | Rural Utility Cost" 
        description="Terms of Use and user agreements for the Rural Utility Cost platform." 
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4">Terms of Use</h1>
          <div className="w-16 h-2 bg-[#1E3A8A] mb-8"></div>
          <p className="text-sm font-medium text-gray-700 leading-relaxed">
            Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="bg-[#FEF3C7] border-l-4 border-[#92400E] p-6 mb-10 text-amber-900">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-[#92400E]">Plain-Language Summary</p>
          <p className="text-sm italic">
            By using Rural Utility Cost and any of its subdomains, you agree to these terms. Our tools are provided "as is" to help with estimations, but they are not a replacement for professional engineering, legal, or financial advice. We are not liable for business or capital decisions made based on these tools.
          </p>
        </div>

        <div className="space-y-8 text-[#1A1A1A]">
          <section id="scope">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-[#1E3A8A]">1. Scope of Use</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              These terms apply to the main domain (ruralutilitycost.com) and all its affiliated subdomains (collectively, the "Platform"). You may use the tools freely for personal, educational, and internal business estimation purposes.
            </p>
          </section>

          <section id="responsibilities">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-[#1E3A8A]">2. User Responsibilities</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              You agree to use this platform responsibly and not to engage in unauthorized scraping, automated programmatic access (without explicit permission), or the resale of calculation outputs as authoritative engineering documents.
            </p>
          </section>

          <section id="intellectual-property">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-[#1E3A8A]">3. Intellectual Property</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The layout, formulas, design elements, and associated intellectual property of the Rural Utility Cost platform remain ours. You may reference outputs (such as taking screenshots of cost estimates for a business plan) provided the source is credited, but you may not duplicate the tool logic to create a competing product.
            </p>
          </section>

          <section id="liability">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-[#1E3A8A]">4. Limitations of Liability</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The data and calculators are provided on an "as-is" and "as available" basis. Rural Utility Cost disclaims all warranties of any kind. Under no circumstances shall Rural Utility Cost, its creators, or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages resulting from your reliance on the tools, estimations, or methodologies provided on the Platform.
            </p>
          </section>

          <section id="changes">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-[#1E3A8A]">5. Changes to the Terms</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              We reserve the right to update or modify these Terms of Use at any time. Your continued use of the platform and subdomains after any changes signifies your acceptance of the revised terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { SEO } from '../components/SEO';
import { DISCLAIMER_CONFIG } from '../config/disclaimer';

export function Disclaimer() {
  return (
    <div className="flex-grow bg-[#F9FAF8] py-16 px-4 sm:px-8">
      <SEO 
        title={`${DISCLAIMER_CONFIG.legalPageTitle} | Rural Utility Cost`} 
        description="Legal agreements, definitions, and model estimation disclaimers for the Rural Utility Cost platform." 
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4">{DISCLAIMER_CONFIG.legalPageTitle}</h1>
          <div className="w-16 h-2 bg-[#1E3A8A] mb-8"></div>
        </div>

        <div className="space-y-8 text-[#1A1A1A]">
          <div className="bg-[#FEF3C7] border-l-4 border-[#92400E] p-6 mb-10 text-amber-900">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-[#92400E]">Important Notice on Estimations</p>
            <p className="text-sm italic">
              {DISCLAIMER_CONFIG.calculatorDefault}
            </p>
          </div>

          {DISCLAIMER_CONFIG.fullDisclaimerSections.map((section) => (
            <div key={section.id}>
              <h2 className="text-sm font-black uppercase mb-2">{section.title}</h2>
              <p className="text-[13px] text-gray-700 mb-6 leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

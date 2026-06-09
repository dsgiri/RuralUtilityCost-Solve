import React from 'react';
import { SEO } from '../components/SEO';

export function PrivacyPolicy() {
  return (
    <div className="flex-grow bg-[#F9FAF8] py-16 px-4 sm:px-8">
      <SEO 
        title="Privacy Policy | Rural Utility Cost" 
        description="Privacy policy and data handling guidelines for the Rural Utility Cost platform." 
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4">Privacy Policy</h1>
          <div className="w-16 h-2 bg-[#1E3A8A] mb-8"></div>
          <p className="text-sm font-medium text-gray-700 leading-relaxed">
            Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="bg-[#FEF3C7] border-l-4 border-[#92400E] p-6 mb-10 text-amber-900">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-[#92400E]">Plain-Language Summary</p>
          <p className="text-sm italic">
            We value your privacy. Calculator inputs are processed locally in your browser. "My favorites" preferences are stored in your device's local storage. We do not aggregate or transmit your exact financial planning inputs to external servers. We use basic analytics to understand site performance, but we do not sell your personal data.
          </p>
        </div>

        <div className="space-y-8 text-[#1A1A1A]">
          <section id="information-collection">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-[#1E3A8A]">1. Information We Collect</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              <strong>1.1. User-Provided Information:</strong> When you use our calculators across any of our subdomains, the data you enter (such as costs, localized rates, or project dimensions) is processed locally within your web browser. We do not transmit or store these calculation inputs on our remote servers.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>1.2. Automated Information:</strong> We may collect standard analytics data including IP addresses, browser types, and referring subdomains to ensure our platforms function correctly and to understand which calculators provide the most value.
            </p>
          </section>

          <section id="use-of-information">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-[#1E3A8A]">2. Use of Information</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Data collected directly (such as through contact forms) is used solely to respond to your inquiries. Anonymized usage data helps us optimize the user interface and prioritize updates to our mathematical models.
            </p>
          </section>

          <section id="local-storage">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-[#1E3A8A]">3. Cookies and Local Storage</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              We utilize browser Local Storage to save specific non-sensitive preferences, such as your "Favorite Tools" or UI preferences. This data remains on your local machine and is not sent to our databases. You may clear this data at any time via your browser settings.
            </p>
          </section>

          <section id="third-party">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-[#1E3A8A]">4. Third-Party Services</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Some pages may include embedded features or utilize third-party analytics providers. These providers have their own privacy policies governing their data collection methods. We ensure any integrated providers are reputable and adhere to standard data protection laws.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-lg font-black uppercase tracking-tighter mb-4 text-[#1E3A8A]">5. Contact Us</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              If you have any questions or concerns regarding this Privacy Policy or data handling across the Rural Utility Cost network, please reach out via our centralized Contact Us page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div className="flex-grow bg-[#F9FAF8] py-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4">Contact the Team</h1>
          <div className="w-16 h-2 bg-[#1E3A8A] mb-8"></div>
          <p className="text-sm font-medium text-gray-700 leading-relaxed max-w-2xl">
            Get in touch regarding the Solve hub or the broader Rural Utility Cost platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-[#E5E7EB] p-6 rounded-lg flex flex-col items-start gap-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] bg-blue-50 px-2 py-1 rounded">Models</div>
            <div>
              <h3 className="font-bold text-base mb-1">Model Feedback</h3>
              <p className="text-xs text-gray-500 mb-4">
                Noticed an error in a calculator's assumptions or want to suggest a new variable?
              </p>
              <a href="mailto:models@ruralutilitycost.com" className="text-xs font-bold uppercase tracking-widest border-b border-[#1A1A1A] hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition-colors pb-0.5">models@ruralutilitycost.com</a>
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] p-6 rounded-lg flex flex-col items-start gap-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#4D7C0F] bg-green-50 px-2 py-1 rounded">General</div>
            <div>
              <h3 className="font-bold text-base mb-1">General Inquiries</h3>
              <p className="text-xs text-gray-500 mb-4">
                For press, partnership, or general inquiries directed to the master domain.
              </p>
              <a href="mailto:hello@ruralutilitycost.com" className="text-xs font-bold uppercase tracking-widest border-b border-[#1A1A1A] hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition-colors pb-0.5">hello@ruralutilitycost.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

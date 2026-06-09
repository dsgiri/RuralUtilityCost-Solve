import { DISCLAIMER_CONFIG } from '../config/disclaimer';

interface CalculatorDisclaimerProps {
  customText?: string;
  className?: string;
}

export function CalculatorDisclaimer({ customText, className = "" }: CalculatorDisclaimerProps) {
  const text = customText || DISCLAIMER_CONFIG.calculatorDefault;
  
  return (
    <div className={`mt-6 p-4 bg-[#FEF3C7] border-l-4 border-[#92400E] text-[#92400E] text-[11px] leading-relaxed ${className}`} role="note" aria-label="Disclaimer">
      <div className="font-bold uppercase tracking-widest mb-1 text-[10px]">Important Notice</div>
      <p className="italic">
        {text}
      </p>
    </div>
  );
}

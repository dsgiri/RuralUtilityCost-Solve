import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] px-8 py-6 mt-auto shrink-0 flex flex-col md:flex-row items-center justify-between">
      <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-4 md:mb-0">
        <Link to="/about" className="hover:text-[#1A1A1A]">About Solve</Link>
        <Link to="/contact" className="hover:text-[#1A1A1A]">Contact</Link>
        <Link to="/legal" className="hover:text-[#1A1A1A]">Legal</Link>
        <Link to="/license" className="hover:text-[#1A1A1A]">License</Link>
        <a href="#" className="hover:text-[#1A1A1A]">GitHub</a>
      </div>
      <div className="text-[10px] text-gray-400 text-center md:text-right">
        Part of the <span className="font-bold">RuralUtilityCost.com</span> Ecosystem &copy; {new Date().getFullYear()}<br/>
        <span className="font-normal italic">Calculators provide estimates for decision support only.</span>
      </div>
    </footer>
  );
}

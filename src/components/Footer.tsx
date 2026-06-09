import { DISCLAIMER_CONFIG } from '../config/disclaimer';
import { FOOTER_LINKS } from '../config/footer';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] px-4 sm:px-8 py-6 mt-auto shrink-0 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-4 md:mb-0">
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap gap-4 sm:gap-6 m-0 p-0 list-none text-center">
            {FOOTER_LINKS.map(link => (
              <li key={link.name}>
                <a href={link.url} className="hover:text-[#1A1A1A] py-3 inline-block transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="text-[10px] text-gray-400 text-center md:text-right">
        Part of the <span className="font-bold">RuralUtilityCost.com</span> Ecosystem &copy; {new Date().getFullYear()}<br/>
        <a href="https://ruralutilitycost.com/disclaimer" className="font-normal italic mt-1 block hover:text-[#1A1A1A] transition-colors">{DISCLAIMER_CONFIG.shortFooter}</a>
      </div>
    </footer>
  );
}

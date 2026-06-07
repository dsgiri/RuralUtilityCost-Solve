import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Plan', path: '/#plan' },
    { name: 'Forecast', path: '/#forecast' },
    { name: 'What If', path: '/#what-if' },
    { name: 'Predictor', path: '/#predictor' },
    { name: 'Solve', path: '/' },
    { name: 'My favorites', path: '/favorites' },
  ];

  const handleMobileClick = () => setIsOpen(false);

  return (
    <nav className="bg-white text-[#1A1A1A] border-b border-[#E5E7EB] shrink-0 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex py-4 justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1E3A8A] rounded flex items-center justify-center text-white font-bold">R</div>
            <span className="text-lg font-bold tracking-tight uppercase hidden sm:inline">Rural<span className="text-[#4D7C0F]">Utility</span>Cost</span>
            <span className="mx-2 text-gray-300 hidden sm:inline">|</span>
            <span className="text-lg font-black text-[#1E3A8A] uppercase tracking-tighter">Solve</span>
          </div>
          <div className="hidden md:flex gap-6 text-xs font-semibold uppercase tracking-widest text-gray-500 items-center">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors pb-0.5 ${
                    isActive && link.path !== '/#plan' && link.path !== '/#forecast' && link.path !== '/#what-if' && link.path !== '/#predictor'
                      ? 'text-[#1E3A8A] border-b-2 border-[#1E3A8A]'
                      : 'hover:text-[#1E3A8A]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1A1A1A] hover:text-[#1E3A8A] p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={handleMobileClick}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md font-semibold uppercase tracking-widest text-xs ${
                    isActive
                      ? 'bg-[#1E3A8A] text-white'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-[#1E3A8A]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

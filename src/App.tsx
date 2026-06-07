/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { License } from './pages/License';
import { ToolDetail } from './pages/ToolDetail';

// Simple scroll-to-hash wrapper 
function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <div className="min-h-screen flex flex-col bg-[#F9FAF8] font-sans text-[#1A1A1A] overflow-x-hidden">
        <Navigation />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/license" element={<License />} />
            <Route path="/tool/:id" element={<ToolDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


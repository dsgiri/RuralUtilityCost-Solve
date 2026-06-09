import { useMemo } from 'react';
import { SEO } from '../components/SEO';
import { parsePortfolioMarkdown } from '../utils/parsePortfolio';
import portfolioMd from '../content/portfolio-sites.md?raw';

export function Portfolio() {
  const sites = useMemo(() => parsePortfolioMarkdown(portfolioMd), []);
  
  // Group by category, but keep order within category by priority
  const groupedSites = useMemo(() => {
    const map = new Map<string, typeof sites>();
    
    sites.forEach(site => {
      const cat = site.category || 'Other';
      if (!map.has(cat)) {
        map.set(cat, []);
      }
      map.get(cat)!.push(site);
    });
    
    // Sort categories (maybe a custom order, or just alphabetically except for Core)
    const sortedCategories = Array.from(map.keys()).sort((a, b) => {
      if (a === 'Core') return -1;
      if (b === 'Core') return 1;
      return a.localeCompare(b);
    });
    
    return sortedCategories.map(cat => ({
      category: cat,
      sites: map.get(cat)!
    }));
  }, [sites]);

  return (
    <div className="flex flex-col flex-grow bg-[#F9FAF8]">
      <SEO 
        title="Network Portfolio | Rural Utility Cost" 
        description="Explore the full network of planning, budgeting, and estimation tools in the Rural Utility Cost ecosystem." 
      />
      
      {/* Header */}
      <header className="px-4 sm:px-8 py-12 bg-[#1E3A8A] text-white shrink-0">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
            Ecosystem Network
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-blue-100 font-medium">
            The Rural Utility Cost platform consists of interconnected subdomains, 
            each dedicated to a specific area of agricultural and rural cost modeling.
          </p>
        </div>
      </header>

      {/* Directory Content */}
      <section className="py-12 px-4 sm:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          
          <div className="space-y-16">
            {groupedSites.map(({ category, sites }) => (
              <div key={category} className="scroll-mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-[#1A1A1A]">{category}</h2>
                  <div className="h-px bg-[#E5E7EB] flex-grow"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sites.map(site => (
                    <article 
                      key={site.name} 
                      className={`bg-white border rounded-lg p-6 flex flex-col justify-between transition-shadow hover:shadow-md ${
                        site.status.toLowerCase() === 'retired' 
                          ? 'border-gray-200 opacity-60' 
                          : 'border-[#E5E7EB]'
                      }`}
                    >
                      <div className="mb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-[#1A1A1A]">
                            {site.name}
                          </h3>
                          {site.status.toLowerCase() === 'retired' && (
                            <span className="text-[10px] font-bold uppercase px-2 py-1 rounded bg-gray-100 text-gray-500">
                              Retired
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-4 h-10 line-clamp-2">
                          {site.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-[#F1F3F0]">
                        {site.status.toLowerCase() === 'retired' ? (
                          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Offline</span>
                        ) : (
                          <a 
                            href={`https://${site.url}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[11px] font-bold uppercase tracking-widest text-[#1E3A8A] hover:text-[#4D7C0F] transition-colors inline-block"
                            aria-label={`Visit ${site.name} at ${site.url}`}
                          >
                            Visit Site &rarr;
                          </a>
                        )}
                        <p className="mt-2 text-[10px] font-mono text-gray-400">
                          {site.url}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export interface PortfolioSite {
  priority: number;
  name: string;
  url: string;
  github: string;
  description: string;
  category: string;
  status: string;
}

export function parsePortfolioMarkdown(markdown: string): PortfolioSite[] {
  const lines = markdown.split('\n');
  const sites: PortfolioSite[] = [];
  let isTable = false;

  for (const line of lines) {
    if (line.trim().startsWith('| Priority |') || line.trim().startsWith('|Priority|')) {
      isTable = true;
      continue;
    }
    if (line.trim().startsWith('| :---') || line.trim().startsWith('|---') || line.trim().startsWith('|-')) {
      continue; // separator
    }
    
    // Process table rows
    if (isTable && line.trim().startsWith('|')) {
      // Split by bar and trim each section
      const parts = line.split('|').map(p => p.trim());
      
      // Expected: ['', 'Priority', 'Name', 'URL', 'GitHub', 'Description', 'Category', 'Status', '']
      // So length depends on if there are trailing bars.
      if (parts.length >= 8) {
        const priorityStr = parts[1];
        const name = parts[2];
        const url = parts[3];
        const github = parts[4];
        const description = parts[5];
        const category = parts[6];
        const status = parts[7];

        if (name && url) {
          sites.push({
            priority: parseInt(priorityStr, 10) || 99,
            name,
            url,
            github,
            description,
            category,
            status,
          });
        }
      }
    } else if (isTable && line.trim() === '') {
      isTable = false; // end of table
    }
  }

  return sites.sort((a, b) => a.priority - b.priority);
}

/// <reference types="vite/client" />

declare module '*.md?raw' {
  const content: string;
  export default content;
}

interface Window {
  gtag: (command: string, action: string, params?: any) => void;
  dataLayer: any[];
  adsbygoogle: any[];
}

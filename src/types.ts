export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  primaryOutcome: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

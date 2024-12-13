export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  badge?: string;
  specifications: {
    key: string;
    value: string;
  }[];
  features: string[];
  price?: string;
} 
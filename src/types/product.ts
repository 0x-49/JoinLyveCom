export type Category = 'Lifestyle' | 'Tech' | 'Wellness';

export interface Product {
  id: string;
  title: string;
  description: string;
  category: Category;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  affiliateLink: string;
  features: string[];
  pros: string[];
  cons: string[];
  specifications?: {
    [key: string]: string;
  };
  metaDescription?: string;
  slug?: string;
  relatedProducts?: string[];
  lastUpdated?: string;
}

export interface ProductListingResponse {
  products: Product[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export interface ProductFilters {
  category?: Category;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  sortBy?: 'price' | 'rating' | 'reviews';
  sortOrder?: 'asc' | 'desc';
}
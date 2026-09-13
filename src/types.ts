export type TabType = 'home' | 'shop' | 'wishlist' | 'profile';

export interface Product {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  subtitle: string;
  tag?: string;
  category: 'dresses' | 'outerwear' | 'accessories' | 'footwear' | 'tailoring' | 'separates';
  material: string;
  origin: string;
  description: string;
  heroImage: string;
  gallery?: string[];
  aspect?: 'square' | 'portrait' | 'tall' | 'wide';
  colSpanDesktop?: number;
  marginTopDesktop?: string;
  sizes: string[];
  color: 'MONO' | 'OAT' | 'NOIR';
  fabric: 'WOOL' | 'SILK' | 'CANVAS' | 'LEATHER' | 'COTTON';
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  formattedPrice: string;
  size: string;
  color?: string;
  image: string;
  quantity: number;
}

export interface FilterOptions {
  category: string;
  size: string;
  color: string;
  fabric: string;
  searchQuery?: string;
}

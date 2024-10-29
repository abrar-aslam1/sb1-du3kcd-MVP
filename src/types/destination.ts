export interface Destination {
  id: string;
  name: string;
  country: string;
  region?: string;
  slug: string;
  description: string;
  imageUrl: string;
  features: string[];
  popularVenues: number;
  startingPrice: number;
  rating: number;
  reviews: number;
  popularity: number;
}
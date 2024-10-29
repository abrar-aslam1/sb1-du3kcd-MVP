import { type Destination } from '@/types/destination';

export const destinations: Destination[] = [
  {
    id: 'bali-indonesia',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Lesser Sunda Islands',
    slug: 'bali',
    description: 'A tropical paradise with stunning beaches, lush landscapes, and rich cultural heritage. From clifftop ceremonies to traditional temples, Bali offers a perfect blend of luxury and culture for your destination wedding.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    features: ['Beach Ceremonies', 'Traditional Venues', 'Luxury Resorts', 'Cultural Experiences'],
    popularVenues: 150,
    startingPrice: 5000,
    rating: 4.8,
    reviews: 524,
    popularity: 95
  },
  {
    id: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    region: 'Cyclades Islands',
    slug: 'santorini',
    description: 'Iconic white-washed buildings, breathtaking sunsets, and crystal-clear waters create an unmatched romantic atmosphere for your wedding. Santorini\'s unique architecture and stunning caldera views provide an unforgettable backdrop.',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
    features: ['Cliff-top Venues', 'Sunset Views', 'Boutique Hotels', 'Wine Estates'],
    popularVenues: 85,
    startingPrice: 8000,
    rating: 4.9,
    reviews: 412,
    popularity: 96
  },
  {
    id: 'tuscany-italy',
    name: 'Tuscany',
    country: 'Italy',
    region: 'Tuscany',
    slug: 'tuscany',
    description: 'Rolling hills, historic villas, and world-renowned vineyards create a romantic setting for your special day. Tuscany combines rustic charm with elegant sophistication, offering an authentic Italian wedding experience.',
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
    features: ['Villa Weddings', 'Vineyard Ceremonies', 'Historic Castles', 'Countryside Views'],
    popularVenues: 120,
    startingPrice: 7000,
    rating: 4.7,
    reviews: 368,
    popularity: 92
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Indian Ocean',
    slug: 'maldives',
    description: 'Paradise found in the Indian Ocean, offering overwater venues and pristine beaches. The Maldives provides an intimate tropical setting perfect for luxury destination weddings and honeymoons.',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
    features: ['Overwater Chapels', 'Beach Ceremonies', 'Private Island Resorts', 'Sunset Cruises'],
    popularVenues: 65,
    startingPrice: 12000,
    rating: 4.9,
    reviews: 286,
    popularity: 97
  },
  {
    id: 'amalfi-coast-italy',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Campania',
    slug: 'amalfi-coast',
    description: 'Dramatic coastlines, charming villages, and Mediterranean beauty combine to create a romantic Italian wedding destination. The Amalfi Coast offers stunning sea views and historic venues.',
    imageUrl: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca',
    features: ['Coastal Venues', 'Historic Churches', 'Luxury Hotels', 'Garden Ceremonies'],
    popularVenues: 90,
    startingPrice: 9000,
    rating: 4.8,
    reviews: 342,
    popularity: 93
  },
  {
    id: 'maui-hawaii',
    name: 'Maui',
    country: 'United States',
    region: 'Hawaii',
    slug: 'maui',
    description: 'A tropical paradise offering diverse wedding venues from pristine beaches to lush gardens. Maui combines natural beauty with luxury amenities for the perfect destination wedding.',
    imageUrl: 'https://images.unsplash.com/photo-1542259009477-0d4ebff0964b',
    features: ['Beach Ceremonies', 'Garden Venues', 'Resort Packages', 'Sunset Views'],
    popularVenues: 110,
    startingPrice: 6000,
    rating: 4.7,
    reviews: 456,
    popularity: 94
  }
];

export function searchDestinations(query: string): Destination[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  return destinations.filter((destination) => {
    return (
      destination.name.toLowerCase().includes(normalizedQuery) ||
      destination.country.toLowerCase().includes(normalizedQuery) ||
      destination.region?.toLowerCase().includes(normalizedQuery) ||
      destination.description.toLowerCase().includes(normalizedQuery) ||
      destination.features.some(feature => 
        feature.toLowerCase().includes(normalizedQuery)
      )
    );
  }).sort((a, b) => b.popularity - a.popularity);
}
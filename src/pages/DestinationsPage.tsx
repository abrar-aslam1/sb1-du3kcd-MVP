import { destinations, searchDestinations } from '@/data/destinations';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Search, Users } from 'lucide-react';

export function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredDestinations = searchQuery 
    ? searchDestinations(searchQuery)
    : [...destinations].sort((a, b) => b.popularity - a.popularity);

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Wedding Destinations</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover the perfect location for your dream wedding from our curated selection of stunning destinations worldwide.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Wedding destinations"
        >
          {filteredDestinations.map((destination) => (
            <Link
              key={destination.id}
              to={`/destinations/${destination.slug}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              role="listitem"
            >
              <div className="relative h-64">
                <img
                  src={`${destination.imageUrl}?auto=format&fit=crop&w=600&q=80`}
                  alt={`${destination.name}, ${destination.country}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-xl font-semibold text-white mb-1">
                    {destination.name}, {destination.country}
                  </h2>
                  {destination.region && (
                    <p className="text-white/80 text-sm">{destination.region}</p>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" aria-hidden="true" />
                    <span>{destination.popularVenues} Venues</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" aria-hidden="true" />
                    <span className="font-medium">{destination.rating}</span>
                    <span className="text-gray-500 ml-1">({destination.reviews})</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    From ${destination.startingPrice.toLocaleString()}
                  </span>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Explore Venues
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No destinations found matching your search.</p>
          </div>
        )}
      </div>
    </main>
  );
}
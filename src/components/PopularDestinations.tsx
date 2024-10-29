import { destinations } from '@/data/destinations';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users } from 'lucide-react';

export function PopularDestinations() {
  // Get top 6 destinations by popularity
  const popularDestinations = [...destinations]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="popular-destinations-title">
      <div className="container mx-auto px-4">
        <h2 
          id="popular-destinations-title" 
          className="text-3xl font-bold text-center mb-8"
        >
          Popular Wedding Destinations
        </h2>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Popular wedding destinations"
        >
          {popularDestinations.map((destination) => (
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
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {destination.name}, {destination.country}
                  </h3>
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
        <div className="text-center mt-12">
          <Link
            to="/destinations"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition duration-300"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
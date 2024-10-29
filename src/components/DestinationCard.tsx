import { Link } from 'react-router-dom';
import { MapPin, Camera, Users } from 'lucide-react';
import { type Destination } from '@/types/destination';
import { RelatedDestinations } from './RelatedDestinations';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary"
      role="listitem"
    >
      <div className="relative h-48">
        <img
          src={destination.imageUrl}
          alt={`${destination.name}, ${destination.country} - Wedding Destination`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white mb-1">
            {destination.name}, {destination.country}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>{destination.popularVenues} Popular Venues</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Camera className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Professional Photographers</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Expert Wedding Planners</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Link 
            to={`/destinations/${destination.slug}`}
            className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition duration-300"
            aria-label={`Explore wedding venues and services in ${destination.name}`}
          >
            Explore {destination.name}
          </Link>
          <RelatedDestinations currentDestination={destination} />
        </div>
      </div>
    </div>
  );
}
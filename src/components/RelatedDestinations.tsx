import { Link } from 'react-router-dom';
import { destinations } from '@/data/destinations';
import type { Destination } from '@/types/destination';

interface RelatedDestinationsProps {
  currentDestination: Destination;
}

export function RelatedDestinations({ currentDestination }: RelatedDestinationsProps) {
  const relatedDestinations = destinations
    .filter(dest => dest.id !== currentDestination.id)
    .slice(0, 3);

  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">Similar Destinations</h4>
      <div className="flex flex-wrap gap-2">
        {relatedDestinations.map((destination) => (
          <Link
            key={destination.id}
            to={`/destinations/${destination.slug}`}
            className="text-sm text-primary hover:text-primary-dark transition-colors"
            aria-label={`View wedding venues in ${destination.name}`}
          >
            {destination.name}
            {destination !== relatedDestinations[relatedDestinations.length - 1] && ", "}
          </Link>
        ))}
      </div>
    </div>
  );
}
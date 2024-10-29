import { useParams } from 'react-router-dom';
import { MapPin, Users, Camera, Calendar, Star, DollarSign } from 'lucide-react';
import { destinations } from '@/data/destinations';
import { NotFoundPage } from './NotFoundPage';

export function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = destinations.find(d => d.slug === slug);

  if (!destination) {
    return <NotFoundPage />;
  }

  return (
    <main className="min-h-screen">
      <div className="relative h-[60vh]">
        <img
          src={`${destination.imageUrl}?auto=format&fit=crop&w=1920&q=80`}
          alt={`${destination.name}, ${destination.country}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{destination.name}</h1>
            <p className="text-xl">{destination.country}</p>
            {destination.region && (
              <p className="text-lg text-white/80 mt-2">{destination.region}</p>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-center">
                <Star className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                <h3 className="font-semibold mb-1">Rating</h3>
                <p className="text-gray-600">{destination.rating} ({destination.reviews})</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-1">Venues</h3>
                <p className="text-gray-600">{destination.popularVenues}+ Options</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-1">Starting From</h3>
                <p className="text-gray-600">${destination.startingPrice.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-1">Best Time</h3>
                <p className="text-gray-600">Year Round</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">About {destination.name}</h2>
            <p className="text-lg text-gray-600 mb-8">{destination.description}</p>
            
            <h3 className="text-2xl font-bold mb-4">Featured Venues & Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">{feature}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition duration-300">
              Contact Wedding Planners
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
'use client';

import { Calendar, Users, Search } from 'lucide-react';
import { useState } from 'react';
import { LocationAutocomplete } from './LocationAutocomplete';
import type { Location } from '@/data/locations';

export function SearchForm() {
  const [destination, setDestination] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission with selectedLocation
    console.log({ selectedLocation, date, guests });
  };

  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000)',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Find Your Dream Destination Wedding
          </h1>
          <p className="text-xl text-white/90 drop-shadow-md">
            Discover beautiful venues and expert planners for your special day
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-6 max-w-3xl mx-auto border border-accent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="destination" className="block text-primary-dark mb-2 font-medium">
                Destination
              </label>
              <LocationAutocomplete
                value={destination}
                onChange={setDestination}
                onLocationSelect={setSelectedLocation}
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-primary-dark mb-2 font-medium">
                Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-primary" />
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-md border border-accent hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="guests" className="block text-primary-dark mb-2 font-medium">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-3 text-primary" />
                <input
                  type="number"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="Number of guests"
                  min="1"
                  className="w-full pl-10 pr-3 py-2 rounded-md border border-accent hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900 placeholder:text-gray-500 transition-colors"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md mt-6 hover:bg-primary-dark transition-colors duration-300 shadow-lg group"
          >
            <Search className="inline-block w-5 h-5 mr-2 group-hover:scale-105 transition-transform" />
            Search Venues
          </button>
        </form>
      </div>
    </section>
  );
}
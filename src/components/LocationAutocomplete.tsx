import { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { Location, searchLocations } from '@/data/locations';

interface LocationAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onLocationSelect?: (location: Location) => void;
}

export function LocationAutocomplete({ 
  value, 
  onChange,
  onLocationSelect 
}: LocationAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const results = searchLocations(value);
    setLocations(results);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-3 text-primary" />
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Where do you want to go?"
          className="w-full pl-10 pr-3 py-2 rounded-md border border-accent hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900 placeholder:text-gray-500 transition-colors"
        />
      </div>

      {isOpen && value.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-accent">
          {locations.length > 0 ? (
            <ul className="py-1 max-h-60 overflow-auto">
              {locations.map((location) => (
                <li
                  key={location.id}
                  className="px-4 py-2 hover:bg-accent/50 cursor-pointer transition-colors"
                  onClick={() => {
                    onChange(`${location.name}, ${location.country}`);
                    onLocationSelect?.(location);
                    setIsOpen(false);
                  }}
                >
                  <div className="font-medium">{location.name}</div>
                  <div className="text-sm text-gray-500">
                    {location.country} {location.region && `• ${location.region}`}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-2 text-gray-500">No locations found</div>
          )}
        </div>
      )}
    </div>
  );
}
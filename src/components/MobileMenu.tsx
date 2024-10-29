import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 hover:text-primary"
        aria-label="Toggle menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4 py-8">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-primary"
              aria-label="Close menu"
            >
              ✕
            </button>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/destinations" 
                className="text-xl text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Destinations
              </Link>
              <Link 
                to="/venues" 
                className="text-xl text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Venues
              </Link>
              <Link 
                to="/photographers" 
                className="text-xl text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Photographers
              </Link>
              <Link 
                to="/planners" 
                className="text-xl text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Planners
              </Link>
              <Link 
                to="/blog" 
                className="text-xl text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
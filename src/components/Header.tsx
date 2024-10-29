import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">DestinationWed</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/destinations" className="text-gray-600 hover:text-primary">Destinations</Link>
          <Link to="/venues" className="text-gray-600 hover:text-primary">Venues</Link>
          <Link to="/photographers" className="text-gray-600 hover:text-primary">Photographers</Link>
          <Link to="/planners" className="text-gray-600 hover:text-primary">Planners</Link>
          <Link to="/blog" className="text-gray-600 hover:text-primary">Blog</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-primary">
            <Search className="w-5 h-5" />
          </button>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
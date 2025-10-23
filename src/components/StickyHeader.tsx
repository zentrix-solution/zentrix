import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky header when scrolled past the hero section (approximately 80vh)
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-900 font-semibold">ZENTRIX SOLUTION</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-gray-700 text-sm font-medium">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}`}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}`}
            >
              ABOUT US
            </Link>
            <Link 
              to="/solutions" 
              className={`transition-colors ${isActive('/solutions') ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}`}
            >
              OUR SOLUTIONS
            </Link>
            <Link 
              to="/how-it-works" 
              className={`transition-colors ${isActive('/how-it-works') ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}`}
            >
              HOW IT WORKS
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors ${isActive('/pricing') ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}`}
            >
              PRICING
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-purple-600 font-semibold' : 'hover:text-purple-600'}`}
            >
              CONTACT US
            </Link>
          </div>
          <a href="tel:+18336601996">
            <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full text-sm">
              📞 1-833-660-1996
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
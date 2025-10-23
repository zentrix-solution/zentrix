import { Button } from '@/components/ui/button';
import { Zap, Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0" onClick={closeMenu}>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="text-gray-900 font-semibold text-sm sm:text-base lg:text-lg">ZENTRIX SOLUTION</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-gray-700 text-sm font-medium">
            <Link 
              to="/" 
              className={`transition-colors hover:text-purple-600 ${isActive('/') ? 'text-purple-600 font-semibold' : ''}`}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors hover:text-purple-600 ${isActive('/about') ? 'text-purple-600 font-semibold' : ''}`}
            >
              ABOUT US
            </Link>
            <Link 
              to="/solutions" 
              className={`transition-colors hover:text-purple-600 ${isActive('/solutions') ? 'text-purple-600 font-semibold' : ''}`}
            >
              OUR SOLUTIONS
            </Link>
            <Link 
              to="/how-it-works" 
              className={`transition-colors hover:text-purple-600 ${isActive('/how-it-works') ? 'text-purple-600 font-semibold' : ''}`}
            >
              HOW IT WORKS
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors hover:text-purple-600 ${isActive('/pricing') ? 'text-purple-600 font-semibold' : ''}`}
            >
              PRICING
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors hover:text-purple-600 ${isActive('/contact') ? 'text-purple-600 font-semibold' : ''}`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Desktop Phone Button */}
          <div className="hidden sm:block">
            <a href="tel:+18336601996">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-2 sm:px-4 lg:px-6 rounded-full text-xs sm:text-sm">
                <span className="hidden sm:inline">📞 </span>
                <span className="hidden md:inline">1-833-660-1996</span>
                <span className="md:hidden">Call Us</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  isActive('/') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  isActive('/about') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                ABOUT US
              </Link>
              <Link 
                to="/solutions" 
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  isActive('/solutions') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                OUR SOLUTIONS
              </Link>
              <Link 
                to="/how-it-works" 
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  isActive('/how-it-works') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                HOW IT WORKS
              </Link>
              <Link 
                to="/pricing" 
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  isActive('/pricing') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                PRICING
              </Link>
              <Link 
                to="/contact" 
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  isActive('/contact') ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                CONTACT US
              </Link>
            </div>
            
            {/* Mobile Phone Button */}
            <div className="px-4 pt-4 border-t border-gray-200">
              <a href="tel:+18336601996" onClick={closeMenu}>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full text-base">
                  📞 Call 1-833-660-1996
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
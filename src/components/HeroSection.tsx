import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Rocket, Radio, Building2, Zap, Star, Smile, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 sm:p-6 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
          </div>
          <span className="text-white font-semibold text-sm sm:text-base">ZENTRIX SOLUTION</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-white text-sm font-medium">
          <Link to="/" className="hover:text-purple-200 transition-colors">HOME</Link>
          <Link to="/about" className="hover:text-purple-200 transition-colors">ABOUT US</Link>
          <Link to="/solutions" className="hover:text-purple-200 transition-colors">OUR SOLUTIONS</Link>
          <Link to="/how-it-works" className="hover:text-purple-200 transition-colors">HOW IT WORKS</Link>
          <Link to="/pricing" className="hover:text-purple-200 transition-colors">PRICING</Link>
          <Link to="/contact" className="hover:text-purple-200 transition-colors">CONTACT US</Link>
        </div>
        
        {/* Desktop Phone Button */}
        <div className="hidden sm:block">
          <a href="tel:+18336601996">
            <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-2 sm:px-4 lg:px-6 rounded-full text-xs sm:text-sm">
              <span className="hidden sm:inline">📞 </span>
              <span className="hidden md:inline">1-833-660-1996</span>
              <span className="md:hidden">Call</span>
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-white/20 py-4 space-y-4 lg:hidden">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className="block py-2 text-gray-800 font-medium hover:text-purple-600 transition-colors" onClick={closeMenu}>
                HOME
              </Link>
              <Link to="/about" className="block py-2 text-gray-800 font-medium hover:text-purple-600 transition-colors" onClick={closeMenu}>
                ABOUT US
              </Link>
              <Link to="/solutions" className="block py-2 text-gray-800 font-medium hover:text-purple-600 transition-colors" onClick={closeMenu}>
                OUR SOLUTIONS
              </Link>
              <Link to="/how-it-works" className="block py-2 text-gray-800 font-medium hover:text-purple-600 transition-colors" onClick={closeMenu}>
                HOW IT WORKS
              </Link>
              <Link to="/pricing" className="block py-2 text-gray-800 font-medium hover:text-purple-600 transition-colors" onClick={closeMenu}>
                PRICING
              </Link>
              <Link to="/contact" className="block py-2 text-gray-800 font-medium hover:text-purple-600 transition-colors" onClick={closeMenu}>
                CONTACT US
              </Link>
            </div>
            <div className="px-4 pt-4 border-t border-gray-200 sm:hidden">
              <a href="tel:+18336601996" onClick={closeMenu}>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full">
                  📞 Call 1-833-660-1996
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 py-8 sm:py-12 relative z-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          {/* Hello Tag */}
          <div className="inline-block bg-orange-400 text-white px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 transform rotate-3">
            HELLO, ISP
          </div>
          
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mb-2 sm:mb-4">
              <span className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none">
                INTERNET
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start">
              <span className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none mb-4 sm:mb-0">
                ON DEMAND
              </span>
              <div className="ml-0 sm:ml-4 bg-white rounded-2xl p-2 sm:p-3 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <Smile className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-1 sm:mb-2" />
                  <div className="text-xs text-gray-600 font-semibold">Connecting on a</div>
                  <div className="text-xs text-gray-600 font-semibold">Fiber Cloud</div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            We take your connectivity stress away, so you can focus on what matters most.
          </p>
          
          <a href="tel:+18336601996">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
              CHECK OUT BUNDLES
            </Button>
          </a>
        </div>

        {/* Right Content - Service Preview Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto lg:max-w-none">
          {/* Card 1 - High Speed */}
          <div className="bg-orange-500 rounded-2xl p-4 sm:p-6 text-white transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
            <Rocket className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
            <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Creating lightning-fast connections</h3>
            <p className="text-xs sm:text-sm text-orange-100">Up to 1 Gbps speeds</p>
          </div>

          {/* Card 2 - Fiber Network */}
          <div className="bg-green-100 rounded-2xl p-4 sm:p-6 text-gray-800 transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
            <Radio className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-gray-800" />
            <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">The power of putting fiber to work</h3>
            <p className="text-xs sm:text-sm text-gray-600">Reliable connections</p>
          </div>

          {/* Card 3 - Enterprise */}
          <div className="bg-yellow-100 rounded-2xl p-4 sm:p-6 text-gray-800 transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-gray-800" />
            <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Enterprise solutions for growing businesses</h3>
            <p className="text-xs sm:text-sm text-gray-600">Scalable packages</p>
          </div>

          {/* Card 4 - Support */}
          <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 text-white transform hover:-translate-y-2 transition-all duration-300 shadow-lg">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-400">●●●</span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold mb-1 sm:mb-2">@ZentrixSupport</h3>
            <p className="text-xs text-gray-300">24/7 customer support ready to help you stay connected</p>
            <div className="text-xs text-gray-400 mt-1 sm:mt-2">Customer success</div>
          </div>
        </div>
      </div>

      {/* Bottom Icons */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 sm:space-x-8 text-white/60">
        <Star className="w-4 h-4 sm:w-6 sm:h-6 hover:text-white transition-colors cursor-pointer fill-current" />
        <Star className="w-4 h-4 sm:w-6 sm:h-6 hover:text-white transition-colors cursor-pointer fill-current" />
        <Star className="w-4 h-4 sm:w-6 sm:h-6 hover:text-white transition-colors cursor-pointer fill-current" />
        <Star className="w-4 h-4 sm:w-6 sm:h-6 hover:text-white transition-colors cursor-pointer fill-current" />
        <Star className="w-4 h-4 sm:w-6 sm:h-6 hover:text-white transition-colors cursor-pointer fill-current" />
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full transform translate-y-6 sm:translate-y-12">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,60 Q360,10 720,60 T1440,60 L1440,120 L0,120 Z" fill="white"/>
          <path d="M0,80 Q180,30 360,80 T720,80 Q1080,30 1440,80 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.7)"/>
        </svg>
      </div>
    </section>
  );
}
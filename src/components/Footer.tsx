import { Button } from '@/components/ui/button';
import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Experience the speed you deserve.
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            Came for the speed, stayed for the service.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-white font-bold text-base sm:text-lg">ZENTRIX SOLUTION</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6">
              Your trusted internet service provider delivering speed, reliability, and exceptional customer service across the region.
            </p>
            <div className="mb-4 sm:mb-6">
              <a href="tel:+18336601996" className="flex items-center text-green-400 hover:text-green-300 transition-colors">
                <span className="mr-2">📞</span>
                <span className="font-semibold text-sm sm:text-base">1-833-660-1996</span>
              </a>
            </div>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm">
              <li><Link to="/solutions" className="hover:text-white transition-colors">Residential Internet</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Business Solutions</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Fiber Optic</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Enterprise Packages</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Technical Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Zentrix</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Our Network</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Press & Media</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Legal</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Zentrix Solution. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-gray-400 text-xs sm:text-sm">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
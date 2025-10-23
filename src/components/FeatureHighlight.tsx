 import { Button } from '@/components/ui/button';
import { Zap, Signal, Check } from 'lucide-react';

export default function FeatureHighlight() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-white mb-8 lg:mb-0 text-center lg:text-left">
          <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-none">
            5,4,3,2,1
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            That's how quickly we get your Internet LIVE!
          </h2>
          <p className="text-lg sm:text-xl text-red-100 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            No more waiting weeks for installation. Our rapid deployment team gets you connected faster than you can count down from five.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
            CHECK OUT PLANS
          </Button>
        </div>

        {/* Right Content - Mock Device */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <div className="relative max-w-xs sm:max-w-sm">
            {/* Phone Mockup */}
            <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-2xl transform rotate-6 lg:rotate-12 hover:rotate-3 lg:hover:rotate-6 transition-transform duration-300">
              <div className="bg-green-500 rounded-2xl p-4 sm:p-6 text-white">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-semibold">ZENTRIX PORTAL</span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2">Installation Complete!</h3>
                <p className="text-xs sm:text-sm text-green-100 mb-3 sm:mb-4">Your internet is now live and ready to use.</p>
                <div className="bg-white/20 rounded-lg p-2 sm:p-3">
                  <div className="text-xs text-green-100 mb-1">Speed Test Result</div>
                  <div className="text-xl sm:text-2xl font-bold">500 Mbps</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-yellow-400 rounded-full p-2 sm:p-3 animate-bounce">
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-blue-400 rounded-full p-2 sm:p-3 animate-pulse">
              <Signal className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,64L48,54C96,44,192,24,288,24C384,24,480,44,576,54C672,64,768,64,864,54C960,44,1056,24,1152,24C1248,24,1344,44,1392,54L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
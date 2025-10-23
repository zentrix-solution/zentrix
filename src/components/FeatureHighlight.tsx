 import { Button } from '@/components/ui/button';
import { Zap, Signal, Check } from 'lucide-react';

export default function FeatureHighlight() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
          <div className="text-6xl md:text-8xl font-black mb-6 leading-none">
            5,4,3,2,1
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            That's how quickly we get your Internet LIVE!
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed max-w-lg">
            No more waiting weeks for installation. Our rapid deployment team gets you connected faster than you can count down from five.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
            CHECK OUT PLANS
          </Button>
        </div>

        {/* Right Content - Mock Device */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* Phone Mockup */}
            <div className="bg-white rounded-3xl p-4 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
              <div className="bg-green-500 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold">ZENTRIX PORTAL</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">Installation Complete!</h3>
                <p className="text-sm text-green-100 mb-4">Your internet is now live and ready to use.</p>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-xs text-green-100 mb-1">Speed Test Result</div>
                  <div className="text-2xl font-bold">500 Mbps</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full p-3 animate-bounce">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-400 rounded-full p-3 animate-pulse">
              <Signal className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L48,54C96,44,192,24,288,24C384,24,480,44,576,54C672,64,768,64,864,54C960,44,1056,24,1152,24C1248,24,1344,44,1392,54L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
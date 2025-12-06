import { Button } from '@/components/ui/button';
import { Play, Tv, Wifi, Check } from 'lucide-react';

export default function StreamingShowcase() {
  const streamingServices = [
    { name: "Netflix", color: "bg-red-600" },
    { name: "Hulu", color: "bg-green-500" },
    { name: "Disney+", color: "bg-blue-600" },
    { name: "HBO Max", color: "bg-purple-700" },
    { name: "Prime Video", color: "bg-cyan-500" },
    { name: "Paramount+", color: "bg-blue-500" }
  ];

  const features = [
    "4K Ultra HD streaming",
    "Watch on unlimited devices",
    "No buffering with fiber speeds",
    "Download content offline",
    "Ad-free options available"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-white order-2 lg:order-1">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 transform -rotate-2">
              ✨ ALL YOUR FAVORITES
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight">
              Watch Everything
              <br />
              <span className="text-yellow-300">You Love</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-purple-100 mb-8 leading-relaxed">
              Get instant access to all major streaming platforms included with your high-speed internet. 
              No more juggling multiple subscriptions!
            </p>

            {/* Streaming Services Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              {streamingServices.map((service, index) => (
                <div 
                  key={index}
                  className={`${service.color} rounded-xl p-3 sm:p-4 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer`}
                >
                  <div className="text-white font-bold text-xs sm:text-sm text-center">
                    {service.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <a href="tel:+18336601996">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg transform hover:scale-105 transition-all duration-200 shadow-xl">
                Start Streaming Now
              </Button>
            </a>
          </div>

          {/* Right Content - Image Mockup */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* TV/Monitor Mockup */}
              <div className="bg-gray-900 rounded-3xl p-4 sm:p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Screen */}
                <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl aspect-video overflow-hidden relative">
                  {/* Streaming Content Display */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      {/* Play Button */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto hover:bg-white/30 transition-all cursor-pointer group">
                        <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:scale-110 transition-transform" fill="white" />
                      </div>
                      
                      {/* Movie Info */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <Tv className="w-5 h-5 text-yellow-400" />
                          <span className="text-white font-bold text-sm sm:text-base">4K Ultra HD</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Wifi className="w-5 h-5 text-green-400" />
                          <span className="text-white font-semibold text-xs sm:text-sm">Streaming at 1 Gbps</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Stand */}
                <div className="flex justify-center mt-4">
                  <div className="w-24 h-3 bg-gray-800 rounded-full"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-2xl p-3 shadow-xl animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-black text-black">150+</div>
                  <div className="text-xs font-bold text-black">Channels</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-2xl p-3 shadow-xl animate-pulse">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">1 Gbps</div>
                  <div className="text-xs font-bold text-white">Speed</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, DollarSign, Sparkles, Tv, RefreshCw, Users, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "All-in-One Bundle",
      description: "Get high-speed internet with streaming services in one affordable package",
      icon: Zap,
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Zero Extra Fees",
      description: "No equipment rental fees, no streaming subscription charges, all included",
      icon: DollarSign,
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "10+ Streaming Services",
      description: "Access Netflix, Hulu, Disney+, HBO Max, and more - all included",
      icon: Sparkles,
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "4K Streaming Ready",
      description: "Fiber speeds guarantee buffer-free 4K streaming on all devices",
      icon: Tv,
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "No Contracts",
      description: "Cancel anytime, no penalties, switch plans as your needs change",
      icon: RefreshCw,
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "Family Sharing",
      description: "Stream on unlimited devices, perfect for the whole family",
      icon: Users,
      gradient: "from-red-400 to-rose-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg border-2 border-purple-200">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              WHY ZENSTREAM?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Stream & Connect
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Get blazing-fast internet speeds with access to all major streaming services. Everything you need in one simple, affordable package with no hidden fees.
          </p>
        </div>

        {/* Features Grid with Alternating Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Card with Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-3xl blur transition duration-500 from-purple-600 to-pink-600"></div>
              <Card className="relative p-6 sm:p-8 rounded-3xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Decorative Corner Element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8`}></div>
                
                <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                  {/* Icon with Gradient Background */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                    
                    {/* Check Mark for Visual Interest */}
                    <div className="flex items-center mt-3 sm:mt-4">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-xs sm:text-sm text-green-600 font-semibold">Included in all plans</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section with Colorful Design */}
        <div className="text-center relative">
          <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 p-1 rounded-full shadow-2xl">
            <a href="tel:+18336601996">
              <Button className="bg-white hover:bg-gray-50 text-purple-600 font-bold px-8 py-4 sm:px-12 sm:py-6 rounded-full text-base sm:text-xl transform hover:scale-105 transition-all duration-200 shadow-lg">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Get Started Today
                </span>
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required • Free installation</p>
        </div>
      </div>
    </section>
  );
}   
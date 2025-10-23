import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, DollarSign, Sparkles, Home, RefreshCw, Briefcase } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Lightning Fast Installation",
      description: "Get connected in under 24 hours with our rapid deployment team",
      icon: Zap,
      color: "bg-yellow-400"
    },
    {
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprise charges or hidden costs",
      icon: DollarSign,
      color: "bg-green-400"
    },
    {
      title: "Future-Proof Technology",
      description: "State-of-the-art fiber optic infrastructure built for tomorrow",
      icon: Sparkles,
      color: "bg-purple-400"
    },
    {
      title: "Local Support Team",
      description: "Real people in your area ready to help when you need it most",
      icon: Home,
      color: "bg-blue-400"
    },
    {
      title: "Flexible Plans",
      description: "Scale up or down anytime without penalties or long-term contracts",
      icon: RefreshCw,
      color: "bg-orange-400"
    },
    {
      title: "Business Ready",
      description: "Enterprise-grade solutions for businesses of all sizes",
      icon: Briefcase,
      color: "bg-red-400"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            WHY ZENTRIX SOLUTION?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            More than just fast internet
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We're not just another ISP. We're your technology partner, committed to keeping you connected with innovative solutions and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 sm:p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
            Learn More About Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}   
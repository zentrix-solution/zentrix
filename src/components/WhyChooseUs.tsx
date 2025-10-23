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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            WHY ZENTRIX SOLUTION?
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            More than just fast internet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another ISP. We're your technology partner, committed to keeping you connected with innovative solutions and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
            Learn More About Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}   
import { Card } from '@/components/ui/card';
import { Rocket, Gem, Building, Wrench, Star } from 'lucide-react';

export default function ServiceCards() {
  const services = [
    {
      title: "High-Speed Broadband",
      description: "Lightning-fast internet for your home",
      icon: Rocket,
      color: "bg-orange-500"
    },
    {
      title: "Fiber Optic Network",
      description: "Ultra-reliable fiber connections",
      icon: Gem,
      color: "bg-blue-500"
    },
    {
      title: "Enterprise Solutions",
      description: "Scalable business internet packages",
      icon: Building,
      color: "bg-green-500"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
      icon: Wrench,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-4 sm:p-6 rounded-2xl border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${service.color} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Rating Stars */}
        <div className="flex justify-center items-center mt-12 sm:mt-16 space-x-4 sm:space-x-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="text-2xl sm:text-4xl text-yellow-400 transform hover:scale-125 transition-transform duration-200">
              <Star className="w-6 h-6 sm:w-10 sm:h-10 fill-current" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
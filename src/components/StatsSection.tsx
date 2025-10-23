import { Card } from '@/components/ui/card';
import { Users, Zap, Wrench, Rocket } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      number: "50K+",
      label: "Happy Customers",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: Zap,
      color: "bg-green-500"
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: Wrench,
      color: "bg-purple-500"
    },
    {
      number: "1GB",
      label: "Max Speed Available",
      icon: Rocket,
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Join the growing community of satisfied customers who chose Zentrix Solution for their internet needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 sm:p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 bg-white">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
              <p className="text-gray-600 font-semibold text-sm sm:text-base">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
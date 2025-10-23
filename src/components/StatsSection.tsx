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
    <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the growing community of satisfied customers who chose Zentrix Solution for their internet needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 bg-white">
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
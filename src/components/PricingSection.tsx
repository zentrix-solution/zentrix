import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Check, Signal } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: "The Basic Bundle",
      price: "25",
      description: "Perfect for light internet users",
      features: [
        "Up to 100 Mbps",
        "Free installation", 
        "24/7 Support",
        "No data caps",
        "1 month free trial"
      ],
      color: "bg-white",
      textColor: "text-gray-900",
      buttonColor: "bg-green-500 hover:bg-green-600"
    },
    {
      name: "The Premium Bundle", 
      price: "50",
      description: "Ideal for heavy users and families",
      features: [
        "Up to 500 Mbps",
        "Free router & installation",
        "Priority support", 
        "Unlimited data",
        "3 months free trial",
        "Free Wi-Fi extender"
      ],
      color: "bg-purple-600",
      textColor: "text-white",
      buttonColor: "bg-green-500 hover:bg-green-600",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-500 via-orange-500 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Get Started! Select your Internet Bundle
          </h2>
          <p className="text-lg sm:text-xl text-red-100 max-w-2xl mx-auto px-4">
            Choose the perfect plan that fits your lifestyle and budget
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`${plan.color} ${plan.textColor} p-6 sm:p-8 rounded-3xl border-0 shadow-2xl relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 sm:px-4 sm:py-2 rounded-bl-2xl font-bold text-xs sm:text-sm">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl sm:text-5xl font-black">${plan.price}</span>
                  <span className="text-lg sm:text-xl ml-2">USD</span>
                </div>
                <p className={`text-sm sm:text-base ${plan.textColor === 'text-white' ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="tel:+18336601996">
                <Button className={`w-full ${plan.buttonColor} text-white font-bold py-3 sm:py-4 rounded-full text-base sm:text-lg transform hover:scale-105 transition-all duration-200 shadow-lg`}>
                  BUY A BUNDLE
                </Button>
              </a>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <Signal className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400" />
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-red-100 text-xs sm:text-sm px-4">
            All plans include free installation • No contracts • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
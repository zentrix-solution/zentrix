import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useScrollToTopOnMount } from '@/hooks/useScrollToTopOnMount';
import { Check, Zap, Star, Crown, Building2, Rocket, Shield, Wifi, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  useScrollToTopOnMount();
  
  const [selectedPlan, setSelectedPlan] = useState('performance');

  const residentialPlans = [
    {
      id: 'essential',
      name: 'Essential',
      speed: '100 Mbps',
      price: 39.99,
      originalPrice: 49.99,
      description: 'Perfect for light browsing and streaming',
      features: [
        'Up to 100 Mbps download speed',
        'Up to 20 Mbps upload speed',
        'Suitable for 1-3 devices',
        'Basic WiFi router included',
        'Free installation',
        '24/7 customer support'
      ],
      color: 'from-blue-500 to-purple-600',
      popular: false
    },
    {
      id: 'performance',
      name: 'Performance',
      speed: '500 Mbps',
      price: 59.99,
      originalPrice: 79.99,
      description: 'Great for families and home offices',
      features: [
        'Up to 500 Mbps download speed',
        'Up to 100 Mbps upload speed',
        'Suitable for 3-8 devices',
        'Advanced WiFi 6 router included',
        'Free installation',
        'Priority customer support',
        'Security suite included'
      ],
      color: 'from-green-500 to-blue-600',
      popular: true
    },
    {
      id: 'gigabit',
      name: 'Gigabit Pro',
      speed: '1000 Mbps',
      price: 79.99,
      originalPrice: 99.99,
      description: 'Ultimate speed for power users',
      features: [
        'Up to 1000 Mbps download speed',
        'Up to 200 Mbps upload speed',
        'Unlimited devices',
        'Premium WiFi 6E router included',
        'Free professional installation',
        'Priority support with dedicated line',
        'Advanced security suite',
        'Mesh network expansion available'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: false
    }
  ];

  const businessPlans = [
    {
      id: 'business-basic',
      name: 'Business Basic',
      speed: '200 Mbps',
      price: 89.99,
      description: 'Reliable connectivity for small businesses',
      features: [
        'Up to 200 Mbps symmetrical speed',
        'Static IP address included',
        'Business-grade equipment',
        'Priority support',
        '99.9% uptime SLA',
        'Free installation & setup'
      ],
      employees: '1-5 employees'
    },
    {
      id: 'business-pro',
      name: 'Business Pro',
      speed: '500 Mbps',
      price: 149.99,
      description: 'Scalable solution for growing businesses',
      features: [
        'Up to 500 Mbps symmetrical speed',
        '5 static IP addresses',
        'Enterprise-grade equipment',
        'Dedicated account manager',
        '99.9% uptime SLA',
        'Advanced security features',
        'Cloud backup solutions'
      ],
      employees: '5-25 employees',
      popular: true
    },
    {
      id: 'business-elite',
      name: 'Business Elite',
      speed: '1000 Mbps',
      price: 199.99,
      description: 'Premium connectivity for larger operations',
      features: [
        'Up to 1000 Mbps symmetrical speed',
        'Block of 16 static IP addresses',
        'Redundant connections available',
        '24/7 dedicated support',
        '99.99% uptime SLA',
        'Complete security suite',
        'Managed IT services available'
      ],
      employees: '25+ employees'
    }
  ];

  const addOns = [
    { name: 'WiFi Mesh Expansion', price: 9.99, description: 'Extend coverage to every corner' },
    { name: 'Premium Security Suite', price: 14.99, description: 'Advanced threat protection' },
    { name: 'Cloud Backup (1TB)', price: 19.99, description: 'Secure cloud storage' },
    { name: 'VoIP Phone Service', price: 24.99, description: 'Crystal-clear business calls' },
    { name: 'Static IP Address', price: 5.99, description: 'For business applications' },
    { name: 'Priority Support', price: 9.99, description: 'Skip the queue with priority support' }
  ];

  const [activeTab, setActiveTab] = useState('residential');

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-8 transform rotate-2">
            TRANSPARENT PRICING
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Simple Pricing,
            <br />
            <span className="text-yellow-300">No Hidden Fees</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. All plans include free installation, 
            24/7 support, and no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-2 rounded-2xl flex">
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'residential'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Residential Plans
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'business'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Business Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Plans */}
      {activeTab === 'residential' && (
        <section className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                RESIDENTIAL PLANS
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Internet Plans for Every Home
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {residentialPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'ring-4 ring-purple-200 shadow-2xl bg-gradient-to-br from-purple-50 to-blue-50'
                      : 'hover:shadow-xl'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-purple-600 font-semibold mb-4">{plan.speed}</div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-gray-400 line-through text-lg mr-2">${plan.originalPrice}</span>
                        <span className="text-5xl font-black text-gray-900">${plan.price}</span>
                        <span className="text-gray-600 ml-1">/mo</span>
                      </div>
                      <div className="text-green-600 font-semibold text-sm">
                        Save ${(plan.originalPrice - plan.price).toFixed(2)} per month!
                      </div>
                    </div>

                    <p className="text-gray-600 mb-8">{plan.description}</p>

                    <a href="tel:+18336601996">
                      <Button
                        className={`w-full mb-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-200 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                        }`}
                      >
                        Choose {plan.name}
                      </Button>
                    </a>

                    <div className="space-y-4 text-left">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Business Plans */}
      {activeTab === 'business' && (
        <section className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block bg-green-100 text-green-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                BUSINESS PLANS
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Powerful Solutions for Business
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {businessPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'ring-4 ring-green-200 shadow-2xl bg-gradient-to-br from-green-50 to-blue-50'
                      : 'hover:shadow-xl'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                        RECOMMENDED
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-green-600 font-semibold mb-2">{plan.speed}</div>
                    <div className="text-gray-500 text-sm mb-4">{plan.employees}</div>
                    
                    <div className="mb-6">
                      <div className="text-5xl font-black text-gray-900 mb-2">${plan.price}</div>
                      <div className="text-gray-600">/month</div>
                    </div>

                    <p className="text-gray-600 mb-8">{plan.description}</p>

                    <a href="tel:+18336601996">
                      <Button
                        className={`w-full mb-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-200 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white'
                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                        }`}
                      >
                        Get Quote
                      </Button>
                    </a>

                    <div className="space-y-4 text-left">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              ENHANCE YOUR PLAN
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Optional Add-ons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customize your internet experience with our premium add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{addon.name}</h3>
                  <div className="text-2xl font-black text-purple-600">${addon.price}</div>
                </div>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <a href="tel:+18336601996">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl">
                    Add to Plan
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              COMPARE PLANS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              See What's Included
            </h2>
          </div>

          <Card className="p-8 rounded-3xl shadow-2xl overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 text-gray-900 font-bold">Features</th>
                  <th className="text-center py-4 text-gray-900 font-bold">Essential</th>
                  <th className="text-center py-4 text-gray-900 font-bold relative">
                    Performance
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">POPULAR</span>
                    </div>
                  </th>
                  <th className="text-center py-4 text-gray-900 font-bold">Gigabit Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Download Speed', '100 Mbps', '500 Mbps', '1000 Mbps'],
                  ['Upload Speed', '20 Mbps', '100 Mbps', '200 Mbps'],
                  ['Suitable Devices', '1-3', '3-8', 'Unlimited'],
                  ['WiFi Router', 'Basic', 'WiFi 6', 'WiFi 6E'],
                  ['Installation', 'Free', 'Free', 'Free Professional'],
                  ['Customer Support', '24/7', 'Priority', 'Dedicated Line'],
                  ['Security Suite', '✗', '✓', '✓ Advanced'],
                  ['Static IP', '✗', 'Add-on', 'Available'],
                  ['Price', '$39.99/mo', '$59.99/mo', '$79.99/mo']
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 font-semibold text-gray-900">{row[0]}</td>
                    <td className="text-center py-4 text-gray-600">{row[1]}</td>
                    <td className="text-center py-4 text-gray-600 bg-purple-50">{row[2]}</td>
                    <td className="text-center py-4 text-gray-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      {/* No Contract Promise */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🚫</div>
                <h3 className="text-2xl font-bold mb-2">No Contracts</h3>
                <p className="text-green-100">Cancel anytime without penalties</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No Hidden Fees</h3>
                <p className="text-green-100">Transparent pricing, no surprises</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Speed Guaranteed</h3>
                <p className="text-green-100">Get the speeds you pay for</p>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Switch to Better Internet?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who experience the Zentrix difference every day.
            </p>
            <a href="tel:+18336601996">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-200">
                Check Availability & Order Now
              </Button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useScrollToTopOnMount } from '@/hooks/useScrollToTopOnMount';
import { Home, Building2, Globe, Wifi, Cloud, Shield, Phone, Check, Heart, GraduationCap, ShoppingBag, Factory, Hotel, Landmark } from 'lucide-react';

export default function Solutions() {
  useScrollToTopOnMount();
  
  const solutions = [
    {
      title: "Residential Internet",
      description: "Fast, reliable internet for your home and family",
      features: ["Up to 1 Gigabit speeds", "No data caps", "24/7 support", "Easy installation"],
      icon: <Home className="w-20 h-20" />,
      color: "from-blue-500 to-purple-600",
      plans: [
        { name: "Essential", speed: "100 Mbps", price: "$39.99" },
        { name: "Performance", speed: "500 Mbps", price: "$59.99" },
        { name: "Gigabit", speed: "1000 Mbps", price: "$79.99" }
      ]
    },
    {
      title: "Business Solutions",
      description: "Powerful connectivity for small to medium businesses",
      features: ["Dedicated bandwidth", "Static IP addresses", "Priority support", "SLA guarantee"],
      icon: <Building2 className="w-20 h-20" />,
      color: "from-green-500 to-blue-600",
      plans: [
        { name: "Business Basic", speed: "200 Mbps", price: "$89.99" },
        { name: "Business Pro", speed: "500 Mbps", price: "$149.99" },
        { name: "Business Elite", speed: "1000 Mbps", price: "$199.99" }
      ]
    },
    {
      title: "Enterprise Solutions",
      description: "Scalable solutions for large organizations",
      features: ["Fiber-optic connectivity", "Redundant connections", "24/7/365 support", "Custom solutions"],
      icon: <Globe className="w-20 h-20" />,
      color: "from-purple-500 to-pink-600",
      plans: [
        { name: "Enterprise Starter", speed: "1 Gbps", price: "Custom" },
        { name: "Enterprise Pro", speed: "10 Gbps", price: "Custom" },
        { name: "Enterprise Max", speed: "100 Gbps", price: "Custom" }
      ]
    }
  ];

  const additionalServices = [
    {
      title: "WiFi Management",
      description: "Professional WiFi setup and management for optimal coverage",
      icon: <Wifi className="w-16 h-16" />,
      benefits: ["Whole-home coverage", "Mesh networking", "Security optimization", "Performance monitoring"]
    },
    {
      title: "Cloud Services",
      description: "Secure cloud storage and backup solutions",
      icon: <Cloud className="w-16 h-16" />,
      benefits: ["Automatic backups", "File synchronization", "Disaster recovery", "Scalable storage"]
    },
    {
      title: "Security Solutions",
      description: "Advanced cybersecurity to protect your network",
      icon: <Shield className="w-16 h-16" />,
      benefits: ["Firewall protection", "Threat monitoring", "VPN access", "Security audits"]
    },
    {
      title: "Voice Services",
      description: "Crystal-clear VoIP phone systems",
      icon: <Phone className="w-16 h-16" />,
      benefits: ["HD voice quality", "Unlimited calling", "Mobile app", "Advanced features"]
    }
  ];

  const industryIcons = {
    "Healthcare": <Heart className="w-12 h-12" />,
    "Education": <GraduationCap className="w-12 h-12" />,
    "Retail": <ShoppingBag className="w-12 h-12" />,
    "Manufacturing": <Factory className="w-12 h-12" />,
    "Hospitality": <Hotel className="w-12 h-12" />,
    "Finance": <Landmark className="w-12 h-12" />
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-8 transform rotate-1">
            OUR SOLUTIONS
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Internet Solutions for
            <br />
            <span className="text-yellow-300">Every Need</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            From residential homes to enterprise businesses, we have the perfect 
            connectivity solution tailored to your specific requirements.
          </p>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              CONNECTIVITY SOLUTIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Choose Your Perfect Plan
            </h2>
          </div>

          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                <div className="lg:w-1/2">
                  <Card className={`p-12 rounded-3xl bg-gradient-to-br ${solution.color} text-white transform hover:scale-105 transition-all duration-300`}>
                    <div className="text-center">
                      <div className="mb-6 flex justify-center">{solution.icon}</div>
                      <h3 className="text-3xl font-black mb-4">{solution.title}</h3>
                      <p className="text-xl text-white/90 mb-8">{solution.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {solution.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center">
                            <Check className="w-5 h-5 mr-3 text-white" />
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    {solution.plans.map((plan, pIndex) => (
                      <Card key={pIndex} className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                            <p className="text-gray-600">Up to {plan.speed}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-black text-purple-600">{plan.price}</div>
                            {plan.price !== "Custom" && <div className="text-gray-500 text-sm">/month</div>}
                          </div>
                          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full">
                            <Link to={plan.price === "Custom" ? "/contact" : "/pricing"}>
                              {plan.price === "Custom" ? "Get Quote" : "Select Plan"}
                            </Link>
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              ADDITIONAL SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Complete Your Digital Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your connectivity with our comprehensive suite of digital services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-center">
                  <div className="mb-6 flex justify-center text-purple-600">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 mr-2 text-green-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <a href="tel:+18336601996">
                    <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl">
                      Learn More
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              INDUSTRY EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Specialized Solutions by Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { industry: "Healthcare", needs: ["HIPAA compliance", "Secure data transfer", "Telemedicine support", "24/7 reliability"] },
              { industry: "Education", needs: ["High bandwidth", "Student device support", "Learning management", "Safe browsing"] },
              { industry: "Retail", needs: ["POS systems", "Inventory management", "Customer WiFi", "Security cameras"] },
              { industry: "Manufacturing", needs: ["IoT connectivity", "Real-time monitoring", "Supply chain integration", "Industrial protocols"] },
              { industry: "Hospitality", needs: ["Guest WiFi", "Property management", "Booking systems", "Entertainment services"] },
              { industry: "Finance", needs: ["Ultra-secure connections", "High-speed trading", "Backup systems", "Compliance support"] }
            ].map((item, index) => (
              <Card key={index} className="p-8 rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-center">
                  <div className="mb-6 flex justify-center text-purple-600">{industryIcons[item.industry as keyof typeof industryIcons]}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{item.industry}</h3>
                  <div className="space-y-3">
                    {item.needs.map((need, nIndex) => (
                      <div key={nIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 mr-3 text-purple-500" />
                        <span>{need}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Find Your Perfect Solution?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the right connectivity solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18336601996">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg">
                Get Custom Quote
              </Button>
            </a>
            <a href="tel:+18336601996">
              <Button className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full text-lg border border-white/30">
                Schedule Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
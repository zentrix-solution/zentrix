import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useScrollToTopOnMount } from '@/hooks/useScrollToTopOnMount';
import { Home, Building2, Globe, Wifi, Cloud, Shield, Phone, Check, Play } from 'lucide-react';

export default function Solutions() {
  useScrollToTopOnMount();
  
  const solutions = [
    {
      title: "Individual Streamer",
      description: "Perfect for singles and couples",
      features: ["300 Mbps Fiber Internet", "5+ streaming services", "Stream on 4 devices", "No contracts"],
      icon: <Home className="w-20 h-20" />,
      color: "from-blue-500 to-purple-600",
      plans: [
        { name: "Solo Streamer", speed: "300 Mbps + 3 Services", price: "$39.99" },
        { name: "Duo Bundle", speed: "500 Mbps + 5 Services", price: "$59.99" },
        { name: "Premium Duo", speed: "1 Gbps + 7 Services", price: "$79.99" }
      ]
    },
    {
      title: "Family Entertainment",
      description: "Built for families and shared households",
      features: ["Unlimited devices", "All premium streaming", "Live TV channels", "4K streaming"],
      icon: <Building2 className="w-20 h-20" />,
      color: "from-green-500 to-blue-600",
      plans: [
        { name: "Family Starter", speed: "500 Mbps + 8 Services", price: "$89.99" },
        { name: "Family Pro", speed: "1 Gbps + 10 Services", price: "$119.99" },
        { name: "Ultimate Family", speed: "1 Gbps + All Services + Live TV", price: "$149.99" }
      ]
    },
    {
      title: "Sports & Live TV",
      description: "For sports fans and live content lovers",
      features: ["150+ Live TV channels", "Sports packages included", "DVR cloud storage", "Multi-screen viewing"],
      icon: <Globe className="w-20 h-20" />,
      color: "from-purple-500 to-pink-600",
      plans: [
        { name: "Sports Lite", speed: "500 Mbps + Basic Sports", price: "$99.99" },
        { name: "Sports Pro", speed: "1 Gbps + Premium Sports", price: "$139.99" },
        { name: "Sports Ultimate", speed: "1 Gbps + All Sports + PPV", price: "$179.99" }
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Premium Add-Ons",
      description: "Enhance your streaming experience",
      icon: <Wifi className="w-16 h-16" />,
      benefits: ["Premium movie channels", "International content", "Ad-free upgrades", "Early access releases"]
    },
    {
      title: "Cloud DVR",
      description: "Record and watch on your schedule",
      icon: <Cloud className="w-16 h-16" />,
      benefits: ["500 hours storage", "Unlimited recordings", "Watch anywhere", "Keep for 1 year"]
    },
    {
      title: "Multi-Device Setup",
      description: "Stream on all your devices",
      icon: <Shield className="w-16 h-16" />,
      benefits: ["Smart TV setup", "Mobile apps", "Gaming console config", "Streaming stick included"]
    },
    {
      title: "Premium Support",
      description: "VIP customer service",
      icon: <Phone className="w-16 h-16" />,
      benefits: ["Priority phone support", "Live chat 24/7", "Tech setup help", "Streaming troubleshooting"]
    }
  ];

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
            Entertainment Plans for
            <br />
            <span className="text-yellow-300">Every Lifestyle</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            From cord-cutters to binge-watchers, we have the perfect high-speed internet plan with streaming access 
            that fits your entertainment needs and budget.
          </p>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              STREAMING BUNDLES
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Choose Your Perfect Bundle
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
              ENHANCE YOUR BUNDLE
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Upgrade Your Entertainment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Add premium channels, cloud DVR, and more to customize your streaming experience
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

      {/* Streaming Services Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              INCLUDED STREAMING SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              All Your Favorites in One Place
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access premium streaming platforms without paying separately for each subscription
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { service: "Netflix Premium", features: ["4K streaming", "Watch on 4 screens", "Unlimited movies & shows", "Download content"] },
              { service: "Hulu (No Ads)", features: ["Ad-free experience", "Entire content library", "Next-day TV episodes", "Hulu Originals"] },
              { service: "Disney+", features: ["Disney, Pixar, Marvel", "Star Wars content", "National Geographic", "Family profiles"] },
              { service: "HBO Max", features: ["HBO original series", "Warner Bros movies", "DC Universe", "Max Originals"] },
              { service: "Paramount+", features: ["CBS live stream", "Paramount movies", "Sports content", "Original shows"] },
              { service: "Live TV Package", features: ["150+ channels", "Local news & sports", "DVR included", "Watch anywhere"] }
            ].map((item, index) => (
              <Card key={index} className="p-8 rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{item.service}</h3>
                  <div className="space-y-3">
                    {item.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 mr-3 text-purple-500" />
                        <span>{feature}</span>
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
            Ready to Upgrade Your Entertainment?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands enjoying ultra-fast internet with premium streaming access. Get started today!
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
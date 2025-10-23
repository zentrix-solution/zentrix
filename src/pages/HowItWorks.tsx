import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useScrollToTopOnMount } from '@/hooks/useScrollToTopOnMount';
import { 
  MapPin, 
  ClipboardList, 
  Calendar, 
  Wrench, 
  Rocket, 
  Search, 
  Settings, 
  BarChart3, 
  Headphones, 
  Monitor, 
  Hammer, 
  Satellite,
  HelpCircle,
  Clock,
  Shield,
  Users,
  Check
} from 'lucide-react';

export default function HowItWorks() {
  useScrollToTopOnMount();
  
  const steps = [
    {
      step: "01",
      title: "Check Availability",
      description: "Enter your address to see what speeds and services are available in your area",
      icon: <MapPin className="w-12 h-12" />,
      details: [
        "Real-time coverage map",
        "Speed availability checker", 
        "Service area verification",
        "Infrastructure assessment"
      ]
    },
    {
      step: "02",
      title: "Choose Your Plan",
      description: "Select the perfect internet package that meets your speed and budget requirements",
      icon: <ClipboardList className="w-12 h-12" />,
      details: [
        "Customized recommendations",
        "Transparent pricing",
        "No hidden fees",
        "Flexible terms"
      ]
    },
    {
      step: "03", 
      title: "Schedule Installation",
      description: "Pick a convenient time for our certified technicians to set up your connection",
      icon: <Calendar className="w-12 h-12" />,
      details: [
        "Flexible scheduling",
        "2-hour time windows",
        "SMS/email reminders",
        "Rescheduling options"
      ]
    },
    {
      step: "04",
      title: "Professional Installation", 
      description: "Our expert team handles everything from fiber installation to equipment setup",
      icon: <Wrench className="w-12 h-12" />,
      details: [
        "Certified technicians",
        "Quality equipment", 
        "Clean installation",
        "Speed verification"
      ]
    },
    {
      step: "05",
      title: "Get Connected",
      description: "Start enjoying blazing-fast internet immediately after installation completion",
      icon: <Rocket className="w-12 h-12" />,
      details: [
        "Instant activation",
        "Network optimization",
        "Device connection help",
        "Speed testing"
      ]
    }
  ];

  const techSupport = [
    {
      issue: "Installation & Setup",
      icon: <Settings className="w-12 h-12" />,
      availability: "Free professional installation"
    },
    {
      issue: "Technical Support",
      icon: <Headphones className="w-12 h-12" />,
      availability: "24/7 expert assistance"
    },
    {
      issue: "Equipment Issues", 
      icon: <Monitor className="w-12 h-12" />,
      availability: "Free equipment replacement"
    },
    {
      issue: "Speed Optimization",
      icon: <BarChart3 className="w-12 h-12" />,
      availability: "Performance monitoring"
    },
    {
      issue: "Network Maintenance",
      icon: <Hammer className="w-12 h-12" />,
      availability: "Proactive maintenance"
    },
    {
      issue: "Signal Monitoring",
      icon: <Satellite className="w-12 h-12" />,
      availability: "Continuous monitoring"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-8 transform -rotate-1">
            SIMPLE PROCESS
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Getting Connected is
            <br />
            <span className="text-yellow-300">Easier Than Ever</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            From initial inquiry to enjoying blazing-fast internet, we've streamlined 
            every step to make your experience seamless and hassle-free.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              OUR PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              5 Simple Steps to Fast Internet
            </h2>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <Card className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mr-6">
                        <span className="text-white font-black text-xl">{step.step}</span>
                      </div>
                      <div className="text-purple-600">{step.icon}</div>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </Card>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="space-y-4">
                    {step.details.map((detail, dIndex) => (
                      <div key={dIndex} className="flex items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              INSTALLATION TIMELINE
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              From Order to Online in Days
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-300"></div>
            
            <div className="space-y-12">
              {[
                { day: "Day 1", title: "Order Confirmation", description: "Order processed and installation scheduled", icon: <ClipboardList className="w-8 h-8" /> },
                { day: "Day 2-3", title: "Site Survey", description: "Technical assessment and route planning", icon: <Search className="w-8 h-8" /> },
                { day: "Day 4-7", title: "Infrastructure Prep", description: "Fiber routing and equipment staging", icon: <Settings className="w-8 h-8" /> },
                { day: "Day 8", title: "Installation Day", description: "Professional installation and testing", icon: <Wrench className="w-8 h-8" /> },
                { day: "Day 8", title: "Go Live!", description: "Internet activated and ready to use", icon: <Rocket className="w-8 h-8" /> }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} max-w-md`}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center z-10 relative text-white">
                        {item.icon}
                      </div>
                    </div>
                    <Card className={`p-6 rounded-2xl ${index % 2 === 0 ? 'ml-8' : 'mr-8'} bg-white shadow-lg`}>
                      <div className="text-purple-600 font-bold text-sm mb-2">{item.day}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              ONGOING SUPPORT
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              We're Here When You Need Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment doesn't end at installation. We provide comprehensive support to keep you connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techSupport.map((support, index) => (
              <Card key={index} className="p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-center">
                  <div className="mb-6 flex justify-center text-purple-600">{support.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{support.issue}</h3>
                  <p className="text-purple-600 font-semibold">{support.availability}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              FREQUENTLY ASKED
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does installation typically take?",
                answer: "Most installations are completed within 2-4 hours, depending on the complexity of your setup and any special requirements."
              },
              {
                question: "Do I need to be home during installation?",
                answer: "Yes, we require someone 18 or older to be present during the entire installation process to provide access and approve the work."
              },
              {
                question: "What if there are issues after installation?",
                answer: "We provide 24/7 technical support and offer a 30-day satisfaction guarantee. If you're not happy, we'll make it right."
              },
              {
                question: "Can I keep my current email address?",
                answer: "Yes! We can help you transition your current email or set up a new one. We also provide email forwarding services during the transition."
              },
              {
                question: "What happens if I need to cancel?",
                answer: "We offer flexible contract terms with no early termination fees. Just give us 30 days notice and we'll handle the rest."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <HelpCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who made the switch to Zentrix Solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18336601996">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg">
                Check Availability
              </Button>
            </a>
            <a href="tel:+18336601996">
              <Button className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full text-lg border border-white/30">
                Schedule Installation
              </Button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
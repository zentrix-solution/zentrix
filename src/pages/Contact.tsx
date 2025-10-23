import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useScrollToTopOnMount } from '@/hooks/useScrollToTopOnMount';
import { Phone, Mail, MessageCircle, Building2, MapPin, Clock, User, Mail as MailIcon, Smartphone, MessageSquare, Wrench, BarChart3 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  useScrollToTopOnMount();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactMethods = [
    {
      title: "Call Us",
      description: "Speak with our friendly support team",
      info: "1-833-660-1996",
      icon: <Phone className="w-8 h-8" />,
      color: "bg-green-500"
    },
    {
      title: "Email Support",
      description: "Get help via email within 2 hours",
      info: "support@zentrixsolution.com",
      icon: <Mail className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      title: "Live Chat",
      description: "Chat with us in real-time",
      info: "Available 24/7 on our website",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "bg-purple-500"
    },
    {
      title: "Visit Our Office",
      description: "Come see us in person",
      info: "123 Tech Boulevard, Digital City",
      icon: <Building2 className="w-8 h-8" />,
      color: "bg-orange-500"
    }
  ];



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-8 transform -rotate-2">
            GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            We're Here to
            <br />
            <span className="text-yellow-300">Help You Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Questions about our services? Need technical support? Want to check availability in your area? 
            Our friendly team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              CONTACT OPTIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Choose Your Preferred Way to Reach Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-sm font-semibold text-purple-600">{method.info}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                SEND US A MESSAGE
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Let's Start the Conversation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <Card className="p-8 rounded-3xl shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Internet</option>
                        <option value="business">Business Solutions</option>
                        <option value="enterprise">Enterprise Packages</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-200">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Service Coverage Areas */}
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                COVERAGE
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Service Coverage Areas
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We proudly serve these communities with high-speed internet solutions.
              </p>

              <div className="space-y-6">
                <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Metropolitan Areas</h3>
                      <p className="text-gray-600 mb-2">Downtown, Midtown, and surrounding business districts</p>
                      <p className="text-green-600 font-semibold mb-1">Fiber Coverage: 98%</p>
                      <p className="text-sm text-gray-500">Speeds up to 1 Gbps available</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Suburban Communities</h3>
                      <p className="text-gray-600 mb-2">Residential neighborhoods and suburban developments</p>
                      <p className="text-blue-600 font-semibold mb-1">Fiber Coverage: 85%</p>
                      <p className="text-sm text-gray-500">Speeds up to 500 Mbps available</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Rural & Remote Areas</h3>
                      <p className="text-gray-600 mb-2">Expanding coverage to underserved communities</p>
                      <p className="text-purple-600 font-semibold mb-1">Coverage: 60% (Growing)</p>
                      <p className="text-sm text-gray-500">Speeds up to 100 Mbps available</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Coverage Check Tool */}
              <Card className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900">Check Your Address</h3>
                    <p className="text-purple-700">See what speeds are available at your location</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Enter your address..." 
                    className="flex-1 px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl">
                    Check Coverage
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              QUICK HELP
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6">
              Need Immediate Assistance?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-5xl mb-6">❓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Check Our FAQ</h3>
              <p className="text-gray-600 mb-6">Find answers to common questions about our services, billing, and technical support.</p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full">
                View FAQ
              </Button>
            </Card>

            <Card className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-purple-600 mb-6 flex justify-center">
                <Wrench className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Troubleshooting</h3>
              <p className="text-gray-600 mb-6">Step-by-step guides to resolve common connectivity issues quickly.</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full">
                Get Help
              </Button>
            </Card>

            <Card className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-purple-600 mb-6 flex justify-center">
                <BarChart3 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Status</h3>
              <p className="text-gray-600 mb-6">Check real-time network status and any ongoing maintenance in your area.</p>
              <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full">
                Check Status
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Experience Zentrix Speed?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who chose Zentrix Solution for their internet needs.
          </p>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-200">
            <Link to="/pricing">Check Availability Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
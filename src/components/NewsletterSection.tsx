import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Gift, Rocket } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 transform rotate-2">
              STAY CONNECTED
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Get the latest updates & exclusive offers
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Be the first to know about new service areas, speed upgrades, and special promotions. Plus, get tips to optimize your internet experience.
            </p>
            
            {/* Newsletter Form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-gray-500 text-sm mt-4 text-center">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>

          {/* Right Content - Benefits */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 rounded-2xl text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Weekly Tech Tips</h3>
                  <p className="text-purple-200 text-sm">Optimize your internet setup</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 rounded-2xl text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Exclusive Offers</h3>
                  <p className="text-purple-200 text-sm">Special discounts for subscribers</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 rounded-2xl text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Service Updates</h3>
                  <p className="text-purple-200 text-sm">New areas and speed upgrades</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-orange-400 rounded-full opacity-20 animate-ping"></div>
    </section>
  );
}
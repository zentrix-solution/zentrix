import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTopOnMount } from '@/hooks/useScrollToTopOnMount';
import { RefreshCw } from 'lucide-react';

export default function RefundPolicy() {
  useScrollToTopOnMount();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Refund Policy
          </h1>
          <p className="text-xl text-purple-100">
            Our commitment to customer satisfaction and refund procedures.
          </p>
          <p className="text-purple-200 mt-4">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            
            {/* Section 1 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">✅</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">30-Day Money-Back Guarantee</h2>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white text-2xl font-bold">30</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Days Risk-Free</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      We offer a 30-day money-back guarantee for new residential customers. If you're not 
                      completely satisfied with our service within the first 30 days, you can cancel and 
                      receive a full refund of your monthly service fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">📋</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Refund Eligibility</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">Refunds are available under the following conditions:</p>
              <div className="space-y-3">
                <div className="flex items-center bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Request must be made within 30 days of service activation</span>
                </div>
                <div className="flex items-center bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Account must be in good standing with no outstanding balances</span>
                </div>
                <div className="flex items-center bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">All equipment must be returned in good condition</span>
                </div>
                <div className="flex items-center bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Applicable to residential customers only</span>
                </div>
                <div className="flex items-center bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">First-time customers with Zentrix Solution</span>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold text-lg">❌</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Non-Refundable Fees</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">The following fees are non-refundable:</p>
              <div className="space-y-3">
                <div className="flex items-center bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Installation and setup fees</span>
                </div>
                <div className="flex items-center bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Equipment purchases (routers, modems sold separately)</span>
                </div>
                <div className="flex items-center bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Activation fees</span>
                </div>
                <div className="flex items-center bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Service calls and technician visits</span>
                </div>
                <div className="flex items-center bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Late payment fees and penalties</span>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">📤</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Equipment Return</h2>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border-l-4 border-orange-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  All leased equipment must be returned within 10 days of service cancellation. Equipment 
                  must be returned in original condition with normal wear and tear. If equipment is not 
                  returned or is damaged, you may be charged the full replacement cost.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">🏢</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Business and Enterprise Accounts</h2>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Business and enterprise accounts have different terms and may not be eligible for the 
                  standard 30-day money-back guarantee. Please refer to your service agreement or contact 
                  our business support team for specific refund policies.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-teal-600 font-bold text-lg">📝</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">How to Request a Refund</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">To request a refund:</p>
              <div className="space-y-4">
                <div className="flex items-start bg-teal-50 p-6 rounded-xl border border-teal-200">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Contact our customer service team</h3>
                    <p className="text-gray-600">Reach out via phone or email to initiate your refund request</p>
                  </div>
                </div>
                <div className="flex items-start bg-teal-50 p-6 rounded-xl border border-teal-200">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Provide account information and reason</h3>
                    <p className="text-gray-600">Share your account details and cancellation reason</p>
                  </div>
                </div>
                <div className="flex items-start bg-teal-50 p-6 rounded-xl border border-teal-200">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Schedule equipment pickup</h3>
                    <p className="text-gray-600">Arrange return of any leased equipment if applicable</p>
                  </div>
                </div>
                <div className="flex items-start bg-teal-50 p-6 rounded-xl border border-teal-200">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Wait for processing</h3>
                    <p className="text-gray-600">Allow 5-7 business days for refund processing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-bold text-lg">⏰</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Processing Time</h2>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Refunds are typically processed within 5-7 business days after we receive your 
                  cancellation request and returned equipment. Refunds will be credited to the original 
                  payment method used for the service.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">📞</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Contact for Refunds</h2>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Customer Service</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-green-100">refunds@zentrixsolution.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-green-100">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 flex items-start">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">🕒</span>
                    </div>
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-green-100">Monday-Friday 8AM-8PM, Saturday 9AM-5PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
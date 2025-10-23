import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTopOnMount } from '@/hooks/useScrollToTopOnMount';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
  useScrollToTopOnMount();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-purple-100">
            Please read these terms carefully before using our services.
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
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  By accessing and using Zentrix Solution's internet services, you accept and agree to be 
                  bound by the terms and provision of this agreement. If you do not agree to abide by 
                  the above, please do not use this service.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Service Description</h2>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Zentrix Solution provides high-speed internet connectivity services including residential, 
                  business, and enterprise solutions. Service availability and speeds may vary based on 
                  location and network conditions.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">3</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Service Terms</h2>
              </div>
              <div className="grid gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Services are provided on a month-to-month basis unless otherwise specified</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Installation and setup fees may apply</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Equipment must be returned upon service termination</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">You are responsible for protecting your network credentials</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Service may be suspended for non-payment or violation of terms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold text-lg">⚠️</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Acceptable Use Policy</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">You agree not to use our services for:</p>
              <div className="space-y-3">
                <div className="flex items-center bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Illegal activities or violation of any laws</span>
                </div>
                <div className="flex items-center bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Distributing malware, viruses, or harmful code</span>
                </div>
                <div className="flex items-center bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Spamming or sending unsolicited communications</span>
                </div>
                <div className="flex items-center bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Interfering with network operations or other users</span>
                </div>
                <div className="flex items-center bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-700">Excessive bandwidth usage that impacts other customers</span>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-lg">💳</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Payment Terms</h2>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Services are billed monthly in advance. Payment is due by the date specified on your 
                  invoice. Late payments may result in service suspension and additional fees. All fees 
                  are non-refundable unless otherwise specified.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">⚡</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Service Limitations</h2>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  While we strive to provide reliable service, internet connectivity may be affected by 
                  factors beyond our control including weather, equipment failure, or third-party network 
                  issues. We do not guarantee 100% uptime.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-bold text-lg">⏰</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Termination</h2>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border-l-4 border-gray-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Either party may terminate this agreement with 30 days written notice. We reserve the 
                  right to terminate service immediately for violation of terms or non-payment.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">📞</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Zentrix Solution</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-blue-100">legal@zentrixsolution.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-blue-100">(555) 123-4567</p>
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
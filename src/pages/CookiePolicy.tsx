import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTopOnMount } from '@/hooks/useScrollToTopOnMount';
import { Cookie } from 'lucide-react';

export default function CookiePolicy() {
  useScrollToTopOnMount();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Cookie className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-xl text-purple-100">
            Learn how we use cookies to improve your experience.
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
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">🍪</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What Are Cookies</h2>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border-l-4 border-orange-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you 
                  visit our website. They are widely used to make websites work more efficiently and to 
                  provide information to website owners.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">🔧</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">How We Use Cookies</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">We use cookies for several purposes:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600">Necessary for the website to function properly</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600">Help us understand how visitors use our website</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">⚙️</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-600">Remember your preferences and settings</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-600">Track visitors across websites to display relevant ads</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">📝</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-white text-2xl">⏱️</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Session Cookies</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        These cookies are temporary and are deleted when you close your browser. They help us 
                        maintain your session as you navigate through our website.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-white text-2xl">💾</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Persistent Cookies</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        These cookies remain on your device until they expire or you delete them. They help us 
                        remember your preferences for future visits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-lg">🔗</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Third-Party Cookies</h2>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  We may also use third-party services such as Google Analytics, which may set their own 
                  cookies. These services have their own privacy policies and cookie policies.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">🎛️</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Managing Cookies</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">You can control cookies through your browser settings:</p>
              <div className="space-y-3">
                <div className="flex items-center bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Accept or reject all cookies</span>
                </div>
                <div className="flex items-center bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Delete existing cookies</span>
                </div>
                <div className="flex items-center bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Set your browser to ask before accepting cookies</span>
                </div>
                <div className="flex items-center bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Block third-party cookies</span>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 p-6 rounded-xl border border-amber-200">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white text-sm">!</span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Please note that blocking certain cookies may impact your experience on our website and 
                    limit the functionality available to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">🔄</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Updates to This Policy</h2>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-l-4 border-green-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in technology, 
                  legislation, or our business practices. We will notify you of any significant changes.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">📞</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
              </div>
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Zentrix Solution</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-orange-100">privacy@zentrixsolution.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-orange-100">(555) 123-4567</p>
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
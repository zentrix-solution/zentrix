import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you ensure brand consistency across posts?",
      answer: "We maintain strict brand guidelines and use advanced AI tools to ensure every piece of content aligns with your brand voice, visual identity, and messaging strategy."
    },
    {
      question: "What formats do you offer for social content?",
      answer: "We create content for all major platforms including Instagram posts, Stories, Reels, TikTok videos, LinkedIn articles, Twitter threads, and Facebook posts."
    },
    {
      question: "Do you offer industry-specific content?",
      answer: "Yes! We specialize in creating tailored content for various industries including tech, healthcare, finance, retail, and more. Our team understands industry-specific trends and regulations."
    },
    {
      question: "Can I get exclusive templates?",
      answer: "Absolutely! Premium subscribers get access to exclusive templates, custom brand assets, and priority support for template requests."
    },
    {
      question: "How fast will I get my posts?",
      answer: "Standard turnaround is 24-48 hours for most content. Rush orders can be completed in as little as 4-6 hours for premium subscribers."
    },
    {
      question: "Can I get website templates?",
      answer: "Yes! We offer a comprehensive library of website templates, landing pages, and web components that match your brand aesthetic."
    }
  ];

  const testimonials = [
    {
      text: "Zentrix Solution transformed our office connectivity. We went from constant dropouts to blazing-fast, reliable internet that keeps our team productive.",
      author: "Sarah Chen, Marketing Director"
    },
    {
      text: "The installation was incredibly fast - they had us up and running in under 2 hours. The customer service is outstanding!",
      author: "Mike Rodriguez, Small Business Owner"
    },
    {
      text: "Finally, an ISP that delivers on their promises. Our streaming and gaming experience has never been better.",
      author: "Jessica Park, Content Creator"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Praises? We've Collected A Few 😊
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors duration-300">
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="text-green-400 font-semibold text-sm">{testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - FAQ Header */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Have more questions? We've got you! 🤝
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our support team is here to help you get the most out of your internet experience.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
              CONTACT SUPPORT
            </Button>
          </div>

          {/* Right side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left p-6 hover:bg-gray-800 transition-colors duration-200 flex justify-between items-center"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <div className={`transform transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
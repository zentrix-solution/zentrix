import { Button } from '@/components/ui/button';
import { ClipboardList, FileText, Rocket, Hand } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Choose your bundle",
      description: "Select the perfect internet plan that fits your needs and budget.",
      icon: ClipboardList
    },
    {
      number: "2", 
      title: "Fill out questionnaire",
      description: "Complete our quick form with your address and preferences.",
      icon: FileText
    },
    {
      number: "3",
      title: "Post so you please",
      description: "Get connected within 24 hours and start enjoying blazing-fast internet.",
      icon: Rocket
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-100 to-purple-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white rounded-2xl p-6 shadow-lg mb-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              YOU JUST ORDERED A BUNDLE!
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <Hand className="w-6 h-6 text-gray-600" />
              <span className="text-lg text-gray-600">Here's what happens next...</span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {step.number}
                </div>
                <div className="text-purple-500 mb-4 flex justify-center">
                  <step.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="text-4xl text-purple-400">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            I'm intrigued. How does this work?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to experience lightning-fast internet? Let's get you connected!
          </p>
          <Button className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
            CHECK OUT PLANS
          </Button>
        </div>
      </div>

      {/* Decorative ticket */}
      <div className="absolute bottom-10 left-10 bg-white rounded-lg p-4 shadow-lg transform -rotate-12 hidden lg:block">
        <div className="border-t-2 border-dashed border-gray-300 pt-2">
          <div className="text-xs text-gray-500 mb-1">ZENTRIX SOLUTION</div>
          <div className="text-sm font-bold">FAST TRACK TICKET</div>
          <div className="text-xs text-gray-500">EST. 24 HOURS</div>
        </div>
      </div>
    </section>
  );
}
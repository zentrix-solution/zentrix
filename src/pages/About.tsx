import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useScrollToTopOnMount } from '@/hooks/useScrollToTopOnMount';
import { User, Monitor, GraduationCap, Wrench, Zap, Diamond, Home, Rocket, Check, Globe, Target, Users, Award } from 'lucide-react';

export default function About() {
  useScrollToTopOnMount();
  
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      icon: <User className="w-16 h-16" />,
      bio: "15+ years in telecommunications, passionate about connecting communities"
    },
    {
      name: "Mike Rodriguez",
      role: "CTO",
      icon: <Monitor className="w-16 h-16" />,
      bio: "Network infrastructure expert, building the future of fiber optics"
    },
    {
      name: "Jessica Park",
      role: "Head of Customer Success",
      icon: <GraduationCap className="w-16 h-16" />,
      bio: "Dedicated to ensuring every customer has an exceptional experience"
    },
    {
      name: "David Kim",
      role: "Network Operations Manager",
      icon: <Wrench className="w-16 h-16" />,
      bio: "Keeping our network running 24/7 with 99.9% uptime guarantee"
    }
  ];

  const milestones = [
    { year: "2018", event: "Zentrix Solution founded with a vision to democratize high-speed internet" },
    { year: "2019", event: "First fiber network deployed, serving 1,000 customers" },
    { year: "2020", event: "Expanded to 5 cities, 10,000+ happy customers" },
    { year: "2021", event: "Launched enterprise solutions, 99.9% uptime achieved" },
    { year: "2022", event: "50,000+ customers milestone, award for Best Regional ISP" },
    { year: "2023", event: "Gigabit speeds available, expanded to 15 cities" },
    { year: "2024", event: "100,000+ customers, leading innovation in rural connectivity" }
  ];

  const values = [
    {
      title: "Speed Without Compromise",
      description: "We believe everyone deserves lightning-fast internet, not just those in major cities.",
      icon: <Zap className="w-12 h-12" />
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, no surprise charges. What you see is what you pay.",
      icon: <Diamond className="w-12 h-12" />
    },
    {
      title: "Community First",
      description: "We're not just an ISP, we're your neighbors invested in your success.",
      icon: <Home className="w-12 h-12" />
    },
    {
      title: "Innovation Driven",
      description: "Constantly upgrading our infrastructure to stay ahead of tomorrow's needs.",
      icon: <Rocket className="w-12 h-12" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-8 transform rotate-2">
            OUR STORY
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Connecting Communities,
            <br />
            <span className="text-yellow-300">One Fiber at a Time</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            We started with a simple belief: everyone deserves access to fast, reliable internet. 
            Today, we're making that vision a reality across the region.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                OUR MISSION
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Bridging the Digital Divide
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our mission is to provide lightning-fast, reliable internet access to underserved communities, 
                empowering businesses, families, and individuals to thrive in the digital age.
              </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Affordable high-speed internet for all</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Supporting local economic growth</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Exceptional customer service</span>
                  </div>
                </div>
            </div>
            <div className="relative">
              <Card className="p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading internet service provider that transforms communities through 
                    innovative technology, reliable connectivity, and unwavering commitment to customer success.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              OUR JOURNEY
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Growing Together Since 2018
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-black text-purple-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              MEET THE TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              The People Behind Your Connection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of experts is dedicated to keeping you connected
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-purple-600 font-semibold mb-4">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Join Our Growing Community?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Experience the Zentrix difference. Fast speeds, reliable service, and local support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18336601996">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg">
                Check Availability
              </Button>
            </a>
            <a href="tel:+18336601996">
              <Button className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full text-lg border border-white/30">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function CoverageMap() {
  const cities = [
    { name: "Downtown", status: "Available", color: "bg-green-500" },
    { name: "Suburbs", status: "Available", color: "bg-green-500" },
    { name: "Industrial", status: "Available", color: "bg-green-500" },
    { name: "Riverside", status: "Coming Soon", color: "bg-yellow-500" },
    { name: "Hillside", status: "Coming Soon", color: "bg-yellow-500" },
    { name: "Eastside", status: "Planning", color: "bg-gray-400" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              COVERAGE AREA
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Expanding across the region
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're rapidly expanding our fiber network to bring high-speed internet to more communities. Check if we're available in your area or coming soon!
            </p>
            
            <div className="space-y-4 mb-8">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 ${city.color} rounded-full mr-4`}></div>
                    <span className="font-semibold text-gray-900">{city.name}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    city.status === 'Available' ? 'bg-green-100 text-green-600' :
                    city.status === 'Coming Soon' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {city.status}
                  </span>
                </div>
              ))}
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
              Check Your Address
            </Button>
          </div>

          {/* Right Content - Map Visualization */}
          <div className="relative">
            <Card className="p-8 rounded-3xl border-0 shadow-2xl bg-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Service Coverage Map</h3>
                <p className="text-gray-600">Real-time network status</p>
              </div>
              
              {/* Mock Map */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-64 overflow-hidden">
                {/* Network nodes */}
                <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-yellow-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-purple-600 rounded-full animate-pulse shadow-lg transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse"/>
                  <line x1="66%" y1="33%" x2="50%" y2="50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse"/>
                  <line x1="33%" y1="66%" x2="50%" y2="50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse"/>
                </svg>
                
                {/* Center hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <span className="text-purple-600 font-bold text-xs">HUB</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Active</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Expanding</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                  <span className="text-gray-600">Planned</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
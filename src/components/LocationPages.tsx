
import { MapPin, Phone, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LocationPages = () => {
  const locations = [
    {
      city: "Bangalore",
      area: "Koramangala",
      address: "123 Cloud Street, Koramangala, Bangalore - 560034",
      phone: "+91-9876543210",
      timing: "Mon-Sat: 9:00 AM - 8:00 PM",
      students: "1500+",
      landmarks: ["Near Koramangala Metro Station", "Opposite to Forum Mall", "5 min from Sony Signal"]
    },
    {
      city: "Bangalore", 
      area: "Rajajinagar",
      address: "456 Tech Avenue, Rajajinagar, Bangalore - 560010",
      phone: "+91-9876543211",
      timing: "Mon-Sat: 9:00 AM - 8:00 PM", 
      students: "800+",
      landmarks: ["Near Rajajinagar Metro", "Close to Orion Mall", "Walking distance from Yeshwantpur"]
    },
    {
      city: "Bangalore",
      area: "BTM Layout",
      address: "789 Learning Hub, BTM Layout, Bangalore - 560076", 
      phone: "+91-9876543212",
      timing: "Mon-Sat: 9:00 AM - 8:00 PM",
      students: "600+",
      landmarks: ["Near Silk Board Junction", "Close to BTM Bus Stop", "5 min from Jayadeva Hospital"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Training Centers in <span className="text-blue-600">Bangalore</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the nearest SitCloud training center for hands-on cloud computing education
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {location.area}, {location.city}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <p className="text-gray-600">{location.address}</p>
                    
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{location.phone}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{location.timing}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{location.students} Students Trained</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Nearby Landmarks:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {location.landmarks.map((landmark, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {landmark}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Directions
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationPages;


import { MapPin, Phone, Clock, Star, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TrainingCenters = () => {
  const centers = [
    {
      name: "T. Nagar, Chennai",
      address: "456 Tech Avenue, T. Nagar, Chennai - 600017",
      phone: "+91 9876543210",
      specialization: "AWS & Azure Specialization Center",
      landmarks: ["Near T. Nagar Metro Station", "Opposite Express Avenue Mall", "5 min from Pondy Bazaar"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      students: "1200+"
    },
    {
      name: "Rajajinagar, Bangalore", 
      address: "456 Tech Avenue, Rajajinagar, Bangalore - 560010",
      phone: "+91 9876543211",
      specialization: "Multi-Cloud Training Hub",
      landmarks: ["Near Rajajinagar Metro", "Close to Orion Mall", "Walking distance from Yeshwantpur"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
      students: "800+"
    },
    {
      name: "Koramangala, Bangalore",
      address: "123 Cloud Street, Koramangala, Bangalore - 560034", 
      phone: "+91 9876543212",
      specialization: "GCP & DevOps Excellence Center",
      landmarks: ["Near Koramangala Metro Station", "Opposite Forum Mall", "5 min from Sony Signal"],
      image: "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=400&h=250&fit=crop",
      students: "1500+"
    }
  ];

  return (
    <section id="training-centers" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              <MapPin className="mr-2 h-4 w-4" />
              Our Training Centers
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Learning Centers in <span className="text-blue-600">Chennai & Bangalore</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities with hands-on labs, expert faculty, and comprehensive placement support across multiple locations.
            </p>
          </div>

          {/* Centers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {centers.map((center, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg">
                {/* Center Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={center.image} 
                    alt={center.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {center.students} Students
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    {center.name}
                  </CardTitle>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {center.specialization}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Address & Contact */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>{center.address}</p>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="font-medium">{center.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-600 mr-2" />
                      <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
                    </div>
                  </div>

                  {/* Landmarks */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Nearby Landmarks:</h4>
                    <ul className="space-y-1">
                      {center.landmarks.map((landmark, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {landmark}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2 pt-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50">
                      📞 Call Center
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Can't Visit Our Centers? No Problem!
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our live online classes with the same quality training, hands-on labs, and placement support from anywhere in India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  📹 Join Online Classes
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  📋 View Online Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCenters;

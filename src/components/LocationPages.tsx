
import { MapPin, Phone, Clock, Users, Calendar, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LocationPages = () => {
  const locations = [
    {
      city: "Chennai",
      area: "T. Nagar",
      address: "456 Tech Avenue, T. Nagar, Chennai - 600017",
      phone: "+91-9876543210",
      timing: "Mon-Sat: 9:00 AM - 8:00 PM",
      students: "1200+",
      landmarks: ["Near T. Nagar Metro Station", "Opposite to Express Avenue", "5 min from Pondy Bazaar"],
      specialities: ["AWS Certification Hub", "Azure Training Center", "GCP Bootcamp Campus"]
    },
    {
      city: "Bangalore", 
      area: "Rajajinagar",
      address: "456 Tech Avenue, Rajajinagar, Bangalore - 560010",
      phone: "+91-9876543211",
      timing: "Mon-Sat: 9:00 AM - 8:00 PM", 
      students: "800+",
      landmarks: ["Near Rajajinagar Metro", "Close to Orion Mall", "Walking distance from Yeshwantpur"],
      specialities: ["Multi-Cloud Training", "DevOps Certification", "Advanced Cloud Architecture"]
    },
    {
      city: "Bangalore",
      area: "Koramangala",
      address: "123 Cloud Street, Koramangala, Bangalore - 560034",
      phone: "+91-9876543212",
      timing: "Mon-Sat: 9:00 AM - 8:00 PM",
      students: "1500+",
      landmarks: ["Near Koramangala Metro Station", "Opposite to Forum Mall", "5 min from Sony Signal"],
      specialities: ["Premium Training Center", "Industry Partnerships", "Placement Hub"]
    }
  ];

  const upcomingBatches = [
    {
      course: "AWS Solutions Architect",
      location: "Chennai",
      startDate: "June 10, 2025",
      duration: "6 Weeks",
      mode: "Hybrid",
      seatsLeft: 5
    },
    {
      course: "Azure Fundamentals",
      location: "Bangalore",
      startDate: "June 12, 2025", 
      duration: "3 Weeks",
      mode: "Offline",
      seatsLeft: 7
    },
    {
      course: "GCP Professional",
      location: "Chennai",
      startDate: "June 15, 2025",
      duration: "8 Weeks", 
      mode: "Online",
      seatsLeft: 3
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Training Centers in <span className="text-blue-600">Chennai & Bangalore</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find the nearest SitCloud training center for hands-on cloud computing education. Choose your preferred city for certification bootcamps.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-blue-600 fill-current" />
                <span className="text-blue-800 text-sm font-semibold">Multi-Cloud Certifications</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-green-800 text-sm font-semibold">Industry Expert Faculty</span>
              </div>
            </div>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600 group">
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

                  {/* Specialities */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.specialities.map((spec, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
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

                  <Button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors group-hover:scale-105 transform duration-200">
                    Get Directions & Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upcoming Batches */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Upcoming Certification Batches
              </h3>
              <p className="text-gray-600 text-lg">
                Secure your seat in our next certification bootcamp
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {upcomingBatches.map((batch, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-gray-900">{batch.course}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      batch.seatsLeft <= 3 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {batch.seatsLeft} seats left
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{batch.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{batch.startDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{batch.duration} • {batch.mode}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 text-sm">
                    Enroll Now
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View All Upcoming Batches
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationPages;


import { ArrowRight, Play, Star, Users, Award, CheckCircle, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Star className="mr-2 h-4 w-4 fill-current" />
                #1 Cloud Training Institute in Chennai & Bangalore
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best Cloud Computing
                <br />
                <span className="text-yellow-400">Certification Bootcamp</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl text-blue-200">in Chennai & Bangalore</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
                Get industry-ready with comprehensive certification training in <span className="text-yellow-400 font-bold">AWS, Azure & GCP</span>. 
                Join 2000+ successful cloud professionals with 100% placement guarantee.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">Multi-Cloud Certifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">100% Placement Assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">Industry Expert Trainers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">Live Project Training</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 9876543210
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Free Demo Class
                </Button>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-blue-100">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span>Chennai: T. Nagar | Bangalore: Rajajinagar</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span>Online & Offline Classes Available</span>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Stats Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose SitCloud?</h3>
                <p className="text-gray-600">India's leading multi-cloud certification institute</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">2000+</div>
                  <div className="text-gray-600 text-sm">Students Certified</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                  <div className="text-gray-600 text-sm">Pass Rate</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">₹8.5L</div>
                  <div className="text-gray-600 text-sm">Avg. Package</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-1">3</div>
                  <div className="text-gray-600 text-sm">Cloud Platforms</div>
                </div>
              </div>

              {/* Enhanced Form */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Get Free Career Counseling</h4>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Preferred Location</option>
                    <option value="chennai">Chennai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="online">Online</option>
                  </select>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                    Get Free Demo Class
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

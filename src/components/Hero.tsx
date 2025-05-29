
import { ArrowRight, Play, Star, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-25 animate-bounce delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Trending Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-semibold mb-8 animate-fade-in border border-green-200">
              <TrendingUp className="mr-2 h-4 w-4" />
              🔥 98% Placement Rate | Join 2000+ Success Stories
              <Star className="ml-2 h-4 w-4 text-yellow-500 fill-current" />
            </div>

            {/* Hero Title with Gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Transform Your Career
              </span>
              <br />
              <span className="text-gray-900">in Just 90 Days!</span>
            </h1>

            {/* Power Statement */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto border border-white/50 shadow-xl">
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                From <span className="text-red-600 font-bold">Fresher to Cloud Engineer</span> with India's most 
                <span className="text-blue-600 font-bold"> comprehensive AWS, Azure & GCP</span> internship program
              </p>
            </div>

            {/* Key Benefits Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/90 rounded-xl p-4 shadow-lg border border-blue-100">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">Industry Certified</div>
                <div className="text-gray-600">Real Projects & Mentorship</div>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-lg border border-green-100">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">Job Guarantee</div>
                <div className="text-gray-600">100% Placement Assistance</div>
              </div>
              <div className="bg-white/90 rounded-xl p-4 shadow-lg border border-purple-100">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">₹8L+ Package</div>
                <div className="text-gray-600">Average Starting Salary</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                🚀 Start Your Journey - Apply Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>

            {/* Live Stats Dashboard */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 max-w-4xl mx-auto text-white shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">2000+</div>
                  <div className="text-gray-300">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                  <div className="text-gray-300">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">₹8.5L</div>
                  <div className="text-gray-300">Avg. Package</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-gray-300">Partner Companies</div>
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

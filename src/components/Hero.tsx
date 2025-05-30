
import { ArrowRight, Play, Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-10 blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-8 border border-green-200">
              <TrendingUp className="mr-2 h-4 w-4" />
              98% Placement Rate • 2000+ Success Stories
              <Star className="ml-2 h-4 w-4 text-green-600 fill-current" />
            </div>

            {/* Clean Hero Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-900">
              Master Cloud Engineering
              <br />
              <span className="text-blue-600">in 90 Days</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-12 max-w-4xl mx-auto">
              From fresher to certified cloud professional with comprehensive training in 
              <span className="text-blue-600 font-semibold"> AWS, Azure & GCP</span>
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                <Award className="h-6 w-6 text-blue-600" />
                <span className="text-slate-700 font-medium">Industry Certified</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                <Users className="h-6 w-6 text-green-600" />
                <span className="text-slate-700 font-medium">Job Guarantee</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                <TrendingUp className="h-6 w-6 text-purple-600" />
                <span className="text-slate-700 font-medium">₹8L+ Package</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-lg border-slate-300 text-slate-700 hover:bg-slate-50">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">2000+</div>
                  <div className="text-slate-600 text-sm">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
                  <div className="text-slate-600 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">₹8.5L</div>
                  <div className="text-slate-600 text-sm">Avg. Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
                  <div className="text-slate-600 text-sm">Companies</div>
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

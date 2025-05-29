
import { Star, Quote, Briefcase, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Cloud Engineer at TCS",
      package: "₹12 LPA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "SitCloud transformed my career completely! From a non-IT background to landing a ₹12 LPA job at TCS in just 90 days. The hands-on AWS training was incredible!",
      rating: 5,
      company: "TCS"
    },
    {
      name: "Rahul Kumar",
      role: "DevOps Engineer at Infosys",
      package: "₹9.5 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The Azure and GCP training at SitCloud gave me the edge I needed. The mentors are industry experts who genuinely care about your growth.",
      rating: 5,
      company: "Infosys"
    },
    {
      name: "Sneha Patel",
      role: "Cloud Architect at Wipro",
      package: "₹15 LPA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The AI specialization program was a game-changer! Now I'm working on cutting-edge ML projects at Wipro. Best investment I ever made!",
      rating: 5,
      company: "Wipro"
    },
    {
      name: "Amit Singh",
      role: "Junior Cloud Engineer at Accenture",
      package: "₹8 LPA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "From fresher to cloud engineer in 90 days! The placement support was amazing - they prepared me for every interview round.",
      rating: 5,
      company: "Accenture"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Star className="mr-2 h-4 w-4 fill-current" />
              Success Stories That Inspire
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Zero to <span className="text-blue-600">Cloud Hero</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our alumni who transformed their careers and landed dream jobs at top companies
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-blue-200 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Profile */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-100"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-blue-600 font-medium">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {testimonial.package}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Join the Success Revolution! 🎉
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Briefcase className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">2000+</div>
                  <div className="text-blue-100">Students Placed</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <TrendingUp className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">₹8.5L</div>
                  <div className="text-blue-100">Average Package</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Star className="h-8 w-8 fill-current" />
                <div>
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-blue-100">Student Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

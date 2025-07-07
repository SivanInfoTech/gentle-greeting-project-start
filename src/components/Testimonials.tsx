import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote, Trophy, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Cloud Solutions Architect",
      company: "Amazon Web Services",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b6ae?w=200&h=200&fit=crop&crop=face",
      testimonial: "Sivan InfoTech transformed my career completely. I went from a non-IT background to landing a role at AWS.",
      salary: "₹12L"
    },
    {
      name: "Rajesh Kumar", 
      role: "DevOps Engineer",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      testimonial: "The instructors are industry experts who provide practical insights. Highly recommend for cloud computing.",
      salary: "₹15L"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              <Users className="mr-2 h-4 w-4" />
              Student Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Stories, <span className="text-primary">Real Success</span>
            </h2>
          </div>

          <div className="relative mb-16">
            <Card className="max-w-4xl mx-auto shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
                  <p className="text-lg text-gray-700 mb-6">
                    "{testimonials[currentTestimonial]?.testimonial}"
                  </p>
                  
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[currentTestimonial]?.image}
                      alt={testimonials[currentTestimonial]?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial]?.name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial]?.role}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {testimonials[currentTestimonial]?.company} • {testimonials[currentTestimonial]?.salary}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
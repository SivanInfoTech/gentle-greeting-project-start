import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote, Trophy, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sowmiya Ganesan",
      company: "HTC",
      email: "sowmiya.ganesan@htcinc.com",
      date: "2025-07-03",
      score: 10,
      testimonial: "The AWS training was comprehensive and well-structured, with knowledgeable instructors and valuable content.",
      image: "https://ui-avatars.com/api/?name=Sowmiya+Ganesan&background=3b82f6&color=fff&size=200"
    },
    {
      name: "Vignesh J",
      company: "Verizon",
      email: "vignesh.x@verizonconnect.com",
      date: "2025-07-03",
      score: 10,
      testimonial: "Staffs are good and co-operative. They are teaching very clearly and very professional.",
      image: "https://ui-avatars.com/api/?name=Vignesh+J&background=10b981&color=fff&size=200"
    },
    {
      name: "Saikiran Jagiri",
      company: "Williams Lea",
      email: "jagiri.saikiran@williamslea.com",
      date: "2025-07-02",
      score: 10,
      testimonial: "AWS training was incredibly valuable — well structured, hands-on, and packed with real-world use cases.",
      image: "https://ui-avatars.com/api/?name=Saikiran+Jagiri&background=8b5cf6&color=fff&size=200"
    },
    {
      name: "Raghul Veerappan",
      company: "Movate Technologies, Chennai",
      email: "raghul.veerappan01@movate.com",
      date: "2025-07-03",
      score: 9,
      testimonial: "The curated course contents and real-time industry-based trainings are good and informative for practical learning.",
      image: "https://ui-avatars.com/api/?name=Raghul+Veerappan&background=f59e0b&color=fff&size=200"
    },
    {
      name: "Prasanth Kusal",
      company: "Tata Consultancy Services",
      email: "prasa.10@tcs.com",
      date: "2025-07-03",
      score: 9,
      testimonial: "I completed the AWS training program at Sivan Infotech recently. It was a productive experience, combining hands-on labs and theory.",
      image: "https://ui-avatars.com/api/?name=Prasanth+Kusal&background=ef4444&color=fff&size=200"
    },
    {
      name: "Naveenkumar S",
      company: "HTC Global Services",
      email: "naveenkumar.s@htcinc.com",
      date: "2025-07-02",
      score: 8,
      testimonial: "I have attended the AWS bootcamp. It is well demonstrated and gives good insights into core AWS services.",
      image: "https://ui-avatars.com/api/?name=Naveenkumar+S&background=06b6d4&color=fff&size=200"
    },
    {
      name: "Mohan Raj",
      company: "Emergere Computing Solution Pvt. Ltd.",
      email: "mohan.raj@emergertech.com",
      date: "2025-07-02",
      score: 10,
      testimonial: "The training was so innovative, informative, and instructive; linking our minds to ideas, possibilities, and industry expectations.",
      image: "https://ui-avatars.com/api/?name=Mohan+Raj&background=84cc16&color=fff&size=200"
    },
    {
      name: "Narasimhan Gunasekaran",
      company: "HTC Global Services",
      email: "narasimhan.g@htcinc.com",
      date: "2025-07-02",
      score: 10,
      testimonial: "I referred my friend who underwent the AWS Bootcamp course and it is completely aligned with AWS industry practices.",
      image: "https://ui-avatars.com/api/?name=Narasimhan+Gunasekaran&background=f97316&color=fff&size=200"
    },
    {
      name: "Sindhuja K",
      company: "AparinnosysLLP",
      email: "sindhuja.kuppuswamy@aparinnosys.com",
      date: "2025-07-03",
      score: 8,
      testimonial: "The AWS training was comprehensive and well-structured, with knowledgeable instructors and valuable content.",
      image: "https://ui-avatars.com/api/?name=Sindhuja+K&background=ec4899&color=fff&size=200"
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
                    {[...Array(Math.floor(testimonials[currentTestimonial]?.score / 2))].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm font-semibold text-gray-600">
                      {testimonials[currentTestimonial]?.score}/10
                    </span>
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
                        {testimonials[currentTestimonial]?.company}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonials[currentTestimonial]?.date} • Score: {testimonials[currentTestimonial]?.score}/10
                      </p>
                      <p className="text-xs text-gray-400">
                        {testimonials[currentTestimonial]?.email}
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
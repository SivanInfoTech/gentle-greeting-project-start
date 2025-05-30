
import { Cloud, GraduationCap, Users, BookOpen, Star, Clock, Award, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: '90-Day Cloud Mastery',
      description: 'Complete transformation from fresher to industry-ready cloud professional with guaranteed placement.',
      features: ['AWS • Azure • GCP Certification', 'Real Industry Projects', 'Live Mentorship Sessions', '100% Job Guarantee'],
      price: '₹15,000',
      originalPrice: '₹25,000',
      duration: '90 Days',
      rating: 4.9,
      students: '1200+',
      popular: true
    },
    {
      icon: GraduationCap,
      title: 'AI-Cloud Integration',
      description: 'Master AI/ML integration with cloud platforms. Build intelligent applications and stand out in the market.',
      features: ['AI/ML on AWS/Azure', 'Model Deployment', 'Data Engineering', 'MLOps Pipeline'],
      price: '₹25,000',
      originalPrice: '₹40,000',
      duration: '120 Days',
      rating: 4.8,
      students: '800+',
      popular: false
    },
    {
      icon: Users,
      title: 'Senior Engineer Track',
      description: 'Advanced program for aspiring senior cloud engineers with leadership training and premium placements.',
      features: ['Senior Role Training', 'Leadership Skills', 'Enterprise Projects', 'Premium Placements'],
      price: '₹35,000',
      originalPrice: '₹50,000',
      duration: '150 Days',
      rating: 4.9,
      students: '600+',
      popular: false
    },
    {
      icon: BookOpen,
      title: 'DevOps Specialist',
      description: 'Master DevOps tools and practices with cloud integration. Become the engineer every company needs.',
      features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & Logging'],
      price: '₹20,000',
      originalPrice: '₹30,000',
      duration: '100 Days',
      rating: 4.8,
      students: '400+',
      popular: false
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200">
              <Award className="mr-2 h-4 w-4" />
              Choose Your Learning Path
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Programs Designed for Success
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry-designed programs with 98% placement guarantee. From beginner to cloud expert in record time.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className={`relative bg-white hover:shadow-xl transition-all duration-300 border ${service.popular ? 'border-blue-200 ring-2 ring-blue-100' : 'border-slate-200'}`}>
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-slate-600 flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Stats */}
                  <div className="flex justify-between items-center text-xs text-slate-500 pt-4 border-t border-slate-100">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                      {service.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {service.students}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  
                  {/* Pricing */}
                  <div className="pt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                      <span className="text-lg text-slate-400 line-through">{service.originalPrice}</span>
                    </div>
                    <div className="text-green-600 text-sm font-medium mb-4">
                      Save ₹{parseInt(service.originalPrice.replace('₹', '').replace(',', '')) - parseInt(service.price.replace('₹', '').replace(',', ''))}
                    </div>
                  </div>
                  
                  <Button className={`w-full ${service.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-800 hover:bg-slate-900'} text-white`}>
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-slate-600 mb-6">
              Get personalized career guidance from our experts. Book a free consultation now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Free Career Counseling
              </Button>
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700">
                Chat with Advisor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

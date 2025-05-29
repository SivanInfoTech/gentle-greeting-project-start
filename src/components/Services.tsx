
import { Cloud, GraduationCap, Users, BookOpen, Star, Clock, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: '90-Day Cloud Mastery',
      subtitle: '🔥 Most Popular',
      description: 'Complete transformation from fresher to industry-ready cloud professional with guaranteed placement.',
      features: ['AWS • Azure • GCP Certification', 'Real Industry Projects', 'Live Mentorship Sessions', '100% Job Guarantee'],
      price: '₹15,000',
      originalPrice: '₹25,000',
      duration: '90 Days',
      rating: 4.9,
      students: '1200+',
      badge: 'BESTSELLER',
      color: 'blue'
    },
    {
      icon: GraduationCap,
      title: 'AI-Cloud Bootcamp',
      subtitle: '🚀 Future-Ready',
      description: 'Master AI/ML integration with cloud platforms. Build intelligent applications and stand out!',
      features: ['AI/ML on AWS/Azure', 'Model Deployment', 'Data Engineering', 'MLOps Pipeline'],
      price: '₹25,000',
      originalPrice: '₹40,000',
      duration: '120 Days',
      rating: 4.8,
      students: '800+',
      badge: 'NEW',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Junior Engineer Fast-Track',
      subtitle: '⚡ Career Accelerator',
      description: 'Advanced program for aspiring senior cloud engineers with leadership training and premium placements.',
      features: ['Senior Role Training', 'Leadership Skills', 'Enterprise Projects', 'Premium Placements'],
      price: '₹35,000',
      originalPrice: '₹50,000',
      duration: '150 Days',
      rating: 4.9,
      students: '600+',
      badge: 'PREMIUM',
      color: 'green'
    },
    {
      icon: BookOpen,
      title: 'DevOps Specialist',
      subtitle: '🛠️ High Demand',
      description: 'Master DevOps tools and practices with cloud integration. Become the engineer every company needs!',
      features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & Logging'],
      price: '₹20,000',
      originalPrice: '₹30,000',
      duration: '100 Days',
      rating: 4.8,
      students: '400+',
      badge: 'TRENDING',
      color: 'orange'
    },
  ];

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      green: 'bg-green-500',
      orange: 'bg-orange-500'
    };
    return colors[color as keyof typeof colors] || 'bg-blue-500';
  };

  const getCardBorder = (color: string) => {
    const borders = {
      blue: 'border-blue-200 hover:border-blue-300',
      purple: 'border-purple-200 hover:border-purple-300',
      green: 'border-green-200 hover:border-green-300',
      orange: 'border-orange-200 hover:border-orange-300'
    };
    return borders[color as keyof typeof borders] || 'border-blue-200';
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Award className="mr-2 h-4 w-4" />
              Transform Your Career in 90 Days
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-blue-600">Success Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-designed programs with 98% placement guarantee. From beginner to cloud expert in record time!
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className={`relative text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 ${getCardBorder(service.color)} bg-white overflow-hidden group`}>
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${getBadgeColor(service.color)} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {service.badge}
                </div>
                
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform bg-gradient-to-r from-${service.color}-100 to-${service.color}-200`}>
                    <service.icon className={`h-10 w-10 text-${service.color}-600`} />
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  
                  <div className="text-sm font-semibold text-blue-600 mb-3">
                    {service.subtitle}
                  </div>
                  
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center justify-center">
                        <span className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-2 flex-shrink-0`}></span>
                        <span className="text-center">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Stats */}
                  <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
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
                  <div className="text-center pt-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                    <div className="text-green-600 text-sm font-semibold mb-4">
                      💰 Save {parseInt(service.originalPrice.replace('₹', '').replace(',', '')) - parseInt(service.price.replace('₹', '').replace(',', ''))}!
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r from-${service.color}-600 to-${service.color}-700 hover:from-${service.color}-700 hover:to-${service.color}-800 text-white transform hover:scale-105 transition-all duration-300 shadow-lg`}>
                    🎯 Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🤔 Not Sure Which Program to Choose?
            </h3>
            <p className="text-gray-600 mb-6">
              Get personalized career guidance from our experts. Book a free consultation now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full">
                📞 Free Career Counseling
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600">
                💬 Chat with Advisor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

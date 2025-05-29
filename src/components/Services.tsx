
import { Cloud, GraduationCap, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: '90-Day Cloud Internship',
      description: 'Comprehensive hands-on training in AWS, Azure, and GCP with real-world projects and industry mentorship.',
      features: ['AWS Certification Prep', 'Azure Fundamentals', 'GCP Essentials', 'Live Projects'],
      price: 'Starting at ₹15,000',
    },
    {
      icon: GraduationCap,
      title: 'Bootcamp Courses',
      description: 'Intensive bootcamp programs designed to fast-track your cloud and AI skills with practical experience.',
      features: ['AI/ML Integration', 'DevOps Tools', 'Cloud Architecture', 'Industry Projects'],
      price: 'Starting at ₹25,000',
    },
    {
      icon: Users,
      title: 'Junior Engineer Program',
      description: 'Advanced internship program for aspiring cloud engineers with placement assistance and career guidance.',
      features: ['Advanced Cloud Skills', 'Team Collaboration', 'Client Projects', 'Job Placement'],
      price: 'Starting at ₹35,000',
    },
    {
      icon: BookOpen,
      title: 'AI Specialization',
      description: 'Specialized training in Artificial Intelligence and Machine Learning integrated with cloud platforms.',
      features: ['ML on AWS/Azure', 'AI Model Deployment', 'Data Engineering', 'Cloud AI Services'],
      price: 'Starting at ₹20,000',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive cloud and AI training programs designed for freshers and career changers.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center justify-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {service.price}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

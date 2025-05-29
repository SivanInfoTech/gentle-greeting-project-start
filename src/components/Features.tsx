
import { Users, Cloud-upload, Graduation-cap, Laptop, Book, Arrow-up } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from industry professionals with years of experience in AWS, Azure, and GCP.',
    },
    {
      icon: Cloud-upload,
      title: 'Hands-on Projects',
      description: 'Work on real-world cloud projects and build a portfolio that stands out to employers.',
    },
    {
      icon: Graduation-cap,
      title: 'Certification Support',
      description: 'Get guidance and preparation for AWS, Azure, and GCP certification exams.',
    },
    {
      icon: Laptop,
      title: 'Live Virtual Labs',
      description: 'Access to cloud environments and virtual labs for practical learning and experimentation.',
    },
    {
      icon: Book,
      title: 'Comprehensive Curriculum',
      description: 'Structured learning path covering cloud fundamentals to advanced AI integration.',
    },
    {
      icon: Arrow-up,
      title: 'Career Advancement',
      description: 'Job placement assistance and career guidance to help you land your dream role.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SitCloud?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive training programs designed to launch your career in cloud computing and AI.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

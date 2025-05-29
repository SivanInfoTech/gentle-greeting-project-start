
import { Server, Cloud, Code, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'Cloud Hosting',
      description: 'High-performance hosting with SSD storage, unlimited bandwidth, and 99.9% uptime guarantee.',
      features: ['SSD Storage', 'Free SSL', 'Daily Backups', 'CDN Included'],
      price: 'Starting at $9.99/mo',
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'Secure, scalable storage solutions with automatic sync and file versioning.',
      features: ['Unlimited Storage', 'File Sync', 'Version Control', 'Team Sharing'],
      price: 'Starting at $4.99/mo',
    },
    {
      icon: Code,
      title: 'Development Tools',
      description: 'Complete development environment with CI/CD, staging, and deployment tools.',
      features: ['Git Integration', 'Auto Deploy', 'Staging Environment', 'API Access'],
      price: 'Starting at $19.99/mo',
    },
    {
      icon: Headphones,
      title: 'Premium Support',
      description: '24/7 expert support with priority response times and dedicated account management.',
      features: ['24/7 Support', 'Priority Queue', 'Phone Support', 'Account Manager'],
      price: 'Starting at $49.99/mo',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cloud solutions tailored to meet your business needs at every stage of growth.
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
                    Get Started
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

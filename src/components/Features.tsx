
import { Shield, Zap, Globe, Settings, Database, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Global CDN and optimized infrastructure for blazing-fast performance worldwide.',
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy across multiple regions with automatic scaling and load balancing.',
    },
    {
      icon: Settings,
      title: 'Easy Management',
      description: 'Intuitive dashboard and APIs for seamless cloud resource management.',
    },
    {
      icon: Database,
      title: 'Reliable Storage',
      description: 'Redundant, secure storage with automatic backups and disaster recovery.',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data stays yours. GDPR compliant with transparent privacy policies.',
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
              Built for modern businesses that demand reliability, security, and performance at scale.
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

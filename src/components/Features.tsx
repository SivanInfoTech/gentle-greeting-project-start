
import { Users, CloudUpload, GraduationCap, Laptop, BookOpen, ArrowUp, Star, Target, Award, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Industry Expert Mentors',
      description: 'Learn from senior engineers at Google, Amazon, Microsoft with 10+ years of real-world cloud experience.',
      stats: '50+ Mentors',
      color: 'blue',
      highlight: '🏆 Industry Veterans'
    },
    {
      icon: CloudUpload,
      title: 'Real-World Cloud Projects',
      description: 'Build production-grade applications on AWS, Azure, GCP. Create a portfolio that makes recruiters say WOW!',
      stats: '20+ Projects',
      color: 'green',
      highlight: '🚀 Portfolio Builder'
    },
    {
      icon: GraduationCap,
      title: 'Multi-Cloud Certifications',
      description: 'Get certified in AWS Solutions Architect, Azure Fundamentals, and GCP Cloud Engineer with 95% pass rate.',
      stats: '5+ Certifications',
      color: 'purple',
      highlight: '📜 Certified Success'
    },
    {
      icon: Laptop,
      title: 'Live Virtual Cloud Labs',
      description: 'Access to premium cloud environments 24/7. Practice on real infrastructure without spending a penny!',
      stats: '24/7 Access',
      color: 'indigo',
      highlight: '⚡ Always Available'
    },
    {
      icon: BookOpen,
      title: 'AI-Integrated Curriculum',
      description: 'Master AI/ML integration with cloud platforms. Learn ChatGPT, TensorFlow, and ML model deployment.',
      stats: '100+ AI Topics',
      color: 'pink',
      highlight: '🤖 Future-Ready'
    },
    {
      icon: ArrowUp,
      title: 'Guaranteed Job Placement',
      description: 'Not just training, but guaranteed placement! 98% of our students land jobs within 30 days of completion.',
      stats: '98% Success',
      color: 'orange',
      highlight: '💼 Job Guarantee'
    },
  ];

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100',
      green: 'text-green-600 bg-green-100',
      purple: 'text-purple-600 bg-purple-100',
      indigo: 'text-indigo-600 bg-indigo-100',
      pink: 'text-pink-600 bg-pink-100',
      orange: 'text-orange-600 bg-orange-100'
    };
    return colors[color as keyof typeof colors] || 'text-blue-600 bg-blue-100';
  };

  const getBorderColor = (color: string) => {
    const borders = {
      blue: 'border-blue-200 hover:border-blue-300',
      green: 'border-green-200 hover:border-green-300',
      purple: 'border-purple-200 hover:border-purple-300',
      indigo: 'border-indigo-200 hover:border-indigo-300',
      pink: 'border-pink-200 hover:border-pink-300',
      orange: 'border-orange-200 hover:border-orange-300'
    };
    return borders[color as keyof typeof borders] || 'border-blue-200';
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              <Star className="mr-2 h-4 w-4 fill-current" />
              Why 2000+ Students Choose SitCloud
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience the <span className="text-purple-600">SitCloud Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just train, we transform! Our unique approach has helped 2000+ freshers land dream jobs at top companies.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-2 ${getBorderColor(feature.color)} hover:scale-105 bg-white relative overflow-hidden`}>
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {feature.highlight}
                </div>

                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${getIconColor(feature.color)} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                    {feature.description}
                  </CardDescription>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-600">{feature.stats}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-500">4.9/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Stats Section */}
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                🔥 The Numbers Speak for Themselves!
              </h3>
              <p className="text-blue-100 text-lg">
                Real results from real students. Join the success revolution!
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <Award className="h-12 w-12 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-blue-200">Placement Success</div>
              </div>
              <div className="text-center group">
                <Users className="h-12 w-12 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-2">2000+</div>
                <div className="text-blue-200">Happy Students</div>
              </div>
              <div className="text-center group">
                <Zap className="h-12 w-12 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-2">₹8.5L</div>
                <div className="text-blue-200">Average Package</div>
              </div>
              <div className="text-center group">
                <Star className="h-12 w-12 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform fill-current" />
                <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-blue-200">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

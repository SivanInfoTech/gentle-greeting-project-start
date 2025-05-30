
import { Users, CloudUpload, GraduationCap, Laptop, BookOpen, ArrowUp, Star, Target, Award, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Industry Expert Mentors',
      description: 'Learn from senior engineers at Google, Amazon, Microsoft with 10+ years of real-world cloud experience.',
      stats: '50+ Mentors'
    },
    {
      icon: CloudUpload,
      title: 'Real-World Projects',
      description: 'Build production-grade applications on AWS, Azure, GCP. Create a portfolio that stands out.',
      stats: '20+ Projects'
    },
    {
      icon: GraduationCap,
      title: 'Multi-Cloud Certifications',
      description: 'Get certified in AWS Solutions Architect, Azure Fundamentals, and GCP Cloud Engineer.',
      stats: '5+ Certifications'
    },
    {
      icon: Laptop,
      title: 'Live Virtual Labs',
      description: 'Access to premium cloud environments 24/7. Practice on real infrastructure without cost.',
      stats: '24/7 Access'
    },
    {
      icon: BookOpen,
      title: 'AI-Integrated Curriculum',
      description: 'Master AI/ML integration with cloud platforms. Learn ChatGPT, TensorFlow, and ML deployment.',
      stats: '100+ AI Topics'
    },
    {
      icon: ArrowUp,
      title: 'Job Placement',
      description: 'Not just training, but guaranteed placement. 98% of students land jobs within 30 days.',
      stats: '98% Success'
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6 border border-purple-200">
              <Star className="mr-2 h-4 w-4" />
              Why Students Choose SitCloud
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The SitCloud Advantage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We don't just train, we transform. Our unique approach has helped 2000+ freshers land dream jobs.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 border border-slate-200 group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-slate-600 text-base leading-relaxed mb-4">
                    {feature.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">{feature.stats}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-500">4.9/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Proven Results
              </h3>
              <p className="text-slate-300 text-lg">
                Real results from real students. Join the success revolution.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Award className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-slate-400">Placement Success</div>
              </div>
              <div className="text-center">
                <Users className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">2000+</div>
                <div className="text-slate-400">Happy Students</div>
              </div>
              <div className="text-center">
                <Zap className="h-10 w-10 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">₹8.5L</div>
                <div className="text-slate-400">Average Package</div>
              </div>
              <div className="text-center">
                <Star className="h-10 w-10 text-yellow-400 mx-auto mb-3 fill-current" />
                <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-slate-400">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


import { Cloud, GraduationCap, Users, BookOpen, Star, Clock, Award, Target, CheckCircle, Calendar, Video, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const courses = [
    {
      icon: Cloud,
      title: 'AWS Cloud Practitioner',
      subtitle: 'Foundation Level Course',
      description: 'Perfect for beginners to start their cloud journey with Amazon Web Services fundamentals.',
      features: [
        'AWS Core Services Overview',
        'IAM & Security Fundamentals', 
        'EC2, S3, RDS Basics',
        'Billing & Cost Management',
        'Hands-on Labs & Projects',
        'AWS Certification Prep'
      ],
      duration: '45 Days',
      mode: 'Online + Offline',
      price: '₹12,000',
      originalPrice: '₹18,000',
      rating: 4.9,
      students: '850+',
      popular: false,
      level: 'Beginner'
    },
    {
      icon: Award,
      title: 'Complete Cloud Mastery',
      subtitle: 'AWS + Azure + GCP',
      description: 'Comprehensive multi-cloud training program designed for career advancement and high-paying jobs.',
      features: [
        'AWS Solutions Architect',
        'Azure Fundamentals & Associate',
        'Google Cloud Professional',
        'DevOps & CI/CD Integration',
        'Real Industry Projects',
        '100% Placement Guarantee'
      ],
      duration: '90 Days',
      mode: 'Classroom + Online',
      price: '₹25,000',
      originalPrice: '₹45,000',
      rating: 4.9,
      students: '1200+',
      popular: true,
      level: 'Intermediate'
    },
    {
      icon: Users,
      title: 'Cloud DevOps Engineer',
      subtitle: 'Advanced Specialization',
      description: 'Advanced program for DevOps specialization with cloud platforms and automation tools.',
      features: [
        'Docker & Kubernetes',
        'Jenkins CI/CD Pipelines',
        'Terraform Infrastructure',
        'Ansible Configuration',
        'Monitoring & Logging',
        'Senior Role Preparation'
      ],
      duration: '120 Days',
      mode: 'Weekend Batches',
      price: '₹35,000',
      originalPrice: '₹55,000',
      rating: 4.8,
      students: '600+',
      popular: false,
      level: 'Advanced'
    }
  ];

  const features = [
    { icon: Video, title: 'Live Interactive Classes', desc: 'Real-time doubt clearing' },
    { icon: FileText, title: 'Course Materials', desc: 'Comprehensive study guides' },
    { icon: Users, title: 'Expert Mentors', desc: 'Industry professionals' },
    { icon: Award, title: 'Certifications', desc: 'Industry recognized' }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              <GraduationCap className="mr-2 h-4 w-4" />
              Professional Cloud Training Courses
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Cloud Career Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Industry-designed curriculum with hands-on training, live projects, and guaranteed placement assistance
            </p>
            
            {/* Features Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
                  <feature.icon className="h-5 w-5 text-blue-600" />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-gray-900">{feature.title}</div>
                    <div className="text-xs text-gray-500">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <Card key={index} className={`relative bg-white hover:shadow-xl transition-all duration-300 border ${course.popular ? 'border-orange-300 ring-2 ring-orange-100 scale-105' : 'border-gray-200'}`}>
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <course.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 mb-1">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold text-sm mb-3">
                    {course.subtitle}
                  </CardDescription>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Course Highlights:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Course Details */}
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        Duration: {course.duration}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {course.mode}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-gray-600">{course.rating} ({course.students} students)</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pricing */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                      <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Save {Math.round(((parseInt(course.originalPrice.replace('₹', '').replace(',', '')) - parseInt(course.price.replace('₹', '').replace(',', ''))) / parseInt(course.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                      </span>
                    </div>
                    
                    <Button className={`w-full ${course.popular ? 'bg-orange-600 hover:bg-orange-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold py-3`}>
                      Enroll Now - Pay Later
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Confused? Talk to Our Career Counselor
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get personalized course recommendations based on your background and career goals. 
              Our experts will guide you to the right cloud career path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                📞 Call: +91 9876543210
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                💬 Free Career Counseling
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

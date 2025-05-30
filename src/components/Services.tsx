
import { Cloud, GraduationCap, Users, BookOpen, Star, Clock, Award, Target, CheckCircle, Calendar, Video, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CloudProviderLogos from './CloudProviderLogos';

const Services = () => {
  const bootcamps = [
    {
      icon: Award,
      title: 'AWS Solutions Architect Associate',
      subtitle: 'Professional Certification Bootcamp',
      description: 'Comprehensive training program to become an AWS Solutions Architect with hands-on labs and real-world projects.',
      features: [
        'AWS Core Services Mastery',
        'Architecture Design Patterns', 
        'Security & Compliance',
        'Cost Optimization',
        'Hands-on Labs & Projects',
        'Certification Exam Prep'
      ],
      duration: '90 Days',
      mode: 'Bootcamp Format',
      price: '₹45,000',
      originalPrice: '₹65,000',
      rating: 4.9,
      students: '400+',
      popular: true,
      level: 'Professional',
      provider: 'AWS'
    },
    {
      icon: Cloud,
      title: 'Google Certified Associate Cloud Engineer',
      subtitle: 'GCP Professional Certification',
      description: 'Master Google Cloud Platform services and become a certified Associate Cloud Engineer with industry recognition.',
      features: [
        'GCP Core Services',
        'Compute Engine & Kubernetes',
        'Cloud Storage & Databases',
        'Networking & Security',
        'Monitoring & Logging',
        'Certification Guarantee'
      ],
      duration: '90 Days',
      mode: 'Bootcamp Format',
      price: '₹42,000',
      originalPrice: '₹60,000',
      rating: 4.8,
      students: '300+',
      popular: false,
      level: 'Associate',
      provider: 'GCP'
    },
    {
      icon: Users,
      title: 'Microsoft Azure AZ-900',
      subtitle: 'Azure Fundamentals Certification',
      description: 'Foundation-level certification program covering Azure fundamentals and cloud concepts.',
      features: [
        'Azure Core Services',
        'Azure Pricing & Support',
        'Security & Compliance',
        'Azure Identity Services',
        'Azure Management Tools',
        'Exam Preparation'
      ],
      duration: '90 Days',
      mode: 'Bootcamp Format',
      price: '₹35,000',
      originalPrice: '₹50,000',
      rating: 4.7,
      students: '500+',
      popular: false,
      level: 'Fundamentals',
      provider: 'Azure'
    },
    {
      icon: Target,
      title: 'DevOps for AWS/Azure/GCP',
      subtitle: 'Multi-Cloud DevOps Mastery',
      description: 'Advanced DevOps training across all major cloud platforms with CI/CD, automation, and best practices.',
      features: [
        'Multi-Cloud DevOps',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Alerting',
        'Industry Best Practices'
      ],
      duration: '90 Days',
      mode: 'Bootcamp Format',
      price: '₹55,000',
      originalPrice: '₹75,000',
      rating: 4.9,
      students: '250+',
      popular: false,
      level: 'Advanced',
      provider: 'Multi-Cloud'
    }
  ];

  const internshipPrograms = [
    {
      icon: Cloud,
      title: 'AWS Cloud Computing with DevOps',
      subtitle: 'Professional Internship Program',
      description: 'Intensive 45-day internship program combining AWS cloud services with DevOps practices.',
      features: [
        'AWS Services Deep Dive',
        'DevOps Tools & Practices',
        'Real Industry Projects',
        'Mentorship Program',
        'Internship Certificate',
        'Job Placement Support'
      ],
      duration: '45 Days',
      mode: 'Internship',
      price: '₹25,000',
      originalPrice: '₹35,000',
      provider: 'AWS'
    },
    {
      icon: Cloud,
      title: 'Azure Cloud Computing with DevOps',
      subtitle: 'Professional Internship Program',
      description: 'Hands-on internship program focusing on Microsoft Azure cloud platform and DevOps integration.',
      features: [
        'Azure Platform Mastery',
        'Azure DevOps Services',
        'CI/CD Implementation',
        'Industry Mentorship',
        'Project Portfolio',
        'Career Guidance'
      ],
      duration: '45 Days',
      mode: 'Internship',
      price: '₹25,000',
      originalPrice: '₹35,000',
      provider: 'Azure'
    },
    {
      icon: Cloud,
      title: 'Google Cloud Computing with DevOps',
      subtitle: 'Professional Internship Program',
      description: 'Comprehensive GCP internship program with DevOps practices and real-world project experience.',
      features: [
        'GCP Services Training',
        'Cloud Build & Deploy',
        'Kubernetes on GKE',
        'Professional Mentoring',
        'Portfolio Development',
        'Industry Connections'
      ],
      duration: '45 Days',
      mode: 'Internship',
      price: '₹25,000',
      originalPrice: '₹35,000',
      provider: 'GCP'
    },
    {
      icon: GraduationCap,
      title: 'Junior Cloud Engineer Internship',
      subtitle: 'Entry-Level Program',
      description: 'Perfect starting point for beginners to enter the cloud computing industry with foundational skills.',
      features: [
        'Cloud Fundamentals',
        'Basic DevOps Concepts',
        'Hands-on Practice',
        'Industry Exposure',
        'Soft Skills Training',
        'Entry-Level Job Prep'
      ],
      duration: '45 Days',
      mode: 'Internship',
      price: '₹15,000',
      originalPrice: '₹25,000',
      provider: 'Multi-Cloud'
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
              Professional Cloud Training Programs
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Cloud Career Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Industry-designed bootcamps and internship programs with hands-on training, live projects, and guaranteed placement assistance
            </p>
            
            {/* Features Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
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

          {/* Cloud Provider Logos */}
          <CloudProviderLogos />

          {/* Programs Tabs */}
          <Tabs defaultValue="bootcamps" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="bootcamps">90-Day Bootcamps</TabsTrigger>
              <TabsTrigger value="internships">45-Day Internships</TabsTrigger>
            </TabsList>

            <TabsContent value="bootcamps">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {bootcamps.map((course, index) => (
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
                          course.level === 'Fundamentals' ? 'bg-green-100 text-green-800' :
                          course.level === 'Associate' ? 'bg-blue-100 text-blue-800' :
                          course.level === 'Professional' ? 'bg-purple-100 text-purple-800' :
                          'bg-red-100 text-red-800'
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
                        <h4 className="font-semibold text-gray-900 mb-3">Program Highlights:</h4>
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
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{course.provider}</span>
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
                          Enroll in Bootcamp
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="internships">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {internshipPrograms.map((program, index) => (
                  <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                          <program.icon className="h-6 w-6 text-green-600" />
                        </div>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                          Internship
                        </span>
                      </div>
                      
                      <CardTitle className="text-xl font-bold text-gray-900 mb-1">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-green-600 font-semibold text-sm mb-3">
                        {program.subtitle}
                      </CardDescription>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {program.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                        <ul className="space-y-2">
                          {program.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Program Details */}
                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            Duration: {program.duration}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            {program.mode}
                          </div>
                        </div>
                        
                        <div className="flex justify-center">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{program.provider}</span>
                        </div>
                      </div>
                      
                      {/* Pricing */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-3xl font-bold text-gray-900">{program.price}</span>
                          <span className="text-lg text-gray-400 line-through">{program.originalPrice}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                            Save {Math.round(((parseInt(program.originalPrice.replace('₹', '').replace(',', '')) - parseInt(program.price.replace('₹', '').replace(',', ''))) / parseInt(program.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                          </span>
                        </div>
                        
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
                          Apply for Internship
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Confused? Talk to Our Career Counselor
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get personalized program recommendations based on your background and career goals. 
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

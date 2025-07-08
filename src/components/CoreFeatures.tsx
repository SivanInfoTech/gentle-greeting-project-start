import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CoreFeatures = () => {
  const features = [
    "Complete Practical Session",
    "Live Migration",
    "P2C, V2C, and C2C Migrations",
    "Real-Time AWS Project",
    "AWS Architecture & Design",
    "Case Studies",
    "Architecture Best Practices",
    "Design for Failure Strategies",
    "AWS Security Incident Handling",
    "Guidelines to Understand Business Requirements",
    "Guidelines for RFP / Pre-Sales Work",
    "Standards for Preparing AWS Quotes",
    "Technical & Security Architecture Preparation",
    "Advocacy & Evangelism Skills",
    "Drafting Migration Plans",
    "Designing for Durability, Elasticity, Scalability, HA, Resiliency",
    "NIST-aligned Security Policy Implementation",
    "AWS Five-Pillar Best Practice Recommendations",
    "Resume Preparation with AWS Skill Set",
    "Live Interactive Sessions",
    "Profile Building Guidance",
    "Review Sessions & Feedback",
    "Mock Interview + Interview Preparation",
    "Placement Assistance",
    "72 Hours of Live Training",
    "Lifetime Access to Recordings",
    "Infrastructure Components Overview",
    "DevOps Module",
    "DevSecOps Integration",
    "Cloud Security Topics",
    "Automation Use Cases",
    "Data Migration Techniques",
    "Daily Cloud Operations Activities",
    "BCP & DR Planning",
    "Solution Designing",
    "Cloud Migration End-to-End (P2C, C2C, V2C)",
    "Certificate of Completion"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              <CheckCircle className="mr-2 h-4 w-4" />
              Our Core Offerings
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Makes Our Training <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Unique</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive hands-on training with real-world projects, expert guidance, and industry-aligned curriculum designed for career success
            </p>
          </div>

          {/* Features Grid */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Experience Industry-Leading Training?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our comprehensive cloud training program and gain hands-on experience with real-world projects and expert mentorship
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  📞 Schedule a Demo
                </button>
                <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  📋 Download Curriculum
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
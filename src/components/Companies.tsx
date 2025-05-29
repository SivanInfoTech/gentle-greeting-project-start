
import { Building2, Users, TrendingUp, Award } from 'lucide-react';

const Companies = () => {
  const companies = [
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
    { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
    { name: "HCL", logo: "https://logo.clearbit.com/hcltech.com" },
    { name: "Tech Mahindra", logo: "https://logo.clearbit.com/techmahindra.com" },
    { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" }
  ];

  const stats = [
    { icon: Building2, value: "500+", label: "Partner Companies", color: "text-blue-600" },
    { icon: Users, value: "2000+", label: "Students Placed", color: "text-green-600" },
    { icon: TrendingUp, value: "98%", label: "Placement Rate", color: "text-purple-600" },
    { icon: Award, value: "₹15L", label: "Highest Package", color: "text-orange-600" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Building2 className="mr-2 h-4 w-4" />
              Trusted by Industry Leaders
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Dream <span className="text-blue-600">Company Awaits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our students are working at top companies worldwide. Join them and kickstart your cloud career!
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 group-hover:bg-blue-50 transition-colors ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Companies Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Where Our Alumni Work 🏢
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {companies.map((company, index) => (
                <div key={index} className="group text-center hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 mx-auto mb-3 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${company.name}&background=random&color=fff&size=48`;
                      }}
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join These Amazing Companies? 🚀
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              Start your journey today and be the next success story!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105">
                🎯 Apply for Internship
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                📞 Talk to Career Counselor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;


import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Companies from '@/components/Companies';
import Blog from '@/components/Blog';
import LocationPages from '@/components/LocationPages';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SitCloud Training Institute",
    "description": "Premier cloud computing training institute offering AWS, Azure, GCP certification courses in Chennai and Bangalore",
    "url": "https://sitcloud.in",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "123 Cloud Street, Koramangala",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560034",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "456 Tech Avenue, T. Nagar",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu", 
        "postalCode": "600017",
        "addressCountry": "IN"
      }
    ],
    "sameAs": [
      "https://facebook.com/sitcloud",
      "https://twitter.com/sitcloud",
      "https://linkedin.com/company/sitcloud"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2000"
    },
    "offers": [
      {
        "@type": "Course",
        "name": "AWS Certification Bootcamp",
        "provider": "SitCloud",
        "courseCode": "AWS-BOOTCAMP"
      },
      {
        "@type": "Course", 
        "name": "Azure Certification Bootcamp",
        "provider": "SitCloud",
        "courseCode": "AZURE-BOOTCAMP"
      },
      {
        "@type": "Course",
        "name": "GCP Certification Bootcamp", 
        "provider": "SitCloud",
        "courseCode": "GCP-BOOTCAMP"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="SitCloud - Premier Cloud Computing Training Institute in Chennai & Bangalore | AWS, Azure, GCP Certifications"
        description="Master cloud computing with SitCloud's expert-led certification bootcamps in Chennai and Bangalore. Get certified in AWS, Azure, GCP with 100% placement assistance. Join 2000+ successful students."
        keywords="cloud computing training chennai bangalore, AWS certification course, Azure training bootcamp, GCP certification program, DevOps training chennai bangalore, cloud architect course india"
        canonical="https://sitcloud.in"
        structuredData={structuredData}
      />
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Companies />
      <Blog />
      <LocationPages />
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Index;

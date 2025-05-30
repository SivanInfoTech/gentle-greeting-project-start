
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhySitCloud from '@/components/WhySitCloud';
import CertificationTracks from '@/components/CertificationTracks';
import TrainingCenters from '@/components/TrainingCenters';
import SuccessStories from '@/components/SuccessStories';
import BatchSchedule from '@/components/BatchSchedule';
import PlacementPartners from '@/components/PlacementPartners';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import FloatingCTA from '@/components/FloatingCTA';

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
        "streetAddress": "456 Tech Avenue, T. Nagar",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu", 
        "postalCode": "600017",
        "addressCountry": "IN"
      },
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
        "streetAddress": "456 Tech Avenue, Rajajinagar",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560010",
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
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="SitCloud - #1 Cloud Computing Training Institute in Chennai & Bangalore | AWS, Azure, GCP Certifications"
        description="Best Cloud Computing Certification Bootcamp with 100% Placement Support. Master AWS, Azure, GCP with expert training in Chennai and Bangalore. Join 2000+ successful students."
        keywords="cloud computing training chennai bangalore, AWS certification course, Azure training bootcamp, GCP certification program, DevOps training chennai bangalore, cloud architect course india"
        canonical="https://sitcloud.in"
        structuredData={structuredData}
      />
      <Header />
      <Hero />
      <WhySitCloud />
      <CertificationTracks />
      <TrainingCenters />
      <SuccessStories />
      <BatchSchedule />
      <PlacementPartners />
      <Blog />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;


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
    "description": "Premier cloud computing training institute offering AWS, Azure, GCP certification courses",
    "url": "https://sitcloud.in",
    "sameAs": [
      "https://facebook.com/sitcloud",
      "https://twitter.com/sitcloud",
      "https://linkedin.com/company/sitcloud"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2000"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="SitCloud - Premier Cloud Computing Training Institute in Bangalore | AWS, Azure, GCP"
        description="Master cloud computing with SitCloud's expert-led training programs. Get certified in AWS, Azure, GCP with 100% placement assistance. Join 2000+ successful students."
        keywords="cloud computing training bangalore, AWS certification, Azure training, GCP certification, DevOps training, cloud architect course"
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

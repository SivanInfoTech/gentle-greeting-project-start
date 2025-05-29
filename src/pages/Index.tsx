
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Companies from '@/components/Companies';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Companies />
      <Footer />
    </div>
  );
};

export default Index;

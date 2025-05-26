
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import TargetAudience from "@/components/TargetAudience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustedCompanies />
      <Features />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <TargetAudience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;


import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para Transformar seu Treinamento?
            </h2>
            <p className="text-lg text-muted-foreground">
              Entre em contato e veja como podemos ajudar sua empresa
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

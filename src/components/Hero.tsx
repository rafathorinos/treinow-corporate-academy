import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
      {/* Video Section - First Thing */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            Treinamento Corporativo Digital
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Transforme seus processos com nossa plataforma completa
          </p>
        </div>

        {/* Main Video */}
        <div className="max-w-5xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7335771083968602112?compact=1" 
                className="w-full h-full"
                frameBorder="0" 
                allowFullScreen 
                title="Treinow - Demonstração da Plataforma"
                allow="autoplay"
              />
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
          {[
            { icon: CheckCircle, text: "Implementação em 48h" },
            { icon: CheckCircle, text: "Certificados automáticos" },
            { icon: CheckCircle, text: "Relatórios completos" }
          ].map((benefit, index) => (
            <div key={index} className="flex items-center justify-center gap-3 glass rounded-lg py-3 px-4">
              <benefit.icon className="w-5 h-5 text-primary" />
              <span className="text-white font-medium text-sm md:text-base">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <Button 
            size="lg" 
            className="bg-white text-secondary hover:bg-white/90 font-bold px-8 py-3 rounded-full"
          >
            Solicitar Demonstração
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold px-8 py-3 rounded-full backdrop-blur-sm"
          >
            <Play className="mr-2 w-5 h-5" />
            Ver Mais Detalhes
          </Button>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
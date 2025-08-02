import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle, Sparkles, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Badge */}
          <div className="text-center mb-8 animate-fade-in-luxury">
            <div className="inline-flex items-center gap-2 glass-ultra py-2 px-6 rounded-full">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-white font-medium text-sm">Startup Inovadora</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="text-center mb-12 animate-slide-up-elegant" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Transforme Seu
              <br />
              <span className="gradient-text-luxury">Treinamento Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Startup que digitaliza processos de treinamento com <strong className="text-primary">IA avançada</strong>
            </p>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in-luxury" style={{ animationDelay: '0.6s' }}>
            <div className="glass-ultra rounded-2xl p-6 hover-float">
              <div className="video-container-luxury aspect-video relative">
                <iframe 
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7335771083968602112?compact=1&autoplay=1&muted=1" 
                  className="w-full h-full rounded-xl relative z-10" 
                  frameBorder="0" 
                  allowFullScreen 
                  title="Treinow - Demonstração" 
                  allow="autoplay; fullscreen" 
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-lg opacity-60"></div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-slide-up-elegant" style={{ animationDelay: '0.9s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="btn-luxury text-white font-bold px-8 py-3 text-lg rounded-full">
                Solicitar Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="btn-outline-luxury text-white font-bold px-8 py-3 text-lg rounded-full">
                <Play className="mr-2 w-5 h-5" />
                Ver Mais
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="font-semibold">500+ Empresas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="font-semibold">50K+ Treinados</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="font-semibold">95% Aprovação</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
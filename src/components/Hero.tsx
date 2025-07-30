import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle, Sparkles, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Ultra-modern background elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float-elegant"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-float-elegant" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float-elegant" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Logo Section */}
          <div className="text-center mb-12 animate-fade-in-luxury">
            <img 
              src="/lovable-uploads/aa322d61-353c-4c8e-9d87-1e50b7ce953f.png" 
              alt="Treinow" 
              className="h-16 md:h-20 mx-auto mb-8 brightness-0 invert animate-glow-pulse"
            />
            <div className="inline-flex items-center gap-3 glass-ultra rounded-full px-8 py-4 mb-8">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-white font-semibold text-lg">Revolução Digital Corporativa</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="text-center mb-16 animate-slide-up-elegant" style={{animationDelay: '0.3s'}}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
              Transforme Seu
              <br />
              <span className="gradient-text-luxury">Treinamento Digital</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Plataforma revolucionária que digitaliza completamente seus processos de treinamento 
              com <strong className="text-primary">IA avançada</strong> e <strong className="text-primary">automação inteligente</strong>
            </p>
          </div>

          {/* Video Section - Premium */}
          <div className="max-w-6xl mx-auto mb-16 animate-fade-in-luxury" style={{animationDelay: '0.6s'}}>
            <div className="glass-ultra rounded-3xl p-8 md:p-12 hover-float">
              <div className="video-container-luxury aspect-video relative">
                <iframe 
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7335771083968602112?compact=1&autoplay=1&muted=1" 
                  className="w-full h-full rounded-2xl relative z-10"
                  frameBorder="0" 
                  allowFullScreen 
                  title="Treinow - Demonstração da Plataforma"
                  allow="autoplay; fullscreen"
                />
                
                {/* Luxury overlay */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-3xl blur-xl opacity-50 animate-glow-pulse"></div>
              </div>
              
              {/* Video description */}
              <div className="mt-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Veja a <span className="gradient-text-luxury">Revolução</span> em Ação
                </h3>
                <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
                  Descobra como empresas líderes estão transformando completamente 
                  seus processos de treinamento e capacitação
                </p>
                
                {/* Feature highlights */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Star, text: "IA Integrada", desc: "Inteligência artificial avançada" },
                    { icon: CheckCircle, text: "48h Setup", desc: "Implementação ultrarrápida" },
                    { icon: Sparkles, text: "100% Digital", desc: "Processo completamente automatizado" }
                  ].map((feature, index) => (
                    <div key={index} className="glass-card rounded-xl p-6 hover-glow">
                      <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-bold text-white text-lg mb-2">{feature.text}</h4>
                      <p className="text-white/70 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Ultra Premium */}
          <div className="text-center animate-slide-up-elegant" style={{animationDelay: '0.9s'}}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="btn-luxury text-white font-bold px-12 py-6 text-xl rounded-full"
              >
                Solicitar Demonstração Exclusiva
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-outline-luxury text-white font-bold px-12 py-6 text-xl rounded-full"
              >
                <Play className="mr-3 w-6 h-6" />
                Assistir Apresentação
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary fill-current" />
                <span className="font-semibold">500+ Empresas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold">50K+ Treinados</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-semibold">95% Aprovação</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sophisticated bottom transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
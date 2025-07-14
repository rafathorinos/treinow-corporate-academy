import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-md animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 glass rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Revolucione seu treinamento corporativo</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
              Transforme a forma como sua empresa{" "}
              <span className="text-gradient bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                treina e contrata
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed mb-12">
              Plataforma digital de treinamento corporativo personalizado com{" "}
              <strong className="text-white">vídeos profissionais</strong>,{" "}
              <strong className="text-white">provas digitais</strong> e{" "}
              <strong className="text-white">certificados automáticos</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-xl px-8 py-6 rounded-full font-bold shadow-strong hover-lift group"
              >
                Solicitar Demonstração Gratuita
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-xl px-8 py-6 rounded-full font-bold backdrop-blur-sm bg-white/5"
              >
                <Play className="mr-2 w-6 h-6" />
                Ver Demonstração
              </Button>
            </div>
          </div>

          {/* Video Section - Redesigned */}
          <div className="max-w-6xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative glass rounded-3xl p-8 hover-lift">
                <div className="aspect-video bg-black rounded-2xl overflow-hidden relative shadow-strong">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
                    title="Vídeo Demonstrativo Treinow"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Video overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4 shadow-lg">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Veja como a Treinow funciona na prática
                  </h3>
                  <p className="text-white/80 text-lg">
                    Descubra como revolucionar o treinamento da sua empresa em apenas 2 minutos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
            {[
              { number: "500+", label: "Empresas Treinadas", icon: "🏢" },
              { number: "50K+", label: "Colaboradores Capacitados", icon: "👥" },
              { number: "95%", label: "Taxa de Aprovação", icon: "⭐" }
            ].map((stat, index) => (
              <div key={index} className="text-center glass rounded-2xl p-6 hover-lift">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-[#8bc34a] via-[#8bc34a] to-[#4b6249] text-white py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in">
              Transforme a forma como sua empresa treina e contrata
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Plataforma digital de treinamento corporativo personalizado com vídeos profissionais, 
              provas digitais e certificados automáticos.
            </p>
          </div>

          {/* Video Section - Centralizado */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="aspect-video bg-black rounded-2xl overflow-hidden relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
                  title="Vídeo Demonstrativo Treinow"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-white mt-6 text-lg font-medium">
                Veja como a Treinow funciona na prática
              </p>
            </div>
          </div>

          {/* CTA Button - Movimento suave */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-white text-[#8bc34a] hover:bg-gray-100 text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300 animate-[gentle-bounce_2s_ease-in-out_infinite]"
            >
              Solicitar Demonstração Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, FileText, Award, BarChart3, Users, Clock, Sparkles, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: PlayCircle,
      title: "Vídeos Ultra-HD",
      description: "Conteúdo cinematográfico com qualidade profissional 4K",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: FileText,
      title: "IA Inteligente",
      description: "Provas adaptativas com correção automática baseada em IA",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Award,
      title: "Certificação Digital",
      description: "Blockchain e NFTs para certificados verificáveis globalmente",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Dashboards em tempo real com insights preditivos",
      gradient: "from-pink-500 to-red-600"
    },
    {
      icon: Users,
      title: "Gestão Inteligente",
      description: "CRM integrado com automações e workflows personalizados",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Deploy Instantâneo",
      description: "Implementação em tempo recorde com suporte dedicado 24/7",
      gradient: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section id="recursos" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-luxury">
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 mb-8">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-gray-700 font-semibold">Tecnologia de Ponta</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Recursos <span className="gradient-text-luxury">Revolucionários</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Plataforma com tecnologias disruptivas que redefinem o futuro do treinamento corporativo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-float border-0 shadow-2xl bg-white/80 backdrop-blur-xl overflow-hidden group animate-slide-up-elegant"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 relative">
                {/* Gradient background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`}></div>
                
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-luxury" style={{animationDelay: '0.8s'}}>
          <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
            <Zap className="w-16 h-16 text-primary mx-auto mb-6 animate-glow-pulse" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pronto para a <span className="gradient-text-luxury">Revolução Digital?</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Descubra como nossa plataforma pode transformar completamente seus processos
            </p>
            <button className="btn-luxury text-white font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform">
              Explorar Todos os Recursos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
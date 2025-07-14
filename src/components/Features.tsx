import { Button } from "@/components/ui/button";
import { 
  Video, 
  FileCheck, 
  Award, 
  BarChart3, 
  Users, 
  Clock,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Video,
      title: "Vídeos Profissionais Personalizados",
      description: "Conteúdo sob medida para sua empresa, gravado com qualidade cinematográfica e editado profissionalmente.",
      highlight: "100% Personalizado",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileCheck,
      title: "Provas Digitais Inteligentes",
      description: "Sistema avançado de avaliação com questões adaptativas e feedback instantâneo para máxima eficiência.",
      highlight: "IA Integrada",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Certificados Automáticos",
      description: "Emissão instantânea de certificados válidos e rastreáveis, com assinatura digital e QR Code.",
      highlight: "Válido Juridicamente",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Dashboard completo com métricas detalhadas, relatórios customizáveis e insights acionáveis.",
      highlight: "Dados em Tempo Real",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Gestão de Equipes",
      description: "Controle total sobre grupos, permissões, progresso individual e desempenho coletivo.",
      highlight: "Gestão Simplificada",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Clock,
      title: "Acesso 24/7",
      description: "Plataforma disponível a qualquer hora, em qualquer dispositivo, com sincronização automática.",
      highlight: "Sempre Disponível",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Funcionalidades Principais</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Tudo que sua empresa{" "}
            <span className="text-gradient">precisa</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Uma plataforma completa que revoluciona a forma como você treina, 
            avalia e certifica seus colaboradores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl p-8 shadow-soft hover-lift border border-border/20 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                {feature.highlight}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>

              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                <span className="mr-2">Saiba mais</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="bg-white rounded-3xl p-12 shadow-medium border border-border/20 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para revolucionar seus treinamentos?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full shadow-medium hover-lift group">
                Ver Demonstração Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
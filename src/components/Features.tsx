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
    <section id="recursos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-luxury">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium text-sm">Soluções Digitais</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Eu Ofereço
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções digitais que simplificam treinamentos corporativos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-0 hover-float">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
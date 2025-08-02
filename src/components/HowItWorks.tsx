import { Card, CardContent } from "@/components/ui/card";
import { Upload, Settings, Users, TrendingUp, Rocket, Target, Brain, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Inteligente",
      description: "IA processa automaticamente seu conteúdo e cria estrutura otimizada",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      icon: Brain,
      title: "Configuração IA",
      description: "Algoritmos criam provas adaptativas e certificações personalizadas",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Deploy Automático",
      description: "Plataforma ativa instantaneamente com convites automatizados",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      icon: Target,
      title: "Analytics Preditivo",
      description: "Dashboards inteligentes com insights e previsões em tempo real",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Processo simples em 4 etapas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="glass-card border-0 hover-float text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="w-7 h-7 text-white" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
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

export default HowItWorks;
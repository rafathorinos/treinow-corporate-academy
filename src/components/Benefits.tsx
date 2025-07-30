
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Clock, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "95% Mais Eficiente",
      description: "Redução significativa no tempo de treinamento",
      metric: "95%"
    },
    {
      icon: DollarSign,
      title: "70% Economia",
      description: "Redução de custos com treinamentos presenciais",
      metric: "70%"
    },
    {
      icon: Clock,
      title: "Implementação 48h",
      description: "Plataforma funcionando em apenas 2 dias",
      metric: "48h"
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Dados protegidos com certificação de segurança",
      metric: "100%"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text">Benefícios</span> Comprovados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reais que transformam empresas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border/50 hover:shadow-lg transition-all duration-300 text-center"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="text-3xl font-bold text-primary mb-2">
                  {benefit.metric}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

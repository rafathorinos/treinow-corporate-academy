
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
    <section id="beneficios" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefícios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Como a Treinow melhora seus treinamentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card border-0 hover-float group text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="text-xl font-bold text-primary mb-2">
                    {benefit.metric}
                  </div>
                  
                  <h3 className="text-lg font-bold text-card-foreground mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
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

export default Benefits;

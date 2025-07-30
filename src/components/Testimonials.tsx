import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Diretora de RH",
      company: "TechCorp",
      text: "Revolucionou nosso processo de treinamento. Implementação rápida e resultados imediatos.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Gerente de Operações", 
      company: "LogiMax",
      text: "Plataforma intuitiva que facilitou o treinamento de toda nossa equipe. Recomendo!",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "CEO",
      company: "InovaBrasil",
      text: "Economizamos 70% em custos de treinamento. ROI excelente e equipe mais capacitada.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nossos <span className="gradient-text">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de empresas que transformaram seus treinamentos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border/50 bg-background"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

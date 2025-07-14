
import { FileText, Video, Palette, Share2, BarChart3, ArrowDown, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Envio de Materiais",
      description: "Você envia os padrões, missão, valores e processos do seu negócio. Nossa equipe analisa e estrutura todo o conteúdo.",
      icon: FileText,
      details: [
        "Análise completa dos seus processos",
        "Estruturação do conteúdo didático",
        "Definição do roteiro personalizado"
      ]
    },
    {
      number: "2", 
      title: "Produção Profissional",
      description: "Nosso estúdio produz, grava e edita vídeos de alta qualidade, totalmente personalizados para sua empresa.",
      icon: Video,
      details: [
        "Gravação em estúdio profissional",
        "Edição cinematográfica",
        "Animações e efeitos especiais"
      ]
    },
    {
      number: "3",
      title: "Plataforma Personalizada", 
      description: "Criamos uma plataforma exclusiva com a identidade visual da sua empresa e suas cores corporativas.",
      icon: Palette,
      details: [
        "Design personalizado",
        "Cores e logos da empresa",
        "Interface intuitiva e responsiva"
      ]
    },
    {
      number: "4",
      title: "Distribuição Inteligente",
      description: "Sua equipe de RH recebe acesso completo para gerenciar e distribuir o treinamento para candidatos e colaboradores.",
      icon: Share2,
      details: [
        "Painel administrativo completo",
        "Gestão de usuários e grupos",
        "Distribuição automática por email"
      ]
    },
    {
      number: "5",
      title: "Monitoramento Avançado",
      description: "Acompanhe tudo em tempo real: progresso, resultados, estatísticas e relatórios detalhados de performance.",
      icon: BarChart3,
      details: [
        "Dashboard com métricas em tempo real",
        "Relatórios personalizáveis",
        "Análise de performance individual e coletiva"
      ]
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-32 h-32 bg-primary rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-secondary rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Processo Simples e Eficiente</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Como funciona{" "}
            <span className="text-gradient">na prática</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Um processo simples de 5 etapas que transforma completamente 
            o treinamento corporativo da sua empresa
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-secondary opacity-30"></div>
              )}
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-20">
                {/* Step Number and Icon */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative mb-4">
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-lg opacity-30 animate-pulse-glow"></div>
                    
                    {/* Step number */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-strong">
                      <span className="text-white text-xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-3xl p-8 shadow-soft border border-border/20 hover-lift group">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Arrow indicator for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center">
                    <ArrowDown className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ficou interessado no processo?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Vamos conversar sobre como implementar isso na sua empresa
            </p>
            <button className="bg-gradient-primary text-white font-bold px-8 py-4 rounded-full shadow-medium hover-lift transition-all">
              Quero Conhecer o Processo Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

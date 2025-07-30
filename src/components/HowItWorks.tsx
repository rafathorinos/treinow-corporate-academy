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
    <section id="como-funciona" className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Ultra-modern background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-elegant"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/20 rounded-full blur-2xl animate-float-elegant" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-luxury">
          <div className="inline-flex items-center gap-3 glass-ultra rounded-full px-8 py-4 mb-8">
            <Zap className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-white font-semibold">Processo Revolucionário</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Como Funciona a <span className="gradient-text-luxury">Magia</span>
          </h2>
          <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Transformação digital completa em 4 etapas simples com tecnologia de última geração
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-xl border border-white/10 hover-float group animate-slide-up-elegant"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Background number */}
                <div className="absolute -top-8 -right-8 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                  {step.number}
                </div>
                
                {/* Step number badge */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl mb-6 text-white font-bold text-xl shadow-2xl group-hover:scale-110 transition-transform`}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {step.description}
                </p>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline connector for desktop */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl">
          <div className="relative h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary animate-shimmer"></div>
          </div>
        </div>

        {/* Bottom showcase */}
        <div className="text-center animate-fade-in-luxury" style={{animationDelay: '1s'}}>
          <div className="glass-ultra rounded-3xl p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group hover-glow">
                <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">48h</div>
                <div className="text-white font-semibold">Setup Completo</div>
              </div>
              <div className="group hover-glow">
                <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-white font-semibold">Automatizado</div>
              </div>
              <div className="group hover-glow">
                <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">∞</div>
                <div className="text-white font-semibold">Escalabilidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
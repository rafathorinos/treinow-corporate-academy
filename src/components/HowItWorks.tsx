
import { FileText, Video, Palette, Share2, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Envio de Materiais",
      description: "O cliente envia os padrões, missão e valores do processo logístico do seu negócio.",
      icon: FileText,
      color: "from-green-500 to-green-600"
    },
    {
      number: "2", 
      title: "Produção dos Vídeos",
      description: "A Treinow com base nisso produz, grava e edita um treinamento sob medida para sua empresa.",
      icon: Video,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "3",
      title: "Plataforma Personalizada", 
      description: "Criamos uma plataforma com a identidade visual personalizada da empresa.",
      icon: Palette,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "4",
      title: "Distribuição do Curso",
      description: "O RH recebe o link da plataforma da sua empresa e envia para candidatos e também para a equipe atual.",
      icon: Share2,
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "5",
      title: "Acompanhamento",
      description: "A empresa acompanha tudo pelo painel admin: quem assistiu, quem concluiu, quem são os melhores, as estatísticas completas.",
      icon: BarChart3,
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona na prática
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um processo simples e eficiente para transformar seu treinamento corporativo
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  {/* Number Badge */}
                  <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connection Line for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

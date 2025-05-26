
import { FileText, Video, Palette, Share2, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Envio de Materiais",
      description: "O cliente envia os padrões, missão e valores do processo logístico do seu negócio.",
      icon: FileText,
      color: "from-[#8BC34A] to-[#7CB342]"
    },
    {
      number: "2", 
      title: "Produção dos Vídeos",
      description: "A Treinow com base nisso produz, grava e edita um treinamento sob medida para sua empresa.",
      icon: Video,
      color: "from-[#689F38] to-[#558B2F]"
    },
    {
      number: "3",
      title: "Plataforma Personalizada", 
      description: "Criamos uma plataforma com a identidade visual personalizada da empresa.",
      icon: Palette,
      color: "from-[#8BC34A] to-[#689F38]"
    },
    {
      number: "4",
      title: "Distribuição do Curso",
      description: "O RH recebe o link da plataforma da sua empresa e envia para candidatos e também para a equipe atual.",
      icon: Share2,
      color: "from-[#7CB342] to-[#558B2F]"
    },
    {
      number: "5",
      title: "Acompanhamento",
      description: "A empresa acompanha tudo pelo painel admin: quem assistiu, quem concluiu, quem são os melhores, as estatísticas completas.",
      icon: BarChart3,
      color: "from-[#689F38] to-[#8BC34A]"
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

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center mb-16 last:mb-0">
              <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
                <div className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl`}>
                  <span className="text-white text-4xl font-bold">{step.number}</span>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block w-full h-1 bg-gradient-to-r from-gray-300 to-gray-400 my-8 md:hidden"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

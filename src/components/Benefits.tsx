
const Benefits = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Eficiência",
      description: "Reduza o tempo e custos com treinamentos repetitivos e processos de onboarding."
    },
    {
      icon: "🛡️",
      title: "Segurança", 
      description: "Proteção jurídica com provas digitais e certificados que comprovam o treinamento."
    },
    {
      icon: "💰",
      title: "Economia",
      description: "Evite erros de contratação e reduza a rotatividade com candidatos melhor preparados."
    },
    {
      icon: "📊",
      title: "Padronização",
      description: "Garanta que todos os colaboradores recebam exatamente o mesmo treinamento."
    },
    {
      icon: "🎯",
      title: "Controle",
      description: "Painel completo para acompanhar o desempenho de candidatos e colaboradores."
    },
    {
      icon: "🎨",
      title: "Personalização",
      description: "Conteúdo totalmente adaptado à realidade da sua empresa e processos internos."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            O que você ganha com a Treinow
          </h2>
          <p className="text-xl text-gray-600">
            Uma solução completa para otimizar seus processos de treinamento e contratação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-[#8bc34a]/10">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

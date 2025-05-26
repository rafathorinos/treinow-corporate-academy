
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Envio de Materiais",
      description: "O cliente envia os padrões, missão e valores do processo logístico do seu negócio.",
      color: "bg-green-600"
    },
    {
      number: "2", 
      title: "Produção dos Vídeos",
      description: "A Treinow com base nisso produz, grava e edita um treinamento sob medida para sua empresa.",
      color: "bg-blue-600"
    },
    {
      number: "3",
      title: "Plataforma Personalizada", 
      description: "Criamos uma plataforma com a identidade visual personalizada da empresa.",
      color: "bg-purple-600"
    },
    {
      number: "4",
      title: "Distribuição do Curso",
      description: "O RH recebe o link da plataforma da sua empresa e envia para candidatos e também para a equipe atual.",
      color: "bg-orange-600"
    },
    {
      number: "5",
      title: "Acompanhamento",
      description: "A empresa acompanha tudo pelo painel admin: quem assistiu, quem concluiu, quem são os melhores, as estatísticas completas.",
      color: "bg-red-600"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona na prática
          </h2>
          <p className="text-xl text-gray-600">
            Um processo simples e eficiente para transformar seu treinamento corporativo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-start mb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <div className={`flex-shrink-0 w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white text-xl font-bold ${index % 2 === 1 ? 'ml-8' : 'mr-8'}`}>
                {step.number}
              </div>
              <div className={`flex-1 ${index % 2 === 1 ? 'text-right' : ''}`}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

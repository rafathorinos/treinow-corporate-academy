
const TargetAudience = () => {
  const audiences = [
    {
      icon: "🔄",
      title: "Alta Rotatividade",
      description: "Empresas com constante necessidade de treinar novos colaboradores."
    },
    {
      icon: "👥",
      title: "Atendimento ao Público",
      description: "Negócios onde a qualidade do atendimento impacta diretamente nos resultados."
    },
    {
      icon: "🏢",
      title: "Times Grandes",
      description: "Organizações com muitos colaboradores ou divididas em vários setores."
    },
    {
      icon: "⚙️",
      title: "Processos Complexos",
      description: "Empresas com dificuldade de padronizar procedimentos internos."
    },
    {
      icon: "🌐",
      title: "Redes e Franquias",
      description: "Negócios com múltiplas unidades que precisam manter padrão de qualidade."
    },
    {
      icon: "🔁",
      title: "Treinamentos Repetitivos",
      description: "Empresas com gastos recorrentes em capacitação de novos colaboradores."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Para quem é ideal?
          </h2>
          <p className="text-xl text-gray-600">
            Empresas que se beneficiam da nossa solução
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-4">{audience.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

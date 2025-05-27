
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
    <section className="py-20 bg-[#000000] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Para quem é ideal?
          </h2>
          <p className="text-xl text-gray-300">
            Empresas que se beneficiam da nossa solução
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-[#8bc34a]/10 backdrop-blur-sm p-8 rounded-2xl border border-[#8bc34a]/20 hover:bg-[#8bc34a]/20 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-6 text-center">{audience.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#8bc34a]">{audience.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

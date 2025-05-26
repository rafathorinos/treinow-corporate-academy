
const Features = () => {
  const features = [
    {
      icon: "📚",
      title: "Curso Personalizado",
      description: "Gravação e edição profissional de um curso completo com base na realidade da sua empresa."
    },
    {
      icon: "📝",
      title: "Prova Digital",
      description: "Prova final digital para avaliar o conhecimento adquirido pelo candidato."
    },
    {
      icon: "🏆",
      title: "Certificado Automático",
      description: "Emissão automática de certificado para quem conclui o curso com sucesso."
    },
    {
      icon: "🎨",
      title: "Plataforma Personalizada",
      description: "Plataforma com a identidade visual da sua empresa e painel de controle para o RH."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A solução definitiva para treinamento corporativo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Antes de contratar, o candidato faz o curso. Se ele passar, entra sabendo. 
            Se não passar ou desistir, o empresário evita um erro e economiza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

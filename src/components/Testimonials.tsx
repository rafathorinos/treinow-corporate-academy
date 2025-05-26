
const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina",
      position: "Gerente de RH - Rede de Farmácias",
      content: "A Treinow revolucionou nosso processo de contratação. Agora os novos colaboradores já chegam treinados e sabemos exatamente o que esperar de cada um.",
      avatar: "AC"
    },
    {
      name: "Ricardo Almeida", 
      position: "Diretor - Rede de Restaurantes",
      content: "Economizamos 40% do tempo de treinamento e reduzimos em 60% a rotatividade nos primeiros 3 meses. Os resultados foram impressionantes.",
      avatar: "RA"
    },
    {
      name: "Fernanda Oliveira",
      position: "Gerente de Operações - Rede de Clínicas", 
      content: "A plataforma personalizada com nossa identidade visual deu mais credibilidade ao processo de treinamento. Os colaboradores levam mais a sério.",
      avatar: "FO"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-green-100">
            Depoimentos de empresas que já transformaram seus treinamentos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white text-green-600 rounded-full flex items-center justify-center font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-green-100 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-green-50 italic">"{testimonial.content}"</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

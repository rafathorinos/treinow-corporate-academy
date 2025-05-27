import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina",
      role: "Gerente de RH - Rede de Farmácias",
      content: "A Treinow revolucionou nosso processo de contratação. Agora os novos colaboradores já chegam treinados e sabemos exatamente o que esperar de cada um.",
      avatar: "/lovable-uploads/73cb4101-32a2-4342-a3f4-44059011e6a2.png"
    },
    {
      name: "Ricardo Almeida", 
      role: "Diretor - Rede de Restaurantes",
      content: "Economizamos 40% do tempo de treinamento e reduzimos em 60% a rotatividade nos primeiros 3 meses. Os resultados foram impressionantes.",
      avatar: "/lovable-uploads/73cb4101-32a2-4342-a3f4-44059011e6a2.png"
    },
    {
      name: "Fernanda Oliveira",
      role: "Gerente de Operações - Rede de Clínicas", 
      content: "A plataforma personalizada com nossa identidade visual deu mais credibilidade ao processo de treinamento. Os colaboradores levam mais a sério.",
      avatar: "/lovable-uploads/73cb4101-32a2-4342-a3f4-44059011e6a2.png"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Depoimentos de empresas que já transformaram seus treinamentos
          </p>
          
          {/* Video Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-[#8bc34a]/10 to-[#4b6249]/10 rounded-3xl p-8">
              <div className="aspect-video bg-black rounded-2xl overflow-hidden relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ScMzIvxBSi4"
                  title="Depoimentos dos Clientes Treinow"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-gray-700 mt-6 font-medium text-lg">
                Veja depoimentos reais dos nossos clientes
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#8bc34a]/10">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-[#8bc34a]/20"
                />
                <div>
                  <h4 className="font-semibold text-[#000000] text-lg">{testimonial.name}</h4>
                  <p className="text-[#8bc34a] font-medium">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
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

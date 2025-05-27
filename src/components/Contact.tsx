import { Button } from "@/components/ui/button";
const Contact = () => {
  return <section id="contato" className="py-20 text-white bg-[#4b6249]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu treinamento corporativo?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Entre em contato conosco e descubra como a Treinow pode ajudar sua empresa 
            a contratar melhor e treinar com eficiência.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="backdrop-blur-sm p-6 rounded-lg bg-[#263426]">
              <h3 className="text-xl font-semibold mb-4">Telefone</h3>
              <p className="text-2xl font-bold">+55 65 9308-6011</p>
            </div>
            <div className="backdrop-blur-sm p-6 rounded-lg bg-[#263426]">
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-2xl font-bold">contato@treinow.net</p>
            </div>
          </div>

          <Button size="lg" className="text-xl px-12 py-6 rounded-full font-bold bg-[#8bc34a] text-[#151a0f]">
            Solicitar Demonstração Gratuita
          </Button>
        </div>
      </div>
    </section>;
};
export default Contact;
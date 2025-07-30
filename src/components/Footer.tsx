const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className={`text-2xl font-bold mb-4 text-white`}>
              Treinow
            </div>
            <p className="text-white/80 text-sm">
              Transformando o treinamento corporativo através da tecnologia digital.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>+55 65 9308-6011</p>
              <p>contato@treinow.net</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#recursos" className="block text-white/80 hover:text-white">Recursos</a>
              <a href="#beneficios" className="block text-white/80 hover:text-white">Benefícios</a>
              <a href="#contato" className="block text-white/80 hover:text-white">Contato</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© 2024 Treinow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
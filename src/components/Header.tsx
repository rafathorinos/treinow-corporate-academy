
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/72a63317-c821-479b-8484-82da7766e195.png" 
              alt="Treinow Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors">Início</a>
            <a href="#como-funciona" className="text-gray-700 hover:text-green-600 transition-colors">Como Funciona</a>
            <a href="#beneficios" className="text-gray-700 hover:text-green-600 transition-colors">Benefícios</a>
            <a href="#depoimentos" className="text-gray-700 hover:text-green-600 transition-colors">Depoimentos</a>
            <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Solicitar Demonstração
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors">Início</a>
              <a href="#como-funciona" className="text-gray-700 hover:text-green-600 transition-colors">Como Funciona</a>
              <a href="#beneficios" className="text-gray-700 hover:text-green-600 transition-colors">Benefícios</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-green-600 transition-colors">Depoimentos</a>
              <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors">Contato</a>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full mt-4">
                Solicitar Demonstração
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#inicio", label: "Início" },
    { href: "#recursos", label: "Recursos" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#contato", label: "Contato" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {isScrolled ? (
              <div className="bg-foreground p-2 rounded-lg">
                <img 
                  src="/lovable-uploads/aa322d61-353c-4c8e-9d87-1e50b7ce953f.png" 
                  alt="Treinow" 
                  className="h-6 transition-all duration-300"
                />
              </div>
            ) : (
              <img 
                src="/lovable-uploads/aa322d61-353c-4c8e-9d87-1e50b7ce953f.png" 
                alt="Treinow" 
                className="h-8 transition-all duration-300"
              />
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 text-sm ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              size="sm"
              className={`font-bold transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'btn-luxury text-white' 
                  : 'btn-outline-luxury text-white'
              }`}
            >
              Demo Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-xl glass-ultra"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 glass-ultra rounded-b-2xl shadow-2xl animate-slide-up-elegant">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-6 py-3 text-gray-800 font-semibold hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-6 pt-4">
                <Button className="w-full btn-luxury text-white font-bold">
                  Demo Gratuita
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
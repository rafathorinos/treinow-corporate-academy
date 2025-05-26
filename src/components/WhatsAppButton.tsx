
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5565930860011";
    const message = "Olá! Gostaria de saber mais sobre a Treinow.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsPopupOpen(true)}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-16 h-16 p-0 shadow-lg animate-pulse"
          size="lg"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Treinow</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
                    <span className="text-sm text-[#25D366]">Online agora</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPopupOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-3">
                <p className="text-gray-800">
                  Olá! 👋 Posso te ajudar? Estou online agora e pronto para esclarecer suas dúvidas sobre a Treinow!
                </p>
              </div>
              <p className="text-xs text-gray-500">Geralmente responde em alguns minutos</p>
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Iniciar Conversa
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;

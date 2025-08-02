import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com sua API
    console.log("Dados do formulário:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nome: "", email: "", telefone: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-lg mx-auto glass-ultra border-0">
        <CardContent className="pt-8">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Solicitação Enviada!
            </h3>
            <p className="text-muted-foreground">
              Entraremos em contato em breve para agendar sua demonstração.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg mx-auto glass-ultra border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">
          Solicitar Demonstração
        </CardTitle>
        <p className="text-muted-foreground">
          Preencha os dados para receber uma demo personalizada
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-foreground font-medium">Nome</Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              value={formData.nome}
              onChange={handleChange}
              required
              className="bg-background/50 border-border"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/50 border-border"
              placeholder="seu@email.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="telefone" className="text-foreground font-medium">Telefone</Label>
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              value={formData.telefone}
              onChange={handleChange}
              required
              className="bg-background/50 border-border"
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full btn-luxury text-white font-bold py-3 mt-6"
            size="lg"
          >
            <Send className="w-5 h-5 mr-2" />
            Solicitar Demonstração Gratuita
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
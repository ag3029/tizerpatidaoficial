import { useEffect } from "react";
import { useState } from "react";
import { CheckCircle } from "lucide-react"; 
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getWhatsAppNumber, fetchWhatsAppNumber } from "@/config/whatsapp";

const ThankYouPage = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchWhatsAppNumber().then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready) return;
    const kwaiq = (window as any).kwaiq;
    if (kwaiq) {
      kwaiq.track("addToCart");
      kwaiq.track("completeRegistration");
      kwaiq.track("Contact");
      console.log("✅ KWAI: Eventos disparados!");
    }

    // Pega a URL do WhatsApp com os dados do formulário
    const whatsappUrl = localStorage.getItem("whatsappUrl") || `https://wa.me/${getWhatsAppNumber("principal")}`;
    localStorage.removeItem("whatsappUrl");

    const timer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 2000);

    return () => clearTimeout(timer); 
  }, [ready]);

  const handleWhatsAppClick = () => {
    const kwaiq = (window as any).kwaiq;
    if (kwaiq) {
      kwaiq.track("addToCart");
      kwaiq.track("completeRegistration");
      kwaiq.track("Contact");
    }
    const whatsappUrl = localStorage.getItem("whatsappUrl") || `https://wa.me/${getWhatsAppNumber("principal")}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md text-center space-y-6 py-20">
          <div className="flex justify-center">
            <CheckCircle className="w-20 h-20 text-success" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-gradient-yellow">Obrigado!!</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Seu pedido foi recebido com sucesso! Em instantes você será
            redirecionado para o WhatsApp para finalizar sua compra com nossa
            equipe.
          </p>
          <p className="text-sm text-muted-foreground">
            Caso não tenha sido redirecionado,{" "}
            <button
              className="text-primary font-bold underline"
              onClick={handleWhatsAppClick}
            >
              clique aqui para falar conosco
            </button>
          </p>
          <Link
            to="/"
            className="inline-block gradient-yellow text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getWhatsAppNumber, fetchWhatsAppNumber } from "@/config/whatsapp";
import { kits } from "@/components/PricingSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const formatCPF = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => { fetchWhatsAppNumber(); }, []);

  const kitId = searchParams.get("kit") || "5-unidades";
  const selectedKit = kits.find((k) => k.id === kitId) || kits[0];

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
  });

  const handleChange = (field: string, value: string) => {
    if (field === "cpf") value = formatCPF(value);
    if (field === "telefone") value = formatPhone(value);
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isValid = form.nome.trim() && form.email.includes("@") && form.telefone.replace(/\D/g, "").length >= 10 && form.cpf.replace(/\D/g, "").length === 11;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const message = `Olá! Gostaria de comprar o TirzePro 🔥%0A%0A` +
      `📦 *Kit:* ${selectedKit.units} ${selectedKit.units === 1 ? "Unidade" : "Unidades"} (${selectedKit.days} dias)%0A` +
      `💰 *Preço:* ${selectedKit.totalPrice} (12x de ${selectedKit.installment})%0A` +
      `💵 *Por Unidade:* ${selectedKit.perUnit}%0A%0A` +
      `👤 *Nome:* ${form.nome}%0A` +
      `📧 *Email:* ${form.email}%0A` +
      `📱 *Telefone:* ${form.telefone}%0A` +
      `🪪 *CPF:* ${form.cpf}`;

    const whatsappUrl = `https://wa.me/${getWhatsAppNumber("principal")}?text=${message}`;



    // Salva a URL no localStorage para o ThankYouPage usar
    localStorage.setItem("whatsappUrl", whatsappUrl);

    navigate("/obrigado");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-xl">
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-6">
          {/* Kit selecionado */}
          <div className="text-center space-y-3 border-b border-border pb-6">
            <span className="inline-block gradient-yellow text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
              {selectedKit.badge}
            </span>
            <img src={selectedKit.image} alt="Kit selecionado" className="h-36 mx-auto object-contain" />
            <p className="text-foreground font-bold">
              {selectedKit.units} {selectedKit.units === 1 ? "Unidade" : "Unidades"} | {selectedKit.days} Dias
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-extrabold text-primary">{selectedKit.totalPrice}</p>
              <p className="text-sm text-muted-foreground">ou 12x de {selectedKit.installment}</p>
              <p className="text-xs text-success font-bold">ECONOMIZE {selectedKit.savings}</p>
            </div>
          </div>

          {/* Trocar kit */}
          <div className="flex gap-2 justify-center">
            {kits.map((k) => (
              <button
                key={k.id}
                onClick={() => navigate(`/checkout?kit=${k.id}`, { replace: true })}
                className={`text-xs px-3 py-2 rounded-lg border transition-colors ${
                  k.id === selectedKit.id
                    ? "border-primary bg-primary/10 text-primary font-bold"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {k.units} {k.units === 1 ? "Frasco" : "Frascos"}
              </button>
            ))}
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome Completo</Label>
              <Input
                id="nome"
                placeholder="Seu nome completo"
                value={form.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone / WhatsApp</Label>
              <Input
                id="telefone"
                placeholder="(11) 99999-9999"
                value={form.telefone}
                onChange={(e) => handleChange("telefone", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                placeholder="000.000.000-00"
                value={form.cpf}
                onChange={(e) => handleChange("cpf", e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={!isValid}
              className="w-full gradient-yellow text-primary-foreground py-6 text-lg font-bold rounded-full hover:opacity-90 disabled:opacity-50"
            >
              FINALIZAR PEDIDO VIA WHATSAPP
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Compra 100% segura • Seus dados estão protegidos</span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
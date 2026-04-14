import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

export interface Kit {
  id: string;
  badge: string;
  units: number;
  days: number;
  installment: string;
  perUnit: string;
  totalOriginal: string;
  totalPrice: string;
  savings: string;
  image: string;
  recommended?: boolean;
}

export const kits: Kit[] = [
  {
    id: "5-unidades",
    badge: "Maior Desconto",
    units: 5,
    days: 150,
    installment: "R$39,70",
    perUnit: "R$79,40",
    totalOriginal: "R$985,00",
    totalPrice: "R$397,00",
    savings: "R$588,00",
    image: "https://i.ibb.co/LdRdBdd7/Design-sem-nome-12.png",
    recommended: true,
  },
  {
    id: "3-unidades",
    badge: "Mais Popular",
    units: 3,
    days: 90,
    installment: "R$29,70",
    perUnit: "R$99,00",
    totalOriginal: "R$591,00",
    totalPrice: "R$297,00",
    savings: "R$294,00",
    image: "https://i.ibb.co/pBK3mNjD/Design-sem-nome-10.png",
  },
  {
    id: "1-unidade",
    badge: "Experimente Um",
    units: 1,
    days: 30,
    installment: "R$19,78",
    perUnit: "R$197,00",
    totalOriginal: "R$289,00",
    totalPrice: "R$197,00",
    savings: "R$92,00",
    image: "https://i.ibb.co/TQy5Gs7/Design-sem-nome-11.png",
  },
];

const PricingSection = () => {
  const navigate = useNavigate();

  const handleBuy = (kit: Kit) => {
    navigate(`/checkout?kit=${kit.id}`);
  };

  return (
    <section id="kits" className="py-16 bg-background">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-4xl font-extrabold">ESCOLHA O SEU KIT ABAIXO</h2>
          <p className="text-muted-foreground">
            Recomendamos o tratamento de <span className="text-primary font-bold">5 a 12 meses</span> para um efeito duradouro e restaurador!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {kits.map((kit) => (
            <div
              key={kit.id}
              className={`relative bg-card rounded-2xl border-2 p-6 flex flex-col items-center text-center space-y-4 transition-transform hover:scale-105 ${
                kit.recommended ? "border-primary shadow-lg shadow-primary/20" : "border-border"
              }`}
            >
              <span className={`absolute -top-3 px-4 py-1 rounded-full text-xs font-bold ${
                kit.recommended ? "gradient-yellow text-primary-foreground" : "bg-secondary text-foreground"
              }`}>
                {kit.badge}
              </span>
              <p className="text-sm text-muted-foreground pt-2">
                {kit.units} {kit.units === 1 ? "Unidade" : "Unidades"} | {kit.days} Dias de Tratamento
              </p>
              <img src={kit.image} alt={`Kit ${kit.units} frascos`} className="h-40 object-contain" />
              <div>
                <p className="text-sm text-muted-foreground">12x de</p>
                <p className="text-3xl font-extrabold text-primary">{kit.installment}</p>
                <p className="text-xs text-muted-foreground">Por Unidade: {kit.perUnit}</p>
              </div>
              <button
                onClick={() => handleBuy(kit)}
                className="w-full gradient-yellow text-primary-foreground py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
              >
                COMPRAR AGORA!
              </button>
              <p className="text-xs text-muted-foreground">180 Dias de Garantia Incondicional</p>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">
                  Total: <span className="line-through">{kit.totalOriginal}</span>{" "}
                  <span className="text-foreground font-bold">{kit.totalPrice}</span>
                </p>
                <p className="text-xs text-success font-bold">ECONOMIZADO {kit.savings}</p>
                <p className="text-xs text-primary font-bold">FRETE GRÁTIS</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-1 pt-6">
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-sm text-foreground font-bold">Avaliação: 4.98/5</p>
          <p className="text-xs text-muted-foreground">baseado em mais de 5000+ reviews</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

const reviews = [
  {
    name: "Francisco Emanuel",
    location: "Salvador, BA",
    bottles: "12 Frascos",
    image: "https://tirzepro-oficial.com/wp-content/uploads/2026/03/Captura-de-Tela-2025-01-08-as-14.34.38-150x150.png",
    text: "Dr., eu já tinha tentado de tudo, sofri muito com efeito sanfona, mas hoje graças a Deus tô com meu peso ideal, me sinto bem mais bonito e só tenho agradecer pelo seu vídeo e as suas dicas, muito obrigado.",
  },
  {
    name: "Karla Gomes",
    location: "São Paulo, SP",
    bottles: "12 Frascos",
    image: "https://tirzepro-oficial.com/wp-content/uploads/2026/03/Captura-de-Tela-2025-01-08-as-14.35.23.png",
    text: "Sempre tive dificuldade pra emagrecer, desde de novinha, mas seguindo as dicas que você passa nesse vídeo, eu já perdi 8kg em 2 meses.",
  },
  {
    name: "Luciana Borges",
    location: "Cuiabá, MT",
    bottles: "5 Frascos",
    image: "https://tirzepro-oficial.com/wp-content/uploads/2026/03/Captura-de-Tela-2025-01-08-as-14.36.54.png",
    text: "Eu estava prestes a desistir de encontrar algo que realmente funcionasse para perder esse peso teimoso pós-gravidez, e então o TirzePro apareceu... Oh, ALEGRIA!!! Meu corpo está agora mais bonito e parece muito mais jovem!",
  },
  {
    name: "Mariana Gontijo",
    location: "Londrina, PR",
    bottles: "5 Frascos",
    image: "https://tirzepro-oficial.com/wp-content/uploads/2026/03/Captura-de-Tela-2025-01-08-as-14.39.28.png",
    text: "Eu estava totalmente desanimada com meu corpo. Mas então comecei a usar o TirzePro, e dia após dia, a gordura começou a desaparecer... Parecia que eu perdi anos de peso pós-gravidez em apenas 4 semanas!",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 space-y-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center">
          Nossos Clientes – <span className="text-gradient-yellow">Resultados que Mudam Vidas</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card rounded-xl p-6 border border-border space-y-4">
              <div className="flex items-center gap-4">
                <img src={r.image} alt={r.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">"{r.text}"</p>
              <p className="text-xs text-primary font-semibold">Compra Verificada | {r.bottles}</p>
              <p className="text-xs text-muted-foreground">Resultados variam de pessoa para pessoa</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

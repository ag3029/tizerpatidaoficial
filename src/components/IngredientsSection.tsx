const ingredients = [
  {
    name: "Berberina",
    description: "Uma substância conhecida pelos seus poderes antioxidantes, sendo capaz de aumentar a produção do hormônio GLP-1 no seu corpo em até 204%.",
    image: "https://tirzepro-oficial.com/wp-content/uploads/2026/03/Captura-de-Tela-2025-06-03-as-03.50.11-150x150.png",
  },
  {
    name: "Ginkgo biloba",
    description: "Aumenta a produção do hormônio GLP-1 no seu corpo e também melhora a libido, energia e acelera o metabolismo.",
    image: "https://tirzepro-oficial.com/wp-content/uploads/2026/03/Captura-de-Tela-2025-06-03-as-03.52.05-150x150.png",
  },
  {
    name: "Ginseng",
    description: "Acelera o metabolismo, promovendo um gasto maior de calorias e auxiliando na queima do estoque de gordura além de melhorar a pele e te dar saciedade.",
    image: "https://tirzepro-oficial.com/wp-content/uploads/2026/03/Captura-de-Tela-2025-06-03-as-03.53.42-150x150.png",
  },
  {
    name: "Triptofano",
    description: "Ajuda a produzir a serotonina, que traz bem-estar, reduz o estresse e a ansiedade. Diminuindo a vontade compulsiva de comer besteira o tempo todo.",
    image: "https://tirzepro-oficial.com/wp-content/uploads/2026/03/Captura-de-Tela-2025-01-08-as-13.46.41-150x150.png",
  },
];

const IngredientsSection = () => {
  return (
    <section id="ingredientes" className="py-16 bg-background">
      <div className="container mx-auto px-4 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Cada Gota do TirzePro <span className="text-gradient-yellow">Contém:</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            4 dos Nossos Ingredientes Cuidadosamente Escolhidos para Auxiliar na Perda de Peso
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((item) => (
            <div key={item.name} className="bg-card rounded-xl p-6 text-center space-y-4 border border-border hover:border-primary/50 transition-colors">
              <img src={item.image} alt={item.name} className="w-20 h-20 mx-auto rounded-full object-cover" />
              <h3 className="text-lg font-bold text-primary">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;

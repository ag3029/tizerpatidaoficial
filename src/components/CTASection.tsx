const CTASection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <img
            src="https://tirzepro-oficial.com/wp-content/uploads/2026/03/Tirzepro.png"
            alt="TirzePro"
            className="w-48 md:w-72 drop-shadow-2xl"
          />
        </div>
        <div className="flex-1 space-y-5">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
            Você está lutando para perder peso?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Aumente sua energia, derreta gordura rapidamente e transforme seu corpo com a Fórmula para emagrecer do TirzePro!
          </p>
          <div className="grid grid-cols-3 gap-3">
            {["Fórmula Natural", "Resultados Rápidos", "100% Seguro", "Fácil de engolir", "Satisfação Garantida", "Alta Qualidade", "Ingredientes naturais", "Acelera o Metabolismo", "Vegano"].map((item) => (
              <span key={item} className="text-xs text-center bg-secondary rounded-lg py-2 px-1 text-muted-foreground">
                ✓ {item}
              </span>
            ))}
          </div>
          <a href="#kits" className="inline-block gradient-yellow text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
            COMPRAR AGORA!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

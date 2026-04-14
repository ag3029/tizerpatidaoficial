const HeroSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co/GfJkTGby/Design-sem-nome-15.png"
            alt="TirzePro - Suplemento natural para controle de peso"
            className="w-64 md:w-96 drop-shadow-2xl"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Apoio Natural ao{" "}
            <span className="text-gradient-yellow">Controle de Peso</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            O TirzePro é um suplemento alimentar formulado com quatro ingredientes de origem{" "}
            <span className="text-primary font-semibold">natural cuidadosamente selecionados,</span>{" "}
            que podem contribuir para o equilíbrio do metabolismo e apoio à gestão de peso,
            quando utilizados como parte de uma alimentação equilibrada e hábitos saudáveis.
          </p>
          <p className="text-foreground font-bold">
            O TirzePro é fabricado no Brasil com os melhores ingredientes nacionais e importados.
          </p>
          <a href="#kits" className="inline-block gradient-yellow text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
            COMPRAR AGORA!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

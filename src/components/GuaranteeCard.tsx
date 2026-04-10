const GuaranteeCard = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
        <img
          src="https://tirzepro-oficial.com/wp-content/uploads/2026/03/selo-garantia.webp"
          alt="Selo de garantia 180 dias"
          className="w-32 mx-auto"
        />
        <h2 className="text-2xl md:text-3xl font-extrabold">
          100% de Garantia de Satisfação –{" "}
          <span className="text-gradient-yellow">180 Dias de Garantia</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Queremos que você tenha tempo suficiente para avaliar o produto. Por isso, oferecemos garantia de reembolso de 180 dias.
          Caso não esteja satisfeito, basta seguir os passos descritos em nossa Política de Garantia para solicitar a devolução e o reembolso.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeCard;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O TIRZEPRO É SEGURO?",
    a: "O TirzePro é 100% natural, seguro e eficaz. Milhares de pessoas fazem o tratamento com o Tirze Pro todos os dias e não recebemos nenhuma reclamação sobre efeitos colaterais. Cada frasco é fabricado aqui no Brasil em uma fábrica aprovada pela ANVISA.",
  },
  {
    q: "QUANTOS FRASCOS DEVO PEDIR?",
    a: "Os melhores resultados vêm quando você toma o Tirze Pro diariamente por 3 meses ou mais. Por isso, recomendamos fortemente que aproveite o nosso pacote de desconto de 3 ou 5 frascos.",
  },
  {
    q: "TEM CONTRAINDICAÇÃO E EFEITO COLATERAL?",
    a: "Por ser um tratamento composto apenas por ingredientes 100% naturais, o Tirze Pro não causa nenhum tipo de efeito colateral.",
  },
  {
    q: "QUAL A MELHOR MANEIRA DE TOMAR O TIRZEPRO?",
    a: "É bem simples! Basta tomar 20 gotas todos os dias, ao acordar, e você vai se surpreender com os resultados.",
  },
  {
    q: "E SE O TIRZEPRO NÃO FUNCIONAR PARA MIM?",
    a: "Você pode experimentar o Tirze Pro hoje por 180 dias inteiros, com uma garantia de reembolso de 100%.",
  },
  {
    q: "EM QUANTO TEMPO POSSO VER OS RESULTADOS?",
    a: "Os resultados costumam variar de pessoa para pessoa, mas os clientes do Tirze Pro afirmam terem notado resultados já nos primeiros dias de uso.",
  },
  {
    q: "QUAL O PRAZO DE ENTREGA?",
    a: "O prazo médio de entrega do Tirze Pro para o Brasil é de 5 até 7 dias úteis (prazo dos Correios). O produto só é enviado após a confirmação do seu pagamento.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl space-y-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center">
          Perguntas <span className="text-gradient-yellow">Frequentes</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-4">
              <AccordionTrigger className="text-sm font-bold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

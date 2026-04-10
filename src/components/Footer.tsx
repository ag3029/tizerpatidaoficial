const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-3">
            <h3 className="font-bold text-foreground">Atendimento e Comercial</h3>
            <p className="text-muted-foreground">Time Comercial (VENDAS)</p>
            <p className="text-muted-foreground">Segunda à Sábado: 7h às 19:45h</p>
            <p className="text-xs text-muted-foreground italic">Horário de Brasília</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-foreground">Serviço de Atendimento (SAC)</h3>
            <p className="text-muted-foreground">Segunda à Sexta: 8h às 18h</p>
            <p className="text-xs text-muted-foreground italic">Horário de Brasília</p>
            <p className="text-muted-foreground">contatotirzepro@gmail.com</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-foreground">Encontre seu pedido</h3>
            <p className="text-muted-foreground">
              O prazo médio de entrega é de 5 até 7 dias úteis (prazo dos Correios).
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center space-y-2">
          <p className="text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            As informações fornecidas não têm a intenção de substituir a consulta a um profissional médico qualificado. 
            O conteúdo do site e do produto à venda baseia-se na opinião do autor e é fornecido "COMO ESTÁ". 
            As declarações neste site não foram avaliadas pela Anvisa. Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
          </p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} TirzePro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

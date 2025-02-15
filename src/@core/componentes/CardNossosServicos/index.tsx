const CardListServicos = () => {
  const servicos = [
    {
      titulo: "Desenvolvimento de Software",
      descricao:
        "Criamos softwares personalizados para atender às necessidades específicas do seu negócio, garantindo eficiência e escalabilidade.",
    },
    {
      titulo: "Criação de Sites",
      descricao:
        "Desenvolvemos websites modernos, responsivos e otimizados para SEO, garantindo uma presença online forte e impactante.",
    },
    {
      titulo: "Desenvolvimento de Aplicativos",
      descricao:
        "Criamos aplicativos para Android e iOS, focados na melhor experiência do usuário e no desempenho de alto nível.",
    },
    {
      titulo: "BOTS Telegram/WhatsApp",
      descricao:
        "Automatizamos processos com bots inteligentes para WhatsApp e Telegram, otimizando o atendimento e a comunicação com seus clientes.",
    },
    {
      titulo: "Suporte a WordPress",
      descricao:
        "Oferecemos suporte especializado para WordPress, desde manutenção e otimização até desenvolvimento de temas e plugins personalizados.",
    },
    {
      titulo: "Consultoria em Sistemas e Automação",
      descricao:
        "Ajudamos sua empresa a implementar sistemas automatizados e eficientes, reduzindo custos e aumentando a produtividade.",
    },
  ];

  return (
    <div>
     
      {servicos.map((servico) => (
        <div className="CardSobre d-flex j-sb a-c j-c">
          <img className="imgContent" src="/imgs/sobre.png" />
          <div className="projeto  d-flex j-c a-s  f-c">
            <div className="listItens d-flex  f-c">
              <div className="itens d-flex a-c ">
                <img src="/imgs/Icon.png" className="itensImg" />
                <p className="itensText">{servico.titulo} </p>
              </div>
              <p className="sobre">{servico.descricao}</p>

              <div className="itens d-flex a-c ">
                <img src="/imgs/Icon.png" className="itensImg" />
                <p className="itensText">Informações de contato </p>
              </div>
              <div className="infoContato d-flex j-sb a-c">
                <div className="infoEmail d-flex f-c a-s ">
                  <p className="emailTitle">Email</p>
                  <p className="emailSubtitle">ffsolutec@gmail.com</p>
                </div>
                <div className="infoPhone d-flex j-sb a-s f-c">
                  <p className="phoneTitle"> Telefone</p>
                  <p className="phoneSubtitle">+21 99999-1286</p>
                </div>
              </div>
              <div className="contato d-flex j-sb">
                <div className="redesSociais d-flex">
                  {/* <img
                src="/imgs/redesSociais/facebook.png"
                className="imgRedeSocial"
              />
              <img
                src="/imgs/redesSociais/linkdin.png"
                className="imgRedeSocial"
              />
              <img
                src="/imgs/redesSociais/twiter.png"
                className="imgRedeSocial"
              /> */}
                </div>

                <a
                  className="buttonContato"
                  href="https://api.whatsapp.com/send?phone=5521999991286&amp;text=Bom%20dia%20gostaria%20de%20saber%20sobre%20os%20serviços%20da%20FFSOLUTEC!"
                  target="_blank"
                >
                  CONTATO
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardListServicos;

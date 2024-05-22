const CardServicos = ({ reverse }: { reverse?: string }) => {
  return (
    <div className={`CardServicos d-flex j-sb a-c j-c ${reverse}`}>
      <div className={`projeto  d-flex f-sb a-s j-c f-c `}>
        <p className="title">APLICAÇÕES WEB RESPONSIVAS</p>
        <p className="subTitle">
          Usamos as melhores tecnologias do momento para atender a necessidade
          do seu negócio. Criando aplicações e sites totalmente responsivos. Na
          criação de sites, nosso design é limpo,focado na simplicidade e fácil
          de usar. Fale com um especialista agora mesmo
        </p>
        <div className="listItens d-flex  f-c">
          <div className="itens d-flex a-c ">
            <img src="/imgs/Icon.png" className="itensImg" />
            <p className="itensText">suporte ESPECIALIZADO</p>
          </div>
          <div className="itens d-flex a-c ">
            <img src="/imgs/Icon.png" className="itensImg" />
            <p className="itensText"> LAYOUT PROFISSIONAL </p>
          </div>
          <div className="itens d-flex a-c ">
            <img src="/imgs/Icon.png" className="itensImg" />
            <p className="itensText">TÉCNICAS DE STORYTELLING</p>
          </div>
          <div className="itens d-flex a-c ">
            <img src="/imgs/Icon.png" className="itensImg" />
            <p className="itensText">ESTRATÉGIA OBJETIVA</p>
          </div>
        </div>
      </div>
      <img className="imgContent" src="/imgs/servicos-img.png" />
    </div>
  );
};

export default CardServicos;

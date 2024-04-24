const CardInformacoes = () => {
  return (
    <div className="CardInformacoes d-flex f-sb a-c j-c">
      <div className="projeto  d-flex f-sb a-s j-c f-c">
        <p className="title">
          A FFsolutec foi projetada para atender empresas como a sua.
        </p>
        <p className="subTitle">
          Proprietário de pequena/média empresa, ou Empreendedores autônomos que
          sofrem com:
        </p>
        <div className="listItens d-flex  f-c">
          <div className="itens d-flex a-c ">
            <img src="/imgs/Icon.png" className="itensImg" />
            <p className="itensText">Marketing e visibilidade online​​​​</p>
          </div>
          <div className="itens d-flex a-c ">
            <img src="/imgs/Icon.png" className="itensImg" />
            <p className="itensText">Tempo e recursos limitados</p>
          </div>
          <div className="itens d-flex a-c ">
            <img src="/imgs/Icon.png" className="itensImg" />
            <p className="itensText">
              Problemas com design e experiência do usuário
            </p>
          </div>
          <div className="itens d-flex a-c ">
            <img src="/imgs/Icon.png" className="itensImg" />
            <p className="itensText">Travamentos</p>
          </div>
        </div>
      </div>
      <img className="imgContent" src="/imgs/homeImg.png" />
    </div>
  );
};

export default CardInformacoes;

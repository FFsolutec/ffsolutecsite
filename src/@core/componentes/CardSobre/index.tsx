const CardSobre = () => {
  return (
    <div className="CardSobre d-flex j-sb a-c j-c">
      <img className="imgContent" src="/imgs/sobre.png" />
      <div className="projeto  d-flex j-c a-s  f-c">
        <div className="listItens d-flex  f-c">
          <div className="itens d-flex a-c ">
            <img src="/imgs/Icon.png" className="itensImg" />
            <p className="itensText">Sobre </p>
          </div>
          <p className="sobre">
            A FFsolutec assim como você esta buscando seu lugar no mundo
            digital. Nessas busca decidemos que o melhor e crescer junto de
            nossos clientes assim existimos para que as empresas prosperem, se
            antecipem e se adaptem às constantes mudanças da era digital.
          </p>

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
  );
};

export default CardSobre;

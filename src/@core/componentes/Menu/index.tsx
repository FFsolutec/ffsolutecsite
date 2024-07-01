const Menu = () => {
  return (
    <div className=" menu  d-flex  d-flex a-c  j-c">
      <div className="links d-flex  d-flex a-c  j-sb">
        <img src="/imgs/logo.png" alt="logo" className="logo" />
        <div className="list-links d-flex a-c j-c ">
          {/* <a href="" className="link">
            Sobre
          </a>
          <a href="" className="link">
            |
          </a>
          <a href="" className="link">
            Serviços
          </a>
          <a href="" className="link">
            |
          </a>
          <a href="" className="link">
            Portifolio
          </a> */}
        </div>
        <a
          className="contact-me"
          style={{ textDecoration: "none" }}
          href="https://api.whatsapp.com/send?phone=5521999991286&amp;text=Bom%20dia%20gostaria%20de%20saber%20sobre%20os%20serviços%20da%20FFSOLUTEC!"
          target="_blank"
        >
          Entre em contato
        </a>
      </div>
    </div>
  );
};

export default Menu;

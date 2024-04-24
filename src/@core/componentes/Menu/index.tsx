const Menu = () => {
  return (
    <div className=" menu  d-flex  d-flex a-c  j-c">
      <div className="links d-flex  d-flex a-c  j-sb">
        <img src="/imgs/logo.png" alt="logo" className="logo" />
        <div className="list-links d-flex a-c j-c ">
          <a href="" className="link">
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
          </a>
        </div>
        <button className="contact-me">Entre em contato</button>
      </div>
    </div>
  );
};

export default Menu;

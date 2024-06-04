import { useEffect } from "react";

const SobrePageView = () => {
  useEffect(() => {
    // Esta função será executada após a renderização do componente e o carregamento do DOM
    const listHoursArray = document.body.querySelectorAll(".list-hours li");
    if (listHoursArray.length > 0) {
      listHoursArray[new Date().getDay()].classList.add("today");
    }
  }, []); // O segundo argumento vazio [] garante que o efeito seja executado apenas uma vez após a montagem do componente

  return (
    <>
      {" "}
      <header>
        <h1 className="site-heading text-center text-faded d-none d-lg-block">
          <span className="site-heading-upper  mb-3">SOBRE NÓS</span>
          <span className="site-heading-lower">FFsolutec</span>
        </h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <a
            className="navbar-brand text-uppercase fw-bold d-lg-none"
            href="index.html"
          >
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-lg-4">
                <a className="nav-link text-uppercase" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item px-lg-4">
                <a className="nav-link text-uppercase" href="/sobre">
                  SOBRE
                </a>
              </li>
              <li className="nav-item px-lg-4">
                <a className="nav-link text-uppercase" href="#">
                  SERVIÇOS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="page-section about-heading">
        <div className="container">
          <img
            className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
            src="/imgs/sobreApresentacao.png"
            alt="..."
          />
          <div className="about-heading-content">
            <div className="row">
              <div className="col-xl-9 col-lg-10 mx-auto">
                <div className=" about-content rounded p-5">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">
                      FFsolutec: Desperte Sua Presença Online!
                    </span>
                    <span className="section-heading-lower">Sobre Nós</span>
                  </h2>
                  <p className="content-text">
                    Projetada para atender pequenas e médias empresas, bem como
                    empreendedores autônomos é assim como você, estamos buscando
                    nosso lugar no mundo digital. Acreditamos no crescimento
                    mútuo e na prosperidade conjunta. Nosso objetivo é garantir
                    que as empresas se antecipem e se adaptem às constantes
                    mudanças da era digital, prosperando em um ambiente
                    competitivo e dinâmico.
                  </p>
                  <p className="mb-0 content-text">
                    Nossa principal meta é transformar a presença online dos
                    nossos clientes, aumentando sua visibilidade e eficiência
                    digital. Queremos ser parceiros estratégicos no crescimento
                    do seu negócio, fornecendo soluções que não apenas atendam
                    às suas necessidades atuais, mas que também preparem sua
                    empresa para o futuro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer text-faded text-center py-5">
        <div className="container">
          <p className="m-0 small">Copyright &copy; Your Website 2023</p>
        </div>
      </footer>
    </>
  );
};

export default SobrePageView;

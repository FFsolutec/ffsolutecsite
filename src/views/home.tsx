import { useEffect } from "react";

const HomePageView = () => {
  useEffect(() => {
    // Esta função será executada após a renderização do componente e o carregamento do DOM
    const listHoursArray = document.body.querySelectorAll(".list-hours li");
    if (listHoursArray.length > 0) {
      listHoursArray[new Date().getDay()].classList.add("today");
    }
  }, []); // O segundo argumento vazio [] garante que o efeito seja executado apenas uma vez após a montagem do componente

  return (
    // <div className="home d-flex a-c j-s f-c">
    //   <CardHeader />

    //   <div className="container">
    //     <CardInformacoes />
    //     <CardSobre />

    //     <div className="d-flex w-100 section-titles f-c">
    //       <div className="d-flex f-wrap w-100 j-sb a-c">
    //         <div className="d-flex f-c a-s j-c titles">
    //           <h3 className="subTitle">SERVIÇoS</h3>
    //           <h1 className="title">Conheça nossos serviços</h1>
    //         </div>
    //         <button className="viewAll">Todo os serviços</button>
    //       </div>
    //       <CardServicos />
    //     </div>

    //     <div className="d-flex f-wrap w-100 servicosRealizados">
    //       <CardServicosRealizados
    //         title="Akke Beneficios"
    //         description="Serviço... realizado"
    //         linkSite="#"
    //         img="/servicos/bootGeek.png"
    //       />
    //       <CardServicosRealizados
    //         title="Integração"
    //         description="Serviço... realizado"
    //         linkSite="#"
    //         img="/servicos/bootGeek.png"
    //       />
    //       <CardServicosRealizados
    //         title="Boot Geek"
    //         linkSite="https://www.botgeek.com.br"
    //         description="Desenvolvimento da page"
    //         img="/servicos/bootGeek.png"
    //       />
    //     </div>
    //   </div>
    //   {/* <Carousel.Root>
    //     <Carousel.Content>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Image
    //           src="/imgs/carroussel/imgTeste.png"
    //           alt="eadtran - logo"
    //           width={180}
    //           height={30}
    //         />
    //       </Carousel.Item>
    //     </Carousel.Content>
    //   </Carousel.Root> */}
    // </div>
    <>
      <div>
        <h1 className="site-heading text-center text-faded d-none d-lg-block">
          <span className="site-heading-upper  mb-3">
            DESPERTE SUA PRESENÇA ONLINE!
          </span>
          <span className="site-heading-lower">FFsolutec</span>
        </h1>
      </div>

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
      <section className="page-section clearfix">
        <div className="container">
          <div className="intro">
            <img
              className="intro-img img-fluid mb-3 mb-lg-0 rounded"
              src="/imgs/testeImg.jpg"
              alt="..."
            />
            <div className="intro-text left-0 text-left bg-faded p-5 rounded">
              <h2 className="section-heading mb-3">
                <span className="section-heading-lower">
                  A Solução Ideal para Sua Empresa
                </span>
              </h2>
              <p className="mb-2 text-decoration">
                Se você é proprietário de uma pequena ou média empresa, ou um
                empreendedor autônomo enfrentando desafios como:
                <br />
                Problemas com Design e Experiência do Usuário <br /> Marketing e
                Visibilidade Online <br />
                Tempo e Recursos Limitados <br /> <br /> Nós estamos aqui para
                ajudar! <br /> Na FFSOLUTEC, entendemos suas necessidades e
                oferecemos soluções personalizadas para transformar esses
                obstáculos em oportunidades de crescimento. Deixe-nos cuidar do
                design e da experiência do usuário, impulsionar seu marketing
                digital e otimizar o uso do seu tempo e recursos, para que você
                possa focar no que faz de melhor: crescer seu negócio.
              </p>

              <div className="intro-button mx-auto">
                <a
                  className="btn btn-primary btn-xl button-contato"
                  href="https://api.whatsapp.com/send?phone=5521999991286&text=Bom%20dia%20gostaria%20de%20saber%20sobre%20os%20serviços%20da%20FFSOLUTEC!"
                  target="_blank"
                >
                  Entre em contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower">
                    NOSSO COMPROMISSO COM VOCÊ
                  </span>
                </h2>
                <p className="mb-0 description">
                  Na FFsolutec, entendemos que você está em busca de seu lugar
                  no mundo digital. Compartilhamos essa jornada com você,
                  dedicando-nos a fornecer um serviço de qualidade, um ambiente
                  acolhedor e, acima de tudo, soluções excepcionais. Nossa
                  missão é garantir que sua empresa prospere, se antecipe e se
                  adapte às constantes mudanças da era digital. Trabalhamos lado
                  a lado com nossos clientes, oferecendo serviços completos de
                  marketing digital, manutenção, desenvolvimento e suporte a
                  sistemas. Se você não estiver satisfeito, por favor, nos avise
                  e faremos tudo o que for possível para resolver o problema.
                  Estamos aqui para garantir seu sucesso no mundo digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer text-faded text-center py-5">
        <div className="container">
          <p className="m-0 small">Copyright &copy; FFSOLUTEC 2024</p>
        </div>
      </div>
    </>
  );
};

export default HomePageView;

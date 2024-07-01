import CardHeader from "@/@core/componentes/CardHeader";
import CardInformacoes from "@/@core/componentes/CardInformacoes/CardInformacoes";
import CardServicosRealizados from "@/@core/componentes/CardServicosRealizados";
import CardSobre from "@/@core/componentes/CardSobre";
import { useEffect } from "react";

const HomePageView = () => {
  useEffect(() => {
    // Esta função será executada após a renderização do componente e o carregamento do DOM
    const listHoursArray = document.body.querySelectorAll(".list-hours li");
    if (listHoursArray.length > 0) {
      listHoursArray[new Date().getDay()].classList.add("today");
    }
  }, []);

  return (
    <>
      <div className="d-flex w-100 a-c j-c header-item">
        <CardHeader />
      </div>

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
                <span
                  className="section-heading-lower"
                  style={{ color: "white" }}
                >
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

      <section className="page-section w-100 cta">
        <div className="container ">
          <CardInformacoes />
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

      <section className="page-section  w-100 cta">
        <div className="container ">
          <CardSobre />
        </div>
      </section>

      <section className="page-section w-100">
        <div className="container  d-flex a-c j-sb servicosRealizados">
          <CardServicosRealizados
            title="APLICAÇÕES WEB RESPONSIVAS"
            description="Na criação de sites, nosso design é limpo,focado na simplicidade e fácil de usar.
Fale com um especialista agora mesmo"
            linkSite="#"
            img="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg"
            servicos={[
              "SUPORTE ESPECIALIZADO",
              "LAYOUT PROFISSIONAL",
              "TÉCNICAS DE STORYTELLING",
              "ESTRATÉGIA OBJETIVA",
            ]}
          />
          <CardServicosRealizados
            title="Desenvolvimento de software"
            description="Focados em trazer uma concepção, criação e implementação de softwares personalizados e visando atender às necessidades específicas dos clientes."
            linkSite="#"
            img="https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=600"
            servicos={[
              "Customização Personalizada",
              "Processo de Desenvolvimento Colaborativo",
              "Suporte Contínuo e Manutenção",
              "Experiência e Expertise",
            ]}
          />
          <CardServicosRealizados
            title="Suporte"
            linkSite="https:www.botgeek.com.br"
            description="Conte com um Time de Especialistas para dar Suporte às suas Necessidades"
            img="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600"
            servicos={["Wordpress", "Software", "SEO"]}
          />
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

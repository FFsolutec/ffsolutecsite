import Menu from "../Menu";
import animationData from "../../../../public/headerAnimation.json"; // Altere para o caminho correto
import Lottie from "lottie-react";

const CardHeaderServicos = () => {
  return (
    <div className="header">
      <Menu />

      <div className="header-List">
        <div className="card-header d-flex a-s j-c f-c">
          <div>
            <h1 className="welcome">Bem vindo!</h1>

            <svg
              width="400"
              height="100"
              viewBox="0 0 400 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="00"
                y="60"
                fontSize="48"
                fontWeight="bold"
                fill="none"
                stroke="#21D0B3"
                strokeWidth="2"
                strokeDasharray="400"
                strokeDashoffset="400"
              >
                FFSOLUTEC
              </text>
            </svg>

            <style>
              {`
    text {
      animation: draw 3s linear forwards;
    }

    @keyframes draw {
      to {
        stroke-dashoffset: 0;
      }
    }
  `}
            </style>

            <div className="redirect-links d-flex f-wrap">
              <p className="redirect-first">Nossos Serviços</p>

              <p className="redirect-second">
                Transformamos ideias em soluções digitais de alto impacto!
                <br />
                Desenvolvemos softwares sob medida, criamos websites responsivos
                e elaboramos estratégias de marketing digital para fortalecer
                sua presença online e impulsionar seus resultados. <br />
                Conte com a nossa expertise para levar o seu negócio ao próximo
                nível.
              </p>
            </div>

            <a
              className="contact-me"
              style={{ textDecoration: "none" }}
              href="https://api.whatsapp.com/send?phone=5521999991286&amp;text=Bom%20dia%20gostaria%20de%20saber%20sobre%20os%20serviços%20da%20FFSOLUTEC!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com um Especialista
            </a>
          </div>
        </div>

        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default CardHeaderServicos;

import React from "react";
import { Button, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <Container className="container">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 600 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMid meet" // Garante alinhamento à esquerda
          style={{
            maxWidth: "100%", // Permite ajuste automático ao tamanho da tela
            display: "block",
            margin: "0", // Remove margem centralizadora
          }}
        >
          <text
            x="0" // Mantém o início do texto no canto esquerdo
            y="80"
            textAnchor="start" // Garante alinhamento à esquerda
            fontSize="3vw" // Usa vw para manter o tamanho proporcional à tela
            fontWeight="bold"
            fill="none"
            stroke="#ffbd59"
            strokeWidth="2"
            strokeDasharray="400"
            strokeDashoffset="400"
            className="responsive-text"
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

     @media (max-width: 960px) {
      .responsive-text {
        font-size: 6vw; /* Se a tela for menor que 768px, aumenta */
      }
    }
      
    
     @media (max-width: 960px) {
      .responsive-text {
        font-size: 6vw; /* Se a tela for menor que 768px, aumenta */
      }
    }
      
    @media (max-width: 768px) {
      .responsive-text {
        font-size: 15vw; /* Se a tela for menor que 768px, aumenta */
      }
    }

    @media (max-width: 480px) {
      .responsive-text {
        font-size: 25vw; /* Para telas menores que 480px, aumenta mais */
      }
    }
  `}
        </style>

        {/* <Typography variant="h3" className="heroTitle">
          FFSOLUTEC
        </Typography> */}
        <Typography variant="h3" className="heroSubTitle">
          Soluções Digitais Inteligentes para Impulsionar Seu Negócio
        </Typography>

        <a
          style={{ width: "max-content" }}
          href="https://api.whatsapp.com/send?phone=5521999991286&amp;text=Bom%20dia%20gostaria%20de%20saber%20sobre%20os%20serviços%20da%20FFSOLUTEC!"
          target="_blank"
        >
          <Button
            variant="contained"
            className="buttonSaibaMais"
            color="primary"
          >
            Fale com um especialista
          </Button>
        </a>
      </Container>
    </section>
  );
};

export default HeroSection;

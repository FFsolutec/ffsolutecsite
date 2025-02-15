import React from "react";
import { Container, Typography, Button, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AboutSection = () => {
  return (
    <section className="aboutSection" id="sobre">
      <Container className="container">
        <img src="/imgs/homeImg.png" />
        <div className="contentEmpresa">
          <Typography variant="h4" className="title">
            Perfil da Empresa
          </Typography>
          <Typography variant="body1" className="subTitle">
            Projetada para atender empresas que buscam foco no digital.
            <br />
            Aqui somos uma empresa de serviços completos, oferecendo soluções
            acessíveis para pessoas e negócios locais e internacionais.
          </Typography>

          <a
            className=""
            href="https://api.whatsapp.com/send?phone=5521999991286&amp;text=Bom%20dia%20gostaria%20de%20saber%20sobre%20os%20serviços%20da%20FFSOLUTEC!"
            target="_blank"
          >
            <IconButton
              size="small"
              sx={{ color: "white" }}
              color="primary"
              className="buttonAbout"
            >
              Fale com um especialista
              <ArrowForwardIcon />
            </IconButton>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

import React from "react";
import { Container, Typography, List, ListItem, Divider } from "@mui/material";
import { Instagram, Facebook, Twitter } from "@mui/icons-material";

const ServicesSolution = () => {
  return (
    <section className="servicesSolution" id="servicos">
      <div className="overlay">
        <Container className="content">
          <div className="left">
            <Typography variant="h3" className="title">
              A Solução Ideal <br /> para Sua Empresa
            </Typography>
            <Typography variant="body1" className="subtitle">
              Aqui você encontrará:
            </Typography>

            <div className="social-icons">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>

          <div className="right">
            <List className="servicesList">
              {[
                "Desenvolvimento Software",
                "Desenvolvimento aplicativos",
                "Criação de sites",
                "Bots Telegram/Whattsapp",
                "Suporte a wordpress",
                "Consultoria em sitemas, automatização e informação",
              ].map((service, index) => (
                <ListItem key={index} className="serviceItem">
                  <span>{service}</span>
                </ListItem>
              ))}
            </List>
          </div>

          <div className="social-icons-mobile">
            <Instagram />
            <Facebook />
            <Twitter />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ServicesSolution;

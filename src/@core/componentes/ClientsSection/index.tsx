import React from "react";
import { Container, Divider, Typography } from "@mui/material";

const MenssagemArea = () => {
  return (
    <section className="menssagemCeo">
      <Container className="menssagemArea">
        <Typography variant="body1" className="menssagem">
          "Na era digital, inovação não é opção, é necessidade. Desenvolvemos
          soluções sob medida para transformar sua visão em realidade, enquanto
          você foca no crescimento do seu negócio."
        </Typography>
        <hr />
        <Typography variant="h4" className="about">
          — Fabricio Fernando, CEO
        </Typography>
      </Container>
    </section>
  );
};

export default MenssagemArea;

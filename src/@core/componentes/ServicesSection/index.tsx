import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  IconButton,
  Button,
  ListItemText,
} from "@mui/material";
import CardServicosRealizados from "../CardServicosRealizados";
import { Grid } from "swiper/modules";

const services = [
  "Desenvolvimento de Software",
  "Criação de Sites",
  "Desenvolvimento de Aplicativos",
  "Bots Telegram/WhatsApp",
  "Suporte ao WordPress",
];

const ServicesSection = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <section className="servicesSection">
      <Container className="servicosRealizados">
        <div className="servicosRealizados-left">
          <p>Nosso Serviços</p>
          <img src="/imgs/backgroundNossosServicos.png" />
          <Button
            variant="contained"
            sx={{ color: "white" }}
            color="primary"
            className="buttonAbout"
          >
            Fale com um especialista
          </Button>
        </div>

        <div className="servicosRealizados-right">
          <Typography
            sx={{ mt: 4, mb: 2, color: "black" }}
            variant="h6"
            component="div"
          >
            Text only
          </Typography>

          <List dense={dense} className="ListService">
            {services.map((service) => (
              <ListItem className="ListItemService">
                <span className="ListServiceItemText">{service}</span>
              </ListItem>
            ))}
          </List>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;

import React from "react";
import AboutSection from "@/@core/componentes/AboutSection";
import ClientsSection from "@/@core/componentes/ClientsSection";
import Footer from "@/@core/componentes/Footer";
import Header from "@/@core/componentes/Header";
import HeroSection from "@/@core/componentes/HeroSection";
import ServicesSection from "@/@core/componentes/ServicesSection";
import ServicesSolution from "@/@core/componentes/ServicesSolution";
import MenssagemArea from "@/@core/componentes/ClientsSection";
import CardSobre from "@/@core/componentes/CardSobre";

const HomePageViewNew = () => {
  return (
    <div className="newHome">
      {/* <Header /> */}
      <HeroSection />
      <AboutSection />
      <ServicesSolution />
      {/* <ServicesSection /> */}
      <MenssagemArea />

      <CardSobre />

      <div className="footer text-faded text-center py-5">
        <div className="container">
          <p className="m-0 small">Copyright &copy; FFSOLUTEC 2024</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageViewNew;

import CardHeaderServicos from "@/@core/componentes/CardHeader/CardHeaderServicos";
import CardListServicos from "@/@core/componentes/CardNossosServicos";

import { useEffect } from "react";

const ServicosPageView = () => {
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
        <CardHeaderServicos />
      </div>

      <section className="page-section  w-100 cta">
        <div className="container ">
          <CardListServicos />
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

export default ServicosPageView;

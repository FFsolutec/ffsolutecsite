import CardHeader from "@/@core/componentes/CardHeader";
import CardInformacoes from "@/@core/componentes/CardInformacoes/CardInformacoes";
import CardServicos from "@/@core/componentes/CardServicos";
import CardServicosRealizados from "@/@core/componentes/CardServicosRealizados";
import CardSobre from "@/@core/componentes/CardSobre";
import Menu from "@/@core/componentes/Menu";

const HomePageView = () => {
  return (
    <div className="home d-flex a-c j-s f-c">
      <div className="container">
        <CardHeader />
        <CardInformacoes />
        <CardSobre />

        <div className="d-flex f-wrap w-100 j-sb a-c section-titles">
          <div className="d-flex f-c a-s j-c titles">
            <h3 className="subTitle">SERVIÇoS</h3>
            <h1 className="title">CONHEÇA NOSSOS SERVIÇOS</h1>
          </div>
          <button className="viewAll">Todo os serviços</button>
        </div>
        <CardServicos />
        <CardServicosRealizados />
      </div>
    </div>
  );
};

export default HomePageView;

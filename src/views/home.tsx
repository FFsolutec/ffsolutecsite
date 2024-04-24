import CardHeader from "@/@core/componentes/CardHeader";
import CardInformacoes from "@/@core/componentes/CardInformacoes/CardInformacoes";
import CardSobre from "@/@core/componentes/CardSobre";
import Menu from "@/@core/componentes/Menu";

const HomePageView = () => {
  return (
    <div className="home d-flex a-c j-s f-c">
      <div className="container">
        <CardHeader />
        <CardInformacoes />
        <CardSobre />
      </div>
    </div>
  );
};

export default HomePageView;

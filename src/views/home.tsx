import CardHeader from "@/@core/componentes/CardHeader";
import CardInformacoes from "@/@core/componentes/CardInformacoes/CardInformacoes";
import CardServicos from "@/@core/componentes/CardServicos";
import CardServicosRealizados from "@/@core/componentes/CardServicosRealizados";
import CardSobre from "@/@core/componentes/CardSobre";
import { Carousel } from "@/@core/componentes/Carroussel";
import Menu from "@/@core/componentes/Menu";
import Image from "next/image";

const HomePageView = () => {
  return (
    <div className="home d-flex a-c j-s f-c">
      <CardHeader />
      <Carousel.Root>
        <Carousel.Content>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
        </Carousel.Content>
      </Carousel.Root>

      <div className="container">
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
        <div className="d-flex f-wrap w-100 servicosRealizados">
          <CardServicosRealizados
            title="Akke Beneficios"
            description="Serviço... realizado"
            linkSite="#"
            img="/servicos/bootGeek.png"
          />
          <CardServicosRealizados
            title="Integração"
            description="Serviço... realizado"
            linkSite="#"
            img="/servicos/bootGeek.png"
          />
          <CardServicosRealizados
            title="Boot Geek"
            linkSite="https://www.botgeek.com.br"
            description="Desenvolvimento da page"
            img="/servicos/bootGeek.png"
          />
        </div>
      </div>
      <Carousel.Root>
        <Carousel.Content>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/imgs/carroussel/imgTeste.png"
              alt="eadtran - logo"
              width={180}
              height={30}
            />
          </Carousel.Item>
        </Carousel.Content>
      </Carousel.Root>
    </div>
  );
};

export default HomePageView;

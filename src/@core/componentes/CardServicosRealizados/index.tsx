import { link } from "fs";
import React from "react";

interface CardServicosRealizadosProps {
  title: string;
  description: string;
  linkSite: string;
  img: string;
}

const CardServicosRealizados: React.FC<CardServicosRealizadosProps> = ({
  title,
  description,
  linkSite,
  img,
}) => {
  return (
    <div className="CardServicosRealizados d-flex j-sb a-c j-c">
      <img className="imgServicoRealizado" src={img} alt="Serviço Realizado" />
      <div className="d-flex f-c descricaoServicoRealizado">
        <a href={linkSite} target="_blank">
          {title}
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardServicosRealizados;

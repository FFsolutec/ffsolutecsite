import { link } from "fs";
import React from "react";

interface CardServicosRealizadosProps {
  title: string;
  description: string;
  linkSite: string;
  img: string;
  servicos: string[];
}

const CardServicosRealizados: React.FC<CardServicosRealizadosProps> = ({
  title,
  description,
  linkSite,
  img,
  servicos,
}) => {
  return (
    <div className="CardServicosRealizados d-flex j-sb a-c j-c">
      <div className="area-img-servico">
        <img className="imgServico" src={img} alt="Serviço Realizado" />
        <p className="title-servico">{title}</p>
      </div>

      <div className="d-flex f-c descricaoServicoRealizado">
        <a href={linkSite} target="_blank" className="titleServicoRealizado">
          {title}
        </a>
        <p className="description">{description}</p>
        <div className="servicos-list">
          {servicos.map((servico, index) => (
            <li key={index}>{servico}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardServicosRealizados;

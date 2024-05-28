import React from "react";

interface CardServicosRealizadosProps {
  title: string;
  description: string;
}

const CardServicosRealizados: React.FC<CardServicosRealizadosProps> = ({
  title,
  description,
}) => {
  return (
    <div className="CardServicosRealizados d-flex j-sb a-c j-c">
      <img
        className="imgServicoRealizado"
        src="/imgs/servicos-img.png"
        alt="Serviço Realizado"
      />
      <div className="descricaoServicoRealizado">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardServicosRealizados;

const CardHeader = () => {
  return (
    <div className=" card-header d-flex a-c j-sb">
      <h1 className="ffsolutec">FFsolutec</h1>

      <img
        src="/imgs/img-background-card-header.png"
        alt="img-background-card-header"
        className="img-background-card-header"
      />

      <div className="redirect-links d-flex f-wrap">
        <p className="redirect-first">Desperte </p>
        <button className="redirect-button">teste</button>
        <p className="redirect-second"> sua presença online!</p>
      </div>
    </div>
  );
};

export default CardHeader;

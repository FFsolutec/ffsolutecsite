const CardHeader = () => {
  return (
    <div className=" menu">
      <div className="links d-flex">
        <h1 className="ffsolutec">FFsolutec</h1>

        <img
          src="/imgs/img-background-card-header.png"
          alt="mg-background-card-header"
          className="img-background-card-header"
        />

        <div className="redirect-links d-flex f-wrap">
          <p className="redirect-first">Desperte </p>
          <button className="redirect-button">teste</button>
          <p className="redirect-second"> sua presença online!</p>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;

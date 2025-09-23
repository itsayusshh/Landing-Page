function Cardmain({ img, title, subtitle }) {
  return (
    <div className="companyCard">
      <div className="invidualimage">
        <img src={img}></img>
      </div>
      <div className="Member">
        <p>{title}</p>
      </div>
      <div className="Membership">
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default Cardmain;

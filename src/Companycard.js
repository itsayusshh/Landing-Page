function Cardmain({ img, title, subtitle }) {
  return (
    <div className="companyCard">
      <div className="invidualimage">
        <img src={img}></img>
      </div>
      <div className="Member">{title}</div>
      <div className="Membership">{subtitle}</div>
    </div>
  );
}

export default Cardmain;

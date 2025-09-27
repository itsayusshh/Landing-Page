import Logo from "./Nextcentlogo.png";
import Airplane from "./airplane.png";

function Footer() {
  return (
    <>
      <div className="Pellentesque">
        <h1>Pellentesque suscipit fringilla libero eu.</h1>
        <button className="Pellentesque-button">Get a demo →</button>
      </div>
      <br />
      <form className="ContactForm">
        <h4 className="Form">Please fill the form below to contact us!!</h4>
        <br />
        <div className="Row1">
          <input className="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <br />
        <div className="Row2">
          <input type="email" placeholder="Please type your email" />
        </div>
        <br />
        <div className="Row3">
          <input type="text" placeholder="Reviewbox" />
        </div>
      </form>
      <br />
      <div className="Pellentesque-2">
        <div className="Pellentesque-2-sec1">
          <div className="Pellentesque-0">
            <img className="Pellentesque-0-img" src={Logo}></img>
            <p style={{ width: "370px" }}>Copyright © 2025 Nexcent ltd.</p>
            <p style={{ marginRight: "20px" }}>All rigth reserved</p>
          </div>
        </div>
        <div className="Pellentesque-2-sec2">
          <div style={{ listStyle: "none" }}>
            <h4 style={{ color: "#FFFFFF", fontWeight: "bold" }}>Company</h4>
            <br />
            <ul style={{ fontSize: 15, listStyle: "none" }}>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonal</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "white", fontWeight: "bold" }}>Support</h4>
            <br />
            <ul style={{ fontSize: 15, listStyle: "none" }}>
              <li>Help centre</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Stay up to date
            </h4>
            <button className="airplane1">
              Your email address <img className="airplane" src={Airplane}></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import Logo from "./Logo.js";
import Pictures from "./Logo.js";

import ComopanyLogo1 from "./Logo (0).png";
import ComopanyLogo2 from "./Logos (1).png";
import ComopanyLogo3 from "./Logos (2).png";
import ComopanyLogo4 from "./Logo (4).png";
import ComopanyLogo5 from "./Logo (5).png";
import ComopanyLogo6 from "./Logo (6).png";
import ComopanyLogo7 from "./Logo (7).png";
import Cardmain from "./Companycard.js";

import Print1 from "./MinimalLandingPageIcon.png";
import Print2 from "./Icon 2.png";
import Print3 from "./Icon 3.png";

const newlogo = [
  ComopanyLogo1,
  ComopanyLogo2,
  ComopanyLogo3,
  ComopanyLogo4,
  ComopanyLogo5,
  ComopanyLogo6,
  ComopanyLogo7,
];

const cards = [
  {
    img: Print1,
    title: "Membership Organisations",
    subtitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    img: Print2,
    title: "National Associations",
    subtitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    img: Print3,
    title: "Clubs And Groups",
    subtitle:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

function Portfoliopage() {
  return (
    <div className="P-mainbox">
      <div className="P-mainbox1">
        <div className="Clients">Our Clients</div>
        <div className="details">
          we have been working with some Fortune 500+ clients
        </div>
        <div className="Logos-container">
          {newlogo.map((callback) => {
            return <Pictures Logo={callback} />;
          })}
        </div>
        <div className="Community-Holder">
          <div className="Community"> Manage your entire community </div>
          <div className="singlesystem"> in a single system </div>
          <div className="suitable">Who is Nextcent suitable for?</div>
        </div>
        <div className="Card">
          {cards.map((callback) => {
            console.log(callback);
            return (
              <Cardmain
                img={callback.img}
                title={callback.title}
                subtitle={callback.subtitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfoliopage;

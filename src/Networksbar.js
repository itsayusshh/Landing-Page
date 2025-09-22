import Pana from "./pana.png";
import Members from "./Members.js";

import Designelement from "./Designelement.png";
import Clubs from "./Clubs.png";
import Eventbookings from "./Eventbookings.png";
import Payments from "./Payments.png";

const newmembers = [Designelement, Clubs, Eventbookings, Payments];

function Networkbar() {
  return (
    <>
      <div className="Business-analayis">
        <div className="Members-grp1">
          <div>Helping a local </div>
          <div>business reinvent itself</div>
          <div>We reached here with our hard work and dedication</div>
        </div>
        <div className="Members-grp2">
          {newmembers.map((call) => {
            return <Members design={call} />;
          })}
          <div className="Members-para"></div>
          <div className="Members-list"></div>
        </div>
      </div>
      <div className="NB-mainpage">
        <div className="NB-1container">
          <img src={Pana} className="Panacss"></img>
        </div>
        <div className="NB-2container">
          <div className="NB-2container-title">
            How to design your site footer like we did
          </div>
          <div className="NB-2container-subtitle">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </div>
          <div className="NB-2container-button">
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Networkbar;

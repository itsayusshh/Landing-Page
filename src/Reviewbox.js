import Pictures from "./Pictures";
import { newlogo } from "./Portfoliopage.js";
import Advertising from "./Advertising.js";

const Advertise = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },

  {
    title:
      "What are your safeguarding responsibilities and how can you manage them",
  },

  {
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

function Reviewbox() {
  return (
    <>
      <div className="Review-mainbox">
        <div className="Review-mainbox1">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="Review-mainbox-title">
            <p>Tim Smith</p>
          </div>
          <div>
            <p>British Dragon Boat Racing Association</p>
          </div>
          <div className="Review-mainbox-logo">
            {newlogo.map((callback) => {
              return <Pictures Logo={callback} />;
            })}
            <div className="Review-Customers">
              <p>Meet all customers →</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Advertisement">
        <h3>Caring is the new marketing</h3>
        <div>
          <div>
            <p>
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </div>
        </div>
      </div>
      <div className="Advertisement-card">
        {Advertise.map((advertisecall) => {
          return (
            <Advertising
              adver={advertisecall.title}
             
            />
          );
        })}
      </div>
    </>
  );
}

export default Reviewbox;

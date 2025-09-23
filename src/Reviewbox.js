import Pictures from "./Pictures";
import { newlogo } from "./Portfoliopage.js";

function Reviewbox() {
  return (
    <>
      <div>
        <div>
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
          <div>
            <p>Tim Smith</p>
          </div>
          <div>
            <p>British Dragon Boat Racing Association</p>
          </div>
          <div>
            {newlogo.map((callback) => {
              return <Pictures Logo={callback} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviewbox;

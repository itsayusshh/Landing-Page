import Header from "./Header.js";
import Landingage from "./Landingpage.css";
import Heropage from "./Heropage.js";
import Portfoliopage from "./Portfoliopage.js";
import Networkbar from "./Networksbar.js";

function App() {
  return (
    <div className="mainwrapper">
      <Header />
      <Heropage />
      <Portfoliopage />
      {/* <Networkbar />  */}
    </div>
  );
}

export default App;

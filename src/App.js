import Header from "./Header.js";
import Landingage from "./Landingpage.css";
import Heropage from "./Heropage.js";
import Portfoliopage from "./Portfoliopage.js";


function App() {
  return (
    <div className="mainwrapper">
      <Header />
      <Heropage />
      <Portfoliopage/>
      
    </div>
  );
}

export default App;

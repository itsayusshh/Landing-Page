import Man from "./Landingpageman.png";

function Heropage() {
  return (
    <>
      <div className="maincontainer">
        <div className="container1">
          <div className="subcont1">
            <p className="insights1">Lesson and insights</p>
          </div>
          <div className="subcont2">
            <p className="insights2">from 8 years</p>
          </div>
          <div className="subcont3">
            <p className="insights3">
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
        </div>
        <div className="container2">
          <img className="template" src={Man}></img>
        </div>
        <div className="buttons">
        <button></button>
        <button></button>
        <button></button>
        </div>
      </div>
    </>
  );
}

export default Heropage;

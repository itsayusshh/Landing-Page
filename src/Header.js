import Logo from "./Logo from Figma.png";
import Hamburger from "./Hamburger.js";

function Header() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={Logo}></img>
        <Hamburger />
        <ul className="menucontainer">
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonal</li>
          <li>Faq</li>
          <div class="authenticationcont">
            <button className="login">Login</button>
            <button className="signup">Sign up</button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Header;

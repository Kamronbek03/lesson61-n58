import "./header.scss";
function Header() {
  return (
    <div className="head">
      <div className="container">
        <a className="logo" href="#">
          <img src="../../src/assets/images/header/Logo1.svg" alt="Logo..." />
          <img src="../../src/assets/images/header/Logo2.svg" alt="Logo..." />
        </a>
        <div className="others">
          <div className="links">
            <a className="a1" href="#">
              Product
            </a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </div>
          <div className="buttons">
            <button className="btn1">Sign In</button>
            <button className="btn2">Sign Up</button>
          </div>
          <img src="../../src/assets/images/header/btn.svg" alt="Logo..." />
        </div>
      </div>
    </div>
  );
}
export default Header;

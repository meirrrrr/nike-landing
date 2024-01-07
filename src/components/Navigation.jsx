import logo from "../images/brand_logo.svg";

function Navigation() {
  return (
    <nav className="container">
      <div className="logo">
        <img src={logo} alt="brand_logo" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
}

export default Navigation;

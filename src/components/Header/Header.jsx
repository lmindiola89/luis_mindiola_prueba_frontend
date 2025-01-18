import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div>
        <Navbar />
        <Hero />
      </div>
      <div className="header-image"></div>
    </header>
  );
}

export default Header;

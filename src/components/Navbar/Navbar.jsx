import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li className="dropdown">
          <a href="#pages">Pages</a>
          <ul className="dropdown-content">
            <li className="submenu">
              <a href="#page1">Page 1</a>
              <ul className="submenu-content">
                <li>
                  <a href="#page1-item1">Item 1</a>
                </li>
                <li>
                  <a href="#page1-item2">Item 2</a>
                </li>
                <li>
                  <a href="#page1-item3">Item 3</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#page2">Page 2</a>
              <ul className="submenu-content">
                <li>
                  <a href="#page2-item1">Item 1</a>
                </li>
                <li>
                  <a href="#page2-item2">Item 2</a>
                </li>
                <li>
                  <a href="#page2-item3">Item 3</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#page3">Page 3</a>
              <ul className="submenu-content">
                <li>
                  <a href="#page3-item1">Item 1</a>
                </li>
                <li>
                  <a href="#page3-item2">Item 2</a>
                </li>
                <li>
                  <a href="#page3-item3">Item 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import "./Navbar.scss";

// Componente de barra de navegación
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {/* Enlace al inicio */}
        <li>
          <a href="#home">Home</a>
        </li>
        {/* Menú desplegable de páginas */}
        <li className="dropdown">
          <a href="#pages">Pages</a>
          <ul className="dropdown-content">
            {/* Submenú de la página 1 */}
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
            {/* Submenú de la página 2 */}
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
            {/* Submenú de la página 3 */}
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
        {/* Enlace a la sección 'About' */}
        <li>
          <a href="#about">About</a>
        </li>
        {/* Enlace a la sección 'Contact' */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

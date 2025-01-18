import "./Footer.scss";

// Componente que representa el pie de página (Footer)
function Footer() {
  // Maneja el evento de clic en el enlace
  const handleClick = () => {
    console.log("footer link");
  };

  return (
    <footer className="footer">
      {/* Contenedor principal de contenido del footer */}
      <div className="footer-content">
        {/* Sección del footer con un título y párrafo */}
        <div className="footer-section">
          <h3>Lorem ipsum dolor amet</h3>
          <p>consectetur adipiscing elit. Quisque eu consectetur mi.</p>
        </div>
        {/* Otra sección del footer */}
        <div className="footer-section">
          <h3>Lorem ipsum dolor amet</h3>
          <p>consectetur adipiscing elit. Quisque eu consectetur mi.</p>
        </div>
        {/* Otra sección más */}
        <div className="footer-section">
          <h3>Lorem ipsum dolor amet</h3>
          <p>consectetur adipiscing elit. Quisque eu consectetur mi.</p>
        </div>
      </div>
      {/* Contenedor de la parte inferior del footer */}
      <div className="footer-bottom">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          {/* Enlace interactivo en la parte inferior */}
          <a href="#" className="link-here" onClick={handleClick}>
            Link here
          </a>{" "}
          Lorem ipsum
        </p>
      </div>
    </footer>
  );
}

export default Footer;

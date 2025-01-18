import "./Hero.scss";

function Hero() {
  const handleClick = () => {
    console.log("Go There");
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Lorem ipsum</h1>
        <h2>Neque porro quisquam</h2>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
        <p>
          There is no one who loves pain itself, who seeks after it and wants to
          have it, simply because it is pain...
        </p>
        <button className="cta-button" onClick={handleClick}>
          Go there...
        </button>
      </div>
    </section>
  );
}

export default Hero;

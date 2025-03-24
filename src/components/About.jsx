import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <header className="nav-bar">
        <Link to="/" className="logo">
          #VANLIFE
        </Link>
        <nav className="nav-links">
          <Link to="/about" className="links">
            About
          </Link>
          <Link to="/vans" className="links">
            Vans
          </Link>
        </nav>
      </header>
      <main className="about-me">
        <img
          src="./src/assets/image 54.png"
          alt="van-overlooking-beach"
          className="about-me-img"
        />
        <section className="about-details">
          <h2 className="about-heading">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p className="about-desc">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="about-desc">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <section className="explore-vans">
            <p className="explore-vans-text">Your destination is waiting.</p>
            <p className="explore-vans-text">Your van is ready.</p>
            <button className="explore-vans-btn">Explore our vans</button>
          </section>
        </section>
      </main>
      <footer>2022 #VANLIFE</footer>
    </>
  );
}

import { Link } from "react-router-dom";

export default function Home() {
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
      <main className="home-page">
        <section>
          <p className="banner-text">
            You got the travel plans, we got the travel vans.
          </p>
          <p className="desc-text">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button className="home-page-button">Find your van</button>
        </section>
      </main>
      <footer>2022 #VANLIFE</footer>
    </>
  );
}

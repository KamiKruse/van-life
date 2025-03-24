import { Link } from "react-router-dom";
export default function Vans(){
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
        <main>
          
        </main>
      </>
    );
}

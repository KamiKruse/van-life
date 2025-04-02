import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="nav-bar">
        <Link to="/" className="logo">
          #VANLIFE
        </Link>
        <nav className="nav-links">
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active-link links" : "links")}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link links" : "links")}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "active-link links" : "links")}
          >
            Vans
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active-link links" : "links")}
          >
            Login
          </NavLink>
        </nav>
      </header>
    </>
  );
}

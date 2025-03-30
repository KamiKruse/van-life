import { NavLink } from "react-router-dom";
export default function HostHeader() {
  return (
    <>
      <nav className="host-navlinks">
        <NavLink
          to="/host"
          end
          className={({ isActive }) => {
            return isActive ? "active-link" : null;
          }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => {
            return isActive ? "active-link" : null;
          }}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => {
            return isActive ? "active-link" : null;
          }}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => {
            return isActive ? "active-link" : null;
          }}
        >
          Reviews
        </NavLink>
      </nav>
    </>
  );
}

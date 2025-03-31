import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="not-found">
      <p className="not-found-vans-heading">
        Sorry, the page you were looking for was not found.
      </p>
      <button className="not-found-button">
        <Link to="/">Return to Home</Link>
      </button>
    </div>
  );
}

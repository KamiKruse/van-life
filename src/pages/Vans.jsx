import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import VanList from "../components/VanList";
import { vanGetCall } from "../api";

export default function Vans() {
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    const getVans = async () => {
      setLoading(true);
      try {
        const data = await vanGetCall();

        data.map((van) => setList((item) => [...item, van]));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getVans();
  }, []);

  const displayedVans = typeFilter
    ? list.filter((van) => van.type.toLowerCase() === typeFilter)
    : list;

  if (loading) {
    return (
      <h1 className="loading-state" aria-live="polite">
        Loading...
      </h1>
    );
  }
  if (error) {
    return (
      <h1 className="loading-state" aria-live="assertive">
        There was an error: {error.message}
      </h1>
    );
  }
  return (
    <>
      <main className="vans-page">
        <section className="vans-filters">
          <p className="vans-heading">Explore our van options</p>
          <section className="vans-filter-list">
            <button
              onClick={() => setSearchParams({ type: "simple" })}
              className="vans-filter-btn"
            >
              Simple
            </button>
            <button
              onClick={() => setSearchParams({ type: "luxury" })}
              className="vans-filter-btn"
            >
              Luxury
            </button>
            <button
              onClick={() => setSearchParams({ type: "rugged" })}
              className="vans-filter-btn"
            >
              Rugged
            </button>
          </section>
          {typeFilter && (
            <button
              onClick={() => setSearchParams({})}
              className="vans-filter-clear-btn"
            >
              Clear Filters
            </button>
          )}
        </section>
        <ul className="van-section">
          {displayedVans.map((van) => {
            return (
              <Link
                to={van.id}
                state={{ search: `?${searchParams.toString()}` }}
                className="link-to"
              >
                <VanList
                  id={van.id}
                  key={van.id}
                  name={van.name}
                  description={van.description}
                  image={van.imageUrl}
                  price={van.price}
                  type={van.type}
                />
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );
}

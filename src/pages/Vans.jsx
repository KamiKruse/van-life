import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import VanList from "../components/VanList";

export default function Vans() {
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    const getVans = async () => {
      try {
        const response = await fetch("/api/vans");
        const result = await response.json();
        result.vans.map((van) => setList((item) => [...item, van]));
      } catch (error) {
        console.log("Error fetching:", error);
      }
    };
    getVans();
  }, []);

  const displayedVans = typeFilter
    ? list.filter((van) => van.type.toLowerCase() === typeFilter)
    : list;

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

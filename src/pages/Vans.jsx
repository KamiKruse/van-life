import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VanList from "../components/VanList";

export default function Vans() {
  const [list, setList] = useState([]);

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
  return (
    <>
      <main className="vans-page">
        <section className="vans-filters">
          <p className="vans-heading">Explore our van options</p>
          <section className="vans-filter-list">
            <button className="vans-filter-btn">Simple</button>
            <button className="vans-filter-btn">Luxury</button>
            <button className="vans-filter-btn">Rugged</button>
          </section>
          <a href="#" className="vans-filter-clear-btn">
            Clear Filters
          </a>
        </section>
        <ul className="van-section">
          {list.map((van) => {
            return (
              <Link to={`/vans/${van.id}`} className="link-to">
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

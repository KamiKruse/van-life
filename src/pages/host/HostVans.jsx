import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HostVanList from "../../components/HostVanList";


export default function HostVans() {
  const [hostVans, setHostVans] = useState([])

  useEffect(()=>{
    const getHostVans = async()=>{
        try {
            const response = await fetch("/api/host/vans")
            const result = await response.json()
            setHostVans(result.vans)
        } catch (error) {
            console.log("Error fetching data: ", error);
        }
    }
    getHostVans()
  },[])
  return (
    <main className="host-van-page">
        <p className="host-van-title">Your Listed vans</p>
      <ul className="host-van-list">
        {hostVans.map((van) => {
          return (
            <Link to={`/host/vans/${van.id}`} className="link-to">
              <HostVanList
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
  );
}

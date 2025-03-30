import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import {Link, Outlet, useParams, NavLink} from "react-router-dom"

export default function HostVanDetails() {
    const {id} = useParams()
    const [vanDeet, setVanDeet] = useState({})

    useEffect(()=>{
        const vanInfo = async() =>{
            try {
                const response = await fetch(`/api/host/vans/${id}`)
                const result = await response.json()
                setVanDeet(result.vans[0])
            } catch (error) {
                console.log("Error fetching data:", error)
            }
        }
        vanInfo()
    }, [id])
     const tagSwitch = () => {
       if (vanDeet.type === "luxury") {
         return "van-tag-luxury";
       } else if (vanDeet.type === "rugged") {
         return "van-tag-rugged";
       } else {
         return "van-tag-simple";
       }
     };
    
  return (
    <main className="host-van-details-page">
      <Link to="/host/vans" className="vans-page-backlink">
        <ArrowLeft size={18} color="grey" />
        <p className="vansDetails-link-text">Back to all Vans</p>
      </Link>
      <div className="host-van-details">
        <section className="host-van-details-image-row">
          <img
            src={vanDeet.imageUrl}
            alt={`Image of${vanDeet.name}`}
            className="host-van-details-img"
          />
          <div className="host-van-details-stats">
            <div className={tagSwitch()}>
              {vanDeet?.type?.[0].toUpperCase() + vanDeet?.type?.slice(1) || ""}
            </div>
            <p className="host-van-details-heading">{vanDeet.name}</p>
            <p className="host-van-details-price">${vanDeet.price}/day</p>
          </div>
        </section>
        <div className="host-van-details-navlinks">
          <nav className="host-navlinks">
            <NavLink
              to="."
              end
              className={({ isActive }) => {
                return isActive ? "active-link" : null;
              }}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) => {
                return isActive ? "active-link" : null;
              }}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) => {
                return isActive ? "active-link" : null;
              }}
            >
              Photos
            </NavLink>
          </nav>
        </div>
        <Outlet context={vanDeet} />
      </div>
    </main>
  );
}

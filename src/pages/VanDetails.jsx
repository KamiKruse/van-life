import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function VanDetails() {
    const [vanDetail, setVanDetail] = useState({})
    const params = useParams()
    useEffect(()=>{
        const vanDeets = async() =>{
            try {
                const response = await fetch(`/api/vans/${params.id}`)
                const result = await response.json()
                setVanDetail(result.vans)
            } catch (error) {
                console.log("Error fetching error: ", error)
            }
        }
        vanDeets()
    }, [params])
    
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
      <main className="van-details-main">
        <Link to="/vans" className="vans-page-backlink">Back to all Vans</Link>
        <img src={vanDetail.imageUrl} alt={`Image of ${vanDetail.name}`} />
      </main>
      <footer>2022 #VANLIFE</footer>
    </>
  );
}

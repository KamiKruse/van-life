import { Link, useParams } from "react-router-dom";
import { ArrowLeft} from "lucide-react";
import { useEffect, useState } from "react";

export default function VanDetails() {
  const [vanDetail, setVanDetail] = useState({});
  const params = useParams();
  useEffect(() => {
    const vanDeets = async () => {
      try {
        const response = await fetch(`/api/vans/${params.id}`);
        const result = await response.json();
        setVanDetail(result.vans);
      } catch (error) {
        console.log("Error fetching error: ", error);
      }
    };
    vanDeets();
  }, [params]);
  const tagSwitch = () => {
    if (vanDetail.type === "luxury") {
      return "van-tag-luxury";
    } else if (vanDetail.type === "rugged") {
      return "van-tag-rugged";
    } else {
      return "van-tag-simple";
    }
  };

  return (
    <>
      <Link to="/vans" className="vans-page-backlink">
        <ArrowLeft size={18} color="grey" />
        <p className="vansDetails-link-text">Back to all Vans</p>
      </Link>
      <main className="van-details-main">
        <img
          src={vanDetail.imageUrl}
          alt={`Image of ${vanDetail.name}`}
          className="vandetails-image"
        />
        <section className="vanDetails-blurb">
          <div className={tagSwitch()}>{vanDetail.type}</div>
          <p className="vanDetails-heading">{vanDetail.name}</p>
          <p className="vanDetails-price">${vanDetail.price}/day</p>
          <p className="vanDetails-body">
            The Modest Explorer is a van designed to get you out of the house
            and into nature. This beauty is equipped with solar panels, a
            composting toilet, a water tank and kitchenette. The idea is that
            you can pack up your home and escape for a weekend or even longer!
          </p>
          <button className="vanDetails-btn">Rent this Van</button>
        </section>
      </main>
    </>
  );
}

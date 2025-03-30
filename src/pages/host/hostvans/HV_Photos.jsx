import { useOutletContext } from "react-router-dom";

export default function HV_Photos() {
  const vanData = useOutletContext();

  return (
    <section className="hv-details-page">
      <img
        src={vanData.imageUrl}
        alt={`Image of${vanData.name}`}
        className="hv-photos-img"
      />
    </section>
  );
}

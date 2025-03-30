import {useOutletContext} from "react-router-dom"

export default function HV_Details() {
  const vanData = useOutletContext()
 
  return (
    <section className="hv-details-page">
      <span className="hv-details-labels">
        Name: <span className="hv-details-text">{vanData.name}</span>{" "}
      </span>{" "}
      <span className="hv-details-labels">
        Category: <span className="hv-details-text">{(vanData?.type?.[0].toUpperCase() + vanData?.type?.slice(1) || '')}</span>{" "}
      </span>{" "}
      <span className="hv-details-labels">
        Description: <span className="hv-details-text">{vanData.description}</span>{" "}
      </span>{" "}
      <span className="hv-details-labels">
        Visibility: <span className="hv-details-text">Public</span>{" "}
      </span>{" "}
    </section>
  );
}

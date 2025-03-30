import { useOutletContext } from "react-router-dom";

export default function HV_Pricing() {
  const vanData = useOutletContext();

  return (
    <section className="hv-details-page">
      <span className="hv-pricing-labels">
        ${vanData.price}.00
        <span className="hv-pricing-text">/day</span>{" "}
      </span>{" "}
    </section>
  );
}

import { Link } from "react-router-dom";
export default function HostVanList(props) {
  
  return (
    <div className="host-van-card">
      <img
        src={props.image}
        alt={`Image of${props.name}`}
        className="host-van-image"
      />
      <div className="host-van-name-price">
        <h3 className="host-van-list-heading">{props.name}</h3>
        <h3 className="host-van-list-price">${props.price}/day</h3>
      </div>
    </div>
  );
}

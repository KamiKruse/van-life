import { Link } from "react-router-dom";
export default function VanList(props) {
  const tagSwitch = () => {
    if (props.type === "luxury") {
      return "van-tag-luxury";
    } else if (props.type === "rugged") {
      return "van-tag-rugged";
    } else {
      return "van-tag-simple";
    }
  };
  return (
      <div className="van-card">
        <img src={props.image} alt={`Image of${props.name}`} className="van-image" />
        <div className="van-name-price">
          <h3 className="van-text">{props.name}</h3>
          <h3 className="van-text">${props.price}/day</h3>
        </div>
        <div
          className={tagSwitch()}
        >{`${props.type[0].toUpperCase()}${props.type.slice(1)}`}</div>
      </div>
  );
}

import "./card.styles.css";
import { Link, NavLink } from "react-router-dom";

function Card({ pokemon }) {
  return (
    <Link to={"/detail/" + pokemon.id}>
      <div className="card-container">
        <p className="card-title">{pokemon.name}</p>
        <img className="card-image" width={100} src={pokemon.image}></img>
        <p className="card-title-types">{pokemon.types.join(" _ ")}</p>
      </div>
    </Link>
  );
}

export default Card;

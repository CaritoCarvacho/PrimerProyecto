import './card.styles.css';
import { Link, NavLink } from 'react-router-dom';

function Card({pokemon}) {
  return (
    <Link to={'/detail/' + pokemon.id}>
      <div className='card-container'>
        <img width={100} src={pokemon.image}></img>
        <p>{pokemon.name}</p>
        <p>{pokemon.types.join(" - ")}</p>
      </div>
    </Link>
  );
}

export default Card;
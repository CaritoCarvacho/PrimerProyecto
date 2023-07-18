import './card.styles.css';

function Card({pokemon}) {
  return (
    <div className='card-container'>
      <img width={100} src={pokemon.image}></img>
      <p>{pokemon.name}</p>
      <p>{pokemon.type}</p>
      {pokemon.types.map((type) => (
        <p>{type}</p>
      ))}
    </div>
  );
}

export default Card;
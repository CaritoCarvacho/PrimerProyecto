import './cardsContainer.styles.css';
import Card from '../card/card.components';

function CardsContainer({ pokemons }) {
  return (
    <div className='card-list'>
      {pokemons.items.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default CardsContainer;
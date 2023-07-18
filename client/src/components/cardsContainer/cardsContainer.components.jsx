import "./cardsContainer.styles.css";
import Card from "../card/card.components";

function CardsContainer({ pokemons }) {
  if (!pokemons || pokemons.items.length === 0) {
    <div className="card-list">No pokemons found.</div>;
  }
  return (
    <div className="card-list">
      {pokemons.items.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default CardsContainer;

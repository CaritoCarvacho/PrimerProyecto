import "./card.styles.css";
import React from "react";

function DetailCard({ pokemon }) {
  return (
    <div className="detail-card-conteiner">
      <div className="card-container">
        <img className="card-image" width={100} src={pokemon.image}></img>
        <h3 className="card-title">{pokemon.name}</h3>
        <p className="card-text">Health Points: {pokemon.hp}</p>
        <p className="card-text">Attack: {pokemon.attack}</p>
        <p className="card-text">Defense: {pokemon.defense}</p>
        <p className="card-text">Speed: {pokemon.speed}</p>
        <p className="card-text">Height: {pokemon.height}</p>
        <p className="card-text">Weight: {pokemon.weight}</p>
        <p className="card-text">Types: {pokemon.types.join(" - ")}</p>
      </div>
    </div>
  );
}

export default DetailCard;

import './detail.styles.css';
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { getPokemonById } from "../../redux/actions/actions";
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading.components';

function Detail() {
  let { id } = useParams();
  const { pokemon } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    dispatch(getPokemonById(id));
    setLoading(true);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [pokemon]);

  if (loading) {
    return (<Loading/>)
  }

  return (
    <div>
      <img width={100} src={pokemon.image}></img>
      <h3>{pokemon.name}</h3>
      <p>Health Points: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
      <p>Defense: {pokemon.defense}</p>
      <p>Speed: {pokemon.speed}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.join(" - ")}</p>
    </div>
  );
}

export default Detail;

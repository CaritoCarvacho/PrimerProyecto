//import './searchBar.style.css'
import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonById, getPokemonsByName } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading.components";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pokemonsByName } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPokemonsByName(searchValue));
    setLoading(true);
  };

  useEffect(() => {
    setLoading(false);
    if (pokemonsByName.length > 0) {
      history.push("/detail/" + pokemonsByName[0].id);
    } else if (searchValue !== "") {
      setSearchValue("");
      alert("No pokemons found.");
    }
  }, [pokemonsByName]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder="Type your pokemon"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

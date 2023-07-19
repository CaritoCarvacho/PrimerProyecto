import {
  GET_POKEMON,
  GET_POKEMONS,
  GET_TYPES,
  GET_POKEMONS_BY_NAME,
  CREATE_POKEMON,
  RESET_POKEMON,
} from "../actions/actionTypes";

const initialState = {
  pokemons: {
    items: [],
    pageSize: 0,
    totalPages: 0,
    totalItems: 0,
  },
  types: [],
  pokemon: {},
  pokemonsByName: [],
  newPokemon: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case GET_POKEMON:
      return { ...state, pokemon: action.payload };
    case GET_POKEMONS_BY_NAME:
      return { ...state, pokemonsByName: action.payload };
    case CREATE_POKEMON:
      return { ...state, newPokemon: action.payload };
    case RESET_POKEMON:
      return { ...state, newPokemon: {} };
    default:
      return { ...state };
  }
};

export default rootReducer;

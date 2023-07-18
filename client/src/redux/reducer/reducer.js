import { GET_POKEMON, GET_POKEMONS, GET_TYPES, GET_POKEMONS_BY_NAME } from "../actions/actionTypes";


const initialState = {
    pokemons: {
        items: [],
        pageSize: 0,
        totalPages: 0,
        totalItems: 0
    },
    types: [],
    pokemon: {},
    pokemonsByName: [],
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
        default:
            return { ...state };
    }
};

export default rootReducer;
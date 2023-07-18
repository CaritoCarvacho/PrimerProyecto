import axios from "axios";
import { GET_POKEMONS, GET_TYPES, GET_POKEMON, GET_POKEMONS_BY_NAME } from "./actionTypes";

export const getPokemons = ({currentPage, sortBy, sortOrder}) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemons?pageNumber=${currentPage}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
        const pokemons = apiData.data;
        dispatch({ type: GET_POKEMONS, payload: pokemons });
    };
};

export const getTypes = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/types`);
        const types = apiData.data;
        dispatch({ type: GET_TYPES, payload: types });
    };
};

export const getPokemonById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
        const pokemon = apiData.data;
        dispatch({ type: GET_POKEMON, payload: pokemon });
    };
};

export const getPokemonsByName = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
        const pokemonsByName = apiData.data;
        dispatch({ type: GET_POKEMONS_BY_NAME, payload: pokemonsByName });
    };
};

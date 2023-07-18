import axios from "axios";
import { GET_POKEMONS, GET_TYPES } from "./actionTypes";



export const getPokemons = ({currentPage}) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemons?pageNumber=${currentPage}`);
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

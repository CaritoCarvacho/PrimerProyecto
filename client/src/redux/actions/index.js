import axios from 'axios';
import { ALL_POKEMONS } from './actionTypes';

export const allPokemons = () => {
    const URL = 'http://localhost:3001/pokemon';
    return async (dispatch) => {
       try {
          const { data } = await axios.get(URL);
          return dispatch({
             type: ALL_POKEMONS,
             payload: data,
          });
       } catch (error) {
          if (error.response && error.response.data && error.response.data.message) {
             const errorMessage = error.response.data.message;
             window.alert(errorMessage);
          } else {
             window.alert('Error: ' + error.message);
          }
       }
    };
};
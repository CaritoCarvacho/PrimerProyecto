const axios = require('axios');
const { pokemon, type } = require('../db');
const { Op } = require('sequelize');
const dataPokemon = require('../helper/dataPokemon');

const getAllPokemonsHandler = async () => {
  try {
    let URL = 'https://pokeapi.co/api/v2/pokemon/';
    let allPokemons = [];
    let allPokemonsData = [];

    // Limito el bucle a 3 iteraciones para que traiga 60 pokemons
    for (let i = 0; i < 3; i++) {
      const response = await axios.get(`${URL}`);
      allPokemons = [...allPokemons, ...response.data.results];
      URL = response.data.next;
    }

    // El bucle anterior solo obtiene los nombres, este busca la información de cada uno
    for (let e = 0; e < allPokemons.length; e++) {
      const dataPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${allPokemons[e].name}`);
      // Llamo a pokemonalldata para filtrar la información que quiero mostrar
      const Data = dataPokemon(dataPokemon);
      allPokemonsData = [...allPokemonsData, Data];
    }

    const dbPokemonsFound = await pokemon.findAll({
      include: {
        model: type,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    });

    const formattedPokemons = dbPokemonsFound.map(pokemon => ({
      ...pokemon.toJSON(),
      types: pokemon.types.map(type => type.name)
    }));

    if (!allPokemonsData) return { error: 'No se encuentran pokemons en la API' };
    return [...allPokemonsData, ...formattedPokemons];

  } catch (error) {
    throw new Error(`Error al traer Pokemons || Error: ${error.message}`);
  }
};

module.exports = getAllPokemonsHandler;

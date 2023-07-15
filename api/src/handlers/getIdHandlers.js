const axios = require('axios');
const { pokemon, type } = require('../db');
const dataPokemon = require('../helper/dataPokemon');

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonIdHandler = async (id) => {
  try {
    if (!Number(id)) {
      const dbPokemon = await pokemon.findOne({
        where: { id },
        include: {
          model: type,
          attributes: ["name"],
          through: {
            attributes: []
          }
        }
      });

      if (!dbPokemon) {
        return { error: `No existe Pokemon con id ${id}` };
      }

      const formattedPokemon = {
        ...dbPokemon.toJSON(),
        types: dbPokemon.types.map(type => type.name)
      };

      return formattedPokemon;
    }

    const response = await axios.get(`${URL}${id}`);

    if (Object.keys(response).length) {
      const pokemonFound = dataPokemon(response);
      return pokemonFound;
    }

    return { error: `No existe Pokemon con id ${id}` };

  } catch (error) {
    throw new Error(`Error al buscar el Pokemon con ese id || Error: ${error.message}`);
  }
};

module.exports = getPokemonIdHandler;

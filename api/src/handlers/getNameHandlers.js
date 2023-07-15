const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { Op } = require('sequelize');
const dataPokemon = require('../helper/dataPokemon');

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonNameHandler = async (name) => {
  try {
    let URL = 'https://pokeapi.co/api/v2/pokemon/';
    let allPokemons = [];
    let allPokemonsData = [];

    // Primero busco todos los nombres de los pokemons
    for (let i = 0; i < 3; i++) {
      const response = await axios.get(`${URL}`);
      allPokemons = [...allPokemons, ...response.data.results];
      URL = response.data.next;
    }

    // Segundo, comparo los nombres de la API con el nombre que viene por consulta
    for (let e = 0; e < allPokemons.length; e++) {
      if (allPokemons[e].name.includes(name.toLowerCase())) {
        const dataPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${allPokemons[e].name}`);
        const Data = dataPokemon(dataPoke);
        allPokemonsData = [...allPokemonsData, Data];
      }
    }

    // Busco en la base de datos el nombre
    const dbPokemonsFound = await Pokemon.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` }
      },
      include: {
        model: Type,
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

    // Si encuentra pokemons en la API o en la base de datos, los muestra
    if (allPokemonsData.length || dbPokemonsFound.length) {
      return [...allPokemonsData, ...formattedPokemons];
    } else {
      return { error: 'No se encontró ningún Pokémon' };
    }

  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getPokemonNameHandler;

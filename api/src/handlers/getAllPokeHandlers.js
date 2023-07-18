const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");
const dataPokemon = require("../helper/dataPokemon");

const pageSize = 12;

const getAllPokemonsHandler = async ({
  pageNumber = 0,
  sortBy = "name",
  sortOrder = "asc",
  typeFilter = "all",
  origin = "all",
}) => {
  try {
    let URL = "https://pokeapi.co/api/v2/pokemon/";
    let pokemonsPreview = [];
    let pokemonsAPI = [];

    if (["all", "api"].includes(origin)) {
      // Limito el bucle a 3 iteraciones para que traiga 60 pokemons
      for (let i = 0; i < 3; i++) {
        const response = await axios.get(`${URL}`);
        pokemonsPreview = [...pokemonsPreview, ...response.data.results];
        URL = response.data.next;
      }

      // El bucle anterior solo obtiene los nombres, este busca la información de cada uno
      for (let e = 0; e < pokemonsPreview.length; e++) {
        const pokemonAPI = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonsPreview[e].name}`
        );
        // Llamo a pokemonalldata para filtrar la información que quiero mostrar
        const data = dataPokemon(pokemonAPI);
        pokemonsAPI = [...pokemonsAPI, data];
      }

      if (!pokemonsAPI) return { error: "No se encuentran pokemons en la API" };
    }

    let formattedPokemonsDb = [];

    if (["all", "db"].includes(origin)) {
      const pokemonsDb = await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      formattedPokemonsDb = pokemonsDb.map((pokemon) => ({
        ...pokemon.toJSON(),
        types: pokemon.types.map((type) => type.name),
      }));
    }

    let pokemons = [...pokemonsAPI, ...formattedPokemonsDb];

    const from = pageNumber * pageSize;
    const to = from + pageSize;

    if (typeFilter !== "all") {
      pokemons = pokemons.filter((pokemon) =>
        pokemon.types.includes(typeFilter)
      );
    }

    const sortedPokemons = pokemons.sort(function (a, b) {
      if (a[sortBy] < b[sortBy]) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });

    const paginatedPokemons = sortedPokemons.slice(from, to);

    return {
      items: paginatedPokemons,
      totalItems: pokemons.length,
      pageSize,
      totalPages: Math.ceil(pokemons.length / pageSize),
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = getAllPokemonsHandler;

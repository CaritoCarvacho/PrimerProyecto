const getAllPokemonsHandler = require('../handlers/getAllPokeHandlers');
const getPokemonNameHandler = require('../handlers/getNameHandlers');

const getAllPokemonsController = async (req, res) => {
  try {
    let data;
    if (req.query.name) {
      data = await getPokemonNameHandler(req.query.name);
    } else {
      data = await getAllPokemonsHandler(req.query);
    }

    if (data.error) {
      return res.status(400).json({ message: data.error });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: `Error al traer Pokemons || Error: ${error.message}` });
  }
};

module.exports = getAllPokemonsController;

const getAllPokemonsHandler = require('../handlers/getAllPokeHandlers');

const getAllPokemonsController = async (req, res) => {
  try {
    const data = await getAllPokemonsHandler();

    if (data.error) {
      return res.status(400).json({ message: data.error });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: `Error al traer Pokemons || Error: ${error.message}` });
  }
};

module.exports = getAllPokemonsController;

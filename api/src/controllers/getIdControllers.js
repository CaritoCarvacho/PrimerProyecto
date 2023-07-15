const getPokemonIdHandler = require('../handlers/getIdHandlers');

const getPokemonIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getPokemonIdHandler(id);

    if (data.error) {
      return res.status(404).json({ message: data.error });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: `Error al buscar el Pokemon con ese id || Error: ${error.message}` });
  }
};

module.exports = getPokemonIdController;

const getPokemonNameHandler = require('../handlers/getNameHandlers');

const getPokemonNameController = async (req, res) => {
  try {
    const { name } = req.query;
    const data = await getPokemonNameHandler(name);

    if (data.error) {
      return res.status(404).json({ message: data.error });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = getPokemonNameController;

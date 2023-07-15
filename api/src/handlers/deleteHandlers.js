const { Pokemon } = require('../db');

const deletePokemonHandler = async (req, res) => {
  try {
    const { id } = req.params;
    // Si pones destroy solo, elimina todo en la base de datos
    const deleted = await Pokemon.destroy({ where: { id } });
    console.log(deleted);

    if (deleted === 1) {
      return res.status(200).send('Pokemon eliminado correctamente');
    } else {
      return res.status(400).json({ message: `Error al eliminar el Pokemon` });
    }
  } catch (error) {
    res.status(400).json({ message: `Error al eliminar el Pokemon || Error: ${error.message}` });
  }
};

module.exports = deletePokemonHandler;

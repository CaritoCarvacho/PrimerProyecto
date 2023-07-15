const deletePokemonHandler = require('../handlers/deleteHandlers');

const deletePokemonController = (req, res) => {
  // Puedes realizar cualquier lógica adicional aquí antes de llamar al manejador
  deletePokemonHandler(req, res);
};

module.exports = deletePokemonController;

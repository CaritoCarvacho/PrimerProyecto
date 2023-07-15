const modifyPokemonHandler = require('../handlers/modifyHandlers');

const modifyPokemonController = (req, res) => {
  // Puedes realizar cualquier lógica adicional aquí antes de llamar al manejador
  modifyPokemonHandler(req, res);
};

module.exports = modifyPokemonController;

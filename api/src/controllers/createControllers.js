const createPokemonHandler = require("../handlers/createHandlers");

const createPokemonController = (req, res) => {
  // Puedes realizar cualquier lógica adicional aquí antes de llamar al manejador
  createPokemonHandler(req, res);
};

module.exports = createPokemonController;

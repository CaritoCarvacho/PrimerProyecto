const getAllTypesHandler = require('../handlers/getTypeHandlers');

const getAllTypesController = async (req, res) => {
  try {
    const allTypes = await getAllTypesHandler();
    res.status(200).send(allTypes);
  } catch (error) {
    res.status(404).json({ message: `Error al traer Types || Error: ${error.message}` });
  }
};

module.exports = getAllTypesController;

const { Pokemon, Type } = require('../db');

const createPokemonHandler = async (req, res) => {
  try {
    const { name, image, thumbnailImage, hp, attack, defense, speed, height, weight, types } = req.body;

    const pokeFound = await Pokemon.findOne({ where: { name } });
    if (pokeFound) {
      return res.status(400).json({ message: `Ese pokemon ya existe en la base de datos` });
    }

    const newPokemon = await Pokemon.create({ name, height, image, thumbnailImage, hp, attack, defense, speed, weight });
    console.log(newPokemon);

    // Este bucle es para las relaciones
    for (let i = 0; i < types.length; i++) {
      const typeDb = await Type.findOne({ where: { name: types[i] } });
      newPokemon.addTypes(typeDb);
    }

    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(408).send({ message: `Error al crear el Pokemon || Error: ${error.message}` });
  }
};

module.exports = createPokemonHandler;
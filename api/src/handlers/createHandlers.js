const { pokemon, type } = require('../db');
const TYPE = type;

const createPokemonHandler = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, type } = req.body;

    const pokeFound = await pokemon.findOne({ where: { name } });
    if (pokeFound) {
      return res.status(400).json({ message: `Ese pokemon ya existe en la base de datos` });
    }

    const newpokemon = await pokemon.findOrCreate({ where: { name, height, image, thumbnailImage, hp, attack, defense, specialAttack, specialDefense, speed, weight } });
    console.log(newpokemon);

    // Este bucle es para las relaciones
    for (let i = 0; i < type.length; i++) {
      const typedb = await TYPE.findOne({ where: { name: type[i] } });
      newpokemon[0].addTypes(typedb);
    }

    res.status(200).json(newpokemon[0]);
  } catch (error) {
    res.status(408).send({ message: `Error al crear el Pokemon || Error: ${error.message}` });
  }
};

module.exports = createPokemonHandler;
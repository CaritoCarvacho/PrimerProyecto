/*Aquí creo una función para modificar la info del pokemon en la BDD, 
extraigo las propiedades que necesito de la API para mi BBD.
Busco un pokemon en la BDD por su ID más la info del tipo, 
si no lo encuentro devuelvo un mensaje de error. Si hay nuevos tipos para el pokemon,
los actualizo según el tipo.
Asigno los nuevos valores de los atributos del pokemon, si no se dan nuevos valores, 
mantengo los que ya tiene. Uso la info del poke en la BDD. 
Si se da la modificación se hizo envio respuesta exitosa, si no, 
mando el error que envía info adicional de este.
 */


const { Pokemon, Type } = require('../db');

const modifyPokemonHandler = async (req, res) => {
  const { id, name, hp, attack, defense, speed, height, weight, types } = req.body; //aqui extraigo lo que yo quiero de la APi para mi BDD
  try {
    const pokemonFound = await Pokemon.findOne({
      where: { id },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    });

    if (!pokemonFound) {
      return res.status(404).json({ message: 'Pokemon no encontrado' });
    }

    if (types) {
      const removTypes = [...pokemonFound.toJSON().types.map(elem => elem.name)];
      const typesFound = await Type.findAll({ where: { name: removTypes } });
      await pokemonFound.removeTypes(typesFound);
      const typesAdd = await Type.findAll({ where: { name: types } });
      await pokemonFound.addTypes(typesAdd);
    }

    const newName = name || pokemonFound.name;
    const newHp = hp || pokemonFound.hp;
    const newAttack = attack || pokemonFound.attack;
    const newDefense = defense || pokemonFound.defense;
    const newSpeed = speed || pokemonFound.speed;
    const newHeight = height || pokemonFound.height;
    const newWeight = weight || pokemonFound.weight;

    const result = await Pokemon.update(
      {
        name: newName,
        hp: newHp,
        attack: newAttack,
        defense: newDefense,
        speed: newSpeed,
        height: newHeight,
        weight: newWeight
      },
      { where: { id } }
    );

    if (result[0] === 1) {
      res.status(200).json({ message: 'Pokemon modificado exitosamente' });
    } else {
      res.status(500).json({ message: 'Error al modificar el Pokemon' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al modificar el Pokemon', error });
  }
};

module.exports = modifyPokemonHandler;

const dataPokemon = (response) => {

    const { id, name, sprites, height, stats, weight, types } = response.data
    let allTypes = types.map(elem => elem.type.name)
    const pokemonFound = {
        id,
        name,
        image: sprites.other['home'].front_default,
        hp: stats[0].base_stat,
        attack: stats[1].base_stat,
        defense: stats[2].base_stat,
        speed: stats[5].base_stat,
        height,
        weight,
        types: allTypes
    }
    return pokemonFound
}

module.exports = dataPokemon

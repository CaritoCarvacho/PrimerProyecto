const { Router } = require('express'); //importo el router
// Importar todos los routers;
const createPokemonController = require('../controllers/createControllers');
const deletePokemonController = require('../controllers/deleteControllers');
const modifyPokemonController = require('../controllers/modifyControllers');
const getAllPokemonsController = require('../controllers/getAllPokeControllers');
const getAllTypesController = require('../controllers/getTypeControllers');
const getPokemonIdController = require('../controllers/getIdControllers');
const getPokemonNameController = require('../controllers/getNameControllers');

// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.post('/pokemon', createPokemonController);
router.delete('/pokemon/:id', deletePokemonController);
router.put('/pokemon/:id', modifyPokemonController);
router.get('/pokemon', getAllPokemonsController);
router.get('/types', getAllTypesController);
router.get('/pokemon/:id', getPokemonIdController);
router.get('/name', getPokemonNameController);

// router.get('/pokemons', (req, res)=>{
//     res.status(200).send("Ruta de la info de los pokemones")
// })

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

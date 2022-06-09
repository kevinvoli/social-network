var express = require('express');
const InscriptionCOntroller = require('../controllers/inscriptionController');
var router = express.Router();

/* GET users listing. */
router.get('/',InscriptionCOntroller.getInscription);
router.post('/',InscriptionCOntroller.setInscription)
module.exports = router;
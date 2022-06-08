var express = require('express');
const InscriptionCOntroller = require('../controllers/inscriptionController');
var router = express.Router();

/* GET users listing. */
router.get('/',InscriptionCOntroller.getInscription);
module.exports = router;
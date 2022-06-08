var express = require('express');
const ConnectionController = require('../controllers/connectionController');
var router = express.Router();

/* GET users listing. */
router.get('/',ConnectionController.getConnection );

module.exports = router;
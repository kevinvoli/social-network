var express = require('express');
const UserController = require('../controllers/connection.router');
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.getUser);
module.exports = router;
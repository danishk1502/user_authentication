const router = require("express").Router()
const controller = require('../controllers/userControllers')

router.post('/', controller.userController);

router.get('/login', controller.userAuth);

module.exports= router;
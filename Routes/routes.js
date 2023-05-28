const express = require('express');
const authController = require('../controllers/User');
const router = express.Router()
const { verifyToken } = require('../middlewear/jwtMiddleware');

router.post('/signup',authController.signup)
router.post('/login',authController.login)
router.get('/getUser',verifyToken,authController.getUser)


module.exports = router;
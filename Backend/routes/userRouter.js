const router= require ('express').Router()
const userController = require('../controllers/authController')
const auth = require("../middleware/auth")



router.post('/register',userController.register)
router.get('/refresh_token',userController.refreshToken)
router.post('/login',userController.login)
router.get('/logout',userController.logout)
router.get('/info', auth, userController.getUser)

module.exports = router
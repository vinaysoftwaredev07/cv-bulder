const router= require ('express').Router()
const userController = require('../controllers/authController')
const templateController = require('../controllers/templateController');
const paymentController = require('../controllers/paymentController');
const auth = require("../middleware/auth")



router.post('/register',userController.register);
router.post('/register/social',userController.socialRegister);
router.get('/refresh_token',userController.refreshToken);
router.post('/login',userController.login);
router.get('/logout',userController.logout);
router.get('/info', auth, userController.getUser);
router.get('/templates', auth, templateController.getTemplate);
router.post('/check_login', auth, userController.checkLoginStatus);
router.post('/payment/:cv_id', auth, paymentController.payment);
router.post('/save-cv', auth, templateController.saveCVData);
router.put('/save-cv/:cv_id', auth, templateController.editCVData);
router.get('/get-cv', auth, templateController.getCVData);
router.get('/get-cv/:cv_id', auth, templateController.getCVDataById);
router.delete('/delete-cv/:cv_id', auth, templateController.deleteCVData);

module.exports = router
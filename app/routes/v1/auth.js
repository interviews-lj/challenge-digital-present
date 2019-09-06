const router = require('express').Router();
const authController = require('../../controllers/authController');
const verification = require('../../services/verificationService');

router.post('/register', [verification.checkDuplicateUserName, verification.checkRolesExisted], authController.registerUser);

module.exports = router;
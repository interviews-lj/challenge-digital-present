const router = require('express').Router();
const postController = require('../../controllers/postController');
const verification = require('../../services/verificationService');
const exjwt = require('express-jwt');
const CONFIG = require('../../config/config')

const jwtMW = exjwt({
    secret: CONFIG.jwt_secret
});

router.get('/posts/list', postController.listPosts);
router.get('/post/:id', postController.getPost);
router.post('/post/:id', jwtMW, postController.updatePost);

module.exports = router;
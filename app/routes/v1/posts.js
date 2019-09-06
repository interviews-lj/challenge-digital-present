const router = require('express').Router();
const postController = require('../../controllers/postController');
const verification = require('../../services/verificationService');

router.get('/posts/list', postController.listPosts);

module.exports = router;
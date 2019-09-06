const router = require('express').Router();
const postController = require('../../controllers/postController');
const verification = require('../../services/verificationService');

router.get('/posts/list', postController.listPosts);
router.get('/post/:id', postController.getPost);

module.exports = router;
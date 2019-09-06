const router = require('express').Router();

router.post('/posts', (req, res) => res.send({message: "Post Route works for"}));

module.exports = router;
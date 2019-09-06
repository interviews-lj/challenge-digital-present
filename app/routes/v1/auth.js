const router = require('express').Router();

router.post('/register', (req, res) => res.send({message: "AUTH Route works"}));

module.exports = router;
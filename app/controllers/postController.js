const db = require('../config/db.config')
const bcrypt = require('bcryptjs');
const CONFIG = require('../config/config')
const jwt = require('jsonwebtoken');
const Post = db.post;

const postController = {};

postController.listPosts = async function(req, res) {
    await Post.findAll({ attributes: ['name', 'content'] })
    .then( posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        res.status(401).send("Error: " + err);
    });
};

module.exports = postController;
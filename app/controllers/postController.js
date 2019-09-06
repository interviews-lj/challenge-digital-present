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

postController.getPost = async function(req, res) {
    await Post.findOne({
        where: { id: req.params.id },
        attributes: ['name', 'content']
    })
    .then( post => {
        if (!post) return res.status(404).json({ message: "Post not found!"})
        res.status(200).json(post);
    })
    .catch(err => {
        res.status(401).send("Error: " + err);
    });
};

module.exports = postController;
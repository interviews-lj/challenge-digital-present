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

postController.updatePost = async function(req, res) {
    const { name, content } = req.body;
    if (!name || !content) return res.status(400).json({ message: "Bad Request"});
    if (req.user.role !== 'ADMIN') return res.status(401).json({ message: "Unauthorized"});
    await Post.findOne({
        where: { id: req.params.id },
    })
    .then( post => {
        if (!post) return res.status(404).json({ message: "Post not found!"})
        post.update({ name, content})
        res.status(200).json({ message: "Post Update Success!"});
    })
    .catch(err => {
        res.status(401).send("Error: " + err);
    });
};

module.exports = postController;
const db = require('../config/db.config');
const CONFIG = require('../config/config');
const User = db.user;
const Post = db.post;

const verification = {};

verification.checkDuplicateUserName = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        } 
    }).then(user => {
        if(user){
            res.status(400).send("Error: Username is already taken!");
        return;
        }
        next();
    });
}
 
verification.checkRolesExisted = (req, res, next) => {
    if(!CONFIG.userRoles.includes(req.body.role.toUpperCase())){
        res.status(400).send("Error, role not found: " + req.body.role);
        return;
    }
    next();
}

verification.checkDuplicatePostName = (req, res, next) => {
    Post.findOne({
        where: {
            name: req.body.name
        } 
    }).then(post => {
        if(post){
            res.status(400).send("Error: Username is already taken!");
        return;
        }
        next();
    });
}
 
module.exports = verification;
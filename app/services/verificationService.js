const db = require('../config/db.config');
const CONFIG = require('../config/config');
const User = db.user;

checkDuplicateUserName = (req, res, next) => {
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
 
checkRolesExisted = (req, res, next) => {
    if(!CONFIG.userRoles.includes(req.body.role.toUpperCase())){
        res.status(400).send("Error, role not found: " + req.body.role);
        return;
    }
    next();
}
 
const verification = {};
verification.checkDuplicateUserName = checkDuplicateUserName;
verification.checkRolesExisted = checkRolesExisted;
 
module.exports = verification;
const db = require('../config/db.config')
const bcrypt = require('bcryptjs');

const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

const authController = {};

const createAccount = async ({ username, password, role }) => {
    return await User.create({
        username, 
        password: bcrypt.hashSync(password, 10),
        role
    });
};

authController.registerUser = async function(req, res) {
    const { username, password, role } = req.body;
    if(!username || !password || !role) {
        res.status(400).json({ message: 'Please provide a username, password and role!' });
    } else {
        await createAccount({ username, password, role })
        .then(() => res.status(201).send("User registered successfully!"))
        .catch(err => {
            res.status(401).send("Error: " + err);
        });
    }
};

module.exports = authController;
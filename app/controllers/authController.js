const db = require('../config/db.config')
const bcrypt = require('bcryptjs');
const CONFIG = require('../config/config')
const jwt = require('jsonwebtoken');
const User = db.user;


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

authController.loginUser = async function(req, res) {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send('User Not Found!');
        }

        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
        }

        let token = jwt.sign({ id: user.id }, CONFIG.jwt_secret, { expiresIn: CONFIG.jwt_expiration });
        res.status(200).send({ auth: true, accessToken: token });

    }).catch(err => {
        res.status(500).send("Error " + err);
    });
}

module.exports = authController;
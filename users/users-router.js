const router = require('express').Router();

const Users = require('./user-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => res.status({ currentUser: req.username, users }))
        .catch(err => res.send(err))
});

module.exports = router;

const router = require('express').Router();

const Users = require('./user-model');
const restricted = require('../auth/restricted-middleware');
const checkDept = require('../auth/check-department-middleware');

router.get('/', restricted, checkDept("Lord of the Doggos"), (req, res) => {
    Users.find()
        .then(users => res.status(200).json({ users }))
        .catch(err => res.send(err))
});

module.exports = router;

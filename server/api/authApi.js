var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var config = require('../config');
var User = require('../../db/models/user');
var bcrypt = require('bcrypt');

/* Get all users */
router.post('/session', function(req, res, next) {
    var params = req.body;
    var email = params.email;
    var pass = params.password;
    User.findOne({
        email: email
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.status(200);
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            // check if password matches
            var passwordValid = checkPassword(req.body.password, user.password);
            if (!passwordValid) {
                res.status(200);
                res.json({ success: false, message: 'Authentication failed.' });
            } else {
                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, config.secret, {
                    expiresIn: '1d' // expires in 24 hours
                });

                // return the information including token as JSON
                res.status(200);
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        }
    });
});

function checkPassword(sentPassword, dbPassword) {
    return bcrypt.compareSync(sentPassword, dbPassword);
}

module.exports = router;

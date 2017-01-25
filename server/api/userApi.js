var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../../db/models/user');
var bcrypt = require('bcrypt');

function encryptPassword(pass) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    return hash;
}

/* Get all users */
router.get('/getAll', function(req, res, next) {
    User.find(function (err, users) {
        if (err) {
            console.log(err);
            res.status(400);
            res.json({
                "msg": "Ruh-Roh"
            });
        } else {
            res.status(200);
            res.json(users);
        }
    });
});

router.get('/getUserByEmail/:email', function(req, res, next) {
    var email = req.params.email;
    User.findOne({'email': email}, function (err, user) {
        if (err) {
            console.log(err);
            res.status(400);
            res.json({
                "msg": "Ruh-Roh"
            });
        } else {
            res.status(200);
            res.json(user);
        }
    });
});

/* add a user */
router.post('/add', function(req, res, next) {
    var user = req.body;
    console.log(user);

    if (user && user.firstName !== "" && user.lastName !== "" && user.email !== "" && user.password !== "" && user.role !== "") {
        user.password = encryptPassword(user.password);
        var userModel = new User(user);
        userModel.save(function(err, userModel) {
            if (err) {
                console.log(err);
                res.status(400);
                res.json({
                    "msg": "Ruh-Roh"
                });
            } else {
                res.status(200);
                res.json({
                    "msg": "User added successfully",
                    "user": userModel
                });
            }
        });
    } else {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    }
});

/* update a user */
router.post('/update/:id', function(req, res, next) {
    var user = req.body;
    var updateObj = {};
    var id = req.params.id;

    if (user.firstName && user.firstName !== "") {
        updateObj.firstName = user.firstName;
    }

    if (user.lastName && user.lastName !== "") {
        updateObj.lastName = user.lastName;
    }

    if (user.email && user.email !== "") {
        updateObj.email = user.email;
    }

    if (user.password && user.password !== "") {
        updateObj.password = user.password;
    }

    if (user.role && user.role !== "") {
        updateObj.role = user.role;
    }

    if (!updateObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        User.findByIdAndUpdate(id, {$set: updateObj}, function (err, user) {
            if (err) {
                console.log(err);
                res.status(400);
                res.json({
                    "msg": "Ruh-Roh"
                });
                return;
            }
            res.json(user);
        });
    }
});

/* remove a user*/
router.post('/remove/:id', function(req, res, next) {
    var id = req.params.id;
    var query = User.remove({ _id: id });
    query.exec(function(err, response) {
        if (err) {
            res.status(400);
            res.json({
                "msg": "Ruh-roh"
            });
            return;
        }

        res.status(200);
        res.json({
            "msg": "success"
        });
    });
});

module.exports = router;

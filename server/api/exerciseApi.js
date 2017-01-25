var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Exercise = require('../../db/models/exercise');

/* Get all users */
router.get('/getAll', function(req, res, next) {
    Exercise.find(function (err, users) {
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

router.get('/get/:slug', function(req, res, next) {
    var slug = req.params.slug;
    Exercise.findOne({'slug': slug}, function (err, exercise) {
        if (err) {
            console.log(err);
            res.status(400);
            res.json({
                "msg": "Ruh-Roh"
            });
        } else {
            res.status(200);
            res.json(exercise);
        }
    });
});

router.get('/getScales', function(req, res, next) {
    Exercise.find({'type': 'Scale'}, function(err, scales) {
        if (err) {
            res.status(400);
            res.json({
                'msg': 'Error getting scales'
            });
        } else {
            res.status(200);
            res.json(scales)
        }
    });
});

router.get('/getExercises', function(req, res, next) {
    Exercise.find({'type': 'Exercise'}, function(err, exercises) {
        if (err) {
            res.status(400);
            res.json({
                'msg': 'Error getting scales'
            });
        } else {
            res.status(200);
            res.json(exercises)
        }
    });
});

module.exports = router;

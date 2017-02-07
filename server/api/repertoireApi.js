var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Repertoire = require('../../db/models/repertoire');

/* Get all users */
router.get('/getAll', function(req, res, next) {
    Repertoire.find(function (err, pieces) {
        if (err) {
            console.log(err);
            res.status(400);
            res.json({
                "msg": "Ruh-Roh"
            });
        } else {
            res.status(200);
            res.json(pieces);
        }
    });
});

router.get('/get/:slug', function(req, res, next) {
    var slug = req.params.slug;
    Repertoire.findOne({'slug': slug}, function (err, piece) {
        if (err) {
            console.log(err);
            res.status(400);
            res.json({
                "msg": "Ruh-Roh"
            });
        } else {
            res.status(200);
            res.json(piece);
        }
    });

});

router.get('/getCurrentPieces', function(req, res, next) {
    //TODO: Add a current flag to the model and pull from there
    Repertoire.find({'slug': 'prelude-4-villa-lobos'}, function (err, pieces) {
        if (err) {
            console.log(err);
            res.status(400);
            res.json({
                "msg": "Ruh-Roh"
            });
        } else {
            res.status(200);
            res.json(pieces);
        }
    });
});

router.post('/update/:slug', function(req, res, next) {
    var piece = req.body;
    console.log(piece);
    var slug = req.params.slug;
    Repertoire.findOneAndUpdate({slug: slug}, piece, {new: true}, function(err, doc) {
        if (err) {
            res.status(400);
            res.json({
                'msg': 'Update failed'
            });
        } else {
            res.status(200);
            res.json(doc);
        }
    });
});

module.exports = router;

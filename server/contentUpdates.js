var Exercise = require('../db/models/exercise');
var Repertoire = require('../db/models/repertoire');
var User = require('../db/models/user');
var bcrypt = require('bcrypt');

function encryptPassword(pass) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    return hash;
}

function UpdateContent() {

    console.log("Updating Content");

    User.findOne({'email': 'test@example.com'}, 'email', function (err, user) {
        if(!user) {
            console.log("Adding user");
            var password = encryptPassword('P@ssword');
            var user = {
                firstName: 'Test',
                lastName: 'User',
                email: 'test@example.com',
                password: password
            };
            var userModel = new User(user);
            userModel.save();
        }
    });

    Exercise.findOne({'slug': 'g-major'}, 'slug', function (err, exercise) {
        if(!exercise) {
            console.log("adding g-major scale");
            var exercise = {
                slug: 'g-major',
                type: 'Scale',
                name: 'G Major',
                comments: 'Play 3 octave scale with all finger combinations, and in duples and tripltes',
                imagePath: 'img/scales/g-major.png'
            };
            var exerciseModel = new Exercise(exercise);
            exerciseModel.save();
        }
    });


    Exercise.findOne({'slug': 'a-natural-minor'}, 'slug', function (err, exercise) {
        if(!exercise) {
            console.log("adding a-natural-minor scale");
            var exercise = {
                slug: 'a-natural-minor',
                type: 'Scale',
                name: 'A Minor',
                comments: 'Play 3 octave scale with all finger combinations, and in duples and tripltes',
                imagePath: 'img/scales/a-natural-minor.png'
            };
            var exerciseModel = new Exercise(exercise);
            exerciseModel.save();
        }
    });


    Exercise.findOne({'slug': 'finger-prep'}, 'slug', function (err, exercise) {
        if(!exercise) {
            console.log('adding finger-prep exercise');
            var exercise = {
                slug: 'finger-prep',
                type: 'Exercise',
                name: 'Finger Prep',
                comments: 'Make sure to prepare each finger by placing it on the string in the right hand before playing the note',
                imagePath: 'img/scales/finger-prep.png'
            };
            var exerciseModel = new Exercise(exercise);
            exerciseModel.save();
        }
    });

    Repertoire.findOne({'slug': 'prelude-4-villa-lobos'}, 'slug', function (err, piece) {
        if(!piece) {
            console.log('adding villa lobos prelude 4');
            var piece = {
                slug: 'prelude-4-villa-lobos',
                composer: 'Hietor Villa Lobos',
                name: 'Prelude No. 4',
                comments: 'Pay attention to the "cantabile" marking at the start of the B section',
                imagePath: 'img/scores/prelude-4-villa-lobos.pdf'
            };
            var repertoireModel = new Repertoire(piece);
            repertoireModel.save();
        }
    });

    Repertoire.findOne({'slug': 'pavan-luis-milan'}, 'slug', function (err, piece) {
        if(!piece) {
            console.log('adding milan pavan');
            var piece = {
                slug: 'pavan-luis-milan',
                composer: 'Luis Milan',
                name: 'Pavan',
                comments: 'Its a Renaissance piece, so make the sound is clear and make sure the scale passages are brought out',
                imagePath: 'img/scores/pavan-luis-milan.pdf'
            };
            var repertoireModel = new Repertoire(piece);
            repertoireModel.save();
        }
    });

    Repertoire.findOne({'slug': 'cello-suite-3-bach'}, 'slug', function (err, piece) {
        if(!piece) {
            console.log('adding bach cello suite 3');
            var piece = {
                slug: 'cello-suite-3-bach',
                composer: 'Johann Sebastian Bach, Arranged by John Duarte',
                name: 'Cello Suite No. 3',
                comments: 'Practice this very slow and make sure fingerings are precise and followed carefully',
                imagePath: 'img/scores/cello-suite-3-bach.pdf'
            };
            var repertoireModel = new Repertoire(piece);
            repertoireModel.save();
        }
    });

    console.log("Finished updating content");
}

module.exports = UpdateContent;

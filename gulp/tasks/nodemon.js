var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require("../config.js").nodemon;

gulp.task('nodemon', function () {
    nodemon({
        script: 'server/server.js',
        watch: config.src,
        ext: 'js html css',
        ignore: 'node_modules/*'
    }).on('restart', function () {
        console.log('Node Restarted.');
    })
})
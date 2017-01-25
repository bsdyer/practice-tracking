var gulp = require("gulp"),
    run  = require("run-sequence"); // run gulp tasks in sequence;

// run both dist and docs builds;
gulp.task("build", function (callback) {
    run(
        "clean",
        "scss",
        callback
    );
});

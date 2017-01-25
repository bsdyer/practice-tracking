var gulp   = require("gulp"),
    config = require("../config.js").watch;

// run watches for both the documentation and distribution builds;
gulp.task("watch", function () {
    gulp.watch(config.scss, ["scss"]);
});

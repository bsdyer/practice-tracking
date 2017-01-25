"use strict";

var src    = "app",        // files to dev on;
    dist   = "build", // where production ready files are written to;
    server = "localhost",  // URL of the server we're starting;
    port   = 5000;         // URL of the server we're starting;

module.exports = {
    // helper functions need this base value;
    "src": src,
    "dest": dist,
    // delete documentation and the build;
    "clean": {
        "dist": src + 'css/'
    },
    // configure the watches for each gulp task we want to run;
    "watch": {
        "scss": [
            src + "/**/*.scss"
        ],
        "js": [
            src + "/**/*.js"
        ]
    },
    "nodemon": {
        "src": 'server/**/*'
    },
    // generate CSS for the documentation and the build;
    "scss": {
        "lintSrc": [
            src + "/**/*.scss",
            "!" + src + "/scss/_bootstrap-variables.scss"
        ],
        "compile": {
            "dist": [
                src + "/sass/*.scss",
                "!" + src + "/scss/_*.scss"
            ]
        },
        "dest": {
            "dist": src + "/css"
        },
        "maps": "./",
        // config for a plugin that fixes CSS with browser prefixes;
        "autoprefixer": {
            "browsers": [
                "last 2 versions",
                "safari 5",
                "ie 8",
                "ie 9",
                "opera 12.1",
                "ios 6",
                "android 4"
            ],
            "cascade": true
        },
        // define the compression settings for each build;
        "compress": {
            "dist": true
        }
    }
};

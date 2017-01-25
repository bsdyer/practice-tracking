angular.
module('common.exercises').
factory('Exercises', ['$http', function($http) {

    var api = {};
    var token = window.sessionStorage.getItem('practiceToken');
    api.getAll = function (cb) {
        return $http.get('/api/exercises/getAll?token=' + token).then(
            function success(res) {
                cb(res.data);
            },
            function fail(res) {
                cb(-1);
            }
        )
    }

    api.getExercise = function(slug, cb) {
        return $http.get('/api/exercises/get/' + slug + '?token=' + token).then(
            function success(res) {
                cb(res.data);
            },
            function fail(res) {
                cb(-1);
            }
        )
    }

    api.getRandomScale = function(cb) {
        return $http.get('/api/exercises/getScales?token=' + token).then(
            function success(res) {
                var maxNum = res.data.length - 1;
                var idx = Math.round(Math.random() * maxNum);
                if (res.data.length === 1) {
                    idx = 0;
                }
                console.log(idx);
                cb(res.data[idx]);
            },
            function fail(res) {
                cb(-1);
            }
        )
    }

    api.getRandomExercise = function(cb) {
        return $http.get('/api/exercises/getExercises?token=' + token).then(
            function success(res) {
                var maxNum = res.data.length - 1;
                var idx = Math.round(Math.random() * maxNum);
                if (res.data.length === 1) {
                    idx = 0;
                }
                cb(res.data[idx]);
            },
            function fail(res) {
                cb(-1);
            }
        )
    }

    return api;
}
]);

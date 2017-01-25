angular.
module('common.repertoire').
factory('Repertoire', ['$http', function($http) {

    var api = {};
    var token = window.sessionStorage.getItem('practiceToken');
    api.getAll = function (cb) {
        return $http.get('/api/repertoire/getAll?token=' + token).then(
            function success(res) {
                cb(res.data);
            },
            function fail(res) {
                cb(-1);
            }
        )
    }

    api.getPiece = function(slug, cb) {
        return $http.get('/api/repertoire/get/' + slug + '?token=' + token).then(
            function success(res) {
                cb(res.data);
            },
            function fail(res) {
                cb(-1);
            }
        )
    }

    api.getCurrentPieces = function (cb) {
        return $http.get('/api/repertoire/getCurrentPieces?token=' + token).then(
            function success(res) {
                cb(res.data);
            },
            function fail(res) {
                cb(-1);
            }
        )
    }

    return api;
}
]);

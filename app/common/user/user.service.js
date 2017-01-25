angular.
    module('common.user').
    factory('User', ['$http', function($http) {

        var api = {};

        api.getToken = function (email, pass, cb) {
            return $http.post('/api/auth/session', {email: email, password: pass}).then(
                function success(res) {
                    console.log(res.data.success);
                    if (res.data.success === true) {
                        window.sessionStorage.setItem('practiceToken', res.data.token);
                        window.sessionStorage.setItem('practiceEmail', email);
                        cb(res.data);
                    } else {
                        window.sessionStorage.setItem('practiceToken', "");
                        window.sessionStorage.setItem('practiceEmail', "");
                        cb(res.data);
                    }
                },
                function fail(res) {
                    cb(res.data);
                }
            )
        }

        api.loggedIn = function() {
            let token = window.sessionStorage.getItem('practiceToken');
            if (token && token !== "") {
                return true;
            } else {
                return false
            }
        }

        api.logout = function() {
            window.sessionStorage.setItem('practiceToken', "");
            window.sessionStorage.setItem('practiceEmail', "");
        }

        return api;
    }
]);

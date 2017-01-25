'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
    module('login').
    component('login', {
        templateUrl: 'login/login.template.html',
        controller: ['User', '$location',
            function LoginController(User, $location) {
                this.username = '';
                this.password = '';
                this.signIn = function() {
                    var res = User.getToken(this.username, this.password, (res) => {
                        if(res.success === true) {
                            $location.url('today');
                        }
                    });
                }
            }
        ]
  });

'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
    module('header').
    component('header', {
        templateUrl: 'header/header.template.html',
        controller: ['User', '$location', '$scope',
            function HeaderController(User, $location, $scope) {
                this.loggedIn = User.loggedIn();

                this.logout = function() {
                    this.loggedIn = false;
                    User.logout();
                    $location.url('home');
                }

                $scope.$on('$locationChangeSuccess', () => {
                    this.loggedIn = User.loggedIn();
                })
            }

        ]
    });

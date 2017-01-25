'use strict';

angular.
    module('detailView').
    component('detailView', {
        templateUrl: 'detailView/detailView.template.html',
        controller: ['Exercises', 'Repertoire', '$routeParams', '$location',
            function detailViewController(Exercises, Repertoire, $routeParams, $location) {
                this.item = {};
                var slug = $routeParams.slug;
                this.isExercise = $location.path().indexOf('/exercise') === 0 ? true : false;
                this.isPiece = $location.path().indexOf('/repertoire') === 0 ? true : false;

                if (this.isExercise) {
                    Exercises.getExercise(slug, (res) => {
                        this.item = {};
                        this.item.title = res.name;
                        this.item.asset = res.imagePath;
                        this.item.comments = res.comments;
                    })
                } else {
                    Repertoire.getPiece(slug, (res) => {
                        this.item = {};
                        this.item.title = res.name;
                        this.item.asset = res.assetPath;
                        this.item.comments = res.comments;
                    })
                }
            }
        ]
    })

'use strict';

angular.
    module('editView').
    component('editView', {
        templateUrl: 'editView/editView.template.html',
        controller: ['Exercises', 'Repertoire', '$routeParams', '$location',
            function EditViewController(Exercises, Repertoire, $routeParams, $location) {
                var type = $routeParams.type;
                console.log(type);
                var slug = $routeParams.slug;
                this.item = {};

                if (type === "exercise") {
                    Exercises.getExercise(slug, (res) => {
                        this.item.editType = "exercise";
                        this.item.name = res.name;
                        this.item.type = res.type;
                        this.item.imagePath = res.imagePath;
                        this.item.comments = res.comments;
                        this.item.current = res.current;
                    });
                } else {
                    Repertoire.getPiece(slug, (res) => {
                        this.item.editType = "piece";
                        this.item.name = res.name;
                        this.item.imagePath = res.assetPath;
                        this.item.comments = res.comments;
                        this.item.current = res.current;
                    });
                }
            }
        ]
    });

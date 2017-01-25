'use strict';

angular.
    module('todayView').
    component('todayView', {
        templateUrl: 'todayView/todayView.template.html',
        controller: ['Exercises', 'Repertoire',
            function TodayViewController(Exercises, Repertoire) {
                this.todayScale = {};
                this.todayExercise = {};
                this.currentPieces = [];

                Exercises.getRandomScale((res) => {
                    this.todayScale.type = "exercise";
                    this.todayScale.slug = res.slug;
                    this.todayScale.title = res.name;
                    this.todayScale.subtitle = res.type;
                    this.todayScale.caption = res.comments;
                });

                Exercises.getRandomExercise((res) => {
                    this.todayExercise.type = "exercise";
                    this.todayExercise.slug = res.slug;
                    this.todayExercise.title = res.name;
                    this.todayExercise.subtitle = res.type;
                    this.todayExercise.caption = res.comments;
                });

                Repertoire.getCurrentPieces((res) => {
                    res.map((piece) => {
                        this.currentPieces.push({
                            slug: piece.slug,
                            title: piece.name,
                            subtitle: '',
                            caption: piece.composer,
                            type: 'repertoire'
                        });
                    });
                })
            }
        ]
    });

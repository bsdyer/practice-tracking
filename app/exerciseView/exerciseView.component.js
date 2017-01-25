'use strict';

angular.
  module('exerciseView').
  component('exerciseView', {
    templateUrl: 'exerciseView/exerciseView.template.html',
    controller: ['Exercises', '$location',
      function ExcerciseViewController(Exercises, $location) {
        this.allExercises = [];

        Exercises.getAll((res) => {
            if (res.success === false) {
                $location.url('home');
                return;
            }
            res.map((item) => {
                this.allExercises.push({
                    slug: item.slug,
                    title: item.name,
                    subtitle: item.type,
                    caption: item.comments,
                    type: 'exercise'
                })
            })
        });
      }
    ]
  });

'use strict';

angular.
    module('repertoireView').
    component('repertoireView', {
        templateUrl: 'repertoireView/repertoireView.template.html',
        controller: ['Repertoire',
            function RepertoireViewController(Repertoire) {
                this.allPieces = [];

                Repertoire.getAll((res) => {
                    res.map((piece) => {
                        this.allPieces.push({
                            slug: piece.slug,
                            title: piece.name,
                            subtitle: '',
                            caption: piece.composer,
                            type: 'repertoire'
                        });
                    });
                });
            }
        ]
    });

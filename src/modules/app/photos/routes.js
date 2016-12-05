'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/photos/templates/photos.html',
                controller: 'photosController',
                controllerAs: 'photosCtrl'
            })
            .when('/albom/:id', {
                templateUrl: 'app/photos/templates/albom.html',
                controller: 'albomController',
                controllerAs: 'albomCtrl'
            })
            .when('/photo/:id', {
                templateUrl: 'app/photos/templates/photo.html',
                controller: 'photoController',
                controllerAs: 'photoCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    };
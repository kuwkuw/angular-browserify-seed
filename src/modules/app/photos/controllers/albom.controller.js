'use strict';

module.exports = /*@ngInject*/
    function albomController($scope, $routeParams, photosService) {
        var vm = this;
        vm.viewedPhotos = [];

        (function () {
            photosService
                .getAlbomPhotos($routeParams.id)
                .then(function (data) {
                    vm.viewedPhotos = data;
                });
        })();

    };
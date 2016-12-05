'use strict';

module.exports = /*@ngInject*/
    function photoController($scope, $routeParams, photosService) {
        var vm = this;
        vm.photo = [];

        (function () {            
            photosService
                .getPhotoInfo($routeParams.id)
                .then(function (data) {
                    vm.photo = data;
                });
        })();
    };
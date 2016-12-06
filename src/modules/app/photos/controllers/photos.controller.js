'use strict';

module.exports = /*@ngInject*/
    function photosController($scope, photosService) {
        var vm = this;
        vm.viewedPhotos = [];
        var photos = [];
        vm.addPhotos = addPhotos;

        (function () {
            photosService
                .getAllPhotos()
                .then(function (data) {
                    photos = data;
                    vm.addPhotos();
                });
        })();

        function addPhotos () {
            var itemshowedCount = vm.viewedPhotos.length;
            vm.viewedPhotos = vm.viewedPhotos.concat(photos.slice(itemshowedCount, itemshowedCount + 9));
        }
    };
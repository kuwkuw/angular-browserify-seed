'use strict';

module.exports = /*@ngInject*/
    function photosController($scope, photosService) {
        var vm = this;
        vm.viewedPhotos = [];
        var photos = [];

        (function () {
            photosService
                .getAllPhotos()
                .then(function (data) {
                    photos = data;
                    addMore();
                });
        })();

        function addMore () {
            var itemshowedCount = vm.viewedPhotos.length;
            vm.viewedPhotos = vm.viewedPhotos.concat(photos.slice(itemshowedCount, itemshowedCount + 10));
        }
    };
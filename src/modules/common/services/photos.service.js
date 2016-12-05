'use strict';

module.exports = /*@ngInject*/
    function photosService($http, $q) {
        return {
            getAllPhotos: getAllPhotos,
            getAlbomPhotos: getAlbomPhotos,
            getPhotoInfo: getPhotoInfo
        };

        function getAllPhotos () {
            return get('http://jsonplaceholder.typicode.com/photos');
        }

        function getAlbomPhotos (albomId) {
            return get('http://jsonplaceholder.typicode.com/albums/' + albomId + '/photos');
        }

        function getPhotoInfo (photoId) {
            return get('http://jsonplaceholder.typicode.com/photos/' + photoId);
        }

        function get(url) {
            var deferred = $q.defer();
            $http.get(url).then(function (data){
                deferred.resolve(data.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
    };
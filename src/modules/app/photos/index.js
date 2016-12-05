'use strict';

module.exports =
    angular.module('photos', [])
        .config(require('./routes.js'))
        // .config(require('./i18n/en.js'))
        .controller('photosController', require('./controllers/photos.controller'))
        .controller('albomController', require('./controllers/albom.controller'))
        .controller('photoController', require('./controllers/photo.controller'));

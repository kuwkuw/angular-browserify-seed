'use strict';

module.exports = /*@ngInject*/
    function scrolledDirective($window, $document) {
        return {
            restrict: 'A',
            scope: {
            },
            link: function (scope, element, attributes) {
                $document.on('scroll', function (eve) {                    
                    var isScroletTObottom = $window.pageYOffset + window.innerHeight === eve.target.documentElement.scrollHeight;
                    if(isScroletTObottom){
                        scope.$apply(function() {
                            scope.$parent.$eval(attributes.scrolled); 
                        });                        
                    }                    
                });
            }
        };
    };
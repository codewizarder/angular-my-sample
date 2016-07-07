(function(){
    'use strict';
    
    angular
        .module('app')
        .directive('newsWidget', currentTime);
    
    function currentTime(){
        return {
            transclude: true,
            scope: {
                info: '='
            },
            templateUrl: 'common/directives/news-widget/news-widget.html',
            restrict: 'E'
//            controller: function(scope){
//                scope.$watch('info.name', function(newValue, oldValue) {
//                      console.log('new '+newValue+'. old '+oldValue)
//                    });
//            }
        }    
    }    
    
})();
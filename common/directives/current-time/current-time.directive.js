(function(){
    'use strict';
    
    angular
        .module('app')
        .directive('currentTime', currentTime);
    
    function currentTime(){
        return {
            transclude: true,
            scope: {
                info: '='
            },
            templateUrl: 'common/directives/current-time/time.html',
            restrict: 'E'
//            controller: function(scope){
//                scope.$watch('info.name', function(newValue, oldValue) {
//                      console.log('new '+newValue+'. old '+oldValue)
//                    });
//            }
        }    
    }    
    
})();
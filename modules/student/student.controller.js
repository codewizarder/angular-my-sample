(function(){
    'use strict';
    
    angular
        .module('student.module')
        .controller('StudentController', StudentController);
    
    StudentController.$inject = ['title'];
    /* @ngInject */    
    function StudentController(title){
        var vm = this;
        
        vm.test = title;
        vm.info = {
            name: 'TestTimer',
            age: 555
        }
    }
    
})();
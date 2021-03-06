(function(){
    'use strict';
    
    angular
        .module('teacher.module')
        .controller('TeacherController', TeacherController);
    
    TeacherController.$inject = ['TeacherService'];
    /* @ngInject */    
    function TeacherController(TeacherService){
        var vm = this;
        vm.test = "Test"
        var promise = TeacherService.getAllTeachers();
        
        promise.then(function(data){
            vm.teachers = data.value;   
        }, function(err){
            console.warn(err);
        });
        
        vm.getTeacherInfo = function(AdmissionNo){
            TeacherService.getTeacher(AdmissionNo).then(function(data){
                console.log(data);
            }, function(error){
                alert('Error')
            });
        }
        
        console.log(promise);
    }
    
})();
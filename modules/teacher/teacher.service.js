(function(){
    'use strict';
    
    angular
        .module('teacher.module')
        .factory('TeacherService', TeacherService);
    
    TeacherService.$inject = ['TeacherRepository'];
    /* @ngInject */
    function TeacherService(TeacherRepository){
        var service = {
            getAllTeachers: getAllTeachers
        };
        
        return service;
        
        function getTeacher(id){
            return TeacherRepository.getTeacherDetails({teacherId: id}).$promise;
        }
        
        function getAllTeachers(){
            return TeacherRepository.getAllTeachers().$promise;
        }
    }
})();
(function(){
    'use strict';
    
    angular
        .module('teacher.module')
        .factory('TeacherService', TeacherService);
    
    TeacherService.$inject = ['TeacherRepository'];
    /* @ngInject */
    function TeacherService(TeacherRepository){
        var service = {
            getAllTeachers: getAllTeachers,
            getTeacher: getTeacher
        };
        
        return service;
        
        function getTeacher(id){
            return TeacherRepository.getTeacherDetails({idm: id, teacherId: 1}).$promise;
        }
        
        function getAllTeachers(){
            return TeacherRepository.getAllTeachers().$promise;
        }
    }
})();
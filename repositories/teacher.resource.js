(function(){
    'use strict';
    
    angular
        .module('Repositories')
        .factory('TeacherRepository', TeacherRepository);
    
    TeacherRepository.$inject = ['$resource'];
    /* @ngInject */
    function TeacherRepository($resource){      
        var teacherURl = 'http://roadrunnerapi.apphb.com/odata/Students';
        return $resource(teacherURl,{teacherId: '@idm'},{
            getAllTeachers: {method: 'GET'},
            getTeacherDetails: {method: 'GET', url: teacherURl + '(:teacherId)'}
        });
    }
    
})();
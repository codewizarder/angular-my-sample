(function(){
'use strict';
    angular
        .module('app')
        .config(appConfig);
    
    appConfig.$injec = [];
    /* @ngInject */    
    function appConfig($urlRouterProvider, $stateProvider){
        $stateProvider
        .state('student', {
//            abstract: true,
            templateUrl: 'modules/student/student.tmpl.html',
        })
        .state('student.hostel',{
            url: '/student/hostel',
            resolve: { 
                title: function(){
                    return 'Student resolved data';
                }
            },
            controller: 'StudentController',
            controllerAs: 'vm',
            templateUrl: 'modules/student/hostel.html'
        })
        .state('teacher', {
            url: '/teacher',
            views: {
                header: {
                    templateUrl: 'modules/teacher/views/header.html',
                },
                content: {
                    templateUrl: 'modules/teacher/teacher.tmpl.html',
                    controller: 'TeacherController',
                    controllerAs: 'vm'
                }
            },            
            onEnter: function(){
                console.info('Entered')
            },
            onExit: function(){
                console.info('Exited');
            }
        })
        .state('404',{
            url: '/notFound',
            template: '<h1>Url not found</h1>'
        })
        
        $urlRouterProvider.otherwise('/student');
    }
    
})();
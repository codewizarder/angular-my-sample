(function(){
    'use strict';
    
    angular
        .module('app')
        .run(function($http){
            (function setToken() {
                var token = '7XPJ87isIS-otCz3h1xnkCC1gUSIQQ_T405JiIjjOmGGoi3PxQMGHsUD5S0fmWKQ5jkGwJWNoUN-oHc81o0JUfiBcL0pTv_ORwPedTM82EBwMkEg9Ves_C0otrz1tr93nicIzHTzgwGqNBwv6OJkeIyWvgXTeuy3F5ONe3lyxtQXMSp-uFGWvOATTYZZ9aQ3xjrd1w5QRQFz-kxAdHV6zw4vfmPjkYHkFbmdIt4GBEZYIbTuMAc08A9EHVsuJC93NIgat26NrPfOKktHpQGv2uqj2ke68c3DwwleKrOrVWxiW49wrwha8hPE6nXQoksaa9FavDIqmHBojKWinMY4j2YYeCqlyNaZ2mzbJct7osslVsnQSYKCKtL9SW8mKq_J2Mu93UwAe3pRweY7YUIELuzm6ZcIiKWIBAURMGpmTwRKlnuusD6o9Cbx-aHqxggOWFMLICipYacoONEyObbxIi5AgvbBVKxkVxJsHBNueVQ';
                
                if (token) {
                    var authHeader = 'Bearer ' + token;
                    //Angular 
                    $http.defaults.headers.common['Authorization'] = authHeader;
                } else {
                    //Angular
                    $http.defaults.headers.common && (delete $http.defaults.headers.common['Authorization']);
                }
            })();
        
        })
})();
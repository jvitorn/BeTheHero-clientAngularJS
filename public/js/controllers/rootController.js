angular.module('bethehero').run(function ($http, $cookies) {
    if ($cookies.get('x-access-token')) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.get('x-access-token')
    }

})
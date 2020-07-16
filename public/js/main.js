angular.module('bethehero', ['ngRoute', 'ui.mask'])
    .config(($routeProvider, $locationProvider) => {
        //routes
        const routeIndex = {
            home: "/home",
        }


        $locationProvider.html5Mode(true);
        //rotas de usuario
        $routeProvider.when(routeIndex.home, {
            templateUrl: 'partials/home.html',
            controller: 'IndexController'
        });


        $routeProvider.otherwise({ redirectTo: '/home' });

    });
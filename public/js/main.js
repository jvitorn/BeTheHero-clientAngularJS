angular.module('bethehero', ['ngRoute', 'ui.mask'])
    .config(($routeProvider, $locationProvider) => {
        //routes
        const routeIndex = {
            home: "/home",
            login: "/home/login",
            register: "/home/register",
            incidents: "/home/incidents"
        }


        $locationProvider.html5Mode(true);
        //rotas de usuario
        $routeProvider.when(routeIndex.home, {
            templateUrl: 'partials/home.html',
            controller: 'IndexController'
        });
        $routeProvider.when(routeIndex.login, {
            templateUrl: 'partials/login.html',
            controller: 'IndexController'
        });
        $routeProvider.when(routeIndex.register, {
            templateUrl: 'partials/register.html',
            controller: 'IndexController'
        });
        $routeProvider.when(routeIndex.incidents, {
            templateUrl: 'partials/incidents.html',
            controller: 'IndexController'
        });



        $routeProvider.otherwise({ redirectTo: '/home' });

    });
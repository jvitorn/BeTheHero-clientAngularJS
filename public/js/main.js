angular.module('bethehero', ['ngRoute', 'meusServicos', 'ui.mask'])
    .config(($routeProvider, $locationProvider) => {
        //routes
        const routeIndex = {
            home: "/home",
            login: "/home/login",
            register: "/home/register",
            incidents: "/home/incidents",
            incident: "/incident/:id"
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
        $routeProvider.when(routeIndex.incident, {
            templateUrl: 'partials/incident.html',
            controller: 'IncidentController'
        });



        $routeProvider.otherwise({ redirectTo: '/home' });

    });
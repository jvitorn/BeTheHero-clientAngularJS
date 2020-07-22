angular.module('bethehero', ['myDirectives', 'ngRoute', 'meusServicos', 'ui.mask'])
    .config(($routeProvider, $locationProvider) => {
        //routes
        const routeIndex = {
            home: "/home",
            login: "/home/login",
            register: "/home/register",
            incidents: "/home/incidents",
            incident: "/incident/:id",
            newIncident: "/newIncident",
            perfil: "/home/perfil"
        }


        $locationProvider.html5Mode(true);
        //rotas de usuario
        $routeProvider.when(routeIndex.home, {
            templateUrl: 'partials/home.html',
            controller: 'IndexController'
        });
        $routeProvider.when(routeIndex.perfil, {
            templateUrl: 'partials/perfil.html',
            controller: 'IndexController'
        });
        $routeProvider.when(routeIndex.login, {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when(routeIndex.register, {
            templateUrl: 'partials/register.html',
            controller: 'RegisterController'
        });
        $routeProvider.when(routeIndex.incidents, {
            templateUrl: 'partials/incidents.html',
            controller: 'IncidentsController'
        });
        $routeProvider.when(routeIndex.incident, {
            templateUrl: 'partials/incident.html',
            controller: 'IncidentController'
        });
        $routeProvider.when(routeIndex.newIncident, {
            templateUrl: 'partials/newIncident.html',
            controller: 'NewIncidentController'
        });



        $routeProvider.otherwise({ redirectTo: '/home' });

    });
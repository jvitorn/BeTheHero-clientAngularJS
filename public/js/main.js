angular.module('bethehero', ['myDirectives', 'ngRoute', 'meusServicos', 'ui.mask'])
    .config(($routeProvider, $locationProvider) => {
        //routes
        const routeIndex = {
            home: "/home",
            login: "/home/login",
            register: "/home/register",
            incidents: "/home/incidents",
            incident: "/incident/:id",
            myIncients: "/home/myincident",
            newIncident: "/newIncident",
            perfil: "/home/perfil",
            adm: "/home/adm",
            verOng: "/home/verOng/:id"
        }


        $locationProvider.html5Mode(true);
        //rotas de usuario
        $routeProvider.when(routeIndex.home, {
            templateUrl: 'partials/home.html',
            controller: 'IndexController'
        });
        $routeProvider.when(routeIndex.perfil, {
            templateUrl: 'partials/perfil.html',
            controller: 'PerfilController'
        });
        $routeProvider.when(routeIndex.adm, {
            templateUrl: 'partials/adm.html',
            controller: 'AdmController'
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
        $routeProvider.when(routeIndex.myIncients, {
            templateUrl: 'partials/casosOng.html',
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
        $routeProvider.when(routeIndex.verOng, {
            templateUrl: 'partials/verOng.html',
            controller: 'VerOngController'
        });



        $routeProvider.otherwise({ redirectTo: '/home' });

    });
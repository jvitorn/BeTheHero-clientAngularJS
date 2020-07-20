angular.module('bethehero').controller('IncidentController', function ($scope, recursoIncident, $routeParams) {
    //verificando o parametro passado por url e buscando esse resultado na api
    if ($routeParams.id) {
        recursoIncident.get({ incidentId: $routeParams.id }, (incident) => $scope.incident = incident.results)
    }

    $scope.enviarMsg = (numero) => {
        console.log(numero)
    }

})  
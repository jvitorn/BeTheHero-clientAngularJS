angular.module('bethehero').controller('IncidentController', function ($scope, recursoIncident, recursoOng, $routeParams) {
    //verificando o parametro passado por url e buscando esse resultado na api
    if ($routeParams.id) {
        // api de incidents
        recursoIncident.get({ incidentId: $routeParams.id }, (incident) => {
            // inserindo resultados da busca
            $scope.incident = incident.results
            // procurando qual é o id da ong na api de ONGs
            recursoOng.get({ ongId: $scope.incident.ongId }, (ong) => {
                $scope.incident.ong = ong.results.name
                $scope.incident.whatsapp = ong.results.whatsapp
            })

        }, (errorIncident) => {
            console.error(errorIncident)
        })

        $scope.enviarMsg = () => {
            const txt = 'Olá ' + $scope.incident.ong + ' Estou interessado no caso "' + $scope.incident.title.toUpperCase() + '".Quero saber mais sobre isso para poder os ajudar !!'

        }
    }



})  
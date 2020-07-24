angular.module('bethehero').controller('VerOngController', function ($scope, $routeParams, incidentByOng, recursoOng) {
    if ($routeParams.id) {
        incidentByOng.get({ ongId: $routeParams.id }, (incident) => {
            $scope.incidents = incident.results
            recursoOng.get({ ongId: $routeParams.id }, (ong) => {
                $scope.ong = ong.results.name
            })

        })
    }
})  
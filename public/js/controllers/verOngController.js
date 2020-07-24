angular.module('bethehero').controller('VerOngController', function ($scope, $routeParams, incidentByOng) {
    if ($routeParams.id) {
        incidentByOng.get({ ongId: $routeParams.id }, (incident) => {
            $scope.incidents = incident.results
        })
    }
})  
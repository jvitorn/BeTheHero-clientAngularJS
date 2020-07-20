angular.module('bethehero').controller('IncidentsController', function ($scope, recursoIncident) {
    recursoIncident.query((incidents) => $scope.incidents = incidents.results)

})  
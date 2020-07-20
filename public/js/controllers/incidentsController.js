angular.module('bethehero').controller('IncidentsController', function ($scope, recursoIncident, recursoOng) {
    recursoIncident.query((incidents) => {
        $scope.incidents = incidents.results

        console.log(incidents.results.length)


        for (let c = 0; c <= incidents.results.length; c++) {
            // procurando qual é o id da ong na api de ONGs
            recursoOng.get({ ongId: $scope.incidents[c].ongId }, (ong) => {
                $scope.incidents[c].ong = ong.results.name
                $scope.incidents[c].whatsapp = ong.results.whatsapp
            })
        }
    })

})  
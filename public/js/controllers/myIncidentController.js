angular.module('bethehero').controller('MyIncidentController', function ($scope, $location, recursoOng, recursoIncident, verify, getId) {
    verify.teste

    $scope.ong = localStorage.getItem('userName')

    recursoOng.get({ ongId: getId() }, (ong) => {
        if (ong.results._id == getId()) {
            recursoIncident.get({ ongId: getId() }, (incident) => {
                $scope.incidents = incident.results
            })
        } else {
            // sweet alert
            Swal.fire({
                title: 'Erro',
                text: 'Informações de ID invalidas,favor faça login novamente !',
                icon: 'error',
            })
            $location.path('home/login')
        }
    })

})  
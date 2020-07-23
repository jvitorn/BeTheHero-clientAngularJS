angular.module('bethehero').controller('AdmController', function ($scope, $routeParams, recursoOng, getId, verify) {
    verify.teste
    if ($routeParams.id == getId()) {
        recursoOng.get({ ongId: $routeParams.id }, (ong) => {
            $scope.usuario = ong.results

        })

    }

})
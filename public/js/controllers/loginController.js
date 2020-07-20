angular.module('bethehero').controller('LoginController', function ($scope, recursoLogin) {

    $scope.logar = (usuario) => {
        recursoLogin.save(usuario, (session) => {

        }, erro => console.error(erro))

    }

})
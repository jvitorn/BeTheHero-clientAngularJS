angular.module('bethehero').controller('LoginController', function ($scope, recursoLogin) {

    $scope.logar = (usuario) => {
        recursoLogin.save(usuario, (session) => {
            console.log(session.token)
        }, erro => console.error(erro))
        console.log(usuario)
    }

})
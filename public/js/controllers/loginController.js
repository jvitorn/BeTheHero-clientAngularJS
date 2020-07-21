angular.module('bethehero').controller('LoginController', function ($scope, recursoLogin, gerarToken) {

    $scope.logar = (usuario) => {
        recursoLogin.save(usuario, (session) => {
            //importando a criação de token
            const token = gerarToken
            //capturando token
            token(session.token)
        }, erro => console.error(erro))

    }

})
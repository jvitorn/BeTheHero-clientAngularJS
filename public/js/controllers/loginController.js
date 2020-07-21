angular.module('bethehero').controller('LoginController', function ($scope, recursoLogin, gerarToken, $location) {

    $scope.logar = (usuario) => {
        recursoLogin.save(usuario, (session) => {
            //importando a criação de token
            const token = gerarToken
            //capturando token
            token(session.token)
            $location.path('home/perfil')
        }, erro => console.error(erro))

    }

})
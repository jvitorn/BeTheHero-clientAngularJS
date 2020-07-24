angular.module('bethehero').controller('LoginController', function ($scope, $cookies, recursoLogin, gerarToken, setInfoUser, $location) {

    $scope.logar = (usuario) => {
        recursoLogin.save(usuario, (session) => {
            //importando a criação de token
            const token = gerarToken
            //capturando token
            token(session.token)
            //test
            setInfoUser()
            $location.path('home/perfil')
        })

    }

})
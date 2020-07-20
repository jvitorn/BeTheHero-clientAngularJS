angular.module('bethehero').controller('RegisterController', function ($scope, cadastroDeOng) {
    $scope.registrar = (usuario) => {

        // cadastro de ong
        cadastroDeOng.cadastrar(usuario)
            .then(result => {
                const mensagem = result.mensagem;
                // sweet alert
                Swal.fire({
                    title: 'Ong',
                    text: mensagem,
                    icon: 'success',
                })
            })
            .catch(erro => {
                $scope.mensagem = erro.mensagem;
                // sweet alert
                Swal.fire({
                    title: 'Ong',
                    text: $scope.mensagem,
                    icon: 'error',
                })
            })
    }

})
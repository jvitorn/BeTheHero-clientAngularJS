angular.module('bethehero').controller('AdmController', function ($scope, $routeParams, cadastroDeOng, recursoOng, getId, verify) {
    verify.teste
    if ($routeParams.id == getId()) {
        recursoOng.get({ ongId: $routeParams.id }, (ong) => {
            $scope.usuario = ong.results

        })
        $scope.atualizar = (usuario) => {
            cadastroDeOng.cadastrar(usuario)
                .then(atualiza => {
                    const mensagem = atualiza.mensagem
                    
                    // sweet alert
                    Swal.fire({
                        title: 'Ong:',
                        text: mensagem,
                        icon: 'success',
                    })
                })
                .catch(erro => {
                    const mensagem = erro.mensagem
                    // sweet alert
                    Swal.fire({
                        title: 'Ong:',
                        text: mensagem,
                        icon: 'error',
                    })
                })
        }
    }

})
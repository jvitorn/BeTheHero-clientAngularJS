angular.module('bethehero').controller('NewIncidentController', function ($scope, $routeParams, verify, getId, recursoIncident, cadastroDeIncident) {
    verify.teste
    $scope.incident = {}
    if ($routeParams.id) {
        recursoIncident.get({ incidentId: $routeParams.id }, (results) => {
            $scope.usuario = results.results
            console.log($scope.usuario)
        })

        $scope.incident.titulo = "Editar Caso"
        $scope.incident.descricao = 'Edite o caso do incidente caso for necessario!'
        $scope.incident.botao = 'Editar'
        console.log($scope.incident)
    } else {
        $scope.incident.titulo = "Cadastrar Novo Caso"
        $scope.incident.descricao = 'Descreva detalhadamente para que apareça um Heroi.'
        $scope.incident.botao = 'Cadastrar'
    }
    $scope.caso = (usuario) => {

        const get = getId
        usuario.ongId = get()
        cadastroDeIncident.cadastrar(usuario)
            .then(incident => {
                const mensagem = incident.mensagem

                // sweet alert
                Swal.fire({
                    title: 'Caso:',
                    text: mensagem,
                    icon: 'success',
                })
            })
            .catch(erro => {
                const mensagem = erro.mensagem
                // sweet alert
                Swal.fire({
                    title: 'Caso:',
                    text: mensagem,
                    icon: 'error',
                })
            })
    }
})
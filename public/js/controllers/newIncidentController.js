angular.module('bethehero').controller('NewIncidentController', function ($scope, $routeParams, $location, verify, getId, recursoIncident, cadastroDeIncident) {
    verify.teste
    $scope.incident = {}
    if ($routeParams.id) {
        recursoIncident.get({ incidentId: $routeParams.id }, (results) => {
            $scope.usuario = results.results

        })

        $scope.incident.titulo = "Editar Caso"
        $scope.incident.descricao = 'Edite o caso do incidente caso for necessario!'
        $scope.incident.botao = 'Editar'

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

                $location.path('home/incidents')
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
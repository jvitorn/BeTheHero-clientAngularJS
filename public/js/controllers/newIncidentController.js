angular.module('bethehero').controller('NewIncidentController', function ($scope, verify, getId, cadastroDeIncident) {
    verify.teste

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
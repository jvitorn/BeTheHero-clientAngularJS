angular.module('meusServicos', ['ngResource', 'meusServicos', 'ngCookies'])
    .factory('recurso', function () {
        const APIKey = 'http://192.168.0.120:3331/api'

        return {
            api: APIKey
        }
    })
    .factory('recursoIncident', ($resource, recurso) => {
        return $resource(recurso.api + '/incidents/:incidentId', null, {
            update: {
                method: 'put'
            },
            query: {
                method: 'get'
            }

        });
    })
    .factory('recursoOng', ($resource, recurso) => {
        return $resource(recurso.api + '/ongs/:ongId', null, {
            update: {
                method: 'put'
            },
            query: {
                method: 'get'
            }

        });
    })
    .factory('recursoLogin', ($resource, recurso) => {
        return $resource(recurso.api + '/session', null, {
            update: {
                method: 'put'
            }
        });
    })
    .factory('cadastroDeOng', (recursoOng, $q) => {

        let servico = {}

        servico.cadastrar = (ong) => {
            return $q(function (resolve, reject) {
                //caso existir esse id ele ira atualizar as informações 
                if (ong._id) {
                    recursoOng.update({ id: ong._id }, ong, () => {
                        resolve({
                            mensagem: 'ONG: ' + ong.title + ' atualizada com sucesso!',
                            inclusao: false
                        });
                    }, function (error) {
                        console.log(error)
                        reject({
                            mensagem: 'Não foi possivel alterar os dados da ONG' + livro.title
                        });
                    });
                }
                //se nao existir ele ira criar uma nova informação de livro no banco 
                else {
                    recursoOng.save(ong, () => {
                        resolve({
                            mensagem: 'ONG ' + ong.id + ' Incluida com sucesso ',
                            inclusao: true
                        });
                    }, function (error) {
                        console.log(error)
                        reject({
                            mensagem: 'Não foi possivel cadastrar a ONG ' + ong.title
                        });
                    })
                }
            })
        }
        return servico
    })

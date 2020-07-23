angular.module('meusServicos', ['ngResource', 'meusServicos', 'ngCookies'])
    .factory('getId', ($cookies) => {

        return () => {
            const refaturandoToken = $cookies.get('x-access-token').split('.')
            //capturando a parte de informação do usuario 
            const infoUser = JSON.parse(atob(refaturandoToken[1]))

            // Setting a localStorage

            return infoUser.userID
        }
    })
    .factory('setInfoUser', ($cookies) => {
        return () => {
            const refaturandoToken = $cookies.get('x-access-token').split('.')
            //capturando a parte de informação do usuario 
            const infoUser = JSON.parse(atob(refaturandoToken[1]))

            // Setting a localStorage
            localStorage.setItem('userID', infoUser.userID)
            localStorage.setItem('userName', infoUser.userName)
        }

    })
    .factory('verify', ($cookies, $location) => {
        function verify() {
            if ($location.path() == '/home/perfil' && $cookies.get('x-access-token') || $location.path() == '/newIncident' && $cookies.get('x-access-token') || $location.path() == '/home/adm' && $cookies.get('x-access-token')) {
            } else {
                $location.path('home/login')
            }

        }
        return { teste: verify() }
    })
    .factory('recurso', () => {
        const APIKey = 'http://192.168.0.120:3331/api'

        return {
            api: APIKey
        }
    })
    .factory('gerarToken', ($cookies) => {
        return (token) => {
            $cookies.put('x-access-token', token)
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
                    recursoOng.update({ ongId: ong._id }, ong, () => {
                        resolve({
                            mensagem: 'ONG: atualizada com sucesso!',
                            inclusao: false
                        });
                    }, function (error) {
                        console.log(error)
                        reject({
                            mensagem: 'Não foi possivel alterar os dados da ONG' + ong.title
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
    .factory('cadastroDeIncident', (recursoIncident, $q) => {
        let servico = {}

        servico.cadastrar = (incident) => {
            return $q(function (resolve, reject) {
                //caso existir esse id ele ira atualizar as informações
                if (incident._id) {
                    recursoIncident.update({ incidentId: incident._id }, incident, () => {
                        resolve({
                            mensagem: 'CASO: ' + incident.title + ' atualizado com sucesso!',
                            inclusao: false
                        });
                    }, function (error) {
                        console.log(error)
                        reject({
                            mensagem: 'Não foi possivel alterar os dados do CASO' + incident.title
                        });
                    });
                }
                //se nao existir ele ira criar uma nova informação de incident no banco 
                else {
                    recursoIncident.save(incident, () => {
                        resolve({
                            mensagem: 'CASO: ' + incident._id + ' Incluido com sucesso ',
                            inclusao: true
                        });
                    }, function (error) {
                        console.log(error)
                        reject({
                            mensagem: 'Não foi possivel cadastrar o CASO: ' + incident.title
                        });
                    })
                }
            })
        }

        return servico
    })

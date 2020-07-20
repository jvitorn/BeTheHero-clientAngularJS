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
angular.module('meusServicos', ['ngResource', 'meusServicos', 'ngCookies'])
    .factory('recurso', function () {
        const APIKey = 'http://localhost:3331/api'

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
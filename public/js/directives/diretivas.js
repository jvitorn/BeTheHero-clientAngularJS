angular.module('meusServicos', ['ngResource', 'ngCookies'])
    .factory('recurso', function () {
        const APIKey = 'http://localhost:3331'

        return {
            api: APIKey
        }
    })  
angular.module('myDirectives', [])
    .directive('imgTemp', () => {

        let ddo = {};

        ddo.restrict = "AE"

        ddo.scope = {
            titulo: '@',
            url: '@'
        }

        ddo.template = '<img src="{{url}}" alt="{{titulo}}" class="img-fluid d-block logo">'

        return ddo;
    })
    .directive('foto', () => {

        let ddo = {};

        ddo.restrict = "AE"

        ddo.scope = {
            titulo: '@',
            url: '@',
            classe: '@'
        }

        ddo.template = '<img src="{{url}}" alt="{{titulo}}" class="{{classe}}">'

        return ddo;
    })
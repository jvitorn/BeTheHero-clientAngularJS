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

        return ddo
    })
    .directive('cardHorizonal', () => {

        let ddo = {}

        ddo.restrict = "AE"
        ddo.transclude = true

        ddo.scope = {
            url: '@',
            imagem: '@',
            classe: '@',
            title: '@',
            ong: '@',
            description: '@'
        }

        ddo.templateUrl = 'js/directives/model/cardHorizontal.html'

        return ddo
    })
    .directive('btnWhatsapp', () => {
        let ddo = {}
        //restrição E -> elemento 
        ddo.restrict = "E"

        ddo.scope = {
            nome: '@',
            //indicando que sera passado uma expressao ao banco de dados
            acao: '&'
        }
        //entrar em contato
        ddo.template = '<button class="btn btn-block bg-whats text-white mx-auto p-4" ng-click="acao()">{{nome}}<i class="fab fa-whatsapp"></i></button>'

        return ddo

    })
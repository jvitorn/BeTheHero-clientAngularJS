angular.module('bethehero').controller('PerfilController', function ($scope) {

    $scope.profile = localStorage.getItem('userID')
})  
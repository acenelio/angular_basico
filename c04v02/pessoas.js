var pessoas = angular.module('pessoas', ['ngRoute']);

pessoas.config(function($routeProvider) {

	$routeProvider.when('/', {templateUrl: 'listar.html'});

});

var ctrlPessoas = pessoas.controller('CtrlPessoas', function($scope) {
    
    $scope.pessoas = [
        {nome: "Maria", cidade: "São Paulo"},
        {nome: "Pedro", cidade: "Salvador"},
        {nome: "João", cidade: "Parnaíba"},
        {nome: "Cleber", cidade: "Barueri"}
    ];
});


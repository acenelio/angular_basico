var appPessoas = angular.module('AppPessoas', ['ngRoute']);

appPessoas.config(function($routeProvider) {

	$routeProvider
        .when('/', {
            templateUrl: 'listar.html'
        })
        .when('/pessoa/adicionar', {
            templateUrl: 'adicionar.html',
            controller: 'CtrlAdicionar'
        })
        .when('/pessoa/:index', {
            templateUrl: 'editar.html',
            controller: 'CtrlEditar'
        })
        .otherwise({
            redirectTo: '/'
        })
    ;
});

appPessoas.controller('CtrlPessoas', function($scope) {
    
    $scope.pessoas = [
        {nome: "Maria", cidade: "São Paulo"},
        {nome: "Pedro", cidade: "Salvador"},
        {nome: "João", cidade: "Parnaíba"},
        {nome: "Cleber", cidade: "Barueri"}
    ];
});

appPessoas.controller('CtrlAdicionar', function($scope) {
    
    $scope.add = function() {
    	$scope.pessoas.push($scope.pessoa); <!-- basta passar o objeto pai -->
 
        $scope.pessoa = ""; <!-- basta limpar o objeto pai -->
        $scope.result = "Registro adicionado com sucesso!"
    };
});

appPessoas.controller('CtrlEditar', function($scope, $routeParams) {
    
    $scope.pessoa = $scope.pessoas[$routeParams.index];
});

var pessoas = angular.module('pessoas', []); 

var ctrlPessoas = pessoas.controller('CtrlPessoas', ['$scope', function(s) {
    
    s.pessoas = [
        {nome: "Maria", cidade: "São Paulo"},
        {nome: "Pedro", cidade: "Salvador"},
        {nome: "João", cidade: "Parnaíba"},
        {nome: "Cleber", cidade: "Barueri"}
    ];
}]);


// cria o modulo do angular e referencia todas as bibliotecas que serão usadas
var appA = angular.module('app',['LocalStorageModule','ngResource','ngRoute','nvd3','ngMaterial','ngAnimate','ngAria']);
/*
usa para armazenar dados no cache do navegador
*/
appA.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('app');    
});
// faz a configuração das rotas das pag que serão usadas na aplicação 
appA.config(function($routeProvider) {
	$routeProvider.
	when("/home", { // rota para a page home
		templateUrl : "/pages/inicio.html",
		controller : 'home',
		controllerAs:'Ctrl'
	}).
	//*
	when("/Lista", {
		templateUrl : "/pages/lista.html",
		controller : 'TelaLISTA',
		controllerAs: 'Ctrl',
	}).
	when("/AddPessoa", {
		templateUrl : "/pages/novo.html",
		controller : 'TelaADD',
		controllerAs:  'Ctrl',
	}).
	when('/EditPessoa',{
		templateUrl : "/pages/edit.html",
		controller : 'TelaEdit',
		controllerAs:'Ctrl',

	}).
	when('/Grafico',{ 
		templateUrl:"/pages/grafico.html",
		
	}).
	//*/
	otherwise({ // far o redirecionamento para a rota /home caso outro caminho seja informado e não estaja implementado
		redirectTo : "/home"
	});
});
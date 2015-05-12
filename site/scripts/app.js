console.log ("#Jonh: Cargo app.js");
//Inyectando el modulo de ui-router
//Como parametro de arreglo de objetos
//Del modulo

var modulo1 = 
	angular.module("reeditgam",['ui.router']);  // INYECTANDO EL MODULO DEL UI.ROUTER COMO PARAMETRO DEL ARREGLO DE OBJETOS DEL MODULO.
	// CONFIGURANDO LAS RUTAS.
	// RECIVE UN ARREGLO DE ELEMENTOS.
	modulo1.config(['$stateProvider',
		'$urlRouterProvider',
		function($stateProvider,$urlRouterProvider){
			//INICIANDO RUTINA DE CONFIGURACION.
			$stateProvider.state('home',{
				//DEFINIENDO ESTADO COMO UN OBJETO .
				url:"/home",// URL QUE DEFINE EL ESTADO.
				//PLANTILLA BASE PARA EL ESTADO.
				templateUrl: "/home.html",
				controller:'mainCtrl'
			});
			// URL POR DEFECTO 
			$urlRouterProvider.otherwise('home');
		}]);
	// CREANDO UN SERVICIO DEL TIPO FACTORY
    modulo1.factory('posts',[function(){
    	//CUERPO DEL FACTORY LLAMADO POST
    	var o={
    		posts : [
    		{title: "post 1", upvotes: 15,
    		comments: [
                  {author: "Karina", body:"Esto esta geneal.", upvotes:3},
                  {author: "Gamaliel", body:"Esto es basura.",upvotes:0}]
    		    },
    		    {title: "post 2", upvotes: 25,
    		comments: [
                  {author: "Coco", body:"Esto es bonito.", upvotes:5},
                  {author: "Cristian", body:"Esto es aburrido.",upvotes:1}]
    		    },
    		    {title: "post 3", upvotes: 35,
    		comments: [
                  {author: "Angel", body:"Esto esta padrisimo.", upvotes:4},
                  {author: "Daniel", body:"Esto no me gusta.",upvotes:3}]
    		    }
    		]
    	};
    	//RETORNANDO OBJETO DE DATOS PERSISTENTES.
    	return o;
    }]);

	//CREANDO CONTROLADOR
	//DEPENDENCY INJECTION
modulo1.controller("mainCtrl",[
	'$scope','posts', //INYECTANDO FACTORY POST
	function($scope,posts){
		$scope.test = "Hola Angular";
		//MODELO AL CUAL SE LE ASIGNA EL RESULTADO DEL FACTORY
		$scope.posts = posts.posts;

		//METODO DEL CONTROLADOR
		$scope.addPost = function() {
			if(!$scope.title || $scope.title === "")
			{
				alert("NO se permite postear titulos vacios")
				return;
			}
			$scope.posts.push(
				{
					title: $scope.title, 
					link:  $scope.link,
				upvotes: 0});
			//twp.way data binding
			$scope.title="";
			$scope.link="";

		};
		// metodo que incrementa el voto de un post en una unidad
		$scope.incrementUpvotes=function(post){
			post.upvotes +=1;
		};
	}]);

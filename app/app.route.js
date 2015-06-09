app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'components/grammar/commaView.html',
		controller : 'CommaController'
	})
	.when('/Comma', {
		templateUrl : 'components/grammar/commaView.html',
		controller : 'CommaController'
	})
	.otherwise({redirectTo : '/'});
}]);
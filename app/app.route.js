app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'components/home/homeView.html',
		controller : 'HomeController'
	})
	.when('/Home', {
		templateUrl : 'components/home/homeView.html',
		controller : 'HomeController'
	})
	.otherwise({redirectTo : '/'});
}]);
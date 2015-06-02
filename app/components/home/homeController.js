app.controller('HomeController', ['$scope', function($scope){
	$scope.title = 'The Grammar Nazi';
	$scope.subheading = 'Look professional like a real Nazi!';
	$scope.grammar = new Grammar($scope.input, $scope.output);
}]);
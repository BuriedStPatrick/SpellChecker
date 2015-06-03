app.controller('HomeController', ['$scope', function($scope){
	$scope.title = 'The Grammar Nazi';
	$scope.subheading = 'Look professional like a real Nazi!';
	$scope.grammar = new Grammar($scope.input, $scope.output);
	$scope.$watch(function(scope){return scope.grammar.input;}, function(newValue, oldValue){
		checkGrammar($scope, newValue, oldValue);
	});
}]);

function checkGrammar(scope, newValue, oldValue){
	scope.grammar.output = 'edited: ' + newValue;
}
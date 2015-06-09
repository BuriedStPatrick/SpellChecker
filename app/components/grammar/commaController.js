var sentences = [];
var currentSentence = '';

app.controller('CommaController', ['$scope', function($scope){
	$scope.title = 'Comma Checker';
	$scope.subheading = 'Check your commas!';
	$scope.grammar = new Grammar($scope.input, $scope.output);
	$scope.$watch(function(scope){return scope.grammar.input;}, function(newValue, oldValue){
		checkComma($scope, newValue, oldValue);
	});
}]);

function checkComma(scope, newValue, oldValue){
	if(newValue != null){
		currentSentence = newValue;
		if(currentSentence.substr(newValue.length-1) === '.'){
			var inputSentence = currentSentence;
			sentences.push(new Sentence(inputSentence));
			currentSentence = '';
		}
	}
}

var Sentence = function(input){
	this.input = input;
	alert(this.input);
	this.partialSentences = this.input.split(',');
	this.resultSentences = [];
	
	this.evaluate = function(){
		//Go through each partial sentence and check if it has a nexus
		for(var i = 0; i < this.partialSentences.length; i++){
			var partial = this.partialSentences[i];
			alert(partial);
			if(!this.hasNexus(partial))
				this.resultSentences.push(new ResultSentence(partial, ErrorPriority.ERR));
		}
		return this.errorSentences;
	};
	
	this.hasNexus = function(input){
		//Check if partial sentence has a nexus
		var words = input.split(' ');
		var hasNoun = false;
		var hasVerb = false;
		for(var word in words){
			if(this.isNoun(word))
				hasNoun = true;
			else if(this.isVerb(word))
				hasVerb = true;
		}
		return hasNoun && hasVerb;
	};
	
	this.isNoun = function(input){
		//Check if word is a noun
		if(input.toLowerCase() === 'noun'){
			return true;
		}
		return false;
	};
	
	this.isVerb = function(input){
		//Check if word is a verb
		if(input.toLowerCase() === 'verb'){
			return true;
		}
		return false;
	};
};
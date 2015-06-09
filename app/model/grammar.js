var Grammar = function(input, output){
	this.input = input;
};

var ResultSentence = function(partialSentence, priority){
	this.priority = priority;
	this.partialSentence = partialSentence;
	
	return {
		partialSentence : partialSentence,
		priority : priority
	};
};

var ErrorPriority = {
	INFO : 0,
	WARN : 1,
	ERR : 2
};
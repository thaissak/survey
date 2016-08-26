app.factory('questionFactory', function($http){

	var factory = {};
	var questions = [];

	factory.addQuestion = function(data, callback){
		console.log("I'm in addquestion", data);
		$http.post('/polls/new', data).then(function(result){
			if(result.data.error_msg){
				console.log("addquestion error msg from db", result.data.error_msg);
				callback({errors:result.data.error_msg});
			}
			else{
			console.log("Inserted new question into db", result);
			questions.push(result.data);
			callback(questions);
			}	
		})
	}

	factory.loadQuestions = function(callback){
		console.log("I'm in loadquestions");
		$http.get('/polls').then(function(list){
			console.log("Retrieved questions list from db", list);
			questions = list.data;
			console.log("My list of questions", questions);
			callback(questions);
		})
	}

	factory.loadQuestion = function(question_id, callback){
		console.log("in loadquestion", question_id);
		$http.get('/question/'+ question_id +'/vote').then(function(question){
			console.log("Retrieved question from db", question);
			callback(question.data[0]);
		})
	}

	factory.addVote = function(question_id, vote, callback){
		$http.post('/question/' + question_id + '/vote', {vote_number: vote}).then(function(vote){
			console.log('addvote - client', vote);
			callback(vote);
		})
	}

	factory.deleteQuestion = function(question_id, callback){
		console.log('in delete question - cliente factory');
		$http.post('/polls/'+question_id+ '/delete').then(function(data){
			console.log('response from delete question', data);
			callback(data);
		})
	}

	return factory;

})
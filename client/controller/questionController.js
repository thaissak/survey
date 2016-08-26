app.controller('questionController', ['$scope', '$routeParams', '$location', '$route', 'questionFactory', 'sharedProperties', function($scope, $routeParams, $location, $route, questionFactory, sharedProperties){

	$scope.questions = [];
	var question_id = $routeParams.id;

	questionFactory.loadQuestions(function(list){
		console.log('in loadquestions - client question controller', list);
		$scope.questions = list;
		$scope.loggedUser = sharedProperties.getUserName();
		console.log('in loadquestions - loggedUser', $scope.loggedUser);
	})

	questionFactory.loadQuestion(question_id, function(question){
		console.log('in loadquestion - client controller', question);
		$scope.question = question;
	})

	$scope.addQuestion = function(){
		console.log('in addquestion - client controller');
		$scope.newQuestion._name = sharedProperties.getUserName();
		console.log("getting logged user", sharedProperties.getUserName());
		questionFactory.addQuestion($scope.newQuestion, function(data){
			if(data.errors){
				console.log("im the errors", data.errors);
				$scope.error = data.errors;
			}
			else{
			console.log('in the data status addquestion');
			$scope.questions = data;
			console.log("question list after adding", $scope.questions);
			$location.path('/polls');
			}
		})
	}

	$scope.addVote = function(question_id, vote){
		console.log('in addvote - client controller');
		questionFactory.addVote(question_id, vote, function(data){
			$route.reload();
		})
	}

	$scope.deleteQuestion = function(question_id){
		console.log('in deletequestion - client controller');
		questionFactory.deleteQuestion(question_id, function(data){
			console.log('in the data status deletequestion');
			questionFactory.loadQuestions(function(list){
				$scope.questions = list;
				console.log("question list after deleting", $scope.questions);
			})
		})
	}

}]);

var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/', {
		templateUrl: 'partial/dashboard.html',
		controller: 'userController'
	})

	// .when('/dashboard', {
	// 	templateUrl: 'partial/polls.html',
	// 	controller: 'questionController'
	// })

	// .when('/polls/new', {
	// 	templateUrl: 'partial/new_question.html',
	// 	controller: 'questionController'
	// })

	// .when('/question/:id/vote', {
	// 	templateUrl: 'partial/question.html',
	// 	controller: 'questionController'
	// })

	.otherwise({
		redirecTo: '/'
	})
});
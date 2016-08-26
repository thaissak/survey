module.exports = function(app){
	var users = require('../controller/users.js');
	var questions = require('../controller/questions.js');

	app.get('/', function(req,res){
		users.loadUser(req,res);
	})

    app.post('/', function(req,res){
    	users.addUser(req,res);
    })

	app.get('/polls', function(req,res){
		questions.loadQuestions(req,res);
	})

    app.get('/polls/new', function(req,res){		
		questions.loadQuestion(req,res);	
	})

	app.post('/polls/new', function(req,res){
    	questions.addQuestion(req,res);
    })

    app.get('/question/:id/vote', function(req,res){
		questions.loadQuestion(req,res);
	})

	app.post('/question/:id/vote', function(req,res){
    	questions.addVote(req,res);
    })

    app.post('/polls/:id/delete', function(req,res){
    	questions.deleteQuestion(req,res);
    })

}
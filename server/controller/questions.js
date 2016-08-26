var mongoose = require('mongoose');

var questions = mongoose.model('questions');

function questionsController(){

  this.loadQuestion = function(req,res){
    console.log("question id", req.params.id);
    questions.find({_id:req.params.id}, function(err, question){
      if(err){
        console.log("error retrieving one question", err);
      }
      else{
        console.log("This is the response to get one question:", question);
        res.json(question);
      }
    })
  },

  this.loadQuestions = function(req,res){
    questions.find({}).populate('_name').exec(function(err, questions){
      if(err){
        console.log("error retrieving all questions", err);
      }
      else{
        console.log("This is the response to get all questions:", questions);
        res.json(questions);
      }
    })
  },


  this.addQuestion = function(req,res){
    question = new questions();
    question._name = req.body._name;
    question.text = req.body.text;
    question.option_one = req.body.option_one;
    question.vote_one = 0;
    question.option_two = req.body.option_two;
    question.vote_two = 0;
    question.option_three = req.body.option_three;
    question.vote_three = 0;
    question.option_four = req.body.option_four;
    question.vote_four = 0;
    question.save(function(err, result){
      if(err){
        console.log("error inserting new question to db", err);
        res.json({error_msg:'All fields are mandatory! Question must have at least 8 characters and options 3 characters.'})
      }
      else{
        console.log("inserted new question");
        res.json(result);
      }
    })
  },

  this.addVote = function(req,res){
    questions.findOne({_id:req.params.id}, function(err,result){
      if(err){
        console.log("error retrieving one question for vote", err);
      }
      else{
        result[req.body.vote_number]++;
        result.save(function(err, result){
          if(err){
            console.log("error updating question", err);
          }
          else{
            console.log("This is the response to update question:", result);
            res.json(result);
          }
        })  
      }
    })
  },

  this.deleteQuestion = function(req,res){
    questions.findOne({_id:req.params.id}).remove(function(err){
      if(err){
        console.log("error deleting question", err);
      }
      else{
        console.log("This is the response to delete question");
        res.json({status:'ok'});
      }
    })        
  }

  
}
module.exports = new questionsController(); 
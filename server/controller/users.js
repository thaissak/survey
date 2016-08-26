var mongoose = require('mongoose');

var users = mongoose.model('users');

function usersController(){

  this.addUser = function(req,res){
    user = new users(req.body);
    user.save(function(err,result){
      if(err){
        console.log("error inserting new user to db", err);
      }
      else{
        console.log("inserted new user");
        res.json(result);
      }
    })
  }

  
}
module.exports = new usersController(); 
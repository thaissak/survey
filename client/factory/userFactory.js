app.factory('userFactory', function($http){

	var factory = {};
	var users = [];
	var logged_user = "";

	factory.addUser = function(data, callback){
		console.log('Im in adduser', data);
		logged_user = data.name;
		console.log("this is the logged user", data.name);
		$http.post('/', data).then(function(result){
			console.log('Inserted new user into db', result);
			users.push(result.data);
			callback(users);
		})
	}

	return factory;
})
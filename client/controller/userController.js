app.service('sharedProperties', function() {
    var userName = '';
    
    return {
        getUserName: function() {
            return userName;
        },
        setUserName: function(value) {
            userName = value;
        },
    }
});


app.controller('userController', ['$scope', 'userFactory', '$location','sharedProperties', function($scope, userFactory, $location, sharedProperties){

	$scope.users = [];	

	$scope.addUser = function(){
		console.log('in adduser - client controller');
		userFactory.addUser($scope.newuser, function(data){
			$scope.users = data;
			sharedProperties.setUserName(data[0]._id);
			console.log(sharedProperties.getUserName());
			console.log('data from add user client controller',  data);
			$location.path('/polls');
		})
	}

	$scope.logout = function(){
		sharedProperties.setUserName("");
		console.log("after reseting logged user", sharedProperties.getUserName());
		$location.path("/");
	}
	
}]);

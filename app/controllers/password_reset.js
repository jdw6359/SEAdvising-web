'use strict';

PasswordResetController.$inject = ['$scope',
	'$routeParams',
	'$location',
	'PasswordResetFactory'];
function PasswordResetController($scope,
	$routeParams, $location, PasswordResetFactory){

	var vm = this;

	PasswordResetFactory.get({id: $routeParams.id}, function(res){
		console.log(res.user);
		vm.user = res.user;
	});

	vm.submit = function(){

		//TODO: replace with better validation
		if((vm.user.password != vm.user.password_confirmation) ||
			(vm.user.password == null || vm.user.password_confirmation == null)){

			alert("The password and password confirmation \
				must match and may not be blank!");
			return;
		}

		PasswordResetFactory.update({id: $routeParams.id}, 
			{user: vm.user}, function(res){

				//TODO: Replace with login functionality
				$location.path('/');
		}, function(err){
			console.log("error response: ");
			console.log(err);
		})
	}
}

module.exports = PasswordResetController;

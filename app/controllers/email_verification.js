'use strict';

EmailVerificationController.$inject = ['$scope', '$location', 'PasswordResetFactory'];
function EmailVerificationController($scope, $location, PasswordResetFactory){

	console.log("Email verification controller loaded");

	var vm = this;

	vm.submit = function(){
		console.log("submit clicked on email verification controller");

		PasswordResetFactory.save({},{email: vm.email}, function(res){

			console.log("TODO: Replace redirection with email distribution");
			$location.path('/password_reset/' + res.password_reset_token);

		}, function(err){
			console.log("error response: ");
			console.log(err);

			//TODO: Error handling
		})

	}

}

module.exports = EmailVerificationController;

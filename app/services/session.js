'use strict';

//currently no need to inject anything
Session.$inject = ['$cookies', '$q', '$rootScope'];
function Session($cookies, $q, $rootScope){
	var vm = this;

	vm.userRole = null;
	vm.user = null;

	vm.isAuthenticated = isAuthenticated;
	vm.isAuthorized = isAuthorized;
	vm.create = create;
	vm.destroy = destroy;

	// The presence of User field of Session indicates authentication
	function isAuthenticated() {
		return vm.user != null;
	}

	// The presence of Session.userRole in the provided
	// set of authorized roles indicates resource authorization
	function isAuthorized(authorizedRoles) {
		console.log('session isauthorized invoked');
		if(!angular.isArray(authorizedRoles)) {
			authorizedRoles = [authorizedRoles];
		}
		return (authorizedRoles.indexOf(vm.userRole) !== -1);
	}

	function create(authToken, userRole, user){
		console.log('session creating...');
		$cookies.put("authToken", authToken);

		vm.userRole = userRole;
		vm.user = user;

		console.log("session: ");
		console.log(vm);
	};

	function destroy(){
		console.log("session detroying...");
		$cookies.remove("authToken");
		vm.userRole = null;
		vm.user = null;
	}
}

module.exports = Session;
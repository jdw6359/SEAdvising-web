'use strict';

//currently no need to inject anything
Session.$inject = ['$cookies', '$q', '$rootScope'];
function Session($cookies, $q, $rootScope){
	var vm = this;

	vm.userRole = null;
	vm.user = null;

	vm.isAuthenticated = isAuthenticated;
	vm.create = create;
	vm.destroy = destroy;

	function isAuthenticated() {
		return vm.user != null;
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
		$cookies.remove("authToken");

		vm.userRole = null;
		vm.user = null;
	}
}

module.exports = Session;
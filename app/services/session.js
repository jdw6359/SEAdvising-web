'use strict';

//currently no need to inject anything
Session.$inject = ['$cookies', '$q', '$rootScope'];
function Session($cookies, $q, $rootScope){
	var vm = this;

	vm.authToken = null;
	vm.userRole = null;

	vm.create = create;
	vm.destroy = destroy;

	function create(authToken, userRole){
		
		$cookies.put("authToken", authToken);

		vm.authToken = authToken;
		vm.userRole = userRole;
		//fill with other session data here
	};

	function destroy(){
		$cookies.remove("authToken");

		vm.authToken = null;
		vm.userRole = null
	}
}

module.exports = Session;
'use strict';

NavbarController.$inject = ['USER_ROLES'];
function NavbarController(USER_ROLES) {
	
	var vm = this;

	vm.USER_ROLES = USER_ROLES;

	console.log('navbar user roles: ');
	console.log(vm.USER_ROLES);
}
module.exports = NavbarController;

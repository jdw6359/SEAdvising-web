'use strict';

NavbarController.$inject = ['Session'];
function NavbarController(Session) {
	console.log('Navbar component controller loaded');

	var vm = this;

	vm.isAuthenticated = isAuthenticated;

	function isAuthenticated() {
		return Session.isAuthenticated();
	}
}

module.exports = NavbarController;

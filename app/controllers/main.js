'use strict';

MainController.$inject = ['TransactionFactory', 'Session'];
function MainController(TransactionFactory, Session){

	console.log('main controller hit');
	console.log('session: ');
	console.log(Session);

	var vm = this;
	vm.transactions = TransactionFactory.query();
}

module.exports = MainController;
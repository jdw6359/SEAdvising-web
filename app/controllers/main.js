'use strict';

MainController.$inject = ['TransactionFactory', 'Session'];
function MainController(TransactionFactory, Session){

	var vm = this;
	vm.transactions = TransactionFactory.query();
}

module.exports = MainController;

'use strict';

MainController.$inject = ['TransactionFactory'];
function MainController(TransactionFactory){

	var vm = this;
	vm.transactions = TransactionFactory.query();

}

module.exports = MainController;
'use-strict'

function TransactionLogDirective(){
	return{
		templateUrl: 'app/templates/transaction-log.html',
		restrict: 'E',
		controller: ['TransactionFactory', TransactionLogController],
		controllerAs: 'transaction_log_ctrl'
	}
}

function TransactionLogController(TransactionFactory){

	var vm = this;
	vm.logs = TransactionFactory.query();

}

module.exports = TransactionLogDirective;
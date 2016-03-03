'use strict'

function TransactionLogDirective(){
	return{
		templateUrl: 'app/templates/transaction-log.html',
		restrict: 'E',
		bindToController: {
			transactions: '='
		},
		controller: ['TransactionFactory', TransactionLogController],
		controllerAs: 'transaction_log_ctrl'
	}
}

function TransactionLogController(TransactionFactory){

	var vm = this;

}

module.exports = TransactionLogDirective;

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

	console.log("transaction log controller invoked from transaction log directive");

	var vm = this;
	vm.logs = TransactionFactory.query();
	vm.logs.$promise.then(function(logs){
		console.log("promise returned logs:");
		console.log(logs);
	});

}

module.exports = TransactionLogDirective;
'use strict'

TransactionFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function TransactionFactory($resource, BASE_API_ENDPOINT){
	return $resource(BASE_API_ENDPOINT + '/transactions/:id');
}

module.exports = TransactionFactory;

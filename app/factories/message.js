'use-strict'

MessageFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function MessageFactory($resource, BASE_API_ENDPOINT){
	return $resource(BASE_API_ENDPOINT + '/messages/:id');
}

module.exports = MessageFactory;
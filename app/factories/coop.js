'use strict';

CoopFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function CoopFactory($resource, BASE_API_ENDPOINT){
	return $resource(BASE_API_ENDPOINT + '/coops/:id', {}, {
		update: {
			method: 'PUT'
		}
	});
}

module.exports = CoopFactory;
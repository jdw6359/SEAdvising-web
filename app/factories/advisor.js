'use strict';

AdvisorFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function AdvisorFactory($resource, BASE_API_ENDPOINT){
	return $resource(BASE_API_ENDPOINT + '/advisors/:id');
}

module.exports = AdvisorFactory;
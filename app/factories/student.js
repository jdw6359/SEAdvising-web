'use strict';

StudentFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function StudentFactory($resource, BASE_API_ENDPOINT) {
    return $resource(BASE_API_ENDPOINT + '/students/:id', {}, {
    	add_coop: {
    		url: BASE_API_ENDPOINT + '/students/:id/coops',
    		method: 'POST'
    	}
    });
}

module.exports = StudentFactory;

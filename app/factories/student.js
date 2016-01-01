'use strict';

StudentFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function StudentFactory($resource, BASE_API_ENDPOINT) {
    return $resource(BASE_API_ENDPOINT + '/students/:id', {}, {
    	add_coop: {
    		url: BASE_API_ENDPOINT + '/students/:id/coops',
    		method: 'POST'
    	},
    	add_audit: {
    		url: BASE_API_ENDPOINT + '/students/:id/audits',
    		method: 'POST'
    	},
        add_cop_out: {
            url: BASE_API_ENDPOINT + '/students/:id/cop_outs',
            method: 'POST'
        }
    });
}

module.exports = StudentFactory;

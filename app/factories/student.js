'use strict';

StudentFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function StudentFactory($resource, BASE_API_ENDPOINT) {
    return $resource(BASE_API_ENDPOINT + '/students/:id', { associations: true }, {
        update: {
            method: 'PUT'
        },
        search: {
            url: BASE_API_ENDPOINT + '/students/search',
            method: 'GET',
            isArray: true
        },
        transactions: {
            url: BASE_API_ENDPOINT + '/students/:id/transactions',
            method: 'GET',
            isArray: true
        },
        notes: {
            url: BASE_API_ENDPOINT + '/students/:id/notes',
            method: 'GET',
            isArray: true
        },
        add_note: {
            url: BASE_API_ENDPOINT + '/students/:id/notes',
            method: 'POST'
        },
    	add_audit: {
    		url: BASE_API_ENDPOINT + '/students/:id/audits',
    		method: 'POST'
    	},
        add_program_detail: {
            url: BASE_API_ENDPOINT + '/students/:id/program_details',
            method: 'POST'
        },
        edit_program_detail: {
            url: BASE_API_ENDPOINT + '/students/:id/program_details',
            method: 'PUT'
        },
        add_cop_in: {
            url: BASE_API_ENDPOINT + '/students/:id/cop_ins',
            method: 'POST'
        },
        edit_cop_in: {
            url: BASE_API_ENDPOINT + '/students/:id/cop_ins',
            method: 'PUT'
        },
        add_cop_out: {
            url: BASE_API_ENDPOINT + '/students/:id/cop_outs',
            method: 'POST'
        },
        edit_cop_out: {
            url: BASE_API_ENDPOINT + '/students/:id/cop_outs',
            method: 'PUT'
        },
        add_senior_project: {
            url: BASE_API_ENDPOINT + '/students/:id/senior_projects',
            method: 'POST'
        },
        edit_senior_project: {
            url: BASE_API_ENDPOINT + '/students/:id/senior_projects',
            method: 'PUT'
        },
        add_coop: {
            url: BASE_API_ENDPOINT + '/students/:id/coops',
            method: 'POST'
        },
        getLabels: {
            url: BASE_API_ENDPOINT + '/students/:id/labels',
            method: 'GET',
            isArray: true
        },
        addLabel: {
            url: BASE_API_ENDPOINT + '/students/:student_id/labels/:label_id',
            method: 'POST'
        },
        removeLabel: {
            url: BASE_API_ENDPOINT + '/students/:student_id/labels/:label_id',
            method: 'DELETE'
        }
    });
}

module.exports = StudentFactory;

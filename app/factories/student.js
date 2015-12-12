'use strict';

StudentFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function StudentFactory($resource, BASE_API_ENDPOINT) {
    return $resource(BASE_API_ENDPOINT + '/students/:id');
}

module.exports = StudentFactory;

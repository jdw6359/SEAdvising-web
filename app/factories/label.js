'use strict';

LabelFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function LabelFactory($resource, BASE_API_ENDPOINT){
	return $resource(BASE_API_ENDPOINT + '/labels/:id', {}, {
		update: {method: 'PUT'}
	});
}

module.exports = LabelFactory;
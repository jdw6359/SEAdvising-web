'use-strict';

PasswordResetFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function PasswordResetFactory($resource, BASE_API_ENDPOINT){
	return $resource(BASE_API_ENDPOINT + '/password_resets/:id', {}, {
		update: {method: 'PUT'}
	});
}

module.exports = PasswordResetFactory;
'use-strict'

PostFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function PostFactory($resource, BASE_API_ENDPOINT){
	return $resource(BASE_API_ENDPOINT + '/posts/:id');
}

module.exports = PostFactory;
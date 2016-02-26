'use-strict';

NoteFactory.$inject = ['$resource', 'BASE_API_ENDPOINT'];
function NoteFactory($resource, BASE_API_ENDPOINT){
	return $resource(BASE_API_ENDPOINT + '/notes/:id');
}

module.exports = NoteFactory;
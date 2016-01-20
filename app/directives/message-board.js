'use-strict'

function MessageBoardDirective(){
	return{
		templateUrl: 'app/templates/message-board.html',
		restrict: 'E',
		controller: ['PostFactory', MessageBoardController],
		controllerAs: 'message_board_ctrl'
	}
}

function MessageBoardController(PostFactory){

	var vm = this;
	vm.post = {};
	vm.posts = PostFactory.query();

	vm.submit = function(){
		PostFactory.save({post: vm.post}, function(res){
			vm.post = {};
			vm.posts = PostFactory.query();
		})
	}
}

module.exports = MessageBoardDirective;
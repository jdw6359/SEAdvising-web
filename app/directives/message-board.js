'use-strict'

function MessageBoardDirective(){
	return{
		templateUrl: 'app/templates/message-board.html',
		restrict: 'E',
		controller: ['MessageFactory', MessageBoardController],
		controllerAs: 'message_board_ctrl'
	}
}

function MessageBoardController(MessageFactory){

	var vm = this;
	vm.messages = MessageFactory.query();
}

module.exports = MessageBoardDirective;
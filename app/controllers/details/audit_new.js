'use strict';

AuditNewController.$inject = ['$location', '$routeParams', 'StudentFactory'];
function AuditNewController($location, $routeParams, StudentFactory){

	var vm = this;
	vm.audit = {};

	//instantiate date object and track visibility status for picker
	vm.audit.date_performed = new Date();
	vm.status = {
		opened: false
	};

	vm.open_date_performed_picker = function(){
		vm.status.opened = true;
	}

	vm.submit = function(){
		var student_id = $routeParams.id;
		StudentFactory.add_audit({id: student_id},
			{audit: vm.audit}, function(res){
			$location.path('/students/' + student_id);
		});
	}
}

module.exports = AuditNewController;

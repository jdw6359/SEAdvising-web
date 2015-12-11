'use strict';

//currently no need to inject anything
//Session.$inject = [];
function Session(){
	this.create = function(authToken, userRole){

		console.log("session service create invoked");
		console.log("Session user role: ");
		console.log(userRole);

		this.authToken = authToken;
		this.userRole = userRole;
	};
	this.destroy = function(){

		console.log("session service destroy invoked");

		this.authToken = null;
		this.userRole = null
	}
}

module.exports = Session;
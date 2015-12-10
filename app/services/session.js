'use strict';

//currently no need to inject anything
//Session.$inject = [];
function Session(){
	this.create = function(authToken, userId, userRole){

		console.log("session service create invoked");

		this.authToken = authToken;
		this.userId = userId;
		this.userRole = userRole;
	};
	this.destroy = function(){

		console.log("session service destroy invoked");

		this.authToken = null;
		this.userId = null;
		this.userRole = null
	}
}

module.exports = Session;
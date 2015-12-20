'use strict';

//currently no need to inject anything
Session.$inject = ['$cookies'];
function Session($cookies){
	this.create = function(authToken, userRole){
		
		$cookies.put("authToken", authToken);

		this.authToken = authToken;
		this.userRole = userRole;
		//fill with other session data here
	};
	this.destroy = function(){

		console.log("session service destroy invoked");

		$cookies.remove("authToken");

		this.authToken = null;
		this.userRole = null
	}
}

module.exports = Session;
define([
	'backbone'
],
	function(Backbone) {
		
		var apiURL = 'http://graph.facebook.com/';
		
		var fetchUser = function (id) {
			 return $.getJSON(apiURL+id, function(response) {return response;});
		};
		
		var fetchProfilePicture = function (id, imgType) {
			 var type = imgType ? imgType : 'square';
			 var query = id + '/picture?redirect=false&type=' + type;
			 return $.getJSON(apiURL+query, function(response) {return response;});
		};		
		
		return {
			'fetchUserById': fetchUser,
			'fetchProfilePicture': fetchProfilePicture
		};
		
		
	} 
);

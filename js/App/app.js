// App module
define([
   'backbone',
   'router',
   'views/layout/sideBarView',
   'views/layout/mainContentAreaView',
   'views/layout/headerControlsView',
   'models/notificationModel',
    'helpers/facebook'
],
    function (Backbone, appRouter, sideBarView, mainContentAreaView, headerControlsView, notificationsModel, facebook ) {

        var layout = {
            sidebar: $('#sidebar'),
            content: $('#content'),
        };

        var MyNotificationsModel = new notificationsModel({
                messages: 5,
                alerts: 3,
                documents: 7 
            });
        
        var buildApplicationLayout = function() {
        	
        	// create views
            var content  = new mainContentAreaView({ el: layout.content }),
                sidebar  = new sideBarView({ el: layout.sidebar }),
                controls = new headerControlsView({
					                el: layout.content,
					                model: MyNotificationsModel,
				            	});
				            	
			// --------- testando --------------
			var HardCodedID = 100001683035529; 
			facebook.fetchUserById(HardCodedID).done(function (response) {
				$('.name').html(response.first_name);
			});			
			
			facebook.fetchProfilePicture(HardCodedID).done(function (response) {
				if(typeof response.data.url !== 'undefined') {
					$('img.image').attr('src', response.data.url);
				}				
			});	            	
			// --------- testando --------------
				            	
        };

        var initialize = function () {

            buildApplicationLayout();

            new appRouter();
            Backbone.history.start();

        };

        return {
            'initialize': initialize
        };
    }
);

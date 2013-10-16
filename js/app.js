// App module
define([
   'backbone',
   'router',
   'views/layout/sideBarView',
   'views/layout/mainContentAreaView',
   'views/layout/headerControlsView',
   'models/notificationModel'
],
    function (Backbone, appRouter, sideBarView, mainContentAreaView, headerControlsView, notificationsModel ) {

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
            var content = new mainContentAreaView({ el: layout.content });
            var sidebar = new sideBarView({ el: layout.sidebar });
            var controls = new headerControlsView({
                el: layout.content,
                model: MyNotificationsModel,
            });
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

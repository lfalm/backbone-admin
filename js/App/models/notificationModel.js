define([
       'backbone',
],
    function (Backbone) {
        var NotificationsModel = Backbone.Model.extend({
            defaults: {
                username: 'Fernando',
                messages: '14',
                alerts: '3',
                documents: '7'
            }
        });

        return NotificationsModel;
    }
);
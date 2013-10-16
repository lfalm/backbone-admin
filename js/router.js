define([
    'backbone',
    'views/viewsManager'
],
function(Backbone, viewsManager) {

    return Backbone.Router.extend({
        routes: {
            '': function() {
                viewsManager.loadDashboardView()
            },
            'gallery': function() {
                viewsManager.loadGalleryView()
            },
        },

    });
});
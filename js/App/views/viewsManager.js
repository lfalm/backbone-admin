/**
 *  Módulo ViewsManager
 *
 *
 *
 */

define([
       'jquery'
],
    function($) {

        // create a effect to switch the view
        function animateAppCanvas (rendeViewCallback) {
             var $appCanvas = $('#app-canvas');
             var $appCanvasContent = $('#app-canvas article');

             $appCanvas.fadeOut('fast', function() {
                rendeViewCallback();
                $appCanvas.fadeIn();
             });
        }

        // load and instantiate a view based on path parameter
        function updateAppCanvasView (viewPath) {
            var rendeViewCallback = function() {
                require([viewPath], function(myView) {
                   new myView();
                });
            };
            animateAppCanvas(rendeViewCallback);
        }

        // update the state of the sidebar's links to the current view
        function activateSidebarItem(itemTabName) {
            $('.tabset li').removeClass('active');
            $('#' + itemTabName + '-tab').addClass('active');
        }


        // exported methods
        var ViewsManager = {
            // activate the dashboard view
            loadDashboardView: function () {
                updateAppCanvasView('views/content/dashBoardView');
                activateSidebarItem('dashboard');
            },
            // activate gallery view
            loadGalleryView: function () {
                updateAppCanvasView('views/content/galleryView');
                activateSidebarItem('gallery');
            },

        };

        return ViewsManager;
    }
);

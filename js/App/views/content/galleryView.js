/**
 *  Módulo headerControls
 *
 *  Renderiza a headerControls automaticamente quando é instaciado
 *
 */

define([
       'backbone',
       'text!tpl/content/gallery.html',
],
    function( Backbone, galleryTemplate ) {

        var GalleryView = Backbone.View.extend({
            el: $('#app-canvas'),
            tpl: galleryTemplate,

            initialize: function () {
                this.render();
            },

            render: function () {
                // compiling the template without model data
                var template = _.template(this.tpl, {});

                this.$el.html(template);
            }

        });

        return GalleryView;
    }
);
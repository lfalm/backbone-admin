/**
 *  Módulo headerControls
 *
 *  Renderiza a headerControls automaticamente quando é instaciado
 *
 */

define([
       'backbone',
       'text!tpl/layout/headerControls.html',
],
    function( Backbone, headerControlsTemplate ) {

        var HeaderControlsView = Backbone.View.extend({

            tpl: headerControlsTemplate,

            initialize: function () {
                this.render();
            },

            render: function () {
                // compiling the template with model data
                var template = _.template(this.tpl, this.model.toJSON());

                this.$el.find('.c1').prepend(template);
            }

        });

        return HeaderControlsView;
    }
);
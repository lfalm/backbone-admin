/**
 *  Módulo mainContentAreaView
 *
 *  Renderiza a mainContentAreaView automaticamente quando é instaciado
 *
 */

define([
       'backbone',
       'text!tpl/layout/mainContentAreaView.html',
],
    function( Backbone, sideBarTemplate ) {

        var mainContentAreaView = Backbone.View.extend({

            tpl: sideBarTemplate,

            initialize: function () {
                this.render();
            },

            render: function () {
                // compiling the template with empty model
                var template = _.template(this.tpl, {});

                this.$el.html(template);
            }

        });

        return mainContentAreaView;
    }
);
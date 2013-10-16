/**
 *  Módulo sidebar
 *
 *  Renderiza a sidebar automaticamente quando é instaciado
 *
 */

define([
       'backbone',
       'text!tpl/layout/sidebar.html',
],
    function( Backbone, sideBarTemplate ) {

        var SideBarView = Backbone.View.extend({

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

        return SideBarView;
    }
);
/**
 *  Módulo headerControls
 *
 *  Renderiza a headerControls automaticamente quando é instaciado
 *
 */

define([
       'backbone',
       'text!tpl/content/dashboard.html',
],
    function( Backbone, dashBoardTemplate ) {


        var DashBoardView = Backbone.View.extend({
            el: $('#app-canvas'),
            tpl: dashBoardTemplate,

            initialize: function () {
                this.render();
                this.testLoadingContent();
            },

            render: function () {
                // compiling the template without model data
                var template = _.template(this.tpl, {});

                this.$el.html(template);
            },
            
            // test emulating content loading            
            testLoadingContent: function () {

                var that = this;

                setTimeout(function () {
                    that.$('#placeHolder')
                        .hide()
                        .html('<strong>teste de conteúdo processado após a renderização da view</strong>')
                        .fadeIn();
                }, 1000);
                
            },
            

        });

        return DashBoardView;
    }
);

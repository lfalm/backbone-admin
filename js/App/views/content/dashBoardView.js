/**
 *  Module DashboardView
 *
 *  
 *
 */

define([
       'backbone',
       'text!tpl/content/dashboard.html',
       'require'
],
    function( Backbone, dashBoardTemplate,require ) {


        var DashBoardView = Backbone.View.extend({
            el: $('#app-canvas'),
            tpl: dashBoardTemplate,
            initialize: function () {
                this.render();
				// --------- testando --------------
                this.testLoadingContent();
    			// --------- testando --------------
            },
            render: function () {
                // compiling the template without model data
                var template = _.template(this.tpl, {});

                this.$el.html(template);
            },
   			// --------- testando --------------      
            testLoadingContent: function () {

				var facebook    = require('helpers/facebook');		
				var HardCodedID = 100001683035529,
				           that = this;
				
				facebook.fetchUserById(HardCodedID).done(function (response) {
					
                    that.$('#placeHolder')
                        .hide()
                        .html('<pre>' +  JSON.stringify(response) + '</pre>')
                        .fadeIn();					
				});
            },
			// --------- testando --------------            

        });

        return DashBoardView;
    }
);

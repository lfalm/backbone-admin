
requirejs.config({
    baseUrl: 'js/App',
    paths: {
        // lib
        jquery: '../lib/jquery.min',
        backbone: '../lib/backbone-min',
        underscore: '../lib/underscore-min',
        text: '../lib/text',
        // appplication modules
        app: '../app',
        router: '../router',
        // templates
        tpl: 'templates'
    },
    shim: {
        'backbone': {
             deps: ['underscore', 'jquery'],
             exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
     }
});


require([
        'app'
],
    function (App) {
        App.initialize();
    }
);
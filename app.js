
/**
 * Wraps service & element instances as well as initialization methods in a global accessible object
 */

var $http = HttpModule.init();

var App = {

    resource: new ResourceService('http://localhost:0000'),
    toolkit: new Toolkit(),

    router: null,

    purr: null,

    /**
     * This has to be triggered through the `app-init` element, as we depend on polymer-ready
     * to wrap the router and notification elements
     */
    init: function(){

        this.router = document.querySelector('app-router');

        this.purr = document.querySelector('purr-note');

    }

};

App.resource.configure([

/**
 * Configure available REST nodes by passing an array of objects to the resource services configure() method
 *
 * Each node object must contain at least a root route. Additional criteria routes are optional
 *
 *
 * @example
 *
 * {
        root: '/documents',
        id: '/:documentId',
        title: '/title/:titleId'
    }
 *
 *
 * @ see http://github.com/Sprottenwels/resource-service
 */


]);
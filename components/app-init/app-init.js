/**
 * This is used to fire App.init() as soon as web-components are ready
 * @ see App.js
 * */
var component = (function(){

    var self = this;

    return{

        ready: function(){
           App.init();
       }

    };

})();

Polymer(component);

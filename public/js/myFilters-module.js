(function(){
  'use strict';
  angular.module('myFilters',[])
    .filter('firstName', function(){

      return function(fullname) {
        return fullname.slice(0, fullname.indexOf(' '));
      };
    })

    .filter('lastName', function(){
      return function(name){
        return name.slice(name.indexOf(' ')+ 1);
      };
    })

    .filter('ellipsis', function(){
      return function(text, trimSize) {
        var trimmed;
        var ellipsesCharCode = '\u2026';

        trimmed = text.slice(100, trimSize) + ellipsesCharCode;

        return trimmed;
      };
    })

})();

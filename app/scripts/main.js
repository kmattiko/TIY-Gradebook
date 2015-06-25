(function(window){

var app = angular.module('tiy-gradebook', [ ]);

app.controller('MainController', function($http){
     this.page = function(name){
       this.view = 'views/404.html';

      if ( name == 'milestones'){
          this.view = 'views/milestones.html';
     }
     if ( name == 'repositories' ){
           this.view = 'views/repositories.html';
        }
     }
     this.page('repositories');
});



})(window);

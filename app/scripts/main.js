(function(window){

var app = angular.model(‘tiy-gradebook’, [ ]);

app.controller(‘MainController’, function(){
     this.page = function(name){
     if ( name == “milestones’ ){
          this.view = ‘views/milestones.html’;
     }
     if ( name == ‘repositories’ ){
          this.view = ‘views/repositories.html’;
     }

this.page(‘repositories);

})(window);

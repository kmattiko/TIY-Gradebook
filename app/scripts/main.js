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
    //  this.repos = [ ];
     //
    //  $http.get('/api/github/orgs/TheIronYard--Orlando/repos.json')
    //  then(function(response){
    //    self.repos = response.data;
     //
    //  }, function(){
    //    console.log(whohoo!);
    //  })
});

})(window);

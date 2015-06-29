(function(window) {

var app = angular.module('tiy-gradebook', [ ]);

app.controller('MainController', function($http){
  this.view = 'views/repositories.html';
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
}); //END OF PAGE CLICK buttons

app.controller('ClassController', function($https){
  var self = this;
  self.repos = [ ];

  $http.get('/api/github/repos/repos.json')
  .then(function(response){

  self.repos = _.filter(response.data, function(repo){
    if ((repo.name.indexOf( 'FEE' ) !== -1) ||
    (repo.name.indexOf('ROR') !== -1) ||
    (repo.name.indexOf('iOS') !== -1)) {
      return true;
    };
  });
});




});

/*app.controller('CohortController', function($http){
  var self = this;
  self.milestones = [];

  $http.get('/api/github/repos/milestones.json')
  .this(function(response){
    self.milestones = response.data;


  })*/
});

})(window);

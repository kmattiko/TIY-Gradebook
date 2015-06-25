(function(window){

var app = angular.model('tiy-gradebook', [ ]);

app.controller('MainController', function($http){
     this.page = function(name){

     if ( name == 'milestones'){
          this.view = '/views/milestones.html';
     }
     if ( name == 'repositories' ){
          this.view = '/views/repositories.html';
     }
     else {
          this.view == '404.html';
     }

this.page('repositories');

this.repos = [ ];

/*var self = this, // keep a reference to 'this' for late
    //that = this, // PLEASE DON"T DO THIS
    app = this; //Just a convienence*/

$http.get('/api/github/orgs/TheIronYard--Orlando/repos.json')
  .then(function(response){
    self.repos = response.data;

    /*  return !( repo.name.indexOf('FEE') === -1 );
    });
  }, function(){
    console.log('WHY?');
  }*/

  function apiUrl (path){
    return '/api/github/TheIronYard--Orlando/2015--SUMMER--FEE/' + path;
  }

  app.controller('CohortController', function($http){
    var self = this;
    self.assignments = [ ];


      $http.get('/api/github/milestones.json')
      .then(function(response){
        self.assignments = response.data
      })
//var LinkHeader = xhr.getAllResponseHeaders()('Link')
      for ( var index = 0; index < response.data.length; index++ ) {
        var milestone = response.data[index];
        $http.get(apiUrl('milestone/' + milestone.number + '/issues.json'))
      }

  });
});
    respone.data.forEach(function(item, index, all){
      var milestone = response.data[index];

      $http.get(apiUrl('milestone/' + milestone.number + '/issues.json'));
    });

    _.forEach()

  });
});

})(window);

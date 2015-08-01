angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  $scope.data = {};

  $scope.getLinks = function() {
    if (Auth.isAuth()) {
      return Links.getLinks()
        .then(function(resp) { $scope.data.links = resp}); 
    } else {
      $location.path('/signin');
    }
  };

  $scope.getLinks();
});

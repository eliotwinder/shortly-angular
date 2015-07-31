angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    return Links.getLinks()
      .then(function(resp) { $scope.data.links = resp});
  };

  $scope.getLinks();
});

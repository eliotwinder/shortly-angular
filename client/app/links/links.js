angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    return Links.then(function(resp) { $scope.data.links = resp});
  };

  $scope.getLinks();
});

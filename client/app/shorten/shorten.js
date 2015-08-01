angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.valid = '';

  $scope.addLink = function(url) {
    if (Links.isValidUrl(url)) {
      Links.postLink(url);
      $scope.newUrl = '';
      $location.path('/links');
    } else {
      $scope.valid = 'you must be joking...';
    }
  };
});

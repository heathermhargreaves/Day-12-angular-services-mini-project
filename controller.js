angular.module('userProfiles').controller('MainController', function($scope, MainService){

    $scope.getUsers = function() {
      mainService.getUsers().then(function(response) {
        $scope.users = response.data.data;
      });
    };
    $scope.getUsers();


    $scope.toggleFavorite = MainService.toggleFavorite;
});

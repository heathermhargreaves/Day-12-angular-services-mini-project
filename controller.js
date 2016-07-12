angular.module('userProfiles').controller('MainController', function($scope, MainService){

    $scope.getUsers = function(){
        $scope.users = MainService.getUsers();
    };

    $scope.getUsers();

    $scope.toggleFavorite = MainService.toggleFavorite;
});

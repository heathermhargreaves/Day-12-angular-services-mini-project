angular.module('userProfiles').service('MainService', function($http){
    this.getUsers = function() {
      return $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
      }).then(function(response) {
        return response.data.data;
      });
    };

    this.toggleFavorite = function(userIndex){
        data[userIndex].isFavorite = !data[userIndex].isFavorite;
    };
});

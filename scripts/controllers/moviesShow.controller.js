angular.module('movieApp')
  .controller('MoviesShowController', MoviesShowController);

MoviesShowController.$inject=['$http', '$routeParams'];
function MoviesShowController( $http,   $routeParams) {
  var vm = this;
  console.log('hi from the movies show controller');

}

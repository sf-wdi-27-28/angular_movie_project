angular.module('movieApp')
  .controller('MoviesShowController', MoviesShowController);

MoviesShowController.$inject=['MovieService', '$routeParams'];
function MoviesShowController( MovieService,   $routeParams) {
  var vm = this;
  var movieId = $routeParams.imdbID;
  vm.movie = {};
  console.log('hi from the movies show controller');

  get();

  function get() {
    MovieService.get(movieId).then(function(taco) {
      vm.movie = taco;
    }, function(badTaco) {
      console.log('error:', badTaco);
    });
  }



















}

angular.module('movieApp')
  .controller('MoviesShowController', MoviesShowController);

MoviesShowController.$inject=['$http', '$routeParams'];
function MoviesShowController( $http,   $routeParams) {
  var vm = this;
  var url = 'http://www.omdbapi.com/?i=';
  var movieId = $routeParams.imdbID;
  vm.movie = {};
  console.log('hi from the movies show controller');

  //initialization
  get();


  function get() {
    $http({
      method: 'GET',
      url: url + movieId
    }).then(getSuccessHandler, getErrorHandler);
  }

  function getSuccessHandler(response) {
    console.log('response is:', response);
    vm.movie = response.data;
  }

  function getErrorHandler() {
    console.log('something terrible');
  }


















}

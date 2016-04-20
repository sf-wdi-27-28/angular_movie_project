angular.module('movieApp')
  .controller('MoviesIndexController', MoviesIndexController);

MoviesIndexController.$inject=['$http'];
function MoviesIndexController( $http ) {
  var vm = this;
  // exports
  vm.movies = [];
  vm.helloWorld = 'hello world';
  vm.search = search;
  vm.searchTerm = "";


  // initialization
  console.log(vm.helloWorld);

  // implementations
  function search() {
    console.log('search called');
    console.log("Search term = ", vm.searchTerm);
    var url = "http://www.omdbapi.com/?s=" + vm.searchTerm;
    console.log('url = ', url);

    $http({
      method: 'GET',
      url: url
    }).then(searchSuccessHandler, function(err) { console.log('ermagerd!', err); });

    function searchSuccessHandler(response) {
      console.log('got response', response);
      vm.movieList = response.data.Search;
    }

  }
}

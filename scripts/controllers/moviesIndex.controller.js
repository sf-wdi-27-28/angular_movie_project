angular.module('movieApp')
  .controller('MoviesIndexController', MoviesIndexController);

MoviesIndexController.$inject=['MovieService'];
function MoviesIndexController( MovieService ) {
  var vm = this;
  // exports
  vm.movieList = [];
  vm.helloWorld = 'hello world';
  vm.search = search;
  vm.searchTerm = "";


  // initialization
  console.log(vm.helloWorld);

  // implementations
  function search() {
    console.log('search called');
    console.log("Search term = ", vm.searchTerm);
    MovieService.query(vm.searchTerm).then(function (movies) {
      console.log('movies from the controller', movies);
      vm.movieList = movies;
    });

  }
}

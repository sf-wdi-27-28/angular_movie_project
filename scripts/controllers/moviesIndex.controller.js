angular.module('movieApp')
  .controller('MoviesIndexController', MoviesIndexController);

MoviesIndexController.$inject=[];
function MoviesIndexController() {
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
  }
}

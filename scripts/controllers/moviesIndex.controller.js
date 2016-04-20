angular.module('movieApp')
  .controller('MoviesIndexController', MoviesIndexController);

MoviesIndexController.$inject=[];
function MoviesIndexController( BookService) {
  var vm = this;
  // exports
  vm.movies = [];
  vm.helloWorld = 'hello world';

  // initialization
  console.log(vm.helloWorld);

  // implementations
  function search() {
  }
}

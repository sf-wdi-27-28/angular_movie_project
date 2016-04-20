angular.module('your-app-name-goes-here')
  .controller('this-controller-goes-here', ThisController);

ThisController.$inject=[];
function BooksIndexController( BookService) {
  var vm = this;
  // exports
  vm.books = [];

  // initialize data
  getBooks();

  // implementations
  function getBooks() {
    BookService.query().then(function(data){
      console.log('here\'s the books data in the controller', data);
      vm.books = data;
    });
  }
}

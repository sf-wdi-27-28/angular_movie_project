angular.module('movieApp')
  .directive('movieCard', movieCard);

function movieCard(){
  var directive = {
    restrict: 'E',
    templateUrl: '/templates/cardDirective.html',
    controller: MovieCardController,
    controllerAs: 'movieCardCtrl',
    scope: {
      movie: '='
    }
  };
  return directive;
};

function MovieCardController(){
  var vm = this;
}

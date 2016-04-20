angular.module('movieApp', ['ngRoute'])
        .config(config);



////////////
// ROUTES //    //  SAVE THIS FOR LATER
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/movies', {
      templateUrl: '/templates/movies-index.template.html',
      controller: 'MoviesIndexController',
      controllerAs: 'moviesIndexCtrl'
    })
    .otherwise({
      redirectTo: '/movies'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}

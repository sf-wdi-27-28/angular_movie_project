angular.module('movieApp')
  .service('MovieService', MovieService);

MovieService.$inject = ['$http', '$q'];
function MovieService(   $http,   $q) {
  this.get = goGetAMovie;

  function goGetAMovie(movieId) {
    // create the deferred
    var def = $q.defer();

    var url = 'http://www.omdbapi.com/?i=';
    // send off the request
    $http({
      method: 'GET',
      url: url + movieId
    }).then(getSuccessHandler, getErrorHandler);

    // return the promise
    return def.promise;


    function getSuccessHandler(response) {
      console.log('response is:', response);
      def.resolve(response.data);
    }

    function getErrorHandler() {
      console.log('something terrible');
      def.reject({error: 'oh no'});
    }

  }
}

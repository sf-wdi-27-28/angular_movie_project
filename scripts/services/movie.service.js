angular.module('movieApp')
  .service('MovieService', MovieService);

MovieService.$inject = ['$http', '$q'];
function MovieService(   $http,   $q) {
  this.get = goGetAMovie;
  this.query = query;


  function query(searchTerm) {
    console.log("Search term = ", searchTerm);
    var url = "http://www.omdbapi.com/?s=" + searchTerm;
    console.log('url = ', url);

    var def = $q.defer();


    $http({
      method: 'GET',
      url: url
    }).then(searchSuccessHandler,
            function(err) {
              console.log('ermagerd!', err);
              def.reject({error: 'error'});
            }
          );


    return def.promise;



    function searchSuccessHandler(response) {
      console.log('got response', response);
      console.log('search:', response.data.Search);
      def.resolve(response.data.Search);
    }


  }

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

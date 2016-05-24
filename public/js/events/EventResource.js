(function() {
  angular.module('refugeeApp')
    .factory("EventResource", EventResource);

  EventResource.$inject = ['$resource'];

  function EventResource($resource) {
    return $resource(
      "/events/:id",
      {id: '@id'}, {
        'update': { method: 'PUT'}
      }
    );
  }
})();

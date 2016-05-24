(function() {
  angular.module('refugeeApp')
    .factory("EventResource", EventResource);

  EventResource.$inject = ['$resource'];

  function EventResource($resource) {
    return $resource(
      "/api/events/:id",
      {id: '@id'}, {
        'update': { method: 'PUT'}
      }
    );
  }
})();

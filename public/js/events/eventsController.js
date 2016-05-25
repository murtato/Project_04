(function() {
  angular.module('refugeeApp')
    .controller("EventListController", EventListController)
    .controller("EventShowController", EventShowController)
    .controller("EventNewController",  EventNewController)
    .controller("EventEditController", EventEditController);

    EventListController.$inject = ['EventResource'];
    EventShowController.$inject = ['EventResource', '$stateParams'];
    EventNewController.$inject = ['EventResource', '$state'];
    EventEditController.$inject = ['EventResource', '$stateParams', '$state'];

    function EventListController(EventResource) {
      var vm = this;
      vm.events = [];
      vm.destroy = destroy;

      EventResource.query().$promise.then(function(events) {
        vm.events = events;
      });

      function destroy(eventToDelete) {
        EventResource.delete({id: eventToDelete._id}).$promise.then(function (response) {
          console.log(response.message);
          vm.events = vm.events.filter(function(event) {
            return event != eventToDelete;
          });
        });
      }
    }

    function EventShowController(EventResource, $stateParams) {
      var vm = this;
      vm.show = {};

      EventResource.get({id: $stateParams.id}).$promise.then(function(jsonEvent) {
          vm.show = jsonEvent;
          console.log("yo", vm.show)
      });
    }

    function EventNewController(EventResource, $state) {
      var vm = this;
      vm.newEvent = {};
      vm.addEvent = addEvent;

      function addEvent() {
        EventResource.save(vm.newEvent).$promise.then(function(jsonEvent) {
          vm.newEvent = {};
          $state.go('eventShow', {id: jsonEvent._id, event: jsonEvent});
        });
      }
    }

    function EventEditController(EventResource, $stateParams, $state) {
      var vm = this;
      vm.event = {};
      vm.editEvent = editEvent;

      EventResource.get({id: $stateParams.id}).$promise.then(function(jsonEvent) {
          vm.event = jsonEvent;
      });

      function editEvent() {
        EventResource.update({id: vm.event._id}, vm.event).$promise.then(function(updatedEvent) {
          vm.event = updatedEvent;
          $state.go('eventShow', {id: updatedEvent._id});
        });
      }
    }

})();

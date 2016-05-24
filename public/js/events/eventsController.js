(function() {
  angular.module('refugeeApp')
    .controller("EventListController", EventListController)
    .controller("EventShowController", EventShowController)
    .controller("EventNewController", EventNewController)
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
      console.log(vm.show);

      EventResource.get({id: $stateParams.id}).$promise.then(function(jsonEvent) {
          vm.show = jsonEvent;
      });
    }

    function EventNewController(EventResource, $state) {
      var vm = this;
      vm.newEvent = {};
      vm.addEvent = addEvent;

      function addEvent() {
        EventResource.save(vm.newEvent).$promise.then(function(jsonEvent) {
          vm.newEvent = {};
          $state.go('eventShow', {id: jsonShow._id});
        });
      }
    }

    function EventEditController(EventResource, $stateParams, $state) {
      var vm = this;
      vm.show = {};
      vm.editEvent = editEvent;

      EventResource.get({id: $stateParams.id}).$promise.then(function(jsonShow) {
          vm.show = jsonShow;
      });

      function editEvent() {
        EventResource.update({id: vm.show._id}, vm.show).$promise.then(function(updatedEvent) {
          vm.show = updatedEvent;
          $state.go('showShow', {id: updatedEvent._id});
        });
      }
    }

})();

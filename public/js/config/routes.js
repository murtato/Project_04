(function() {
  angular.module('refugeeApp')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
      .state('eventList', {
        url: '/events/list',
        templateUrl: "js/events/event-list.html",
        controller: 'EventListController',
        controllerAs: 'eventListVm'
      })
      .state('eventShow', {
        url: '/events/show/:id',
        templateUrl: 'js/events/event-show.html',
        controller: 'EventShowController',
        controllerAs: 'eventShowVm'
      })
      .state('eventNew', {
        url: '/events/new',
        templateUrl: 'js/events/event-new.html',
        controller: 'EventNewController',
        controllerAs: 'eventNewVm'
      })
      .state('eventEdit', {
        url: '/events/edit/:id',
        templateUrl: 'js/events/event-edit.html',
        controller: 'EventEditController',
        controllerAs: 'eventEditVm'
      })
      .state("signin", {
        url:          "/signin",
        templateUrl:  "/js/auth/signin.html",
        controller:   "SignInController",
        controllerAs: "vm"
      });

    $urlRouterProvider.otherwise('/');
  }
})();

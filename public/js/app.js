angular
  .module('refugeeApp', ['ui.router'])
  .config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.html",
    });
    .state('archive', {
      url: "/archive",
      templateUrl: "archive.html",
    });

    $urlRouterProvider.otherwise('/');
}


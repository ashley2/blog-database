(function() {
  'use strict';
  angular.module("blogApp", ["ui.router"])

  .config(StateConfig)
  StateConfig.$inject = ["$stateProvider", "$urlRouterProvider"]
  function StateConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
  }
}());

(function(){

  'use strict';

  angular.module('blogApp')
  .config(stateConfig);
  stateConfig.$inject=['$stateProvider', '$urlRouterProvider']
  function stateConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state("login", {
      url: '/',
      templateUrl: './templates/login.html',
      controller: "LoginCtrl",
      controllerAs: "login"
    })

  }


})()